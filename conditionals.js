/*const raining = true;
const cold = false;
if (raining)  {
  console.log('Don\'t forget your umbrella!')
}

if (cold) {
  console.log('Make sure you pick out a scarf!')

}

console.log('Now you\'re ready to go outside!')
*/

/*______________/____________/________________/\________*/

/*
const temperature = 12;

if (temperature <0) {
  console.log('Make sure you pick out a scarf!');

} else if(temperature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine.');
}

console.log('Now you\'re ready to go outside!');
*/

/*-----------/+++++++\_____________________________-*/

/*
const isCitezen = false;
const age = 50;


if (isCitezen && age >18) {
  console.log('You are eligible to vote.');
}

const temperature = -400

if (temperature < -40 || temperature > 40) {
  console.log('Maybe going outside isn\'t such a great idea...');
}

const raining = false;

if (!raining) {
  console.log('Leave your umbrella at home!');
}
*/

/*let choice = 'You should go to '
const whichSchool  = function (age) {
  
  //if the age is below 13 then 'Elementary school
  //if the age is between 13 and 18 (both inclusive) then Secondary school
  //otherwise Lighthouse labs ;P

  if (age < 13)  {
    choice += 'Elementary School!';//This code adds 'Elementary School' to the global 'choice' variable if the 'age' argument is less than 13.
  }else if (age >=13 && age <=18) {
    choice += 'Secondary School!';//This code adds 'Secondary School' to the global 'choice' variable if the 'age' argument is more than or equal to 13 and less than or equal to 18;
  }else {choice += 'Lighthouse Labs!';}//This code adds 'Lighthouse Labs' to the global 'choice' variable if the 'age' argument is over 18.
  return choice;
}*/

/*const whichSchool  = function (age) {
  if (age < 13)  {
    return 'Elementary School';//This code adds 'Elementary School' to the global 'choice' variable if the 'age' argument is less than 13.
  }else if (age >=13 && age <=18) {
    return 'Secondary School';//This code adds 'Secondary School' to the global 'choice' variable if the 'age' argument is more than or equal to 13 and less than or equal to 18;
  }else {
    return 'Lighthouse Labs';//This code adds 'Lighthouse Labs' to the global 'choice' variable if the 'age' argument is over 18.
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
*/

/*
const whichSchool  = function (age) {
  if (age < 13)  {
    return 'Elementary School';//This code adds 'Elementary School' to the global 'choice' variable if the 'age' argument is less than 13.
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School';//This code adds 'Secondary School' to the global 'choice' variable if the 'age' argument is more than or equal to 13 and less than or equal to 18;
  } else {
    return 'Lighthouse Labs';//This code adds 'Lighthouse Labs' to the global 'choice' variable if the 'age' argument is over 18.
  }
}
  
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
*/  


/*___________/\/\/\*/



/*var x = 1;

while (x < 21) { 
    // check divisibility
    
    if (x % 3 === 0 && x % 5 === 0){
      console.log('JuliaJames');
  }else if (x % 5 === 0) {
      console.log('James');
  }else if (x % 3 === 0) {
      console.log('Julia');
  }
  // print Julia, James, or JuliaJames
  // increment x
  x = x + 1;
} */

/*................,,,,,,,................*/

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    
/*
var num = 99;

while (num >= 1) {
    if (num === 2) {
      console.log(num + ' bottles of juice on the wall! '
                  + num + ' bottles of juice! Take one down, pass it around... '
                  +(num-1)+' bottle of juice on the wall!');      
    }else if (num === 1) {
      console.log(num + ' bottle of juice on the wall! '
                  + num + ' bottle of juice! Take one down, pass it around... '
                  +(num-1)+' bottles of juice on the wall!');
    }else {
      console.log(num + ' bottles of juice on the wall! '
                  + num + ' bottles of juice! Take one down, pass it around... '
                  +(num-1)+' bottles of juice on the wall!');
    }
    num--
}
*/

/*__________________/\___________________*/

/*
    -Orbiter transfers from ground to internal power (T-50 seconds)
    -Ground launch sequencer is go for auto sequence start (T-31 seconds)
    -Activate launch pad sound suppression system (T-16 seconds)
    -Activate main engine hydrogen burnoff system (T-10 seconds)
    -Main engine start (T-6 seconds)
    -Solid rocket booster ignition and liftoff! (T-0 seconds)
 */
/*
var tCount = 60;

while (tCount >=0) {
  if (tCount === 50) {
    console.log('Orbiter transfers from ground to internal power');
  }else if (tCount === 31) {
    console.log('Ground launch sequencer is go for auto sequence start');
  }else if (tCount === 16) {
    console.log('Activate launch pad sound suppression system');
  }else if (tCount === 10) {
    console.log('Activate main engine hydrogen burnoff system');
  }else if (tCount === 6) {
    console.log('Main engine start');
  }else if (tCount === 0) {
    console.log('Solid rocket booster ignition and liftoff!');
  }else {
    console.log('T-'+tCount + ' seconds')//otherwise prints jus the countdown message
  } 
  tCount--
  //countdown general
  //countdown events messages
  //countdown liftoff message
}
*/

/*___________________/\/\/\/\/\/\/\/\/\/H\_________________ */

/*
const amount = [61.00, 52.25, 112.99, 5.00];

const total = 0;

for (let i = 0; i< amounts.length; i++) {
  total += amounts[i];
}

console.log('Order total is: ', total);


for (let amount of amounts) {
  total += amount;
}

console.log('Order total is: ', total);
*/

/*_________________________________________________________ */

/*

let haCount = '';

function laugh(num) {
  for (let i = 0; i <= num; i++) {
    if (i === num){
      haCount += '!';
    }else {
      haCount += 'ha';
    }
  }
  return haCount
}

console.log(laugh(5));
*/

/*_______________________________________________________*/

/*
function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);
console.log(isThisWorking(3));//this showes what the function returns vs what was logged to the console only within the function
*/

/*_________________________________________________________ */

/*
-triangle width input
-fn to write each line
-fn is called for same number of times as width input but,
-each line gets smaller by one --> ***?do i need to store 
 the new number in a variable for the loops or not?

*/

/*
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}


function buildTriangle(totalWidth) {
  let triangleStatement = '';

  
  for(let i = 1; i <= totalWidth; i++) {
    triangleStatement += makeLine(i);
  }
  return triangleStatement;
}


console.log(buildTriangle(10));
*/

/*______________________________________________________*/

/*
var laugh = function (laughCount) {
  let laughing = '';
  for (let l = 0; l <= laughCount; l++) {
    if (l === laughCount) {
      laughing += '!';
    }else {
    laughing += 'ha';
    }
  }
  return laughing;
}

console.log(laugh(10));
*/

/*______________________________________________________*/

/*
let cry = function boohoo () {
  return 'boohoo!';
}


cry();
console.log(cry());

*/

/*_____________________________________________________*/

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}


emotions ('happy', function (laughs) {
  for(let l = 0; l < laughs; l++) {
    let laugh = '';
    laugh += 'ha';
  }
})

emotions ('happy', function (laughCount) {
  let laughing = '';
  for (let l = 0; l <= laughCount; l++) {
    if (l === laughCount) {
      laughing += '!';
    }else {
    laughing += 'ha';
    }
  }
  return laughing;
  })