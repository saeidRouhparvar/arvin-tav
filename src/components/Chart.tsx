import { FC, useState } from "react";
import Chart from "react-apexcharts";

type ChartProps = {
  categories: string[];
  series: any;
  type: "line" | "bar" | 'area' | 'pie';
  height?:string
};

const ApexChart: FC<ChartProps> = ({ categories, series, type,height }) => {
  const [options] = useState({
    chart: {
      id: type === "line" ? "line-bar" : "base-bar",
    },
    legend:{
show:false
    },
    xaxis: {
      categories: categories,
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 6,
      },
  
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "14px",
          colors: ["#000"],
          fontFamily: "Vazirmatn",
        },
      },
    },

    stroke: {
      // curve:
      //   type === "line" ? ("smooth" as "smooth") : ("straight" as "straight"),
      width: 3,
    },
    markers: {
      size: 8,
    },
    tooltip: {
      enabled: true,
    },
  });

  return (
    <div className="mixed-chart" style={{ marginTop: "2rem", width: "100%" }}>
      <Chart
        options={options}
        series={series}
        type={type}
        width="100%"
        height={height}
      />
    </div>
  );
};

export default ApexChart;
