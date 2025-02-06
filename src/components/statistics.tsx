import { SimpleGrid } from "@chakra-ui/react";
import StatisticsCard from "./statisticsCard";

const cardData = [
  { id: 0, title: "تعداد کل دانش ها", count: "813", color: "red" },
  { id: 1, title: "تعداد دانش های موفق", count: "564", color: "green" },
  { id: 2, title: "شاخص کاهش هزینه ها", count: "11 %", color: "green" },
  { id: 3, title: "شاخص رشد تولید", count: "8 %", color: "red" },
];

const Statistics = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 4 }} gap={4}>
      {cardData.map((i) => (
        <StatisticsCard key={i.id} title={i.title} count={i.count} color={i.color} />
      ))}
    </SimpleGrid>
  );
};

export default Statistics;
