import React from "react";
import logo from "../images/logo.svg";
const CustomNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark  navbar-main">
        <a>
          <img src={logo} className="navbar-main__logo" alt="logo" />
        </a>
        <span class="navbar-main__text">Git-Repo Tracker</span>
      </nav>
    </div>
  );
};
export default CustomNavbar;
