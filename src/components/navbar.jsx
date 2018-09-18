import React, { Fragment } from "react";
import logo from "../images/logo.svg";
const CustomNavbar = () => {
  return (
    <Fragment>
      <header>
        <nav className="navbar navbar-dark  navbar-main">
          <a>
            <img src={logo} className="navbar-main__logo" alt="logo" />
          </a>
          <span className="navbar-main__text">Git-Repo Tracker</span>
        </nav>
      </header>
    </Fragment>
  );
};
export default CustomNavbar;
