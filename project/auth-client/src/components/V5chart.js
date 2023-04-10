import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import Constants from "../Constants.json"

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

export default function FirstView() {
  const loading = "loading"
  const error = "error"
  const done = "done"

  const [statusState, setStatusState] = useState(loading);

  if (statusState === loading) {
    axios.get(Constants.API_ADDRESS + "/v5data")
      .then((resp) => {
        console.log(resp)
        setStatusState({
          labels: findSector(resp.data, "main"),
          datasets: [
            {
              label: 'Percentage',
              data: findPercent(resp.data, "main"),
              borderWidth: 1,
            },
          ],
        });
      },
        (rej) => {
          console.log(rej)
          setStatusState(test)
        }
      ).catch((err) => {
        console.log(err)
        setStatusState(error)
      }
      )
  }

  let view = null

  switch (statusState) {
    case loading:
      view = <h1>Loading</h1>
      break;
    case error:
      view = <h1>Error</h1>
      break;
    default:
      view = <Doughnut data={statusState} />
  }

  

  return (
      <div style={{ width: "500px" }}>
        <h1>Visualization 5:</h1>
        {view}
      </div>
  );


}
