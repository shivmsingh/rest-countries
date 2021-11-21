import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box p="2">
      <Text>
        Made with ❤️ by{' '}
        <Link href="https://shivmsingh.netlify.app/" isExternal>
          Shivam Singh
          <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
