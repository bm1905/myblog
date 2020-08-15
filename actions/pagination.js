import { useSWRPages } from 'swr';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { useGetBlogs } from 'actions';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import CardItemBlank from 'components/CardItemBlank';
import CardListItemBlank from 'components/CardListItemBlank';

const BlogList = ({ blogs, filter }) => {
    return blogs.map(blog => {
        // console.log(filter.view.blog);
        return (
            filter.view.list ?
                <Col key={`${blog.slug}-list`} md="9">
                    <CardListItem
                        title={blog.title}
                        subtitle={blog.subtitle}
                        coverImage={blog.coverImage}
                        category={blog.category}
                        date={moment(blog.date).format('LL')}
                        author={blog.author}
                        link={{
                            href: 'blogs/[slug]',
                            as: `/blogs/${blog.slug}`
                        }}
                    />
                </Col>
                :
                <Col key={blog.slug} md="6" lg="4">
                    <CardItem
                        title={blog.title}
                        subtitle={blog.subtitle}
                        coverImage={blog.coverImage}
                        category={blog.category}
                        date={moment(blog.date).format('LL')}
                        author={blog.author}
                        link={{
                            href: 'blogs/[slug]',
                            as: `/blogs/${blog.slug}`
                        }}
                    />
                </Col>
            // <Col key={blog.slug} md="6" lg="4">
            //     <CardItem
            //         title={blog.title}
            //         subtitle={blog.subtitle}
            //         coverImage={blog.coverImage}
            //         date={moment(blog.date).format('LL')}
            //         author={blog.author}
            //         link={{
            //             href: 'blogs/[slug]',
            //             as: `/blogs/${blog.slug}`
            //         }}
            //     />
            // </Col>

        );
    })
};

export const useGetBlogsPages = ({ blogs, filter }) => {
    return useSWRPages(
        'index-page',
        ({ offset, withSWR }) => {

            const { data: paginatedBlogs, error } = withSWR(useGetBlogs({ offset, filter }));

            if (!offset && !paginatedBlogs && !error) {
                return <BlogList blogs={blogs} filter={filter} />
            }

            if (!paginatedBlogs) {
                return Array(3)
                    .fill(0)
                    .map((_, i) =>
                        filter.view.list ?
                            <Col key={i} md="9">
                                <CardListItemBlank />
                            </Col>
                            :
                            <Col key={`${i}-item`} md="6" lg="4">
                                <CardItemBlank />
                            </Col>
                    )
            }
            return <BlogList blogs={paginatedBlogs} filter={filter} />
        },
        // Compute offest that will be passed to previous callback function withSWR.
        // SWR: data from withSWR function.
        // index: number of current page.
        (SWR, index) => {
            // Compute offset
            if (SWR.data && SWR.data.length === 0) { return null; }
            return (index + 1) * 12;
        },
        [filter]
    )
};