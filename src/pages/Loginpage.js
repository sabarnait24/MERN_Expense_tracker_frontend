// import React from 'react'
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Loginpage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const postLogin = (data) => {
    fetch("https://expense-api-7k7d.onrender.com/api/login", {
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
        const username = result.existuser.firstname;
        console.log(username);
        // console.log(result.existuser.firstname);
        localStorage.setItem("token", "Bearer " + result.token);
        navigate("/profile", {
          state: username,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    postLogin(data);
  };

  return (
    <>
      {/* <div> */}
      <Header></Header>
      {/* </div> */}
      <div className="w-full min-h-screen  bg-slate-200 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="my-5 mx-3 text-black font-light text-lg">
            Login Here
          </h1>
          <div>
            <div className="card card-compact flex bg-slate-50 w-96 shadw-xl ">
              <div className="card-body">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs bg-slate-50 my-2 mx-2 text-black"
                  {...register("email")}
                />
                <div className="">
                  <input
                    type="password"
                    className="input input-bordered w-full max-w-xs bg-slate-100 my-2 mx-2 text-black"
                    placeholder="Password"
                    {...register("password")}
                  />
                </div>

                <div className="card-actions max-w-full flex items-center justify-around pt-10">
                  <a className="link link-primary" href="/register">
                    New User ? Register Here
                  </a>
                  <button type="submit" className="btn btn-primary my-2">
                    Submit
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

export default Loginpage;
