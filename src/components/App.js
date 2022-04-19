import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound.js";
import "../assets/css/app.css";

const App = () => {
  const [inputOne, SetInputOne] = useState(null);
  const [inputTwo, SetInputTwo] = useState(null);
  const [inputEval, SetInputEval] = useState(null);

  let valOne = useRef(" ");
  let valTwo = useRef(" ");
  let navigate = useNavigate();

  useEffect(() => {
    checkInput(valOne.current.value, valTwo.current.value);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputOne === null && inputTwo === null) return;
    checkInput(valOne.current.value, valTwo.current.value);
  }

  function checkInput(one, two) {
    let a = String(one.toLowerCase());
    let b = String(two.toLowerCase());

    if (a === b && a !== "" && b !== "") {
      SetInputEval(true);
      navigate("/success", {
        state: { show: true, text: "Equal", icon: "🎉" },
      });
    } else if (a !== b) {
      SetInputEval(false);
      navigate("/failure", {
        state: { show: true, text: "Not Equal", icon: "💤" },
      });
    }
  }
  return (
    <div
      className="app app--container"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "426px",
        height: "100vh",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div className="form form--container">
        {!inputEval ? (
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              <input
                type="text"
                placeholder="Your first entry"
                ref={valOne}
                onChange={(e) => SetInputOne(e.target.value)}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Your second Entry"
                ref={valTwo}
                onChange={(e) => SetInputTwo(e.target.value)}
              ></input>
            </label>
            <button
              type="submit"
              className="btn btn--submit"
              disabled={!inputOne || !inputTwo ? "disabled" : ""}
            >
              {!inputOne || !inputTwo
                ? "Please provide two inputs"
                : "Check Equality"}
            </button>
          </form>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default App;
