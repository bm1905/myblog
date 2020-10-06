import { Navbar } from 'react-bootstrap';
import Link from 'next/link';

import Footer from '../components/Footer';
import { Container } from "react-bootstrap";

function Error({ statusCode }) {
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="transparent" className="bm-navbar bm-nav-base">
                    <Navbar.Brand className="bm-navbar-brand">
                        <Link href="/">
                            <a className="bm-navbar-item bm-navbar-link">My Blogs</a>
                        </Link>
                    </Navbar.Brand>
                </Navbar>
                <div className="notfound-container">
                    <div className="headerText">
                        <p className="heading-text">Oh noo!!!</p>
                        <p className="subheading-text">{statusCode} Not Found</p>
                        <p className="thirdheading-text">But please do not cry. What you have in your mind may exists only in another world.</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;