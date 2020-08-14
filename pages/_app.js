import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
    faBorderAll,
    faList,
    faSortNumericDown,
    faSortNumericUp,
    faSun,
    faMoon
} from '@fortawesome/free-solid-svg-icons';
import ThemeProvider from 'providers/ThemeProvider';

config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp, faSun, faMoon);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import 'react-toggle/style.css';
import 'styles/index.scss';

export default ({ Component, pageProps }) =>
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>