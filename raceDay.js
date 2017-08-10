let raceNumber = Math.floor(Math.random()*1000);
const registeredEarly = false;
const age = 20;

 if (registeredEarly === false) {
   raceNumber += 1000;
 }

if (age >= 18 && registeredEarly) {
  console.log('Hi number ' + raceNumber + ', you will race at 9:30.');
} else if (age >= 18 || registeredEarly) {
  console.log('Hi number ' + raceNumber + ', you will race at 11:00.');
} else if (age < 18 && !registeredEarly) {
  console.log('Hi number ' + raceNumber + ', you will race at 12:30.');
} else console.log('See the registration desk.');