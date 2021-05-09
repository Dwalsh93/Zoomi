console.log("first");

// Variable Outline
var charlength = 0;
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialchar = ["±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠"];
var numeric = ["1234567890"];
var finalpassword = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Character Length Section Begin

function writePassword() {
  var passwordText = document.querySelector("#password");
  var charlength = prompt("How many characters would you like your password to contain?")
  passwordText.value = password;

  if (charlength <= 7 || charlength >= 129) {
    alert("Password length must be between 8-128 characters Try again");
    passLength = parseInt(charlength);
    return charlengthselect();

  }
  lowercaseselect = confirm("Would you like to use lowercase letters?");
  if (lowercaseselect) {
    finalpassword += lowercase
  }
  uppercaseselect = confirm("Would you like to use uppercase letters?");
  if (uppercaseselect) {
    finalpassword += uppercase
  }
  specialcharselect = confirm("Would you like to use special characters?");
  if (specialcharselect) {
    finalpassword += specialchar
  }
  numericselect = confirm("Would you like to use numbers?");
  if (numericselect) {
    finalpassword += numeric
  }
  if (!numericselect && !specialcharselect && !uppercaseselect && !lowercaseselect); {
    alert('You must select "confirm" from at least one of the following prompts');
    return charlengthselect();
  }


  // //array creation temporary 
  // var results = ""
  // var posschar = ""
  // var guarchar = ""
  
  // for (var i = 0; i < passwordLength; i++) {
  //   password += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
  // }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);