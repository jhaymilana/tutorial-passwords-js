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
