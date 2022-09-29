const Dice = function () {
  const dices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const renderedDices = dices.map((dice) => (
    <div key={dice} className="dice-box">
      <p className="dice">{dice}</p>
    </div>
  ));
  return <div className="grid-layout">{renderedDices}</div>;
};

export default Dice;
