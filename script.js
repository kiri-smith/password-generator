// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function writePassword() {
  var wantPassword = prompt("You will be asked a series of questions to determine your password criteria. Do you wish to continue?");
    if (wantPassword != null) {
      return;
    } else {passwordPrompts()};
    });

    /////////does  not work//////



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


      var wantLower = prompt("Do you want to include lowercase letters?");
      if (wantLower != null) {
        var wantUpper = prompt (Do you want to include uppercase letters?);
      }
      }

  

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", ";"];


function getLower(){
    (int i=0; i < 26; i++);
}
