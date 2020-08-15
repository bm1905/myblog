import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import ThemeToggle from 'components/ThemeToggle';

const BlogNavbar = ({ theme, toggleTheme }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant={theme.type} className="bm-navbar bm-nav-base">
            <Navbar.Brand className="bm-navbar-brand">
                <Link href="/">
                    <a style={{ color: theme.fontColor }} className="bm-navbar-item bm-navbar-link">My Blogs</a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Nav className="mr-auto">ddd</Nav> */}
                <Nav className="ml-auto">
                    <ThemeToggle onChange={toggleTheme} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default BlogNavbar;