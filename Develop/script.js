console.log("first");

// Variable Outline
var charlength = 0;
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialchar = ["±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠"];
var numeric = ["1234567890"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Character Length Section Begin

function writePassword() {
  var passwordText = document.querySelector("#password");
  var charlength = prompt("How many characters would you like your password to contain?")
  passwordText.value = password;
  if (charlength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
    passLength = parseInt(charlength);
    return charlength();

  } else{

  }

}

// Character length Section End

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);