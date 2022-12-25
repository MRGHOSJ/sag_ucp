import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

export default function Footer() {
    return (
      <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      mx="4"
      
      borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 San Andreas Gaming. All rights reserved</Text>
      </Container>
    </Box>
    );
  }
  