import highlight from 'highlight.js';
import { createRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

const HighlightCode = ({ children, langauge }) => {
    const code = createRef();

    useEffect(() => {
        highlight.highlightBlock(findDOMNode(code.current));
    }, []);

    return (
        <pre>
            <code
                ref={code}
                className={langauge}>
                {children}
            </code>
        </pre>
    )
};

export default HighlightCode;