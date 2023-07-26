import React, { useEffect, useState } from "react";
import "boxicons";
import {
  deleteTransaction,
  getTransaction,
} from "../apicalls/Transactioncalls";
import Charts from "./Charts";
import { toast } from "react-toastify";

export default function List() {
  const [data, setData] = useState("");

  useEffect(() => {
    getTransaction({ setData });
  }, [data]);

  let Transactions;

  console.log(data);
  const handlerClick = (id) => {
    if (!id) return 0;

    deleteTransaction(id);
    toast.success("Updated successfully");
  };

  if (!data) {
    Transactions = <div>Error</div>;
  } else {
    Transactions = data.map((v, i) => (
      <Transaction key={i} category={v} handler={handlerClick}></Transaction>
    ));
  }

  return (
    <div className="grid md:grid-cols-2">
      <div>
        <Charts data={data}></Charts>
      </div>
      <div className="py-6 gap-3 ">
        <h1 className="py-4 font-bold text-xl flex justify-center items-center">
          History
        </h1>
        {Transactions}
      </div>
    </div>
  );
}

function Transaction({ category, handler }) {
  if (!category) return null;
  return (
    <div className="item flex justify-center bg-gray-50 py-3 rounded-r">
      <button
        className="px-3"
        onClick={() => {
          handler(category._id);
        }}
      >
        <box-icon
          data-id={category._id ?? ""}
          color={category.type === "Savings" ? "#00FF00" : "#FF0000"}
          size="15px"
          name="trash"
        ></box-icon>
      </button>
      <span className="w-4/12 my-2">{category.about ?? ""}</span>
      <span className="my-2">{category.amount ?? ""}</span>
    </div>
  );
}
