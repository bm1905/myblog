import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
    title,
    subtitle,
    'slug': slug.current,
    date,
    coverImage,
    'author': author->{name, 'avatar': avatar.asset->url},
`;

const builder = imageUrlBuilder(client);

const getClient = preview => (preview ? previewClient : client);

export const urlFor = (source) => {
    return builder.image(source);
};

export const getAllBlogs = async () => {
    return await client
        .fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`);
};

export const getPaginatedBlogs = async ({ offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }) => {
    return await client
        .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 12}]`);
};

export const getBlogBySlug = async (slug, preview) => {
    const currentClient = getClient(preview);
    const result = await currentClient
        .fetch(`*[_type == "blog" && slug.current == $slug] {
            ${blogFields}
            content[]{..., "asset": asset->}
        }`, { slug })
        // .then(res => preview ? res?.[0] : res?.[0])
        .then(res => res?.[0])

    return result;
}
