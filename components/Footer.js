import { Container, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bm-footer">
            <div className="more-info">
                <Container>
                    <div className="row more-info-text">
                        <Col md={4} className="block">
                            <h4 className="title">WHAT'S HAPPENING</h4>
                            <p className="text">Working on couple of side projects including mobile and web applications.
                            Also preparing for AWS certifications.
                            </p>
                        </Col>
                        <Col md={4} className="block">
                            <h4 className="title">MY INFO</h4>
                            <p className="text"><i className="fa fa-home icons"></i>Texas</p>
                            <p className="text"><i className="fa fa-envelope icons"></i>bijay.maharjan5@gmail.com</p>
                            <p className="text"><i className="fa fa-phone icons"></i>(xxx)-xxx-3465</p>
                        </Col>
                        <Col md={4} className="block">
                            <h4 className="title">INTERESTED AREA</h4>
                            <ul className="text">
                                <li>Software Development</li>
                                <li>BlockChain</li>
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
                        {/* <li><a href='https://www.facebook.com/bmaharjan.chelsea'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <i className="fa fa-facebook"></i>
                        </a>
                        </li>
                        <li><a href='https://www.instagram.com/m_reus111'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <i className="fa fa-instagram"></i>
                        </a>
                        </li> */}
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
                        <li><a href='https://stackoverflow.com/users/8922935/bijay-maharjan'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <i className="fa fa-stack-overflow"></i>
                        </a>
                        </li>
                    </ul>
                    <p>Bijay Maharjan 2020</p>
                </Col>
            </div>
        </div>
    );
}

export default Footer;