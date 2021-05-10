// Assignment Code
var generateBtn = document.querySelector("#generate");

const upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specs = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "?", ",", ".", ";", ":", "/", "<", ">", "+", "-", "=", "_", "`", "~", "|"]



function userchoice () {
  const passlength = prompt ("How many characters will your password contain (8-100)?");

  const upperCase = confirm ("Will your password contain uppercase letters?");

  const lowerCase = confirm ("Will your password contain lowercase letters?");

  const number = confirm ("Will your password contain numbers?");

  const specChar = confirm ("Will your password contain special characters?");


  const input = {
    passlength: passlength,
    upperCase: upperCase,
    lowerCase: lowerCase,
    number: number,
    specChar: specChar,
  };

  return input;
}

function randomchars(array) {
  const listRandom = Math.floor(Math.random() * array.length);
  const randomChar = array[listRandom];

  return randomChar;
}

function generatePassword() {
  
  let userInput = userchoice();
  
  let finalPass = [];
  
  let allChars = [];
  
  let userChars = [];
 
  if (userInput.upperCase === true) {
   allChars = allChars.concat(upCase);
    userChars.push(randomchars(upCase));
  }
  
  if (userInput.lowerCase === true) {
   allChars = allChars.concat(lowCase);
    userChars.push(randomchars(lowCase));
  }
 
  if (userInput.number === true) {
   allChars = allChars.concat(nums);
    userChars.push(randomchars(nums));
  }
  if (userInput.specChar === true) {
   allChars = allChars.concat(specs);
    userChars.push(randomchars(specs));
  }
 
  for (let i = 0; i < userInput.passlength; i++) {
    const allChars = randomchars(userChars);
    finalPass.push(allChars);
  }
  
  for (let j = 0; j < userChars.length; j++) {
    finalPass[j] = randomchars(userChars);
  }
 
  return finalPass.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);