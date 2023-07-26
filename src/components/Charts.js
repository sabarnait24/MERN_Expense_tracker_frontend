import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { chart_Data, getTotal } from "../calculation/calculation";

Chart.register(ArcElement);

function Charts(props) {
  const data = props.data;

  let Chartdata;

  if (!data) {
    Chartdata = <div>Error</div>;
  } else {
    Chartdata = <Doughnut {...chart_Data(data, getTotal(data))}></Doughnut>;
    
  }
  return (
    <div className="flex justify-center">
      <div className="my-6">
        <div className="chartcls my-10 mx-10 ">
          {Chartdata}
          <h3 className="font-bold totalcls flex justify-center items-center my-4">
            <span className="text-blue-400 text-4xl block">
              &#x20B9;{getTotal(data)}
            </span>
          </h3>
        </div>
        <div className="flex-col gap-4">
          <Labels data={data}></Labels>
        </div>
      </div>
    </div>
  );
}

export default Charts;
