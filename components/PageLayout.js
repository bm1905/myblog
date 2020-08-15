import { Container } from "react-bootstrap";
import Head from 'next/head';
import Navbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';
import Footer from "./Footer";

const PageLayout = ({ children, className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={theme.type}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet" />
            </Head>
            <div>

                <Container>
                    <Navbar
                        theme={theme}
                        toggleTheme={toggleTheme}
                    />
                    <hr />
                    <div className={`page-wrapper ${className}`}>
                        {children}
                    </div>
                </Container>
                <Footer />
            </div>
            <style jsx global> {`
                html, body {
                    background: ${theme.background};
                    color: ${theme.fontColor};
                    transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
                }
            `}
            </style>
        </div>
    );
}

export default PageLayout;