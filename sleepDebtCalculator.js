function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 10;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return 'Do you sleep?';
      break;
                         }
}

function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
}

function getIdealSleepHours() {
  var idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  }
  if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.');
    console.log('You should sleep ' + (actualSleepHours-idealSleepHours) + ' hour(s) less.');
  }
  if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest.');
    console.log('You should sleep ' + (idealSleepHours-actualSleepHours) + ' hour(s) more!');
  }
}

calculateSleepDebt();