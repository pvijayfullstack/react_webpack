import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "areaspline",
  },
  title: {
    text: "",
  },
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  },
  xAxis: {
    categories: ["1", "2", "3", "4", "5", "6", "7"],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " units",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      name: "Inventory Tunes",
      color: "#82CAFF",
      data: [3.5, 2, 2.9, 3.2, 2.7, 2.8, 2.9],
    },
  ],
};

const DisplayFour = (style) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DisplayFour;
