import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import 'pure-react-carousel/dist/react-carousel.es.css';

import theme from '../theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
);

export default MyApp;
