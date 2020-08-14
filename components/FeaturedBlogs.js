import { Row, Col, Media, Image, Card, CardColumns } from 'react-bootstrap';

const FeaturedBlogs = () => {
    return (
        <CardColumns className="cards-featured">
            <div className="sd">
                <Card>
                    <Card.Img src="https://via.placeholder.com/150" />
                </Card>

                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Use this one as title lets say its a long title
                    </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
            </div>

            <Card className="p-3">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                </blockquote>
            </Card>

            <Card className="p-3">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                </blockquote>
            </Card>



            {/* <Card className="text-center">
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional content.{' '}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                </Card.Body>
            </Card> */}

            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/1500" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>


            <div className="sd">
                <Card>
                    <Card.Img src="https://via.placeholder.com/150" />
                </Card>

                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Use this one as title lets say its a long title
                    </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
            </div>

            <Card className="p-3">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                </blockquote>
            </Card>

        </CardColumns>
    );
}

export default FeaturedBlogs;