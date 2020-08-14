import { Card, Button, Badge } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({ title, subtitle, date, coverImage, author, link, mode = 'normal' }) => {
    return (
        <Card className={`fj-card ${mode}`}>
            <div className={`card-body-wrapper ${!coverImage ? 'no-image' : ''}`}>
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
                                    <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                                    <Card.Text className="card-date">{date}</Card.Text>
                                </>
                        }

                    </div>
                </Card.Header>
                <div className="view overlay">
                    {
                        mode === 'placeholder' ?
                            <div className="image-placeholder" />
                            :
                            coverImage ?
                                <Card.Img
                                    src={urlFor(coverImage)
                                        .height(300)
                                        .crop('center')
                                        .fit('clip')
                                        .url()}
                                    alt="Card image cap"
                                />
                                :
                                <div></div>
                    }

                </div>
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
                                    {title.length > 40 ? title.substr(0, 40) + '...' : title}
                                </Card.Title>
                                <Card.Text>
                                    {subtitle.length > 40 ? subtitle.substr(0, 40) + '...' : subtitle}
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
        // <div className="sd">
        //     <Card>
        //         <Card.Img src={coverImage} />
        //     </Card>


        //     <Badge variant="info">REACT</Badge>
        //     <Card className="text-left">

        //         <blockquote className="blockquote mb-0 card-body">

        //             <Card.Title><h3>{title}</h3></Card.Title>
        //             <Card.Header className="d-flex flex-row">
        //                 <img
        //                     src={author?.avatar || 'https://via.placeholder.com/150'}
        //                     className="rounded-circle mr-3"
        //                     height="30px"
        //                     width="30px"
        //                     alt="avatar" />
        //                 <div>
        //                     <small className="text-muted">
        //                         By <cite title="Source Title">{author.name}</cite> - June 19, 2020
        //                     </small>
        //                     {/* <Card.Text className="card-date">{date}</Card.Text> */}
        //                 </div>
        //             </Card.Header>
        //             <Card.Text>
        //                 <small className="text-muted">
        //                     {subtitle}
        //                 </small>
        //             </Card.Text>
        //         </blockquote>
        //     </Card>
        //     <a className="card-button"> Read More</a>
        // </div>

    );
};

export default CardItem;