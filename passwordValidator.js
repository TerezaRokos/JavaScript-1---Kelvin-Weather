function hasUppercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }    
  }
}

function hasLowercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}

function isLongEnough(input) {
  for (var i = 0; i < input.length; i++) {
    if (input.length >= 8) {
      return true;
    }
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
     if (input[i] === specialCharacters[j]) {
       return true;
     } 
    }
  }
}

function isPasswordValid(input) {
  if (hasUppercase(input)) {
    console.log('The password has a capital.');
  }
  if (!hasUppercase(input)) {
    console.log('The password needs a capital.');
  }
  if (hasLowercase(input)) {
    console.log('The pasword has a small letter.');
  }
  if (!hasLowercase(input)) {
    console.log('The password needs a small letter.');
  }
  if (isLongEnough(input)) {
    console.log('The password is long enough.');
  }
  if (!isLongEnough(input)) {
    console.log('The password needs more letters.');
  }
  if (hasSpecialCharacter(input)) {
    console.log('The password has a special character.');
  }
  if (!hasSpecialCharacter(input)) {
    console.log('The password needs a special character.');
  }
}

isPasswordValid('validPassword');