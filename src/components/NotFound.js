import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="form form--container xl">
      <h2 style={{ fontSize: "150px", margin: "1rem auto", color: "#6b2bd6" }}>
        404
      </h2>
      <p style={{ maxWidth: "300px", margin: "0 0 2rem", textAlign: "center" }}>
        Sorry, this page isn't available just yet.
      </p>
      <Link to="/">
        <button type="button" className="btn btn--link">
          <span>&#10229;</span> Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
