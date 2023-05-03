import React, { useState, useEffect, useRef } from 'react';
import { Doughnut, getElementsAtEvent } from 'react-chartjs-2';
import axios from 'axios';
import Constants from "../Constants.json"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

function findPercent(data, identifier) {
  const result = [];
  data.forEach(obj => {
    if (obj.identifier === identifier) {
      const { percent } = obj;
      result.push(percent);
    }
  });
  return result;
}

function findSector(data, identifier) {
  const result = [];
  data.forEach(obj => {
    if (obj.identifier === identifier) {
      const { sector } = obj;
      result.push(sector);
    }
  });
  return result;
}

export default function TestV5Chart() {

  const [chartState, setChartState] = useState("");
  const [visDataState, setVisDataState] = useState([]);

  const getVis5Data = async () => {
    await axios.get(Constants.API_ADDRESS + "/v5data")
      .then((response) => {
        setVisDataState(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getVis5Data();
  }, []);

  const data1 = {
    labels: findSector(visDataState, "main"),
    datasets: [
      {
        label: 'Percent of emissions',
        data: findPercent(visDataState, "main"),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataAgri = {
    labels: findSector(visDataState, "agri"),
    datasets: [
      {
        label: 'Percent of emissions',
        data: findPercent(visDataState, "agri"),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        borderWidth: 1,
      },
    ],
  };

  const dataEnergy = {
    labels: findSector(visDataState, "energy"),
    datasets: [
      {
        label: 'Percent of emissions',
        data: findPercent(visDataState, "energy"),
        borderWidth: 1,
      },
    ],
  };

  const dataIndustrial = {
    labels: findSector(visDataState, "industrial"),
    datasets: [
      {
        label: 'Percent of emissions',
        data: findPercent(visDataState, "industrial"),
        borderWidth: 1,
      },
    ],
  };

  const dataWaste = {
    labels: findSector(visDataState, "waste"),
    datasets: [
      {
        label: 'Percent of emissions',
        data: findPercent(visDataState, "waste"),
        borderWidth: 1,
      },
    ],
  };

  const options1 = {
    plugins: {
      title: {
        align: "center",
        
      }
    }
  };

  const optionsAgri = {
    plugins: {
      title: {
        align: "center",
        display: true,
        text:
          "Emissions from agriculture sector:",

      }
    }
  };

  const optionsEnergy = {
    plugins: {
      title: {
        align: "center",
        display: true,
        text:
          "Emissions from energy sector:",

      }
    }
  };

  const optionsIndustrial = {
    plugins: {
      title: {
        align: "center",
        display: true,
        text:
          "Emissions from industrial processes:",
      }
    }
  };

  const optionsWaste = {
    plugins: {
      title: {
        align: "center",
        display: true,
        text:
          "Emissions from waste management sector:",

      }
    }
  };

  const chartRef = useRef();

  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      const datasetIndexNum = getElementsAtEvent(chartRef.current, event)[0].datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;

      console.log(`Dataset : ${datasetIndexNum} and Data: ${dataPoint}`);

      if (getElementsAtEvent(chartRef.current, event)[0].index === 0) {
        setChartState(0);
      } else if (getElementsAtEvent(chartRef.current, event)[0].index === 1) {
        setChartState(1);
      } else if (getElementsAtEvent(chartRef.current, event)[0].index === 2) {
        setChartState(2);
      } else if (getElementsAtEvent(chartRef.current, event)[0].index === 3) {
        setChartState(3);
      }
    }

  }

  let view = null

  switch (chartState) {
    case 0:
      view = <Doughnut options={optionsAgri} data={dataAgri} />
      break;
    case 1:
      view = <Doughnut options={optionsEnergy} data={dataEnergy} />
      break;
    case 2:
      view = <Doughnut options={optionsIndustrial} data={dataIndustrial} />
      break;
    case 3:
      view = <Doughnut options={optionsWaste} data={dataWaste} />
      break;
    //default:
  }

  return (
    <div>
    <div style={{ borderTop: "2px solid #000 ", margin: "50px 100px" }}></div>
    <div className="doughnut-chart">
      <div className="chart-texts">
        <b>Visualization 5</b>
        <p>Annual global CO2 emissions by sectors. Click on a sector to open a detailed subsection:</p>
      </div>
      <Doughnut data={data1} options={options1}
        onClick={onClick}
        ref={chartRef} />
      {view}
      <div className="chart-texts">
        <b>Dataset sources and descriptions:</b><br />
        <a href='https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector'>CO2 emissions by sectors description</a><br />
        <a href='https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx'>CO2 emissions by sectors dataset</a>
      </div>
    </div>
  </div>

  )


}
