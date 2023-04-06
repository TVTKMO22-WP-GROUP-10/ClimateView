import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import React, { useState } from 'react'

//Visualization 1 start

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

export default function FirstPage() {

  const loading = "loading"
  const error = "error"
  const done = "done"

  const [statusState, setStatusState] = useState(loading);
  
  //GET-request
  if(statusState === loading) {
  axios.get("http://localhost:8080/v1year")
  .then(
    (resp) => {
      const parsing = {
        xAxisKey: "Year",
        yAxisKey: "Temperature",
      }
      const northern_annual = "northern_annual"
      const southern_annual = "southern_annual"
      const global_annual = "global_annual"
      
      setStatusState({
        datasets: [
          {
            label: "Northern annual anomalies",
            data: yearDataGroubBy(resp.data, northern_annual),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            parsing: parsing,
            pointRadius: 1,
          },
          {
            label: southern_annual,
            data: yearDataGroubBy(resp.data, southern_annual),
            borderColor: "rgb(201, 40, 12)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            parsing: parsing,
            pointRadius: 1,
          },
          {
            label: global_annual,
            data: yearDataGroubBy(resp.data, global_annual),
            borderColor: "rgb(145, 49, 112)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            parsing: parsing,
            pointRadius: 1,
          },
        ]
      });
    },
    (rej) => {
      console.log(rej)
      setStatusState(test)
    }
    ).catch((err) => {
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
        text: "Visualization 1",
      },
    },
  };

  let view = null
  
  switch(statusState) {
    case loading:
      view = <h1>Loading</h1>
      break;
    case error:
      view = <h1>Error</h1>
      break;
    default:
      view = <Line options={options} data={statusState} />
  }

  //return the line-chart
  return (
    <div style={{ width: "1000px" }}>
      {view}
    </div>
  );
}

//End of V1, continue below