import React from 'react';
import { Chart } from "chart.js/auto";
import { Line } from 'react-chartjs-2';

//this is a sample chart
//hard coded data:
const graphdata =[
    {
		"TimeYrBP": "1000",
		"Co2ppm": "283.2325031"
	},
	{
		"TimeYrBP": "2000",
		"Co2ppm": "278.0458112"
	},
	{
		"TimeYrBP": "3000",
		"Co2ppm": "275.4241056"
	},
	{
		"TimeYrBP": "4000",
		"Co2ppm": "272.8180045"
	},
    {
		"TimeYrBP": "5000",
		"Co2ppm": "274.8180045"
	}
]

export default function FirstView() {

    const data = {
        datasets: [
          {
            label: "Co2 ppm",
            data: graphdata.reverse(),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "co2",
            parsing: {
              xAxisKey: "TimeYrBP",
              yAxisKey: "Co2ppm",
            },
            pointRadius: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Demo demo demo",
          },
        },
        scales: {
          co2: {
            type: "linear",
            display: true,
            position: "right",
          },
        },
      };

    //return the line-chart
    return (
        <div style={{ width: "1000px" }}>
        <h1>Demo chart for testing</h1>
        <Line options={options} data={data} />
      </div>
    );
}
