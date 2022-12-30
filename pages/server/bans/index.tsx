import Head from "next/head";
import BreadCrumb from "../../../components/inc/breadcrumb";
import Footer from "../../../components/inc/footer";

//Internal Components
import NavBar from "../../../components/inc/navbar";
import Sidebar from "../../../components/inc/sidebar";
import {
  useColorModeValue,
  Flex,
  Input,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Spacer,
} from "@chakra-ui/react";
import TablesTableRow from "../../../components/Tables/TablesTableRow";
import Card from "../../../components/card/Card";
import CardHeader from "../../../components/card/CardHeader";
import CardBody from "../../../components/card/CardBody";

export default function Home() {
  return (
    <div className="bg-gray-100 h-fu">
      {/* Site head */}
      <Head>
        <title>UCP - Ban List</title>
      </Head>

      {/* Sidebar and Navbar(location/userName) */}
      <Sidebar
        children={
          <>
            <NavBar userName="Ghost" />
            <BreadCrumb
              location="Bans"
              list={[
                { title: "Dashboard", href: "/" },
                { title: "Server", href: "" },
                { title: "Bans", href: "/bans" },
              ]}
            />

            <Flex direction="column" m="3" pt={5} mt={0}>
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
                    Ban List
                  </Text>
                  <Text fontSize="xs" color="gray.400">
                    This table contains a list of banned players
                  </Text>
                </CardHeader>
                <Flex>
                  <Spacer />
                  <Input w={200} variant="flushed" placeholder="Search..." />
                </Flex>

                <CardBody>
                  <Table variant="simple" color="#fff">
                    <Thead>
                      <Tr my=".8rem" ps="0px" color="gray.400">
                        <Th
                          ps="0px"
                          color="gray.400"
                          borderBottomColor="#56577A"
                        >
                          Name
                        </Th>
                        <Th color="gray.400" borderBottomColor="#56577A">
                          Admin
                        </Th>
                        <Th color="gray.400" borderBottomColor="#56577A">
                          Reason
                        </Th>
                        <Th color="gray.400" borderBottomColor="#56577A">
                          Type
                        </Th>
                        <Th color="gray.400" borderBottomColor="#56577A">
                          Time
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <TablesTableRow
                        rows={[
                          "essam",
                          "SA:Zack",
                          "Ban Evade",
                          "Account",
                          "2022-12-29 19:41:35",
                        ]}
                      />
                      <TablesTableRow
                        rows={[
                          "essam",
                          "SA:Zack",
                          "Ban Evade",
                          "Account",
                          "2022-12-29 19:41:35",
                        ]}
                      />
                      <TablesTableRow
                        rows={[
                          "essam",
                          "SA:Zack",
                          "Ban Evade",
                          "Account",
                          "2022-12-29 19:41:35",
                        ]}
                      />
                      <TablesTableRow
                        rows={[
                          "essam",
                          "SA:Zack",
                          "Ban Evade",
                          "Account",
                          "2022-12-29 19:41:35",
                        ]}
                      />
                    </Tbody>
                  </Table>
                </CardBody>
              </Card>
            </Flex>

            <Footer />
          </>
        }
      />

      {/* Dashboard */}
      {/* <Dashboard/> */}
    </div>
  );
}
