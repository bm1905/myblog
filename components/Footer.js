import { Container, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bm-footer">
            <div className="more-info">
                <Container>
                    <div className="row more-info-text">
                        <Col md={4} className="block">
                            <h4 className="title">WHAT'S HAPPENING</h4>
                            <p className="text">We need more rain.</p>
                        </Col>
                        <Col md={4} className="block">
                            <h4 className="title">MY INFO</h4>
                            <p className="text"><i className="fa fa-home icons"></i>Texas</p>
                            <p className="text"><i className="fa fa-envelope icons"></i>xxx@gmail.com</p>
                            <p className="text"><i className="fa fa-phone icons"></i>(xxx)-xxx-xxxx</p>
                        </Col>
                        <Col md={4} className="block">
                            <h4 className="title">INTERESTED AREA</h4>
                            <ul className="text">
                                <li>Depends on the mood</li>
                            </ul>
                        </Col>
                    </div>
                </Container>
            </div>
            <div className="copyrightSection">
                <Col md={12} className="text-center">
                    <ul className="social-links">
                        <li><a href='https://www.bmaharjan.com'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <i className="fa fa-globe"></i>
                        </a>
                        </li>
                        <li><a href='https://www.linkedin.com/in/bijay-maharjan-10654b92'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <i className="fa fa-linkedin"></i>
                        </a>
                        </li>
                        <li><a href='https://github.com/bm1905'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <i className="fa fa-github"></i>
                        </a>
                        </li>
                    </ul>
                    <p>{new Date().getFullYear()}</p>
                </Col>
            </div>
        </div>
    );
}

export default Footer;