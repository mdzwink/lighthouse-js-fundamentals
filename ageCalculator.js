//--age calculator--
//-array of arrays that hold values for name, year born, and 
// current year
//-function that uses array indecies to calculate age of each person
//-fn returns string that says each name and their age
//-log it to console to verify with examples
 
//const profiles = [["Ferdinand", 1988, 2015], ["Miranda", 1983, 2015]]

/*const ageCalculator = function (profiles) {
  let age;
  let profileName;
  let proAgeString = (profileName + ' is ' + age + ' years old.');
  for (let profile of profiles) {
    age = profile[2] - profile[1];
    profileName = profile[0];
    //console.log(age);
    //console.log(profileName);
  }
  return proAgeString;
  
}*/
 
const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let proAgeString = (name + ' is ' + age + ' years old.');
  return proAgeString;
}



console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));