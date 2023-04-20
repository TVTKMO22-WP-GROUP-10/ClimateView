import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement, CategoryScale,
  LinearScale, PointElement
} from 'chart.js';
import React, { useState } from "react";
import axios from 'axios';
import Constants from "../Constants.json"

ChartJS.register(
  LineElement, CategoryScale,
  LinearScale, PointElement
);


const req1 = axios.get(Constants.API_ADDRESS + "/v2icecore1");
const req2 = axios.get(Constants.API_ADDRESS + "/v2icecore2");
const req3 = axios.get(Constants.API_ADDRESS + "/v2icecore3");
const reqY = axios.get(Constants.API_ADDRESS + "/v2maunaloaAnnual");
const reqM = axios.get(Constants.API_ADDRESS + "/v2maunaloaMonthly");


export default function V2chart() {

  const loading = "loading";
  const error = "error";
  const [statusState, setStatusState] = useState(loading);

  if (statusState === loading) {
    axios.all([req1, req2, req3, reqY, reqM]).then(axios.spread((...responses) => {
      console.log(responses[0].data);
      //      console.log(responses[1].data);
      //      console.log(responses[2].data);
      //      console.log(responses[3].data);
      //      console.log(responses[4].data);

      const icecore1 = responses[0].data;
      //const icecore2 = responses[1].data;
      //const icecore3 = responses[2].data;

      setStatusState({
        labels: icecore1.map((data) => data.year),
        datasets: [
          {
            label: "icecore1",
            data: icecore1.map(data => {
              return {
                year: data.year,
                co2ppm: data.co2ppm
              };
            })
            ,
            parsing: {
              xAxisKey: "year",
              yAxisKey: "co2ppm"
            },
            pointRadius: 1,

          }
        ]
      });
    })).catch((err) => {
      console.log(err)
      setStatusState(error)
    }); 
  }
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Visualization 2",
      },
    }
  }
  
  var showStatus;
    switch (statusState) {
      case loading:
        showStatus = <h1>Loading</h1>
        break;
      case error:
        showStatus = <h1>Error</h1>
        break;
      default:
        showStatus = <Line data={statusState} options={options} />

    }
    return (
      <div>
        {showStatus}
      </div>
    );
}
