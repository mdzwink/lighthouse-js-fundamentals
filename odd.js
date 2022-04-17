let isOdd = function (num) {
  if (num % 3 ===0) {
    return true;
  } else if (num % 3 !== 0) {
    return false;
  }
}

console.log('3 is odd: ' + isOdd(3));
console.log('8 is odd: ' + isOdd(8));