// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElementById("generate").addEventListener("click", generatePassword);

// Create arrays for selection of character types in password
function generatePassword () {
  let initGen = prompt ("How many characters will your password contain?");
  const passLength = 1-100;

  let upperCase = confirm ("Will your password contain uppercase letters?");
  const upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let lowerCase = confirm ("Will your password contain lowercase letters?");
  const lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let number = confirm ("Will your password contain numbers?");
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  let specChar = confirm ("Will your password contain special characters?");
  const specs = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "?", ",", ".", ";", ":", "/", "<", ">", "+", "-", "=", "_", "`", "~", "|"]

  if (upperCase === true) {
    Math.floor(Math.random() * upCase.length);
  }
}

