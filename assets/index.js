'use strict';

/*
  How to Generate Strong Random Passwords
*/

function randomNumber() {
  return Math.floor(Math.random() * 999);
}

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

function generatePassword() {
  console.log(randomLetters(4) + randomSpecialCharacters(1) + randomNumber());
}
generatePassword();