const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];



function finalPosition(moves) {
  const location = [0, 0]

  for(const move of moves) {

    if (move === 'north') {
      location[1] += 1;
    } else if (move === 'east') {
      location[0] += 1;
    } else if (move === 'south') {
      location[1] -= 1;
    } else if (move === 'west') {
      location[0] -= 1;
    }
  }
  return location;
}



console.log(finalPosition(moves));