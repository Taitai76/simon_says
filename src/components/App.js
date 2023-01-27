import React, { useState } from "react";
import Score from './Score'
import StartButton from "./StartButton";

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
