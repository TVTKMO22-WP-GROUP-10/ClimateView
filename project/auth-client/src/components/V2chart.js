import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement, CategoryScale,
  LinearScale, PointElement,
} from 'chart.js';
import 'chartjs-adapter-luxon';
import React, { useState } from "react";
import axios from 'axios';
import Constants from "../Constants.json";
import { DateTime } from 'luxon';

ChartJS.register(
  LineElement, CategoryScale,
  LinearScale, PointElement
);

const req1 = axios.get(Constants.API_ADDRESS + "/v2icecore1");
const req2 = axios.get(Constants.API_ADDRESS + "/v2icecore2");
const req3 = axios.get(Constants.API_ADDRESS + "/v2icecore3");
const reqY = axios.get(Constants.API_ADDRESS + "/v2maunaloaAnnual");
const reqM = axios.get(Constants.API_ADDRESS + "/v2maunaloaMonthly");

const sortedYears = [];

function parsingYears(arr){
  arr.forEach(data => {
    const year = data.year;
    if (!sortedYears.includes(year)) {
      sortedYears.push(year);
    }
  })
}


export default function V2chart() {

  const loading = "loading";
  const error = "error";
  const [statusState, setStatusState] = useState(loading);

  if (statusState === loading) {
    axios.all([req1, req2, req3, reqY, reqM]).then(axios.spread((...responses) => {
      console.log(responses[0].data);


      const icecore1 = responses[0].data;
      const icecore2 = responses[1].data;
      const icecore3 = responses[2].data;
      const maunaloaY = responses[3].data;
      const maunaloaM = responses[4].data;

      parsingYears(icecore1);
      parsingYears(icecore2);
      parsingYears(icecore3);
      parsingYears(maunaloaY);
      parsingYears(maunaloaM);

      const labels = sortedYears.sort();

      setStatusState({
        //labels,
        datasets: [
          {
            label: "Maunaloa Annual",
            data: maunaloaY.map(data => {
              return {
                year: DateTime.fromObject({year: data.year}).toISODate(),
                co2ppm: data.co2ppm
              };
            }),
            parsing: {
              xAxisKey: "year",
              yAxisKey: "co2ppm"
            },
            pointRadius: 1,
            xAxisID: "year"
          },
          {
            label: "Maunaloa Monthly",
            data: maunaloaM.map(data => {
              return {
                year: DateTime.fromObject({year: data.year,month: data.month}).toISODate(),
                co2ppm: data.co2ppm
              };
            }),
            parsing: {
              xAxisKey: "year",
              yAxisKey: "co2ppm"
            },
            pointRadius: 1,
            xAxisID: "year"
          },
          {
            label: "icecore1",
            data: icecore1.map(data => {
              return {
                year: DateTime.fromObject({year: data.year}).toISODate(),
                co2ppm: data.co2ppm
              };
            })
            ,
            parsing: {
              xAxisKey: "year",
              yAxisKey: "co2ppm"
            },
            pointRadius: 1,
            xAxisID: "year"
          },
          {
            label: "icecore2",
            data: icecore2.map(data => {
              return {
                year: DateTime.fromObject({year: data.year}).toISODate(),
                co2ppm: data.co2ppm
              };
            })
            ,
            parsing: {
              xAxisKey: "year",
              yAxisKey: "co2ppm"
            },
            pointRadius: 1,
            xAxisID: "year"
          },
          {
            label: "icecore3",
            data: icecore3.map(data => {
              return {
                year: DateTime.fromObject({year: data.year}).toISODate(),
                co2ppm: data.co2ppm
              };
            })
            ,
            parsing: {
              xAxisKey: "year",
              yAxisKey: "co2ppm"
            },
            pointRadius: 1,
            xAxisID: "year"
          }
        ]
      });
    })).catch((err) => {
      console.log(err)
      setStatusState(error)
    });
  }
  const options = {
    scales: {
      year: {
        type: "time",
        position: "bottom",
        time:{
          unit: "year"
        },
        ticks: {
          stepSize: 1.0,
        }
      }
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Visualization 2",
      }
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
      <div>
        <p>Antarctic ice core records of atmospheric C02 levels combined with atmospheric C02 measurement from Mauna Loa since 1958</p><br/>
        <b>Dataset sources and descriptions:</b><br/>
        <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html'>Antarctic Ice Core records Description</a><br/>
        <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">Antarctic Ice Core records Datasets </a><br/>
        <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>Mauna Loa Atmospheric CO2 readings Description</a><br/>
        <a href='https://gml.noaa.gov/ccgg/trends/data.html'>Mauna Loa Atmospheric CO2 readings datasets</a><br/>
      </div>
    </div>
  );
}
