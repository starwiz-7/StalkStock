import React from "react";
import {Line} from "react-chartjs-2";
import PropTypes from "prop-types";

var options = {
  layout: {
    padding: {
      right: 25,
      left: 25,
    },
  },
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label(tooltipItems, data) {
        return `$${tooltipItems.yLabel}`;
      },
    },
    displayColors: false,
  },
  hover: {
    mode: "index",
    intersect: false,
  },
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    fontStyle: "bold",
    yAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        fontStyle: "bold",

        ticks: {
          callback(value) {
            return "$" + value.toFixed(2);
          },
        },
      },
    ],
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      borderCapStyle: "round",
      borderJoinStyle: "round",
    },
  },
};

const FullChart = ({
  ytd,
  month,
  day,
  stockData,
  year,
  data1,
  years,
  changeFocus,
  getOneYearChart,
  getOneMonthChart,
  getOneDayChart,
}) => (
  <div className="Chart">
    <Line data={data1} options={options} />
    <div className="Chart__timers">
      <h6
        className="Chart__option"
        ref={year}
        id="1y"
        onClick={() => {
          getOneYearChart();
          changeFocus(3);
        }}>
        1Y
      </h6>
      <h6
        className="Chart__option"
        ref={month}
        id="1m"
        onClick={() => {
          changeFocus(2);
          getOneMonthChart();
        }}>
        1M
      </h6>
      <h6
        className="Chart__option"
        ref={day}
        id="1d"
        onClick={() => {
          changeFocus(1);
          getOneDayChart();
        }}>
        1D
      </h6>
    </div>
  </div>
);

FullChart.propTypes = {
  changeFocus: PropTypes.func,
  getOneMonthChart: PropTypes.func,
  getOneYearChart: PropTypes.func,
  getOneDayChart: PropTypes.func,
  data1: PropTypes.func,
  year: PropTypes.object,
  years: PropTypes.object,
  stockData: PropTypes.object,
  ytd: PropTypes.object,
  month: PropTypes.object,
  day: PropTypes.object,
};

export default FullChart;