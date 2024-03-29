import React from "react";
import { getLabels } from "../calculation/calculation";

export default function Labels(props) {
  const data = props.data;

  let Percentdata;

  if (!data) {
    Percentdata = <div>Error</div>;
  } else {
    Percentdata = getLabels(data, "type").map((v, i) => (
      <LabelComponent key={i} data={v}></LabelComponent>
    ));
  }

  return <div>{Percentdata}</div>;
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
