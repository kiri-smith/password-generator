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

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", ";"];
var numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// We need a function to handle the prompts
function passwordPrompts() {
    // we want to make a variable that stores the length of the password 
    var length = parseInt(prompt("What is the length of your password?"),10)
    // we want a conditional statement to ensure the desired password length
    if(length > 128 || length < 8) {
        alert("Password must be less than 128 characters and greater than 8")
        return null;
    }
    // we want to declare and add confirms for the different password options
    var wantNumbers = confirm("Select ok for numbers in your password");
    var wantLower = confirm("Select ok for lowercase letters in your password");
    var wantUpper = confirm("Select ok for uppercase letters in your password");
    var wantChar = confirm("Select ok for special characters in your password");

// we need to store the info that the user chooses
var promptOptions=  {
    wantNumbers: wantNumbers,
    wantLower: wantLower,
    wantUpper: wantUpper,
    wantChar: wantChar,
};

return promptOptions;

}

// we need a function that generates random things 
function getRandomChar(array) {
    var random = Math.floor(Math.random() * array.length)
    var finalRandom = array[random];
    return finalRandom;
}

// we need to use the given function to generate the password options
function generatePassword(){
    var prompts = passwordPrompts();
    var possibleOptions = [];
    var confirmedOptions = [];
    var final = [];
    if(prompts.wantNumbers) {
        possibleOptions = possibleOptions.concat(numbers);
        confirmedOptions.push(getRandomChar(numbers))
    }
    if(prompts.wantLower) {
      possibleOptions = possibleOptions.concat(lower);
      confirmedOptions.push(getRandomChar(lower))
    }
    if(prompts.wantUpper) {
    possibleOptions = possibleOptions.concat(upper);
    confirmedOptions.push(getRandomChar(upper))
    }
    if(prompts.wantChar) {
      possibleOptions = possibleOptions.concat(character);
      confirmedOptions.push(getRandomChar(character))
    }

    // we need to iterate over the length of the password from the object 
    for (i = 0; i < length; i++) {
    console.log(getRandomChar[i]);
}
    // we need a "for loop" for possibleOptions and another for confirmedOptions
    for (i = 0; i < possibleOptions.length; i++) {
      console.log(possibleOptions);
    }

    for (i = 0; i < confirmedOptions.length; i++) {
      console.log(confirmedOptions);
    }

    // we need to change the array to a string 
    return final.join('')
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
// set password equal to a function called generatePassword
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);