import React from 'react'
import { Line, Bar } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import v1monthly_data from "./rawdata/v1monthly_data";


const graphdata = v1monthly_data;
    // [
    //     {
    //         "time": "1850-1",
    //         "deg": "-0.67456436"
    //     },
    //     {
    //         "time": "1850-2",
    //         "deg": "-0.9006187"
    //     },
    //     {
    //         "time": "1850-3",
    //         "deg": "-0.44851005"
    //     },
    //     {
    //         "time": "1850-4",
    //         "deg": "-0.333416"
    //     },
    //     {
    //         "time": "1850-5",
    //         "deg": "-0.15071486"
    //     },
    // ]

export default function TestChart() {
    const data = {
        datasets: [
            {
                label: "Testing with the new data",
                data: graphdata,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: "co2",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "deg",
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
                text: "For testing, remove if necessary",
            },
        },
        scales: {
            //y-akselin asetukset
            co2: {
                type: "linear",
                display: true,
                position: "left",
            },
            //x-akselin asetukset
            x: {
                title: {
                    color: 'red',
                    display: true,
                    text: 'Info text of the x-axis '
                },
                ticks: {
                    color: 'blue',
                },
                
            },
        },
    };

    return (
        <div style={{ width: "1000px" }}>
            <Line options={options} data={data} />
        </div>

    );
}
