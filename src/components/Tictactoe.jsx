import React, { useState } from "react";

const Tictactoe = ({ currentUser, setCurrentUser, setWinner }) => {
  const [matrix, setMatrix] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [isWinnerFound, setIsWinnerFound] = useState(false);

  const findWinner = (mat, user) => {
    for (let i = 0; i < 3; i++) {
      if (mat[i][0] === user && mat[i][1] === user && mat[i][2] === user) return user;
      if (mat[0][i] === user && mat[1][i] === user && mat[2][i] === user) return user;
    }
    if (mat[0][0] === user && mat[1][1] === user && mat[2][2] === user) return user;
    if (mat[0][2] === user && mat[1][1] === user && mat[2][0] === user) return user;
    return null;
  };

  const onCellClick = (row, col) => {
    let matrixCopy = matrix.map((r) => r.slice());
    if (matrixCopy[row][col] === "" && !isWinnerFound) {
      let curUser = currentUser;
      matrixCopy[row][col] = curUser;
      setMatrix(matrixCopy);
      const winner = findWinner(matrixCopy, curUser);
      if (winner) {
        setIsWinnerFound(true);
        setWinner(winner);
      } else {
        setCurrentUser(curUser === 'X' ? 'O' : 'X');
      }
    }
  };

  return (
    <table>
      <tbody>
        <tr>
          <td onClick={() => onCellClick(0, 0)}>{matrix[0][0]}</td>
          <td onClick={() => onCellClick(0, 1)}>{matrix[0][1]}</td>
          <td onClick={() => onCellClick(0, 2)}>{matrix[0][2]}</td>
        </tr>
        <tr>
          <td onClick={() => onCellClick(1, 0)}>{matrix[1][0]}</td>
          <td onClick={() => onCellClick(1, 1)}>{matrix[1][1]}</td>
          <td onClick={() => onCellClick(1, 2)}>{matrix[1][2]}</td>
        </tr>
        <tr>
          <td onClick={() => onCellClick(2, 0)}>{matrix[2][0]}</td>
          <td onClick={() => onCellClick(2, 1)}>{matrix[2][1]}</td>
          <td onClick={() => onCellClick(2, 2)}>{matrix[2][2]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tictactoe;
