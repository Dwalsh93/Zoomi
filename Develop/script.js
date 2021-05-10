// console.log("first");

// // Variable Outline
// var charlength = 0;
// var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
// var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var specialchar = ["±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠"];
// var numeric = ["1234567890"];
// var finalpassword = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Character Length Section Begin

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["±","!","@","#","$","%","^","&","*","(",")","_","+","-","=","§","£","™","¡","¢","∞","§","¶","•","ª","º","–","≠"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];

var charSet = [];

var finalpassword = ""

function randomGen() {
  var passwordText = document.querySelector("#password");

  var charlength = prompt("How many characters would you like your password to contain?")

  if (charlength <= 7 || charlength >= 129) {
    alert("Password length must be between 8-128 characters Try again");
    //passLength = parseInt(charlength);
    return; //charlengthselect();

  }
  lowercaseselect = confirm("Would you like to use lowercase letters?");
  console.log (lowercaseselect)
  if (lowercaseselect) {
    charSet = charSet.concat(lowerCase);
    //finalpassword += lowercase
  }
  uppercaseselect = confirm("Would you like to use uppercase letters?");
  if (uppercaseselect) {
    charSet = charSet.concat(upperCase);
    // finalpassword += uppercase
  }
  specialcharselect = confirm("Would you like to use special characters?");
  if (specialcharselect) {
    charSet = charSet.concat(specialChar);
    // finalpassword += specialchar
  }
  numericselect = confirm("Would you like to use numbers?");
  if (numericselect) {
    charSet = charSet.concat(numeric);
    // finalpassword += numeric
  }
  console.log ({lowercaseselect, numericselect, specialcharselect, uppercaseselect})
  if (!numericselect && !specialcharselect && !uppercaseselect && !lowercaseselect) {
    alert('You must select "confirm" from at least one of the following prompts');


  }

  for (var i= 0; i < charlength; i++) {
    finalpassword += charSet[Math.floor(Math.random() * charSet.length)];
  }
  
  passwordText.value = finalpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", randomGen);