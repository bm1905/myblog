import { Container, Row, Col } from 'react-bootstrap';

const AuthorIntro = () => {
    return (
        <div className="bm-intro">
            <Container fluid="md">
                <Row>
                    <Col xs={12} md={8} >
                        <h3>About</h3>
                        <p>Some tech-related blogs including step by step approach to provlem-solvings including but not limited to Java, JavaScript, Git, Node.js and other frameworks and libraries.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AuthorIntro;