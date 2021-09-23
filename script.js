//Psuedocode

//click generate

//alert pops up: "You will answer a series of prompts to determine password criteria."

//Input password length (must be 8-128 characters)
  //function that accepts that number and uses it for password length

//Choose which character types to include (must choose at least one)
  //lower case: okay / cancel -- if yes then add to master array and display next prompt, if no: return, display next prompt
  //upper case: okay / cancel -- if yes then add to master array and display next prompt, if no: return, display next prompt
  //special characters: okay / cancel -- if yes then add to master array and display next prompt, if no: return, display next prompt

//Return character types that were selected
  //alert: you chose...

//Generate password and display
  //master array: passwordOptions[whatever was chosen]
  //for (var i=0; i<100 ?????; i++){
    //var passwordGenerate = passwordOptions [
      //Math.floor(Math.random() * passwordOptions.length)]
      //console.log(passwordGenerate);}
      //****add some sort of for loop that does this as many times as the user decided


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

function writePassword() {
  var wantPassword = prompt("You will be asked a series of questions to determine your password criteria. Do you wish to continue?");
    if (!wantPassword) {
      return;
    } else {passwordPrompts()};
    }

    /////////does  not work//////


function passwordPrompts(){
  wantLength //asks hows long (8-128)
  wantLower // asks if they want lower
  wantUpper // asks if they want upper
  wantChar // asks if they want characters
}
//needs to repeat as many times as the length they set

function wantLength(){
var wantsLength = prompt("How long do you want your password to be? (Must be 8-128 characters long!");
}

function wantLower(){
var wantsLower = prompt("Do you want to include lowercase letters?");
  if (!wantsLower) {
    wantUpper();
} else { //store value
    wantUpper();
}
}

function wantUpper(){
var wantsUpper = prompt("Do you want to include uppercase letters?");
  if (!wantsUpper) {
    wantChar();
} else { //store value
  wantChar();
}
}

function wantChar(){
var wantsChar = prompt("Do you want to include special characters?");}
  if (!wantsChar) {
  "Thanks for your input!";
  //+ generate password function
} else { //store value
  "Thanks for your input!";
  //+ generate password function
}

//COMPUTER GENERATES: 

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", ";"];


//some sort of for loop: for (int i=0; i < user choice?; i++);//

var getLower = lower[
  Math.floor(Math.random() * lower.length)
]

var getUpper = upper[
  Math.floor(Math.random() * upper.length)
]

var getChar = character[
  Math.floor(Math.random() * character.length)
]

//generate password

var decidedLength = +lengthEl.value;
var wantsLowercase = lowerEl.checked;
var wantsUppercase = upperEl.checked;
var wantsCharacters = charEl.checked;

generatePassword(
  
  )