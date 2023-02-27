## How To Create A Function to Generate Strong Random Passwords Using JavaScript

To create a password generator you will need few functions:
  1. Set of Random Numbers
  2. Set of Random Characters
  2. A Random Special Character
  4. Final Strong Password Generator

Using Math.floor and Math.random create a function that will generate the set
of random numbers.
``` javascript
// Create a function to generate a random number
function randomNumber() {
  return Math.floor(Math.random() * 999);
}
```

To create the second function use a while loop to keep generating random letters
to the desired length of set random letters.
``` javascript
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
```

For the third function reuse the second function and change the characters into
a set of random special characters.
``` javascript
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
```

Lastly create the generator function that will call all three previous functions
together and generate a new strong random password every time it is called.
``` javascript
// Finally create the final function to grab all 3 functions and put it together
// This function will call all 3 functions and generate a new strong password
// every time it is called
function generatePassword() {
  console.log(randomLetters(4) + randomSpecialCharacters(1) + randomNumber());
}
generatePassword();
```

To see full JavaScript file: assets/index.js