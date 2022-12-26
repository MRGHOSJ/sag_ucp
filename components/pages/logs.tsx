import {
  Box,
  useColorModeValue,
  Flex,
  Grid,
  Text,
  Heading,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { cardLogElement, listLogElement } from "../../types/cardLogElement";

const Elements: Array<cardLogElement> = [
  {
    title: "Admin Logs",
    sub: "Here you will find all the logs that are grouped for admin related activities",
    list: [
      {
        title: "Chat",
        sub: "Here you will find all the logs for admin chat.",
        href: "/logs/admin/chat",
      },
      {
        title: "Commands",
        sub: "Here you will find all the logs for admin commands.",
        href: "/logs/admin/commands",
      },
    ],
  },{
    title: "Faction Logs",
    sub: "Here you will find all the logs that are grouped for faction related activities",
    list: [
      {
        title: "Activity",
        sub: "Here you will find all the logs for faction activity.",
        href: "/logs/faction/activity",
      },
      {
        title: "Storage",
        sub: "Here you will find all the logs for faction storage activity.",
        href: "/logs/faction/storage",
      },
      {
        title: "Vehicle",
        sub: "Here you will find all the logs for faction vehicle activity.",
        href: "/logs/faction/vehicle",
      },
    ],
  },{
    title: "House Logs",
    sub: "Here you will find all the logs that are grouped for house related activities",
    list: [
      {
        title: "Activity",
        sub: "Here you will find all the logs for house activity.",
        href: "/logs/house/activity",
      },
    ],
  },{
    title: "War Logs",
    sub: "Here you will find all the logs that are grouped for war related activities",
    list: [
      {
        title: "Activity",
        sub: "Here you will find all the logs for war activity.",
        href: "/logs/war/activity",
      },
    ],
  },{
    title: "Business Logs",
    sub: "Here you will find all the logs that are grouped for business related activities",
    list: [
      {
        title: "Activity",
        sub: "Here you will find all the logs for business activity.",
        href: "/logs/business/activity",
      },
    ],
  },{
    title: "Player Logs",
    sub: "Here you will find all the logs that are grouped for player related activities",
    list: [
      {
        title: "Logins",
        sub: "Here you will find all the logs for player logins.",
        href: "/logs/player/logins",
      },{
        title: "Failed Logins",
        sub: "Here you will find all the logs for player's failed logins.",
        href: "/logs/player/failedlogins",
      },{
        title: "Chat",
        sub: "Here you will find all the logs for player chat.",
        href: "/logs/player/chat",
      },{
        title: "Commands",
        sub: "Here you will find all the logs for player commands.",
        href: "/logs/player/commands",
      },{
        title: "Disconnects",
        sub: "Here you will find all the logs for player disconnects.",
        href: "/logs/player/disconnects",
      },{
        title: "Kills",
        sub: "Here you will find all the logs for player kills.",
        href: "/logs/player/kills",
      },{
        title: "Charity",
        sub: "Here you will find all the logs for player charity.",
        href: "/logs/player/charity",
      },{
        title: "Money",
        sub: "Here you will find all the logs for player money.",
        href: "/logs/player/money",
      },{
        title: "Name Changes",
        sub: "Here you will find all the logs for player name changes activity.",
        href: "/logs/player/namechanges",
      },{
        title: "Vehicle",
        sub: "Here you will find all the logs for player vehicle activity.",
        href: "/logs/player/vehicle",
      },{
        title: "Events",
        sub: "Here you will find all the logs for player events activity.",
        href: "/logs/player/events",
      },{
        title: "Achievements",
        sub: "Here you will find all the logs for player achievements activity.",
        href: "/logs/player/achievements",
      },{
        title: "Playtime Rewards",
        sub: "Here you will find all the logs for player play time activity.",
        href: "/logs/player/playtimerewards",
      },{
        title: "Money Bags",
        sub: "Here you will find all the logs for player money bags activity.",
        href: "/logs/player/moneybags",
      },{
        title: "Reports",
        sub: "Here you will find all the logs for reports.",
        href: "/logs/player/reports",
      },{
        title: "Kicks",
        sub: "Here you will find all the logs for all kick logs",
        href: "/logs/player/kicks",
      },{
        title: "Jails",
        sub: "Here you will find all the logs for all jail logs",
        href: "/logs/player/jails",
      },
    ],
  },
];

export default function Logs() {
  return (
    <Flex direction="column" m="8" mt={0}>
      {Elements.map((element: cardLogElement) => {
        return (
          <Box pt="10" key={element.title}>
            <Text fontSize="lg">{element.title}</Text>
            <Text color="gray">{element.sub}</Text>
            <Grid
              templateColumns={{
                sm: "1fr",
                xl: "repeat(3, 1fr)",
              }}
            >
              {element.list.map((item: listLogElement) => {
                return (
                  <Box
                    w="xs"
                    my={5}
                    overflow={"hidden"}
                    bg="white"
                    key={item.title}
                  >
                    <Box p={4}>
                      <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                        {item.title}
                      </Heading>
                      <Text color={"gray.500"} pt="5" noOfLines={2}>
                        {item.sub}
                      </Text>
                    </Box>
                    <HStack color="black">
                      <Flex
                        p={4}
                        pt="0"
                        alignItems="center"
                        justifyContent={"space-between"}
                        roundedBottom={"sm"}
                        cursor={"pointer"}
                        w="full"
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          _focus={{ boxShadow: "none" }}
                          href={item.href}
                        >
                          <Text
                            fontSize={"md"}
                            bgColor="cyan.400"
                            color="white"
                            fontWeight={"semibold"}
                            as={Button}
                          >
                            View more
                          </Text>
                        </Link>
                      </Flex>
                    </HStack>
                  </Box>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </Flex>
  );
}
