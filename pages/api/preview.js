import { getBlogBySlug } from 'lib/api';

export default async function enablePreview(req, res) {
    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
        return res.status(401).json({ message: 'Not Authenticated!' })
    }

    const blog = await getBlogBySlug(req.query.slug);

    if (!blog) {
        return res.status(401).json({ message: 'Invalid Slug!' })
    }

    res.setPreviewData({ message: "Hello World" });
    res.writeHead(307, { Location: `/blogs/${blog.slug}` });
    res.end();

    return res.status(200).json({ message: 'Works' });
}