import "./tenzies.css";
import Header from "./components/Header";

const App = function () {
  return (
    <main className="app">
      <div className="container">
        <div className="game">
          <Header />
        </div>
      </div>
    </main>
  );
};

export default App;
