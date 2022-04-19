import React from "react";
import { Link } from "react-router-dom";

const EvalItem = ({ msg, image }) => {
  return (
    <div className="form form--container">
      <p style={{ fontSize: "24px", lineHeight: "29px" }}>
        {image}
        {msg}!
      </p>
      <Link to="/">
        <button type="button" className="btn btn--link">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default EvalItem;
