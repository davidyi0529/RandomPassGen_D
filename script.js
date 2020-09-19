// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var length = prompt("Choose a length of at least 8 characters and no more than 128 characters","");
  var lowercase = prompt("Would you like lowercase letters to be used? y/n","");
  var uppercase = prompt("Would you like upcase letters to be used? y/n","");
  var numeric = prompt("Would you like numeric numbers to be used? y/n","");
  var special = prompt("Would you like special characters to be used? y/n","");
  alert("Your password has been generated!!!");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
