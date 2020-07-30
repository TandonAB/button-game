import React, { useState } from "react";
import Button from "./Button";

const Game = () => {
  const [buttonValue, setButtonValue] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);
  const [btnArray, setBtnArray] = useState([]);

  const handleChange = e => {
    setButtonValue(e.target.value);
  };

  const onClickHandle = () => {
    if (btnArray.length > 0) {
      setBtnArray([]);
    }
    setButtonCount(buttonValue);
    // setButtonValue(0);
    for (let i = 0; i < buttonCount; i++) {
      btnArray.push({ color: "white", isDisable: true });
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
            <button onClick={onClickHandle}>Enter</button>
          </div>
        </div>
        <br />

        <div className="row">
          {btnArray.map((i, k) => (
            <Button
              key={k}
              color={i.color}
              isDisable={i.isDisable}
              onClick={changeColorHandle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
