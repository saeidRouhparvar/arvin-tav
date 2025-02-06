import { Box, Flex } from "@chakra-ui/react";
import { arrowDown } from "./svg";
import { FC } from "react";

type StatisticsCardProps = {
  title: string;
  count: string;
  color?: string;
};

const StatisticsCard: FC<StatisticsCardProps> = ({ title, count, color }) => {
  return (
    <Flex
      direction={"column"}
      backgroundColor={"white"}
      px={4}
      py={2}
      borderRadius={"15px"}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        color={"#757575"}
        w={"full"}
        borderBottom={"1px solid #C0C0C0"}
        pb={2}
      >
        <Box fontSize={"1.125rem"}> بازه زمانی</Box>
        <Flex align={"center"} gap={2}>
          <Box>ماهیانه</Box>
          <Box>{arrowDown}</Box>
        </Flex>
      </Flex>

      <Flex pt={2} direction={"column"} gap={2} align={"center"}>
        <Box color={"#212121"} fontSize={"1.125rem"}>
          {title}
        </Box>
        <Box color={color === "green" ? "#43A047" : "#E53935"}>{count}</Box>
      </Flex>
    </Flex>
  );
};

export default StatisticsCard;
