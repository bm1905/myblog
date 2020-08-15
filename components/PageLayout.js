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
                {/* Global site tag (gtag.js) - Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175520381-1" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'UA-175520381-1');
                        `,
                    }}
                />

                <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet" />
                <meta property="og:image"
                    content="https://portfolio-bmaharjan.s3.amazonaws.com/Blog1.PNG" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:url" content="https://blog-bmaharjan.herokuapp.com/" />
                <meta property="og:title" content="My Blog Website" />
                <meta property="og:description" content="Blog website built using headless CMS Sanity and Next.js." />
                <title>My Blogs</title>
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