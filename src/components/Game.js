import React, { useState, useEffect } from "react";
import Button from "./Button";

const Game = () => {
  const [buttonValue, setButtonValue] = useState("");
  const [btnArray, setBtnArray] = useState([]);

  const handleChange = e => {
    setButtonValue(e.target.value);
  };

  const onEnterHandle = () => {
    const tmpArray = [];
    for (let i = 0; i < buttonValue; i++) {
      tmpArray.push({ color: "red", isDisable: false, index: i });
    }
    setBtnArray(tmpArray);
  };

  const changeColorHandle = (btnIndex) => {
    let newBtnArray = btnArray.map(btn => {
      if (btn.index === btnIndex) {
        btn["color"] = "blue";
        btn["isDisable"] = true;
      } else {
        return btn;
      }
      return btn;
    });
    setBtnArray(newBtnArray); // set new array with modified colors
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <input type="text" value={buttonValue} onChange={handleChange} />
            <button onClick={onEnterHandle}>Enter</button>
          </div>
        </div>
        <br />

        <div className="row">
          {btnArray.map((i, k) => (
            <Button
              key={k}
              color={i.color}
              isDisable={i.isDisable}
              onClick={() => changeColorHandle(i.index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
