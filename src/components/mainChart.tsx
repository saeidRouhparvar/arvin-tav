import { Flex } from "@chakra-ui/react";
import ApexChart from "./Chart";
import ChartTopBar from "./chartTopBar";
import { useState } from "react";

const MainChart = () => {
  const [series] = useState([
    {
      name: "کاهش هزینه ها",
      data: [4, 6, 5, 6, 8, 5, 4, 6, 7],
    },
    {
      name: "سرعت تولید",
      data: [1, 3, 9, 4, 5, 5, 4, 2, 9],
    },
    {
      name: "دانش های ثبت شده",
      data: [6, 4, 6, 3, 2, 9, 6, 3, 5],
    },
  ]);

  console.log(series);
  
  return (
    <Flex
      p={"2rem"}
      direction={"column"}
      gap={4}
      backgroundColor={"white"}
      borderRadius={"20px"}
      w={"100%"}
    >
      <ChartTopBar />
      <ApexChart
      height="450"
        type="line"
        series={series}
        categories={[
          "1 فروردین",
          "فروردین 6",
          "فروردین 11",
          "فروردین 17",
          "24 فروردین",
          "31 فروردین",
          "5 اردیبهشت",
          "12 اردیبهشت",
          "19 اردیبهشت",
        ]}
      />
    </Flex>
  );
};

export default MainChart;
