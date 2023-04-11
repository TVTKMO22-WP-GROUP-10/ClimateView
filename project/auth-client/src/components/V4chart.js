import React, { useState } from 'react';
import { Chart } from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import axios from "axios";
import Constants from "../Constants.json"

const reqFinland = axios.get(Constants.API_ADDRESS + "/v4Finland")
const reqChina = axios.get(Constants.API_ADDRESS + "/v4China")
const reqRussia = axios.get(Constants.API_ADDRESS + "/v4Russia")
const reqUsa = axios.get(Constants.API_ADDRESS + "/v4Usa")

axios.all([reqFinland, reqChina, reqRussia, reqUsa]).then(axios.spread((...responses) => {
    const respFinland = responses[0].data
    const respChina = responses[1].data
    const respRussia = responses[2].data
    const respUsa = responses[3].data
}));

export default function V4chart() {
    const loading = "loading"
    const error = "error"
    const done = "done"

    const [statusState, setStatusState] = useState(loading);
    
    if(statusState=== loading) {
        axios.all([reqChina, reqFinland, reqRussia, reqUsa]).then(axios.spread((...responses) => {
            const respChina = responses[0].data;
            const respFinland = responses[1].data;
            const respRussia = responses[2].data;
            const respUsa = responses[3].data;
    

            setStatusState({
                labels: respUsa.map((data) => data.year),
                datasets: [
                    {
                        label: "China",
                        data: respChina.map(data => {
                            return{
                                mtc: data.mtc*3.664,
                                year: data.year
                            }
                        }),
                        parsing: {
                            xAxisKey: "year",
                            yAxisKey: "mtc"
                        },
                        pointRadius: 0.5,
                    },
                    {
                        label: "Finland",
                        data: respFinland.map(data => {
                            return{
                                mtc: data.mtc*3.664,
                                year: data.year
                            }
                        }),
                        parsing: {
                            xAxisKey: "Year",
                            yAxisKey: "mtc"
                        },
                        pointRadius: 0.5,
                    },
                    {
                        label: "Russia",
                        data: respRussia.map(data => {
                            return{
                                mtc: data.mtc*3.664,
                                year: data.year
                            }
                        }),
                        parsing: {
                            xAxisKey: "year",
                            yAxisKey: "mtc"
                        },
                        pointRadius: 0.5,
                    },
                    {
                        label: "USA",
                        data: respUsa.map(data => {
                            console.log(data)
                            return{
                                mtc: data.mtc*3.664,
                                year: data.year
                            }
                        }),
                        parsing: {xAxisKey: "year",
                                  yAxisKey: "mtc"},
                        pointRadius: 0.5,
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
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Visualization 4",
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