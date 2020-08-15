import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({ title, subtitle, date, coverImage, author, category, link, mode = 'normal' }) => {
    return (
        <Card className={`fj-card ${mode}`}>
            <div className={`card-body-wrapper ${!coverImage ? 'no-image' : ''}`}>
                <div className="view overlay">
                    {
                        mode === 'placeholder' ?
                            <div className="image-placeholder" />
                            :
                            coverImage ?
                                <Card.Img
                                    src={urlFor(coverImage)
                                        .height(400)
                                        .crop('center')
                                        .fit('clip')
                                        .url()}
                                    alt="Card image cap"
                                />
                                :
                                <div></div>
                    }

                </div>

                <span className="post-category text-white bg-secondary mb-3">{category}</span>

                <Card.Body>
                    {
                        mode === 'placeholder' ?
                            <>
                                <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                                <Card.Text>Placeholder Subtitle</Card.Text>
                            </>
                            :
                            <>
                                <Card.Title className="card-main-title">
                                    {title.length > 38 ? title.substr(0, 38) + '...' : title}
                                    {/* <h2 className="title-header"><a>{title.length > 55 ? title.substr(0, 55) + '...' : title}</a></h2> */}
                                </Card.Title>
                                <Card.Header
                                    className="d-flex flex-row">
                                    <img
                                        src={author?.avatar || 'https://via.placeholder.com/150'}
                                        className="rounded-circle mr-3"
                                        height="50px"
                                        width="50px"
                                        alt="avatar" />
                                    <div>
                                        {
                                            mode === 'placeholder' ?
                                                <>
                                                    <Card.Title className="font-weight-bold mb-1">Placeholder Title</Card.Title>
                                                    <Card.Text className="card-date">Placeholder Date</Card.Text>
                                                </>
                                                :
                                                <>
                                                    <Card.Title className="font-weight-normal mb-1">{author?.name}</Card.Title>
                                                    <Card.Text className="card-date">{date}</Card.Text>
                                                </>
                                        }

                                    </div>
                                </Card.Header>

                                <Card.Text className="card-subtitle">
                                    {subtitle.length > 250 ? subtitle.substr(0, 250) + '...' : subtitle}
                                </Card.Text>
                            </>
                    }

                </Card.Body>
            </div>
            {link &&
                <Link {...link}>
                    <a className="card-button">
                        Read More
                    </a>
                </Link>
            }

        </Card>
    );
};

export default CardItem;