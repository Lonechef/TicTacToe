import React, { useState } from "react";
import Tictactoe from "./components/Tictactoe";
import Winner from "./components/Winner";
import Chance from "./components/Chance";

function App() {
  const [currentUser, setCurrentUser] = useState('X');
  const [winner, setWinner] = useState(null);

  return (
    <>
      <Chance currentUser={currentUser} />
      <Tictactoe currentUser={currentUser} setCurrentUser={setCurrentUser} setWinner={setWinner} />
      <Winner winner={winner} />
    </>
  );
}

export default App;
