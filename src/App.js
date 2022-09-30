import { useState } from "react";
import Header from "./components/Header";
import Dice from "./components/Dice";
import "./App.css";

const App = function () {
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  };

  const [dices, setDices] = useState(allNewDice());

  return (
    <main className="app">
      <div className="container">
        <div className="game">
          <Header />
          <div className="grid-layout">
            {dices.map((dice, index) => (
              <Dice key={index} dice={dice} />
            ))}
          </div>
          <button className="roll-dice">Roll</button>
        </div>
      </div>
    </main>
  );
};

export default App;
