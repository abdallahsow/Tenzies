const Dice = function ({ value, handleClick, isHeld, id }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#fff",
  };
  
  return (
    <div className="dice-box" style={styles} onClick={() => handleClick(id)}>
      <p className="dice">{value}</p>
    </div>
  );
};

export default Dice;
