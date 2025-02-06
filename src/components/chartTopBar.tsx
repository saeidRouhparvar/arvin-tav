import { Box, Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import { FC } from "react";

const tabData = [
  { title: "روز" },
  { title: "هفته" },
  { title: "ماه" },
  { title: "سال" },
];
const chartLabel = [
  { title: "کاهش هزینه ها", color: "#E53935" },
  { title: "سرعت تولید", color: "#FBC02D" },
  { title: "دانش های ثبت شده", color: "#9C27B0" },
];

const ChartTopBar: FC = () => {
  return (
    <Flex
      align={{ base: "right", lg: "center" }}
      justify={"space-between"}
      direction={{ base: "column", lg: "row" }}
      gap={4}
    >
      <Flex direction={"column"} gap={1}>
        <Box color={"#757575"}>آمار</Box>
        <Box fontSize={"1.125rem"} color={"#212121"}>
          روند تغییرات داده‌ها
        </Box>
      </Flex>

      {chartLabel.map((i, index) => (
        <Flex align={"center"} gap={2} key={index}>
          <Box
            width={"9px"}
            height={"9px"}
            backgroundColor={i.color}
            borderRadius={"100%"}
          ></Box>
          <Box>{i.title}</Box>
        </Flex>
      ))}
      <Box
        fontSize={24}
        color={"#FF5722"}
        border={"1px solid #FF5722"}
        w={6}
        h={6}
        borderRadius={4}
        display={"grid"}
        placeContent={"center"}
      >
        +
      </Box>

      <Tabs
        position="relative"
        bg={"#FFF3E0"}
        borderRadius={"15px"}
        p={2}
        variant="unstyled"
      >
        <TabList>
          {tabData.map((i, index) => (
            <Tab
              key={index}
              _selected={{
                color: "white",
                bg: "#FF5722",
                borderRadius: "10px",
              }}
            >
              {i.title}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default ChartTopBar;
