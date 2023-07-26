import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Forms from "../components/Forms";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";

function Profile() {
  const location = useLocation();
  const username = location.state;
  return (
    <>
      <Header username={username}></Header>
      <>
        <div className="flex justify-end">
          <ToastContainer />
        </div>
        <div className="bg-slate-50 text-black">
          <Forms></Forms>
        </div>
        <Footer></Footer>
      </>
    </>
  );
}

export default Profile;
