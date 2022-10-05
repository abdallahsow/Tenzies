import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Header from "./components/Header";
import Dice from "./components/Dice";
import "./App.css";

const App = function () {
  const [dices, setDices] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dices.every((die) => die.isHeld);
    const firstValue = dices[0].value;
    const allSame = dices.every((die) => die.value === firstValue);
    if (allHeld && allSame) {
      setTenzies(true);
      console.log("You won");
    }
  }, [dices]);

  function generateRandomDice() {
    return {
      id: nanoid(),
      isHeld: false,
      value: Math.ceil(Math.random() * 6),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateRandomDice());
    }
    return newDice;
  }

  function rollDie() {
    if (!tenzies) {
      setDices(() => {
        return dices.map((die) => (die.isHeld ? die : generateRandomDice()));
      });
    } else {
      setTenzies(false);
      setDices(allNewDice());
    }
  }

  const hold = (id) => {
    setDices(() => {
      return dices.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      );
    });
  };

  const rollText = tenzies ? "New Game" : "Roll";

  return (
    <div>
      {tenzies && <Confetti />}
      <main className="app">
        <div className="container">
          <div className="game">
            <Header />
            <div className="grid-layout">
              {dices.map((die) => (
                <Dice key={die.id} {...die} handleClick={hold} />
              ))}
            </div>
            <button className="roll-dice" onClick={rollDie}>
              {rollText}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
