// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//what does password =? GENERATE = random values
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

var passwordChar = 'abcdefghijklmnopqrxtuvwxyz';
var upCase = 'ABCDEFGHIJKLMNOPQRXTUVWXYZ';
var nums = '1234567890';
var syms = '!@#$%^&*-_.';

//GENERATE PASSWORD FUNCTION
function generatePassword() {
  var promptGreeting = window.alert('Before we can generate your password please choose from the following options.');

  var promptTest1 = function () {
    promptQuestion1 = window.prompt('Choose a length of at least 8 characters and no more than 128 characters.')

    if (promptQuestion1 > 8 && promptQuestion1 < 128) {
      window.alert('You have selecetd a password length of ' + promptQuestion1 + '.');
      window.alert('That a great choice!');
      console.log(promptQuestion1)
    }
    else if (promptQuestion1 > 128) {
      window.alert("That length is too high. Please choose a length less than 128.");
      promptTest1()
    }
    else {
      window.alert("That length is too short. Please choose a length of 8 or greater.");
      promptTest1()
    }
  }

  promptTest1();

  secondCriteria = function () {
    var promptQuestion2 = window.confirm('Would you like your password to include uppercases?');
    if (promptQuestion2) {
      window.alert('Ok great! We will include uppercases.');
      passwordChar = passwordChar + upCase;
      console.log(passwordChar);
    } else {
      window.alert('Ok, no uppercases will be added.');
      console.log(passwordChar);
    }
  }

  secondCriteria();

  thirdCriteria = function () {
    var promptQuestion3 = window.confirm('Would you like your password to include numeric characters?');
    if (promptQuestion3) {
      window.alert('Perfect! Numeric charatcers will be added');
      console.log(promptQuestion3);
      passwordChar = passwordChar + nums;
      console.log(passwordChar);
    } else {
      window.alert('No problem. Numeric characters will not be added.');
      console.log(passwordChar);
    }
  }

  thirdCriteria();

  fourthCriteria = function () {
    var promptQuestion4 = window.confirm('Final question. Would you like your password to inlcude symbols?');
    if (promptQuestion4) {
      window.alert('You got it! We will add symbols to your password.');
      console.log(promptQuestion4);
      passwordChar = passwordChar + syms;
      console.log(passwordChar)
    } else {
      window.alert('Ok, no symbols were chosen.');
      console.log(passwordChar);
    }

    var promptEnding = window.alert('Thats a wrap! We have gathered all we need to create your password.');

    var promptEnding = window.alert('Once you have aquired your password, dont forget to click the refresh button and clear this page');

  }

  fourthCriteria();

  // RANDOM PASSWORD GENERATOR FUNCTION 
  var passwordMax = promptQuestion1;
  var passwordText = '';

  for (i = 1; i <= passwordMax; i++) {
    passwordText = passwordText + passwordChar.charAt(Math.floor(Math.random() * Math.floor(passwordChar.length - 1)));
  }
  return passwordText;
}


