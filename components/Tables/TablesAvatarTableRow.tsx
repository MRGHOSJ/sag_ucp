import {
  Badge,
  Flex,
  Td,
  Text,
  Tr,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function TablesAvatarTableRow(props: any) {
  const { name, sub, rows } = props;

  return (
    <Tr>
      <Td ps="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar
            src={"https://avatars.dicebear.com/api/adventurer/" + name + ".svg"}
            w="50px"
            borderRadius="12px"
            me="18px"
            border="none"
          />
          <Flex direction="column">
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="normal"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {sub}
            </Text>
          </Flex>
        </Flex>
      </Td>
      {rows.map((element: any, index: number) => {
        let badge = "";
        let badgeColor = "";
        let badgeStyle = "";
        if (element.includes("Badge")) {
          badge = element.split(":");
          let badgeConfig = badge[0].split("_");
          badgeColor = badgeConfig[1];
          badgeStyle = badgeConfig[2];
        }
        return (
            <Td key={index}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="normal"
                  >
                    {element.includes("Badge") ? (
                      <Badge variant={badgeStyle} colorScheme={badgeColor}>
                        {badge[1]}
                      </Badge>
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
