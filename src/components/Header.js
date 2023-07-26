import React from "react";
import { Navbar } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header(props) {
  const username = props.username;
  console.log(username);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("token");
    toast.success("Logout Successful");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="flex justify-end items-center bg-slate-300">
      <div className="flex w-full p-3 justify-center items-center font-sans bg-slate-300">
        <Navbar>
          <h1 className="text-2xl my-2 text-black">
            {username ? `Welcome ${username}` : "Your Mini Wallet"}
          </h1>
        </Navbar>
      </div>
      {username ? (
        <button
          type="button"
          className="btn btn-outline btn-primary flex justify-end mx-3"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
