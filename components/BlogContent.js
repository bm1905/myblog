import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
    types: {
        code: ({ node: { language, code, filename } }) => {
            return (
                <HighlightCode language={language}>
                    {code}
                    <div className="code-filename">{filename}</div>
                </HighlightCode>
            )
        },
        image: ({ node: { asset, alt, position = 'center' } }) => {
            return (
                <div className={`blog-image blog-image-${position}`}>
                    <img className="blog-image-width" src={urlFor(asset).height(300).fit('max').url()} />
                    <div className="image-alt">{alt}</div>
                </div>
            )
        }
    }
};

const BlogContent = ({ content }) => {
    return (
        <BlockContent
            serializers={serializers}
            blocks={content}
        />
    )
};

export default BlogContent;