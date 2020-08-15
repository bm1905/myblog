
const BlogHeader = ({ title, subtitle, coverImage, category }) => {
    return (
        <div className="blog-detail-header">
            <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
            <span className="post-category text-white bg-secondary mb-3">{category}</span>
            <h3 className="blog-detail-header-subtitle mb-3"><i>{subtitle}</i></h3>
            {coverImage &&
                <img
                    className="img-fluid rounded"
                    src={coverImage} alt="" />
            }
        </div>
    )
};

export default BlogHeader;