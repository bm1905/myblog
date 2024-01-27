import { Container, Row, Col } from 'react-bootstrap';

const AuthorIntro = () => {
    return (
        <div className="bm-intro">
            <Container fluid="md">
                <Row>
                    <Col xs={12} md={8} >
                        <h3>About</h3>
                        <p>Some random stuffs.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AuthorIntro;
