import { Container } from "react-bootstrap";
import Head from 'next/head';
import Navbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';

const PageLayout = ({ children, className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={theme.type}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Container>
                <Navbar
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <div className={`page-wrapper ${className}`}>
                    {children}
                </div>
                <footer className="page-footer">
                    <div>
                        <a href="#">courses</a>{' | '}
                        <a href="#">github</a>{' | '}
                        <a href="#">facebook</a>
                    </div>
                </footer>
            </Container>
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