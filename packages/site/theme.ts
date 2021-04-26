import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
    useSystemColorMode: true,
};

const fonts = {
    heading: 'Inter',
    body: 'Inter',
    mono: `'Menlo', monospace`,
};

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const colors = {
    black: '#16161D',
};

const theme = extendTheme({
    config,
    colors,
    fonts,
    breakpoints,
});

export default theme;
