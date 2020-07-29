import React, { useState, useEffect } from 'react'

const Game = () => {
  const [buttonValue, setButtonValue] = useState(0)
  const [buttonCount, setButtonCount] = useState(0)
  const [btnArray, setBtnArray] = useState([])
  const [btnClass, setBtnClass] = useState('whiteButtonsStyle')

  const handleChange = (e) => {
    setButtonValue(e.target.value)
  }
  const onClickHandle = () => {
    setButtonCount(buttonValue)
    for (let i = 0; i < buttonValue; i++) {
      btnArray.push(i)
    }
    // changeColor()
    console.log(btnArray)
  }


  const btnClick = (e) => {
    e.target.style = blueButtonsStyle
    alert(e.target.key)
  }

  const changeColor = () => {
    let arrIndex = Math.floor(Math.random() * buttonCount)
    alert(arrIndex)
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
            btnArray.map((i, k) => <button key={i} onClick={btnClick} style={whiteButtonsStyle} >Click Me</button>)
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
