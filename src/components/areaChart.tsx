import { Box, Flex, Icon } from "@chakra-ui/react";
import { highArrow } from "./icons/icons";
import ApexChart from "./Chart";
import { useState } from "react";

const AreaChart = () => {
  const [series] = useState([
    {
      name: "کاهش هزینه ها",
      data: [4, 6, 5, 6, 8, 5],
    },
  ]);
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
          <Box color={"#757575"}>گزارش‌ آماده تصمیم‌گیری سریع</Box>
          <Box color={"#212121"} fontSize={18}>
            پاداش های نقدی (هفتگی)
          </Box>
        </Flex>

        <Flex direction={"column"}>
          <Box color={"#212121"}>1,127,000 م.ت</Box>
          <Flex gap={2} justify={"left"}>
            <Box color={"#388E3C"}>12.75%</Box>
            <Box
              backgroundColor={"#E1F6E3"}
              borderRadius={"100%"}
              w={22}
              h={22}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box mt={2} ml={2}>
                <Icon d={highArrow} color="#388E3C" w={26} h={18} />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <ApexChart
        height="200"
        type="area"
        categories={[
          "شنبه",
          "یکشنبه",
          "دوشنبه",
          "سه شنبه",
          "چهارشنبه",
          "پنجشنبه",
        ]}
        series={series}
      />
    </Flex>
  );
};

export default AreaChart;
