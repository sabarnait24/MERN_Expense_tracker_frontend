import React from "react";
import { getLabels } from "../calculation/calculation";
import { default as api } from "../store/apiSlice";


export default function Labels() {
  const { data, isFetching, isSuccess, isError } = api.useGetTransactionQuery();
  let Percentdata;

  if (isFetching) {
    Percentdata = <div>Fetching</div>;
  } else if (isSuccess) {
    // console.log(getLabels(data, "type"));
    Percentdata = getLabels(data, "type").map((v, i) => (
      <LabelComponent key={i} data={v}></LabelComponent>
    ));
  } else if (isError) {
    Percentdata = <div>Error</div>;
  }

  return <>{Percentdata}</>;
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className=" flex justify-between">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded py-3"></div>
        <h3 className="text-md py-3">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{Math.round(data.percent)}%</h3>
    </div>
  );
}
