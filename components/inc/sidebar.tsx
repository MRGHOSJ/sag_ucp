//Import react module
import React, { ReactNode } from "react";

//Import chakra module
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon,HamburgerIcon } from "@chakra-ui/icons";

//Type Import
import { ElementProps, underListProps } from "../../types/sidebarType";

//Array of Elements check ../../types/sidebarType for the sidebar type before adding any element
// Example of adding an element
// {
//   title: "elementTitle",
//   list:[
//     {
//       title: "underElementTitle",
//       href:'/',
//       icon:'speed'
//     },
//     {
//       title: "underElementTitle / listElement",
//       href:'/',
//       icon:'speed'
//       ul:[
//         {
//           title:"underListElement",
//           href:'/'
//         }
//       ]
//     },
//   ]
// }
// Accounts are from https://fonts.google.com/icons just copy what's inside of the span tag

const Elements: Array<ElementProps> = [
  {
    title: "MAIN",
    list: [
      {
        title: "Dashboard",
        href: "/",
        icon: "speed",
      },
      {
        title: "Admin",
        href: "/",
        ul: [
          {
            title: "Logs",
            href: "/logs",
          },
        ],
        icon: "radio_button_checked",
      },
      {
        title: "Server",
        href: "/",
        icon: "dns",
        ul: [
          {
            title: "Bans",
            href: "/server/bans",
          },
          {
            title: "Duels",
            href: "/server/duels",
          },
          {
            title: "Factions",
            href: "/server/factions",
          },
        ],
      },
      {
        title: "Live",
        href: "/",
        icon: "share_location",
        ul: [
          {
            title: "Map",
            href: "/map",
          },
        ],
      },
    ],
  },
];

//Sidebar main class it will take the whole page as children and pass it in Box element
export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      {/* All the children from Sidebar() are passed here */}
      <Box ml={{ base: 0, md: 60 }} p="4" >
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

// content of sidebar
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="24" justifyContent="space-between">
        <Image
          boxSize="50px"
          objectFit="cover"
          src="https://ucp.sag.gs/images/logo-full.png"
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <hr />
      {Elements.map((element) => {
        return (
          <Box mx="4" my="4">
            <Text fontSize="xs" as="b">
              {element.title}
            </Text>
            {element.list.map((list) => {
              return (
                <NavItem
                  key={list.title}
                  href={list.href}
                  ul={list.ul}
                  icon={list.icon}
                  color="gray"
                >
                  {list.title}
                </NavItem>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: string;
  href: string;
  children: string;
  ul?: Array<underListProps>;
}

// navigation inside of side bar
const NavItem = ({ icon, children, href, ul, ...rest }: NavItemProps) => {
  //checks if side bar nav item has an un orginized list or not
  //if it does it will create a menu out of it
  //if not it will create a direct link
  if (ul) {
    return (
      <Menu>
        <MenuButton
          align="center"
          py="4"
          fontSize="sm"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          as={Flex}
          color="gray"
        >
          <Flex>
          {icon && (
            <Box pr="2" pt="0.5" fontSize="lg" className="material-icons">
              {icon}
            </Box>
          )}
          <Box>
          {children}
          </Box>
          
          <ChevronDownIcon position="absolute" right="5" pt="1" fontSize="lg"/>
          </Flex>
        </MenuButton>

        <MenuList>
          {ul.map((underList) => {
            return (
              <Link
                href={underList.href}
                style={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <MenuItem>{underList.title}</MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    );
  } else
    return (
      <Link
        href={href}
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          py="4"
          fontSize="sm"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Box pr="2" fontSize="lg" className="material-icons">
              {icon}
            </Box>
          )}
          {children}
        </Flex>
      </Link>
    );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

//Mobile version of side bar
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <HamburgerIcon fontSize="lg" onClick={onOpen} aria-label="open menu"/>
      <Box ml="5">
        <Image
          boxSize="50px"
          objectFit="cover"
          src="https://ucp.sag.gs/images/logo-full.png"
        />
      </Box>
    </Flex>
  );
};
