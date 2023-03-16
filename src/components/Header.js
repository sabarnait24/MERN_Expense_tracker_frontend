import React from "react";
import { Navbar } from "react-daisyui";
// import { twMerge } from 'tailwind-merge'

function Header() {
  return (
    <div className="flex w-full component-preview p-3 items-center justify-center gap-2 font-sans bg-slate-300">
      <Navbar>
        <h1 className="text-2xl my-2 text-black">Your Mini Wallet</h1>
      </Navbar>
    </div>
  );
}

export default Header;
