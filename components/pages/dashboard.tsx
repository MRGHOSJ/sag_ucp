import {
  Box,
  Progress,
  useColorModeValue,
  Flex,
  Grid,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
// Custom components
import Card from "../card/Card";
import CardBody from "../card/CardBody";
import CardHeader from "../card/CardHeader";
import TablesTableRow from "../Tables/TablesTableRow";

export default function Dashboard() {
  return (
    <Flex direction="column" m="8" pt={5} mt={0}>
      <Grid
        templateColumns={{
          sm: "1fr",
          xl: "repeat(1, 1fr)",
          "2xl": "1fr 2fr 1.2fr",
        }}
        gap="22px"
        mb="24px"
      >
        {/* Car Informations */}
        <Card
          maxH={{ lg: "410px" }}
          maxW={{ sm: "325px", md: "725px", lg: "980px", xl: "100%" }}
          gridArea={{ xl: "2 / 1 / 3 / 3", "2xl": "auto" }}
          boxShadow="lg"
        >
          <CardBody w="100%">
            <Flex w="100%" direction={{ sm: "column", md: "row" }}>
              <Grid
                templateColumns={{ sm: "1fr", md: "repeat(4, 1fr)" }}
                w="100%"
                alignSelf="flex-start"
              >
                <Flex
                  align="center"
                  py="30px"
                  pl="30px"
                  justify="space-between"
                  bgColor={useColorModeValue("white", "gray.800")}
                >
                  <Flex direction="column" me="auto">
                    <Box
                      pr="0"
                      fontSize="2xl"
                      color="blue.400"
                      className="material-icons"
                    >
                      schedule
                    </Box>
                    <Text fontSize="xs" color="gray.400" mb="3px">
                      Playtime
                    </Text>
                    <Text
                      color={useColorModeValue("gray.600", "white")}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      3 months and 10 hours
                    </Text>
                    <Progress
                      value={100}
                      size="xs"
                      colorScheme="blue"
                      width={200}
                    />
                  </Flex>
                </Flex>
                <Flex
                  align="center"
                  py="30px"
                  pl="30px"
                  justify="space-between"
                  bgColor={useColorModeValue("white", "gray.800")}
                >
                  <Flex direction="column" me="auto">
                    <Box
                      pr="4"
                      fontSize="2xl"
                      color="green.300"
                      className="material-icons"
                    >
                      military_tech
                    </Box>
                    <Text fontSize="xs" color="gray.400" mb="3px">
                      Total Achievements
                    </Text>
                    <Text
                      color={useColorModeValue("gray.600", "white")}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      19 / 19
                    </Text>
                    <Progress
                      value={100}
                      size="xs"
                      colorScheme="green"
                      width={200}
                    />
                  </Flex>
                </Flex>
                <Flex
                  align="center"
                  py="30px"
                  pl="30px"
                  justify="space-between"
                  bgColor={useColorModeValue("white", "gray.800")}
                >
                  <Flex direction="column" me="auto">
                    <Box
                      pr="0"
                      fontSize="2xl"
                      color="yellow.400"
                      className="material-icons"
                    >
                      paid
                    </Box>
                    <Text fontSize="xs" color="gray.400" mb="3px">
                      Total Net Worth
                    </Text>
                    <Text
                      color={useColorModeValue("gray.600", "white")}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      $85.9 Million
                    </Text>

                    <Progress
                      value={20}
                      size="xs"
                      colorScheme="yellow"
                      width={200}
                    />
                  </Flex>
                </Flex>
                <Flex
                  align="center"
                  py="30px"
                  pl="30px"
                  justify="space-between"
                  bgColor={useColorModeValue("white", "gray.800")}
                >
                  <Flex direction="column" me="auto">
                    <Box
                      pr="4"
                      fontSize="2xl"
                      color="purple.400"
                      className="material-icons"
                    >
                      badge
                    </Box>
                    <Text fontSize="xs" color="gray.400" mb="3px">
                      V.I.P Status
                    </Text>
                    <Text
                      color={useColorModeValue("gray.600", "white")}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      Bronze
                    </Text>
                    <Progress
                      value={20}
                      size="xs"
                      colorScheme="purple"
                      width={200}
                    />
                  </Flex>
                </Flex>
              </Grid>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Grid
        templateColumns={{
          sm: "1fr",
          xl: "repeat(2, 1fr)",
          "2xl": "1fr 2fr 1.2fr",
        }}
        gap="22px"
        mb="24px"
      >
        <Grid
          templateColumns={{
            sm: "1fr",
            xl: "repeat(1, 1fr)",
            "2xl": "1fr 2fr 1.2fr",
          }}
          gap="22px"
          mb="24px"
        >
          <Card
            p="10"
            bgColor={useColorModeValue("white", "gray.800")}
            overflowX={{ sm: "scroll", xl: "hidden" }}
          >
            <CardHeader p="6px 0px 22px 0px">
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
              >
                Leisure Activity
              </Text>
              <Text fontSize="xs" color="gray.400">
                The stats for your leisure activities
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px" color="gray.400">
                    <Th ps="0px" color="gray.400" borderBottomColor="#56577A">
                      Name
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Amount
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Money Earned
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <TablesTableRow rows={["Trucking Missions", "78", "-"]} />
                  <TablesTableRow rows={["MoneyBags", "25", "$1.2 Million"]} />
                  <TablesTableRow rows={["Vehicle Drops", "14", "-"]} />
                  <TablesTableRow rows={["Bounties", "573", "$46.6 Million"]} />
                  <TablesTableRow rows={["Robbed Players", "4070078", "-"]} />
                  <TablesTableRow rows={["Robbed Stores", "45025", "-"]} />
                </Tbody>
              </Table>
            </CardBody>
          </Card>
          <Card
            p="10"
            bgColor={useColorModeValue("white", "gray.800")}
            overflowX={{ sm: "scroll", xl: "hidden" }}
          >
            <CardHeader p="6px 0px 22px 0px">
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
              >
                Gift Activity
              </Text>
              <Text fontSize="xs" color="gray.400">
                Latest opened gitfs
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px" color="gray.400">
                    <Th ps="0px" color="gray.400" borderBottomColor="#56577A">
                      Gift
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Time
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <TablesTableRow
                    rows={[
                      "Ghost have recieved $130,123 from the gift!",
                      "2022-12-16 07:38:59",
                    ]}
                  />
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Grid>
        <Grid
          templateColumns={{
            sm: "1fr",
            xl: "repeat(1, 1fr)",
            "2xl": "1fr 2fr 1.2fr",
          }}
          gap="22px"
          mb="24px"
        >
          <Card
            p="10"
            bgColor={useColorModeValue("white", "gray.800")}
            overflowX={{ sm: "scroll", xl: "hidden" }}
          >
            <CardHeader p="6px 0px 22px 0px">
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
              >
                Statistics
              </Text>
              <Text fontSize="xs" color="gray.400">
                The stats for your activities
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px" color="gray.400">
                    <Th ps="0px" color="gray.400" borderBottomColor="#56577A">
                      Name
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Value
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <TablesTableRow rows={["Headshots", "1"]} />
                  <TablesTableRow rows={["Drug Seeds", "128"]} />
                  <TablesTableRow rows={["Radio Frequency", "112211"]} />
                  <TablesTableRow rows={["Blowjobs", "57"]} />
                </Tbody>
              </Table>
            </CardBody>
          </Card>
          <Card
            p="10"
            bgColor={useColorModeValue("white", "gray.800")}
            overflowX={{ sm: "scroll", xl: "hidden" }}
          >
            <CardHeader p="6px 0px 22px 0px">
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
              >
                Settings{" "}
              </Text>
              <Text fontSize="xs" color="gray.400">
                All of your setting needs
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px" color="gray.400">
                    <Th ps="0px" color="gray.400" borderBottomColor="#56577A">
                      Name
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Value
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <TablesTableRow
                    rows={["Hit Sounds", "Badge_red_solid:False"]}
                  />
                  <TablesTableRow
                    rows={[
                      "Entrance/Exit Fading Screen",
                      "Badge_green_solid:True",
                    ]}
                  />
                  <TablesTableRow
                    rows={[
                      "Disabled Private Messages",
                      "Badge_red_solid:False",
                    ]}
                  />
                  <TablesTableRow
                    rows={["Join/Quit Messages", "Badge_green_solid:True"]}
                  />
                  <TablesTableRow
                    rows={["Anonymous Mode", "Badge_green_solid:True"]}
                  />
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </Flex>
  );
}
