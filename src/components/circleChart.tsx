import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import ApexChart from "./Chart";
import { lightArrow } from "./svg";

const chartLabel = [
  {
    id:0,
    title: "بسته‌بندی",
    color: "#E64A19",
    percent: "(+2.98%)",
    develope: "39.11%",
    status: "success",
  },
  {
    id:1,
    title: "فروش",
    color: "#FF5722",
    percent: "(-3.25%)",
    develope: "28.02%",
    status: "failed",
  },
  {
    id:2,
    title: "بخش‌های تولید",
    color: "#F57C00",
    percent: "(+0.14%)",
    develope: "23.13%",
    status: "success",
  },
  {
    id:3,
    title: "دیگر",
    color: "#FFB74D",
    percent: "(-1.11%)",
    develope: "5.03%",
    status: "failed",
  },
];

const CircleChart = () => {
  return (
    <Flex
      direction={"column"}
      gap={4}
      backgroundColor={"white"}
      p={6}
      borderRadius={"20px"}
    >
      <Flex align={"center"} justify={"space-between"}>
        <Flex direction={"column"}>
          <Box color={"#757575"}>درصد مشارکت بخش‌های مختلف</Box>
          <Box color={"#212121"} fontSize={18}>
            در فرآیند تولید یا فروش
          </Box>
        </Flex>

        <Flex
          color={"#615E83"}
          bg={"#F8F8FF"}
          borderRadius={"20px"}
          px={4}
          py={1}
          gap={4}
        >
          <Box>1404</Box>
          <Box mt={2}>{lightArrow}</Box>
        </Flex>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} alignItems={"center"} gap={4}>
        <ApexChart
          categories={["Product A", "Product B", "Product C"]}
          series={[30, 40, 50, 60]}
          type="pie"
          height="240px"
        />
        <Flex direction={"column"} gap={5}>
          {chartLabel.map((i) => (
            <Flex  key={i.id} justify={"space-between"} align={"center"}>
              <Flex align={"center"} gap={2}>
                <Box
                  width={"9px"}
                  height={"9px"}
                  backgroundColor={i.color}
                  borderRadius={"100%"}
                ></Box>
                <Box>{i.title}</Box>
              </Flex>
              <Flex gap={4} fontSize={12}>
                <Box color={i.status === 'success' ? "#04CE00" : '#FF718B'}>{i.percent}</Box>
                <Box>{i.develope}</Box>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default CircleChart;
