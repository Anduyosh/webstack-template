import React, { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    const renderContent = (): JSX.Element => (
        <Box as='main' width='full'>
            {children}
        </Box>
    );

    return (
        <Flex direction='column' align='center' minHeight='100vh'>
            {renderContent()}
        </Flex>
    );
};

export default Layout;
