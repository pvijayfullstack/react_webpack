import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
  },

  title: {
    text: "",
  },

  xAxis: {
    categories: ["date", "date", "date", "date", "date", "date", "date"],
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "",
    },
  },

  tooltip: {
    formatter: function () {
      return (
        "<b>" +
        this.x +
        "</b><br/>" +
        this.series.name +
        ": " +
        this.y +
        "<br/>" +
        "Total: " +
        this.point.stackTotal
      );
    },
  },

  plotOptions: {
    column: {
      stacking: "normal",
    },
  },

  legend: {
    align: "right",
    verticalAlign: "top",
    borderWidth: 0,
  },
  series: [
    {
      name: "Tapped",
      color: "#2B3856",
      data: [1100, 1900, 2400, 2900, 3500, 1040, 4900],
    },
    {
      name: "On Deck",
      color: "#82CAFF",
      data: [500, 1200, 700, 700, 900, 1040, 900],
    },
  ],
};

const DisplayThree = (style) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DisplayThree;
