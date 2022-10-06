import '../styles/globals.css';
import '../styles/variables.css';
import type { AppProps } from 'next/app';

/* eslint-disable react/jsx-props-no-spreading */
const MyApp = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);
/* eslint-enable react/jsx-props-no-spreading */

export default MyApp;
