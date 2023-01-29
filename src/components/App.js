import React, { useState } from "react";
import Score from './Score'
import Colors from "./Colors";
import '../App.css'

function App() {
  const boardColors = ['red', 'green', 'blue','yellow']
  const[gameOn, setGameOn]=useState(false)

  function handleGameOn(){
    if (gameOn===false){
      setGameOn(true);
    }
    console.log(gameOn)
  }
 
  return (
    <div className="App">
      {<button onClick={handleGameOn} className="start">Start</button>}
      <Score />
      <div className="gameBoard">
        {
          boardColors.map((c)=>(<Colors color={c}/>))
        }
      </div>
    </div>
  );
}

export default App;
