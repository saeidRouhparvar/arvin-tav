import { Flex } from "@chakra-ui/react";
import Topbar from "../components/topbar";
import Statistics from "../components/statistics";
import MainChart from "../components/mainChart";
import OtherCharts from "../components/otherCharts";

const Dashboard = () => {
  return (
    <Flex direction={"column"} gap={"1.5rem"}>
      <Topbar />
      <Statistics />
      <MainChart />
      <OtherCharts />
    </Flex>
  );
};

export default Dashboard;
