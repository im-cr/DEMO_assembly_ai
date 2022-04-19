import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/i/assemblyai_logo.svg";

const Header = () => {
  return (
    <div className="header header--global" style={{ paddingTop: "40px" }}>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default Header;
