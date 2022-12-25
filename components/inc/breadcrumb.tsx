
//Chrakra module
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

//Include types
import { breadCrumbProps } from "../../types/breadCrumbType";

//Main breadCrumb function
export default function BreadCrumb({
  location,
  list,
}: {
  location: string;
  list: Array<breadCrumbProps>;
}) {
  return (
    <Flex pt="4" pl="5">
      <label>{location}</label>
      <Breadcrumb
        spacing="8px"
        position="absolute"
        right="8"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        {/* Map thru the list to show each element in breadCrumb */}
        {list.map((element: breadCrumbProps) => {
          return (
            <BreadcrumbItem key={element.title}>
              <BreadcrumbLink href={element.href}>
                {element.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Flex>
  );
}
