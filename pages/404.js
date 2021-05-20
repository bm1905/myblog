import { Navbar } from 'react-bootstrap';
import Link from 'next/link';

import Footer from '../components/Footer';
import { Container } from "react-bootstrap";

export default function Custom404() {
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
                        <p className="subheading-text">404 Not Found</p>
                        <p className="thirdheading-text">I am not sure if this is intentional or not.</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}