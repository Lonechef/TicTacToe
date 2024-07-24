import React from "react";

const Winner = ({ winner }) => {
  return <div>{winner ? `The winner is: ${winner}` : "No winner yet"}</div>;
};

export default Winner;
