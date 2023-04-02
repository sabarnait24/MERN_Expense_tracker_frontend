import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { chart_Data, getTotal } from "../calculation/calculation";

// import { getTransaction } from "../store/Transactioncalls";

Chart.register(ArcElement);

function Charts() {
  const [data, setData] = useState("")
  const [seed, setSeed] = useState(1);
  const getTransaction=()=>{
    // let data;
      fetch("https://expense-api-7k7d.onrender.com/api/v1/transactions", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "authorization": localStorage.getItem("token"),
          },
          // body: JSON.stringify(data),
        })
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            console.log(result);
            setData(result);
          })
          .catch((err) => {
            console.log(err);
          });
  
  }
  useEffect(() => {
    
    getTransaction();
    setSeed(Math.random());
  
  }, [])
  
  // const data = getTransaction();
  console.log("hi: ",data);
  //  console.log(api.useGetTransactionQuery());
  let Chartdata;

  if (!data) {
    Chartdata = <div>Error</div>;
  } else {
    // console.log(getTotal(data));
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
          <Labels key={seed}></Labels>
        </div>
      </div>
    </div>
  );
}

export default Charts;
