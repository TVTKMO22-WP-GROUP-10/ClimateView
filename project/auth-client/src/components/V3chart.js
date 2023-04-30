import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import React, {useState} from "react";
import Constants from "../Constants.json"

const req1 = axios.get(Constants.API_ADDRESS + "/temp");
const req2 = axios.get(Constants.API_ADDRESS + "/co2");
const req3 = axios.get(Constants.API_ADDRESS + "/activities");

export default function V3chart() {
    const loading = "loading"
    const error = "error"
    const done = "done"

    const [statusState, setStatusState] = useState(loading);
    
    if(statusState === loading) {
        axios.all([req1, req2, req3]).then(axios.spread((...responses) => {
                const tempData = responses[0].data;
                const co2Data = responses[1].data;
                const activityData = responses[2].data;

                setStatusState({
                    labels: tempData.map((data) => data.timeGast*1000),
                    datasets: [
                        {
                            label: "temperature (gast)",
                            data: tempData.reverse().map(data => {
                                return{
                                    temp: data.temp,
                                    timeGast: data.timeGast*1000
                                }
                            }),
                            parsing: {
                                xAxisKey: "timeGast",
                                yAxisKey: "temp",
                            },
                            pointRadius: 0.5,
                            yAxisID: "temp",
                        },
                        {
                            label: "Co2 measurements (ppm)",
                            data: co2Data.reverse(),
                            parsing: {
                                xAxisKey: "timeCo2",
                                yAxisKey: "ppm",
                            },
                            pointRadius: 0.5,
                            yAxisID: "ppm",
                        },
                        {
                            label: "activity",
                            data: activityData.map((data) => {
                                return {
                                    year: data.year,
                                    activities: data.activities,
                                    temp: 3,
                                }
                            }),
                            parsing: {
                                xAxisKey: "year",
                                yAxisKey: "temp"
                            },
                            pointRadius: 6,
                            pointStyle: "triangle",
                            yAxisID: "temp",
                            showLine: false,
                        },
                    ]
                });
            }))
            .catch((err) => {
                console.log(err)
                setStatusState(error)
            })
    }

    const options = {
        responsive: true,
        scales: {
            temp: {
                position:"left"
            },
            ppm: {
                position: "right"
            },
        },
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Visualization 3",
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return context.raw.activities
                    }
                }
            }
        }, 
    };

    let view = null;

    switch(statusState) {
        case loading:
            view = <h1>Loading</h1>
            break;
        case error:
            view = <h1>Error</h1>
            break;
        default:
            view = <Line options={options} data={statusState}/>
    }

    return (
        <div>
            <div>
                {view}
            </div>
            <div>
                <p>Evolution of temperature and recorded co2 emissions over the span of ~2 million years, 
                    accompanied by select points of human activity</p>
                <a href='https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf'>Description for used temperature data</a><br/>
                <a href='http://carolynsnyder.com/papers/Snyder_Data_Figures.zip'>Dataset for used temperature data</a><br/>
                <a href="https://www.southampton.ac.uk/~cpd/history.html">Dataset for used human activity data</a><br/>
            </div>
        </div>
    );
}
