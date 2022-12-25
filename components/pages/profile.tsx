import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue,
  DarkMode,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "../card/Card";
import CardBody from "../card/CardBody";
import CardHeader from "../card/CardHeader";

export default function Profile({ userName }: { userName: string }) {
  let currentUser = "Ghost";
  return (
    <Flex direction="column" m="8" pt={5} mt={0}>
      <Box
        mb={{ sm: "24px", md: "50px", xl: "20px" }}
        
        display="flex"
        flexDirection="column"
        bgColor={useColorModeValue("white", "gray.800")}
        justifyContent="center"
      >
        {/* Header */}
        <Card
          direction={{ sm: "column", md: "row" }}
          mx="auto"
          maxH="330px"
          w={{ sm: "90%", xl: "100%" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          align="center"
          p="24px"
          
          mt="100px"
        >
          <Flex align="center" direction={{ sm: "column", md: "row" }}>
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar
                me={{ md: "22px" }}
                src={
                  "https://avatars.dicebear.com/api/adventurer/" +
                  userName +
                  ".svg"
                }
                w="80px"
                h="80px"
                
              ></Avatar>
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={useColorModeValue("gray.600", "white")}
                  fontWeight="bold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  {userName}
                </Text>
                <Text fontSize={{ sm: "sm", md: "md" }} color="gray.400">
                  OWNER/DEVELOPER
                </Text>
              </Flex>
            </Flex>
            <Box w={{ sm: "100%", md: "50%", lg: "auto" }}>
              <Button
                bg="transparent"
                _hover={{
                  bg: "brand.200",
                }}
                _active={{
                  bg: "brand.200",
                }}
                leftIcon={
                  <Icon
                    color={useColorModeValue("gray.600", "white")}
                    me="6px"
                  />
                }
              >
                <Text
                  fontSize="xs"
                  color={useColorModeValue("gray.600", "white")}
                  fontWeight="bold"
                >
                  FACTION
                </Text>
              </Button>
              {userName == currentUser ? (
                <div></div>
              ) : (
                <Button
                  
                  bg="transparent"
                  _hover={{
                    bg: "brand.200",
                  }}
                  _active={{
                    bg: "brand.200",
                  }}
                  leftIcon={
                    <Icon
                      color={useColorModeValue("gray.600", "white")}
                      me="6px"
                    />
                  }
                >
                  <Text
                    fontSize="xs"
                    color={useColorModeValue("gray.600", "white")}
                    fontWeight="bold"
                  >
                    REPORT
                  </Text>
                </Button>
              )}
            </Box>
          </Flex>
        </Card>
      </Box>
      <Grid
        templateColumns={{
          sm: "1fr",
          xl: "repeat(2, 1fr)",
          "2xl": "1fr 2fr 1.2fr",
        }}
        gap="22px"
        mb="24px"
      >
        {/* Welcome Card */}
        <Card
          bgSize="cover"
          pt="5"
          maxW={{ sm: "325px", md: "725px", lg: "980px" }}
          gridArea={{ xl: "1 / 1 / 2 / 2", "2xl": "auto" }}
        >
          <Flex direction="column" h="100%">
            <CardHeader p="12px 5px" mb="12px">
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "white")}
                fontWeight="bold"
              >
                Player Information
              </Text>
            </CardHeader>

            <CardBody px="5px">
              <Flex direction="column">
                <Flex align="center" mb="18px">
                  <Text fontSize="sm" color={"gray.400"} me="10px">
                    Score:{" "}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "white")}
                    fontWeight="400"
                  >
                    30930
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text fontSize="sm" color={"gray.400"} me="10px">
                    Kills:{" "}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "white")}
                    fontWeight="400"
                  >
                    13027
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text fontSize="sm" color={"gray.400"} me="10px">
                    Deaths:{" "}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "white")}
                    fontWeight="400"
                  >
                    12180
                  </Text>
                </Flex>
                <Flex align="center" mb="18px">
                  <Text fontSize="sm" color={"gray.400"} me="10px">
                    KDR:{" "}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "white")}
                    fontWeight="400"
                  >
                    1.1
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Flex>
        </Card>

        {/* Profile Information */}
        <Card
          pt={{ sm: "0", md: "12" }}
          maxH={{ md: "410px" }}
          maxW={{ sm: "325px", md: "725px", lg: "980px" }}
          gridArea={{ xl: "1 / 2 / 2 / 3", "2xl": "auto" }}
        >
          <CardHeader p={{ sm: "0", md: "12px 5px" }} mb="12px"></CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Flex align="center" mb="18px">
                <Text fontSize="sm" color={"gray.400"} me="10px">
                  Team:{" "}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "white")}
                  fontWeight="400"
                >
                  Ruthless Domination
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="sm" color={"gray.400"} me="10px">
                  Rank:{" "}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "white")}
                  fontWeight="400"
                >
                  Civ
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="sm" color={"gray.400"} me="10px">
                  Money:{" "}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "white")}
                  fontWeight="400"
                >
                  $42,683,236
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="sm" color={"gray.400"} me="10px">
                  Bank:{" "}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "white")}
                  fontWeight="400"
                >
                  $42,683,236
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>

        {/* Car Informations */}
        <Card
          maxH={{ lg: "410px" }}
          maxW={{ sm: "325px", md: "725px", lg: "980px", xl: "100%" }}
          gridArea={{ xl: "2 / 1 / 3 / 3", "2xl": "auto" }}
        >
          <CardHeader p="12px 5px" mb="12px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "white")}
                fontWeight="bold"
                mb="6px"
              >
                More Informations
              </Text>
            </Flex>
          </CardHeader>
          <CardBody w="100%">
            <Flex w="100%" direction={{ sm: "column", md: "row" }}>
              <Flex
                direction="column"
                align="center"
                me={{ md: "16px", lg: "50px" }}
                mb={{ sm: "12px", md: "0px" }}
              >
                <CircularProgress
                  size={200}
                  value={100}
                  thickness={6}
                  color="green.400"
                >
                  <CircularProgressLabel>
                    <Flex direction="column" justify="center" align="center">
                      <Text
                        color={useColorModeValue("gray.600", "white")}
                        fontSize="36px"
                        fontWeight="bold"
                        mb="6px"
                      >
                        100%
                      </Text>
                      <Text color="gray.400" fontSize="sm">
                        Achivements
                      </Text>
                    </Flex>
                  </CircularProgressLabel>
                </CircularProgress>
                <Flex direction="column" mt="18px" align="center">
                  <Text
                    color={useColorModeValue("gray.600", "white")}
                    fontSize="lg"
                    fontWeight="bold"
                    mb="2px"
                  >
                    19/19
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    Achivements done
                  </Text>
                </Flex>
              </Flex>
              <Grid
                templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)" }}
                gap="24px"
                w="100%"
                alignSelf="flex-start"
              >
                <Flex
                  align="center"
                  p="18px"
                  justify="space-between"
                  bgColor={useColorModeValue("white", "gray.800")}
                  
                >
                  <Flex direction="column" me="auto">
                    <Text fontSize="xs" color="gray.400" mb="3px">
                      Playtime
                    </Text>
                    <Text
                      color={useColorModeValue("gray.600", "white")}
                      fontSize="22px"
                      fontWeight="bold"
                    >
                      3 months and 10 hours
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  align="center"
                  p="18px"
                  pe="0px"
                  justify="space-between"
                  bgColor={useColorModeValue("white", "gray.800")}
                  
                >
                  <Flex direction="column" me="auto">
                    <Text fontSize="xs" color="gray.400" mb="3px">
                      V.I.P Status
                    </Text>
                    <Text
                      color={useColorModeValue("gray.600", "white")}
                      fontSize="22px"
                      fontWeight="bold"
                    >
                      Bronze
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  align="center"
                  p="18px"
                  justify="space-between"
                  bgColor={useColorModeValue("white", "gray.800")}
                  
                >
                  <Flex direction="column" me="auto">
                    <Text fontSize="xs" color="gray.400" mb="3px">
                      Drugs
                    </Text>
                    <Text
                      color={useColorModeValue("gray.600", "white")}
                      fontSize="22px"
                      fontWeight="bold"
                    >
                      864 G
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  align="center"
                  p="18px"
                  pe="0px"
                  justify="space-between"
                  bgColor={useColorModeValue("white", "gray.800")}
                  
                >
                  <Flex direction="column" me="auto">
                    <Text fontSize="xs" color="gray.400" mb="3px">
                      Joined At
                    </Text>
                    <Text
                      color={useColorModeValue("gray.600", "white")}
                      fontSize="22px"
                      fontWeight="bold"
                    >
                      2018-07-27
                    </Text>
                  </Flex>
                </Flex>
              </Grid>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}
