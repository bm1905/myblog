import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/Link';
import ThemeToggle from 'components/ThemeToggle';

const BlogNavbar = ({ theme, toggleTheme }) => {

    return (
        <Navbar
            variant={theme.type}
            className="fj-navbar fj-nav-base"
            bg="transparent"
            expand="lg" >
            <Navbar.Brand className="fj-navbar-brand">
                <Link href="/">
                    <a style={{ color: theme.fontColor }}>My Blogs</a>
                </Link>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <ThemeToggle onChange={toggleTheme} />
                    <Nav.Link
                        as={() =>
                            <Link href='/'>
                                <a className="fj-navbar-item fj-navbar-link">Home</a>
                            </Link>
                        }
                    />
                    <Nav.Link
                        as={() =>
                            <Link href='/'>
                                <a className="fj-navbar-item fj-navbar-link">Home 2</a>
                            </Link>
                        }
                    />
                    <button className="btn btn-success" onClick={toggleTheme}>
                        {theme.type}
                    </button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default BlogNavbar;