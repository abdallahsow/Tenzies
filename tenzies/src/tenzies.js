import "./tenzies.css";
import Header from "./components/Header";
import Dice from "./components/Dice";

const App = function () {
  return (
    <main className="app">
      <div className="container">
        <div className="game">
          <Header />
          <Dice />
          <button className="roll-dice">Roll</button>
        </div>
      </div>
    </main>
  );
};

export default App;
