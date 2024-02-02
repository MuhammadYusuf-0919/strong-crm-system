import React, { Component } from "react";
import Card from "@/components/Card";
import Chart from "react-apexcharts";
import { barChartData, barChartOptions } from "@/variables/charts";

interface BarChartState {
  chartData: Array<any>; // Update the type based on your actual data structure
  chartOptions: any; // Update the type based on your actual options structure
}

class BarChart extends Component<{}, BarChartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: barChartData,
      chartOptions: barChartOptions,
    });
  }

  render() {
    return (
      <Card
        py="1rem"
        height={{ sm: "200px" }}
        width="100%"
        bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
        position="relative"
      >
        <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          width="100%"
          height="100%"
        />
      </Card>
    );
  }
}

export default BarChart;
