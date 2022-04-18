const howManyHundreds = function (num) {
  const crates = Math.floor(num / 100);
  return crates;
}

console.log(howManyHundreds(1000))
console.log(howManyHundreds(894))
console.log(howManyHundreds(520))
console.log(howManyHundreds(99))
console.log(howManyHundreds(0))