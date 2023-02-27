'use strict';

/*
  How to Generate Strong Random Passwords
*/

// Create a function to generate a random number
function randomNumber() {
  return Math.floor(Math.random() * 999);
}

// Create another function to generate a set of random numbers
function randomLetters(length) {
  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charsLength = chars.length;
  let counter = 0;
  while (counter < length) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
    counter += 1;
  }
  return result;
}


// Create another function to generate a random special character
function randomSpecialCharacters(length) {
  let result = '';
  const chars = '!@#$%^&*';
  const charsLength = chars.length;
  let counter = 0;
  while (counter < length) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
    counter += 1;
  }
  return result;
}

// Finally create the final function to grab all 3 functions and put it together
// This function will call all 3 functions and generate a new strong password
// every time it is called
function generatePassword() {
  console.log(randomLetters(4) + randomSpecialCharacters(1) + randomNumber());
}
generatePassword();