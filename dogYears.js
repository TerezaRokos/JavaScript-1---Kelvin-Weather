let myName = prompt('What is your name?');

//name to lower case
myName = myName.toLowerCase();

//my age interactive
let myAge = prompt('What is your age?');

//dog early years
let earlyYears = 2;
earlyYears *=10.5;

//dog later years
let laterYears = myAge - 2;
//multiplication
laterYears *=4;

//my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//console log
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);