import React, { useState } from 'react';
import { Chart } from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import axios from "axios";
import Constants from "../Constants.json"

//Pyynnöt
const requestMonthly = axios.get(Constants.API_ADDRESS + "/v1monthly")
const requestYearly = axios.get(Constants.API_ADDRESS + "/v1year")

axios.all([requestMonthly, requestYearly]).then(axios.spread((...responses) => {
    const respYear = responses[0].data
    const respMonth = responses[1].data
}))

function monthlyDataGroubBy(data, area) {
    let parced_data = data.filter((value) => {
        return value["area"] === area
    }).map((a) => {
        return {
            Year: a["year"].toString() + "-" + a["month"].toString(),
            Temperature: a["deg"].toString()
        }
    })
    return [...parced_data]
}

function yearDataGroubBy(data, area) {
    let parced_data = data.filter((value) => {
      return value["area"] === area
    }).map((a) => {
      return {
        Year: a["year"].toString(),
        Temperature: a["deg"].toString()
      }
    })
    return [...parced_data]
  }

export default function FirstView() {
    const loading = "loading"
    const error = "error"
    const done = "done"

    const [statusState, setStatusState] = useState(loading);

    if (statusState === loading) {
        axios.all([requestMonthly, requestYearly]).then(axios.spread((...responses) => {
            const respMonth = responses[0].data
            const respYear = responses[1].data
        
                    setStatusState({
                        datasets: [
                            {
                                label: "Northern monthly",
                                data: monthlyDataGroubBy(respMonth, "northern_monthly"),
                                parsing: {
                                    xAxisKey: "Year",
                                    yAxisKey: "Temperature"
                                },
                                pointRadius: 0.5,
                            },
                            {
                                label: "southern monthly",
                                data: monthlyDataGroubBy(respMonth, "southern_monthly"),
                                borderColor: "rgb(201, 40, 12)",
                                backgroundColor: "rgba(255, 99, 132, 0.5)",
                                parsing: {
                                    xAxisKey: "Year",
                                    yAxisKey: "Temperature"
                                },
                                pointRadius: 1,
                            },
                            {
                                label: "Global monthly",
                                data: monthlyDataGroubBy(respMonth, "global_monthly"),
                                borderColor: "rgb(145, 49, 112)",
                                backgroundColor: "rgba(255, 99, 132, 0.5)",
                                parsing: {
                                    xAxisKey: "Year",
                                    yAxisKey: "Temperature"
                                },
                                pointRadius: 1,
                            },
                            {
                                label: "Northern annual",
                                data: yearDataGroubBy(respYear, "northern_annual"),
                                parsing: {xAxisKey: "Year",
                                          yAxisKey: "Temperature"},
                                pointRadius: 1,
                            },
                            {
                                label: "southern annual",
                                data: yearDataGroubBy(respYear, "southern_annual"),
                                borderColor: "rgb(201, 40, 12)",
                                backgroundColor: "rgba(255, 99, 132, 0.5)",
                                parsing: {xAxisKey: "Year",
                                          yAxisKey: "Temperature"},
                                pointRadius: 1,
                              },
                              {
                                label: "Global annual",
                                data: yearDataGroubBy(respYear, "global_annual"),
                                borderColor: "rgb(145, 49, 112)",
                                backgroundColor: "rgba(255, 99, 132, 0.5)",
                                parsing: {xAxisKey: "Year",
                                          yAxisKey: "Temperature"},
                                pointRadius: 1,
                              },



                        ]
                    });
                
                
            })).catch((err) => {
                console.log(err)
                setStatusState(error)
            }
            )
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Visualization 1",
            },
        },
    };

    let view = null

    switch (statusState) {
        case loading:
            view = <h1>Loading</h1>
            break;
        case error:
            view = <h1>Error</h1>
            break;
        default:
            view = <Line options={options} data={statusState} />
    }

    return (
        <div style={{ width: "1000px" }}>
            {view}
        </div>
    );
}