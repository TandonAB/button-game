import React, { useState, useEffect } from 'react'

const Game = () => {
  const [buttonValue, setButtonValue] = useState(0)
  const [buttonCount, setButtonCount] = useState(0)
  const [btnClass, setBtnClass] = useState('')

  const handleChange = (e) => {
    setButtonValue(e.target.value)
  }
  const onClickHandle = () => {
    setButtonCount(buttonValue)
    changeColor()
  }


  const btnClick = (e) => {
    e.target.style = blueButtonsStyle
    alert(e.target.key)
  }

  const changeColor = () => {
    let arrInd = Math.floor(Math.random() * buttonCount)
    alert(arrInd)
  }

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
          {

            Array.from({ length: buttonCount }, (k) => (
              <button key={k} class={btnClass} onClick={btnClick} style={whiteButtonsStyle}>Click Me</button>
            ))
          }
        </div>
      </div>
    </>
  )
}

let whiteButtonsStyle = {
  background: "#eee",
  padding: "10px",
  margin: "10px",
  pointerEvents: 'none',
  cursor: 'not-allowed',

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
  pointerEvents: 'none',
  cursor: 'not-allowed',
};

export default Game
