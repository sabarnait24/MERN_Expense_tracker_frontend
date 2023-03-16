import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { chart_Data, getTotal } from "../calculation/calculation";
import { default as api } from "../store/apiSlice";

Chart.register(ArcElement);

function Charts() {
  const { data, isFetching, isSuccess, isError } = api.useGetTransactionQuery();
    //  console.log(api.useGetTransactionQuery());
  let Chartdata;

  if (isFetching) {
    Chartdata = <div>Fetching</div>;
  } else if (isSuccess) {
    // console.log(getTotal(data));
    Chartdata = <Doughnut {...chart_Data(data, getTotal(data))}></Doughnut>;
  } else if (isError) {
    Chartdata = <div>Error</div>;
  }
  return (
    <div className="flex mx-auto">
      <div className="item my-11 mx-11">
        <div className="chartcls my-10 mx-10">
          {Chartdata}
          <h3 className="font-bold totalcls">
            Total
            <span className="text-blue-400 text-4xl block">
              &#x20B9;{getTotal(data)}
            </span>
          </h3>
        </div>
        <div className="flex-col gap-4">
          <Labels></Labels>
        </div>
      </div>
    </div>
  );
}

export default Charts;
