import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Constants from "../Constants.json"
import { Line } from "react-chartjs-2";

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

function convertDataToString(data){
  let stringed_data = data.map((a) =>{
    return{
      Year: a["year"].toString(),
      Temperature: a["temp"].toString()
    }
  })
  return[...stringed_data]
}

export default function FirstView() {

    const [v1dataState, setV1DataState] = useState([]);
    const [v1RecoDataState, setV1RecoDataState] = useState([]);
    const [v1MonthlyDataState, setV1monthlyDataState] = useState([]);
    const [chartState, setChartState] = useState("option1");

    const getVis1YearlyData = async () => {
        await axios.get(Constants.API_ADDRESS + "/v1year")
          .then((response) => {
            setV1DataState(response.data);
            const testi =yearDataGroubBy(response.data, "southern_annual")
            console.log("XXXX")
            console.log(testi)
          })
          .catch(error => console.error(`Error: ${error}`));
      }
    
      useEffect(() => {
        getVis1YearlyData();
      }, []);

      const getVis1monthlyData = async () => {
        await axios.get(Constants.API_ADDRESS + "/v1monthly")
          .then((response) => {
            setV1monthlyDataState(response.data);
          })
          .catch(error => console.error(`Error: ${error}`));
      }
    
      useEffect(() => {
        getVis1monthlyData();
      }, []);

      const getVis1RecoData = async () => {
        await axios.get(Constants.API_ADDRESS + "/v1reconstruction")
          .then((response) => {
            setV1RecoDataState(response.data);
            
          })
          .catch(error => console.error(`Error: ${error}`));
      }
    
      useEffect(() => {
        getVis1RecoData();
      }, []);

      const dataYearly = {
        datasets: [
            {
              label: "Northern annual anomalies",
              data: yearDataGroubBy(v1dataState, "northern_annual"),
              borderColor:       'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(54, 162, 235, 1)',
              parsing: {xAxisKey: "Year",
                        yAxisKey: "Temperature"},
                        pointRadius: 0.5,
                        borderWidth: 1,
            },
            {
                label: "Southern annual anomalies",
                data: yearDataGroubBy(v1dataState, "southern_annual"),
                borderColor: "rgb(201, 40, 12)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                parsing: {xAxisKey: "Year",
                          yAxisKey: "Temperature"},
                          pointRadius: 0.5,
                          borderWidth: 1,
              },
              {
                label: "Global annual anomalies",
                data: yearDataGroubBy(v1dataState, "global_annual"),
                borderColor: "rgb(145, 49, 112)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                parsing: {xAxisKey: "Year",
                          yAxisKey: "Temperature"},
                          pointRadius: 0.5,
                          borderWidth: 1,
              },
              
        ]
      };

      const optionsYearly = {
        responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
      };

      const dataMonthly = {
        datasets: [
            {
                label: "Northern monthly anomalies",
                data: monthlyDataGroubBy(v1MonthlyDataState, "northern_monthly"),
                borderColor: 'rgba(111, 208, 172, 0.8)',
                backgroundColor: 'rgba(136, 238, 200, 0.8)',
                parsing: {
                    xAxisKey: "Year",
                    yAxisKey: "Temperature"
                },
                pointRadius: 0.5,
                borderWidth: 1,
            },
            {
                label: "Southern monthly anomalies",
                data: monthlyDataGroubBy(v1MonthlyDataState, "southern_monthly"),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                parsing: {
                    xAxisKey: "Year",
                    yAxisKey: "Temperature"
                },
                pointRadius: 0.5,
                borderWidth: 1,
            },
            {
                label: "Global monthly anomalies",
                data: monthlyDataGroubBy(v1MonthlyDataState, "global_monthly"),
                borderColor: "rgb(145, 49, 112)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                parsing: {
                    xAxisKey: "Year",
                    yAxisKey: "Temperature"
                },
                pointRadius: 0.5,
                borderWidth: 1,
            },
        ]

      };

      const optionsMonthly = {
        
      };

      const dataReco = {
        datasets : [
          {
            label: "Reconstruction",
            data: convertDataToString(v1RecoDataState) ,
            borderColor: "rgb(145, 49, 112)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            parsing: {xAxisKey: "Year",
                      yAxisKey: "Temperature"},
                      pointRadius: 0.5,
                      borderWidth: 1,
          },
        ]
      }

      const optionsReco ={

      }

let view = null;
      switch (chartState) {
        case "option1":
          view = <Line options={optionsYearly} data={dataYearly} />
          break;
        case "option2":
          view = <Line options={optionsMonthly} data={dataMonthly} />
          break;
        case "option3":
          view = <Line options={optionsReco} data ={dataReco} />
      }

      const handleOptionChange = (x) => {
        setChartState(x.target.value);
      }

  return (
    <div>
    <div className="line-chart">
      <div className="chart-texts">
        <b>Visualization 1</b>
        <p>Global historical surface temperature anomalies from January 1850 onwards. Different datasets for yearly and monthly data. </p>
        <p>Select third dataset for Northern Hemisphere 2,000-year temperature reconstruction. </p>
        <b>Select dataset:</b><br />
        <label>
          <input type="radio" value="option1" checked={chartState === "option1"} onChange={handleOptionChange} />
          Show  yearly data
        </label>
        <label>
          <input type="radio" value="option2" checked={chartState === "option2"} onChange={handleOptionChange} />
          Show monthly data
        </label>
        <label>
          <input type="radio" value="option3" checked={chartState === "option3"} onChange={handleOptionChange} />
          Show reconstruction data
        </label>
      </div>
      {view}
      <div className="chart-texts">
        <b>Dataset sources and descriptions:</b><br />
        <a href='https://www.metoffice.gov.uk/hadobs/hadcrut5/'>Temperature anomalies datasets and description</a><br />
        <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">2000 year temperature reconstruction description </a><br />
        <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">2000 year temperature reconstruction dataset </a><br />
      </div>
    </div>
  </div>

    );
  }
