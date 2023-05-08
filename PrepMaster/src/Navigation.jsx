import { useEffect, useState } from "react";
import Logo from "./assets/logo.svg";
export default function Navigation() {
  return (
    <div className=" mx-10 mt-14 flex flex-row justify-between self-center  ">
      <img src={Logo} alt="logo" className="left" />
      <div className="flex felx-row justify-between gap-6 self-center">
        <div>HOME</div>
        <div>SERVICES</div>
        <div>PRICING</div>
        <div>CONTACT</div>
      </div>
      <div className="flex felx-row gap-10 justify-between items-center">
        <div>Sign in</div>
        <button className="button">Try for free</button>
      </div>
    </div>
  );
}
