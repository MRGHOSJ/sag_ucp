import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  IconButton,
  InputGroup,
  InputProps,
  InputRightElement,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useMergeRefs,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Head from "next/head";

import * as React from "react";
const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
      onToggle();
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };

    return (
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="link"
              aria-label={isOpen ? "Mask password" : "Reveal password"}
              icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            id="password"
            ref={mergeRef}
            name="password"
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container
        maxW="lg"
        py={{ base: "12", md: "36" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
                Log in to your account
              </Heading>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="userName">User</FormLabel>
                  <Input id="userName" type="string" />
                </FormControl>
                <PasswordField />
              </Stack>
              <Stack spacing="6">
                <Link
                  href="/"
                  style={{ textDecoration: "none" }}
                  _focus={{ boxShadow: "none" }}
                  textAlign="center"
                >
                  <Button colorScheme="teal" mb={8} px="40">
                    Sign in
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
