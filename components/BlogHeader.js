
const BlogHeader = ({ title, subtitle, author, date, coverImage, category }) => {
    return (
        <div className="blog-detail-header">


            <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
            <span className="post-category text-white bg-secondary mb-3">{category}</span>
            <h3 className="blog-detail-header-subtitle mb-3"><i>{subtitle}</i></h3>
            {/* <p className="lead mb-0">
                <img
                    src={author?.avatar}
                    className="rounded-circle mr-3"
                    height="50px"
                    width="50px"
                    alt="avatar" />
                {author?.name}
                {', '} {date}
            </p> */}

            {coverImage &&
                <img
                    className="img-fluid rounded"
                    src={coverImage} alt="" />
            }
        </div>
    )
};

export default BlogHeader;