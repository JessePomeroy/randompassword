// Assignment Code
let generateBtn = document.querySelector("#generate");

let characterLength = 8;
let choice = [];
let character = ["!", "@", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "~", "-", "_", "=", "?", "[", "]", "{", "}"]
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let confPrompts = usrPrompts();
  let passwordText = document.querySelector("#password");

  if (confPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
  console.log("Generating password");

  var password = "";
  for (var i = 0; i < characterLength; i++) {
    let randomCharacter = Math.floor(Math.random() * choice.length); // found the random integer method on MDN at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    password = password + choice[randomCharacter];
  }
  return password;
}

function usrPrompts() {
  choice = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be?: 8-128"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Must be between 8-128");
    return false;
  }

  if (confirm("Lowercase?")) {
    choice = choice.concat(alphaLower); // confirm alert message prompts user if they want lowercase letters. on clicking confirm it concatenates a random lowercase letter to the choice.
  }
  if (confirm("Uppercase?")) {
    choice = choice.concat(alphaUpper); // confirm alert message prompts user if they want uppercase letters. on clicking confirm it concatenates a random uppercase letter to the choice.
  }
  if (confirm("Special Characters?")) {
    choice = choice.concat(character); // confirm alert message prompts user if they want special characters. on clicking confirm it concatenates a random character to the choice.
  }
  if (confirm("Numbers?")) {
    choice = choice.concat(number); // confirm alert message prompts user if they want numbers. on clicking confrim it concatenates a random number to the choice.
  }
  return true;
}

  // length of password and save to variable
  // enter = parseInt(prompt("Choose between 8 and 128 characters"))
  // confirm including special characters
  // confirm including numbers
  // confirm lowercase characters
  // confirm uppercase characters
  // alert if user doesn't pick at least one
  // return "my-password";

