import React from "react";
import "./App.css";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";
const App = () => {
  return (
    <div className="App">
      {/* Full-width card */}
      <div className="revenueCard LineContainer">
        <Line
          data={{
            labels: revenueData.map((rdata) => rdata.label), // Correct placement of labels
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((rdata) => rdata.revenue),
              },
              {
                label: "Cost",
                data: revenueData.map((rdata) => rdata.cost),
              },
            ],
          }}
        />
      </div>

      {/* Row container for Chart 2 and Chart 3 */}
      <div className="cardContainer">
        <div className="dataCard barContainer">
          <Bar
            //data prop takes in objects first fieldd in the object is lables
            data={{
              labels: sourceData.map((sdata) => sdata.label), //x components
              datasets: [
                //datasets is the array of objects each object consists of label and data //lebel is whatever value we are measuring and data is the y components
                {
                  label: "Count",
                  data: sourceData.map((sdata) => sdata.value),
                  backgroundColor: [
                    "rgba(223, 154, 86, 0.66)",
                    "rgba(117, 86, 156, 0.75)",
                    "rgba(211, 84, 84, 0.8)",
                  ],
                  borderRadius: 15,
                },

                // {
                //   label:"Loss",
                //   data:[90,80,20]
                // }
              ],
            }}
          />
        </div>

        <div className="dataCard doughnutContainer">
          <Doughnut
            //data prop takes in objects first fieldd in the object is lables
            data={{
              labels: sourceData.map((sdata) => sdata.label), //x components
              datasets: [
                //datasets is the array of objects each object consists of label and data //lebel is whatever value we are measuring and data is the y components
                {
                  label: "Count",
                  data: sourceData.map((sdata) => sdata.value),
                  backgroundColor: [
                    "rgba(223, 154, 86, 0.66)",
                    "rgba(117, 86, 156, 0.75)",
                    "rgba(211, 84, 84, 0.8)",
                  ],
                },
                // {
                //   label:"Loss",
                //   data:[90,80,20]
                // }
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
