const rps = (p1, p2) => {
  console.log(p2 !== 'scissors' && p1 !== 'paper');
  if (p1 === p2) {
    return 'Draw!';
  } else {
    if (!(p2 === 'scissors' && p1 === 'paper') && p1 < p2 || (p1 === 'scissors' && p2 === 'paper')) {
      return 'Player 1 won!';
    } else {
      if (p2 < p1 || (p2 === 'scissors' && p1 === 'paper')) {
        return 'Player 2 won';
      }
    }
  }
};

rps('rock', 'scissors');
rps('scissors', 'paper');
rps('paper', 'rock');