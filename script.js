// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8;
var choice = [];
var character = ["!", "@", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "~", "-", "_", "=", "?", "[", "]", "{", "}"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var confPrompts = usrPrompts();

  if (confPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }

}

function generatePassword() {
  console.log("Generating password");

  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length);
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
    choice = choice.concat(alphaLower);
  }
  if (confirm("Uppercase?")) {
    choice = choice.concat(alphaUpper);
  }
  if (confirm("Special Characters?")) {
    choice = choice.concat(character);
  }
  if (confirm("Numbers?")) {
    choice = choice.concat(number);
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
