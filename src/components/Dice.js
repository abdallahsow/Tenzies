const Dice = function ({ dice }) {
  return (
    <div key={dice} className="dice-box">
      <p className="dice">{dice}</p>
    </div>
  );
};

export default Dice;
