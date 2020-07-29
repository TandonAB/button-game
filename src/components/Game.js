import React, { useState } from "react";
import Button from "./Button";

const Game = () => {
  const [buttonValue, setButtonValue] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);
  const [btnArray, setBtnArray] = useState([]);
  const [btnClass, setBtnClass] = useState(whiteButtonsStyle);

  const handleChange = e => {
    setButtonValue(e.target.value);
  };

  const onClickHandle = () => {
    // setBtnArray([]);
    setButtonCount(buttonValue);
    for (let i = 0; i < buttonValue; i++) {
      btnArray.push(i);
    }
    console.log(btnArray);
  };

  const changeColorHandle = () => {
    alert("clicked");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <input type="text" onChange={handleChange} />
            <button onClick={() => onClickHandle()}>Enter</button>
          </div>
        </div>
        <br />

        <div className="row">
          {btnArray.map((i, k) => (
            <Button
              key={i}
              color="white"
              isEnable={false}
              onClick={changeColorHandle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

let whiteButtonsStyle = {
  background: "#eee",
  padding: "10px",
  margin: "10px",
  pointerEvents: "none",
  cursor: "not-allowed"
};
let redButtonsStyle = {
  background: "#e00",
  padding: "10px",
  margin: "10px"
};

let blueButtonsStyle = {
  background: "blue",
  padding: "10px",
  margin: "10px",
  pointerEvents: "none",
  cursor: "not-allowed"
};

export default Game;
