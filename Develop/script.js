// Assignment code here
var charlength = 0; 
var lowercase = false;
var uppercase = false;
var specialchar = false;
var numeric = false;
var nameprompt = prompt("Please enter your name")
console.log (nameprompt);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
