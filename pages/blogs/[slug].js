import { Row, Col } from 'react-bootstrap'
import moment from 'moment';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import PreviewAlert from 'components/PreviewAlert';
import { getBlogBySlug, getAllBlogs, urlFor } from 'lib/api';

const BlogDetail = ({ blog, preview }) => {
    const router = useRouter();

    if (!router.isFallback && !blog?.slug) {
        return <ErrorPage statusCode="404" />
    }

    if (router.isFallback) {
        return (
            <PageLayout className="blog-detail-page">
                Loading...
            </PageLayout>
        )
    }

    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    {preview && <PreviewAlert />}
                    <BlogHeader
                        title={blog.title}
                        subtitle={blog.subtitle}
                        author={blog.author}
                        date={moment(blog.date).format('LL')}
                        coverImage={urlFor(blog.coverImage).height(600).url()}
                    />
                    <hr />
                    {blog.content && <BlogContent content={blog.content} />}
                </Col>
            </Row>
        </PageLayout>
    )
};

export const getStaticProps = async ({ params, preview = false, previewData }) => {
    const blog = await getBlogBySlug(params.slug, preview);
    return {
        props: { blog, preview }
    }
}

export const getStaticPaths = async () => {
    const blogs = await getAllBlogs();
    const paths = blogs?.map(blog => ({ params: { slug: blog.slug } }));

    return {
        paths,
        fallback: true
    }
}

export default BlogDetail;
