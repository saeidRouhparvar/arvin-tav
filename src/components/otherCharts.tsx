import { SimpleGrid } from "@chakra-ui/react";

import AreaChart from "./areaChart";
import CircleChart from "./circleChart";

const OtherCharts = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
      <AreaChart />
      <CircleChart />
    </SimpleGrid>
  );
};

export default OtherCharts;
