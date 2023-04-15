// Assignment Code
var generateBtn = document.querySelector("#generate");

let character = ["!", "@", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "~", "-", "_", "=", "?", "[", "]", "{", "}"]
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function generatePassword() {
  console.log("Generating password");






  return "generated password will go here...";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var userChoice = window.prompt("How many characters do you want your password to be?");

  if (!userChoice) {
    return;
  }
}













// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







function generatePassword() {
  // lenght of password and save to variable
  // enter = parseInt(prompt("Choose between 8 and 128 characters"))
  // confirm including special characters
  // confirm including numbers
  // confirm lowercase characters
  // confirm uppercase characters
  // alert if user doesn't pick at least one
  // return "my-password";
}
