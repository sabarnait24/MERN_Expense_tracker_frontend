import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addTransaction } from "../apicalls/Transactioncalls";

import History from "./History";

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [seed, setSeed] = useState(1);

  const onSubmit = async (data) => {
    // console.log(data);
    if (!data) return {};
    addTransaction(data);
    setSeed(Math.random());
    // resetField("type");
    resetField("amount");
    resetField("about");
  };

  return (
    <div className="">
      <div className="form max-w-sm mx-auto w-96 py-11">
        <h1 className="font-bold pb-4 text-xl py-4 flex justify-center">Transaction</h1>

        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4 ">
            <select
              className="form-input bg-white text-black"
              {...register("type")}
            >
              <option value="Savings">Savings</option>
              <option value="Expense">Expense</option>
            </select>
            <div>
              <input
                type="number"
                {...register("amount")}
                placeholder="Amount"
                className="form-input bg-white text-black"
              ></input>
            </div>
            <div>
              <input
                type="text"
                {...register("about")}
                placeholder="About"
                className="form-input"
              />
            </div>
            <div className="submit-btn">
              <button className="border py-2 bg-stone-800 text-slate-50 w-full">
                Make Transaction
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mx-10 my-4">
        <History key={seed}></History>
      </div>
    </div>
  );
}
