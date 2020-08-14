import { useSWRPages } from 'swr';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { useGetBlogs } from 'actions';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import { useEffect } from 'react';
import CardItemBlank from 'components/CardItemBlank';
import CardListItemBlank from 'components/CardListItemBlank';

export const useGetBlogsPages = ({ blogs, filter }) => {

    useEffect(() => {
        window.__pagination__init = true;
    }, [])

    return useSWRPages(
        'index-page',
        ({ offset, withSWR }) => {
            let initialData = !offset && blogs;

            if (typeof window !== 'undefined' && window.__pagination__init) {
                initialData = null;
            }

            const { data: paginatedBlogs } = withSWR(useGetBlogs({ offset, filter }, initialData));

            if (!paginatedBlogs) {
                return Array(3)
                    .fill(0)
                    .map((_, i) =>
                        filter.view.list ?
                            <Col key={i} md="9">
                                <CardListItemBlank />
                            </Col>
                            :
                            <Col key={`${i}-item`} md="4">
                                <CardItemBlank />
                            </Col>
                    )
            }

            return paginatedBlogs.map(blog => {
                console.log(filter.view.blog);
                return (
                    filter.view.list ?
                        <Col key={`${blog.slug}-list`} md="9">
                            <CardListItem
                                title={blog.title}
                                subtitle={blog.subtitle}
                                coverImage={blog.coverImage}
                                date={moment(blog.date).format('LL')}
                                author={blog.author}
                                link={{
                                    href: 'blogs/[slug]',
                                    as: `/blogs/${blog.slug}`
                                }}
                            />
                        </Col>
                        :
                        <Col key={blog.slug} md="4">
                            <CardItem
                                title={blog.title}
                                subtitle={blog.subtitle}
                                coverImage={blog.coverImage}
                                date={moment(blog.date).format('LL')}
                                author={blog.author}
                                link={{
                                    href: 'blogs/[slug]',
                                    as: `/blogs/${blog.slug}`
                                }}
                            />
                        </Col>

                );
            })
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