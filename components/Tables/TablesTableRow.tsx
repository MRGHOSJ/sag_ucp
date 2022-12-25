import { Badge, Flex, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props: any) {
  const { rows } = props;

  return (
    <Tr>
      {rows.map((element: any, index: number) => {
        let badge = ""
        let badgeColor = ""
        let badgeStyle = ""
        if (element.includes("Badge")) {
          badge = element.split(":") 
          let badgeConfig = badge[0].split("_");
          badgeColor = badgeConfig[1];
          badgeStyle = badgeConfig[2];
        }
        return (
          <Td pl={index == 0 ? "0px" : ""} key={index}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.800", "white")}
                  fontWeight="normal"
                >
                  {element.includes("Badge") ? (
                    <Badge variant={badgeStyle} colorScheme={badgeColor} >{badge[1]}</Badge>
                  ) : (
                    <>{element}</>
                  )}
                </Text>
              </Flex>
            </Flex>
          </Td>
        );
      })}
    </Tr>
  );
}

export default TablesTableRow;
