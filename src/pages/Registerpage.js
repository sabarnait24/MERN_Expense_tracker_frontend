// import React from 'react'
import React from "react";
// import { Footer } from "react-daisyui";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Registerpage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header></Header>
      <div className="w-full min-h-screen  bg-slate-200 flex justify-center items-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="my-2 mx-3 text-black font-light text-lg">
            Register Here
          </h1>
          <div className="flex justify-center items-center">
            <div className="card card-compact flex bg-slate-50 w-96 shadw-xl ">
              <div className="card-body">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs bg-slate-100 my-2 mx-2 text-black"
                  {...register("firstname")}
                />
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs bg-slate-100 my-2 mx-2 text-black"
                  {...register("email")}
                />
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs bg-slate-100 my-2 mx-2 text-black"
                  {...register("password")}
                />
                <input
                  type="text"
                  placeholder="confirm password"
                  className="input input-bordered w-full max-w-xs bg-slate-100 my-2 mx-2 text-black"
                  {...register("cpassword")}
                />
                <div className="card-actions max-w-full flex items-center justify-around pt-10">
                  <a className="link link-primary" href="/">Already Registered ? Login Here</a>

                  <button type="submit" className="btn btn-primary my-2">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Registerpage;