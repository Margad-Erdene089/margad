// pages/index.js
import React from "react";
import Mainpage from "../components/mainpage";
import Menu from "../components/Menu";
import "tailwindcss/tailwind.css";

const index = () => {
  return (
    <div>
      <Mainpage />
      <Menu />
    </div>
  );
};

export default index;
