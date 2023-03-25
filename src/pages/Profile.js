import React from "react";
import { useLocation } from "react-router-dom";
// import Charts from "../components/Charts";
import Footer from "../components/Footer";
import Forms from "../components/Forms";
import Header from "../components/Header";


function Profile() {
  const { state } = useLocation();
  console.log({ state });
  const username = { state }.state;
  console.log("this is ", username);
  // const [data, setData] = useState(0);
  return (
    <>
      <Header username={username}></Header>
      <div className="bg-slate-50 text-black">
        <Forms></Forms>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Profile;
