import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/i/assemblyai_logo.svg";

const Header = () => {
  return (
    <div className="header header--global" style={{ paddingTop: "40px" }}>
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
};

export default Header;
