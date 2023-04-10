import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import React, {useState} from "react";

export default function V3chart() {
    const loading = "loading"
    const error = "error"
    const done = "done"

    const [statusState, setStatusState] = useState(loading);
    
    if(statusState === loading){
        axios.get("http://localhost:8080/temp")
        .then(
            (resp) => {
                setStatusState({
                    labels: resp.data.map((data) => data.timeGast),
                    datasets: [
                        {
                            label: "temperature (gast)",
                            data: resp.data.map((data) => data.temp),
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 99, 132, 0.5)",
                            parsing: {
                                xAxisKey: "timeGast",
                                yAxisKey: "temp",
                            },
                            pointRadius: 1,
                        }
                    ]
                });
            },
            (rej) => {
                console.log(rej)
                setStatusState(test)
            })
            .catch((err) => {
                console.log(err)
                setStatusState(error)}
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
                text: "Visualization 3",
            },
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
    <div style={{ width: "1000px" }}>
        {view}
    </div>
    );
}