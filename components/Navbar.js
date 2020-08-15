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
                <Nav className="mr-auto"></Nav>
                <Nav className="ml-auto">
                    {/* <Nav.Link eventKey="disabled" disabled className="bm-navbar-text" href="#deets">Theme</Nav.Link> */}
                    <ThemeToggle onChange={toggleTheme} />
                    {/* <Nav.Link eventKey="disabled" disabled className="bm-navbar-text" href="#deets">Sort</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        // <Navbar
        //     variant={theme.type}
        //     className="fj-navbar fj-nav-base"
        //     bg="transparent"
        //     expand="lg" >
        //     <Navbar.Brand className="fj-navbar-brand">
        //         <Link href="/">
        //             <a style={{ color: theme.fontColor }}>My Blogs</a>
        //         </Link>

        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="ml-auto">
        //             <ThemeToggle onChange={toggleTheme} />
        //             <Nav.Link
        //                 as={() =>
        //                     <Link href='/'>
        //                         <a className="fj-navbar-item fj-navbar-link">Home</a>
        //                     </Link>
        //                 }
        //             />
        //             <Nav.Link
        //                 as={() =>
        //                     <Link href='/'>
        //                         <a className="fj-navbar-item fj-navbar-link">Home 2</a>
        //                     </Link>
        //                 }
        //             />
        //             <button className="btn btn-success" onClick={toggleTheme}>
        //                 {theme.type}
        //             </button>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );
}

export default BlogNavbar;