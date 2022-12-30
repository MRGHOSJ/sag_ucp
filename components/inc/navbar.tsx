//Chakra import
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Badge,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


//Navbar main function
export default function NavBar({ userName }: { userName: String }) {
  //to check the color dark or white
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")}  sx={{ position: '-webkit-sticky', position: 'sticky', top: '0' }} zIndex="99" ml="-4">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* nav HamburgerIcon */}<Box></Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {/* display dark mode */}
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  {/* User Avatar with dicebear */}
                  <Avatar
                    size={"sm"}
                    src={
                      "https://avatars.dicebear.com/api/adventurer/" +
                      userName +
                      ".svg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.dicebear.com/api/adventurer/" +
                        userName +
                        ".svg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    {/* userName */}
                    <p>{userName}</p>
                  </Center>
                  <Center>
                    <Badge ml="1" fontSize="0.8em" colorScheme="green">
                      {/* User Role */}
                      Owner/Developer
                    </Badge>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link
                    href="profile"
                    style={{ textDecoration: "none" }}
                    _focus={{ boxShadow: "none" }}
                  >
                    <MenuItem>Profile</MenuItem>
                  </Link>
                  <Link
                    href="settings"
                    style={{ textDecoration: "none" }}
                    _focus={{ boxShadow: "none" }}
                  >
                    <MenuItem>Settings</MenuItem>
                  </Link>
                  <Link
                    href="login"
                    style={{ textDecoration: "none" }}
                    _focus={{ boxShadow: "none" }}
                  >
                    <MenuItem>Logout</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        <hr />
      </Box>
    </>
  );
}
