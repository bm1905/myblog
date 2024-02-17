import { getBlogBySlug } from 'lib/api';

export default async function enablePreview(req, res) {
    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
        console.log("req.query.secret", req.query.secret);
        console.log("process.env.SANITY_PREVIEW_SECRET", process.env.SANITY_PREVIEW_SECRET);
        return res.status(401).json({ message: 'Not Authenticated!' })
    }

    if (!req.query.slug) {
        return res.status(401).json({ message: 'No Slug!' })
    }

    const blog = await getBlogBySlug(req.query.slug, true);

    if (!blog) {
        return res.status(401).json({ message: 'Invalid Slug!' })
    }

    res.setPreviewData({});
    res.writeHead(307, { Location: `/blogs/${blog.slug}` });
    res.end();
}