import React, { useState } from "react";
import Score from './Score'
import StartButton from "./StartButton";
import Colors from "./Colors";

function App() {
  return (
    <div className="App">
      <Colors />
      <StartButton />
      <Score />
    </div>
  );
}

export default App;
