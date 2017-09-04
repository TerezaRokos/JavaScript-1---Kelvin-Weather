function isPasswordValid(input) {
 if(hasUppercase(input) === true) {
   console.log('The password has an uppercase letter.');
 } else {
   console.log('Use an uppercase letter.');
 }
  if(hasLowercase(input) === true) {
    console.log('The password has a lowercase letter.');
  } else {
    console.log('Use a lowercase letter.');
  }
  if(isLongEnough(input) === true) {
    console.log('The password is long enough.');
  } else {
    console.log('Add some letters.');
  }
  if(hasSpecialCharacter(input) === true) {
    console.log('The password has a special character.');
  } else {
    console.log('Add some special character.');
  }
}

function hasUppercase(input) {
   for(var i=0; i<input.length; i++) {
     if(input[i] === input[i].toUpperCase()) {
       return true;
     }
   }
 }

function hasLowercase(input) {
  for(var i=0; i<input.length; i++) {
    if(input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}

function isLongEnough(input) {
  if(input.length >= 8) {
    return true;
  }
 }

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i=0; i<input.length; i++) {
    for (var j=0; j<specialCharacters.length; j++) {
      if(input[i] === specialCharacters[j]) {
        return true;
      }
    }
    
  }
}

isPasswordValid('Heslo123*');
