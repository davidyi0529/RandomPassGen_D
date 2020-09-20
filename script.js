// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

// Declaration of Variable
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericCharacter;
var confirmSpecialCharacter;

// Password Length Prompt
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? \nChoose a number between 0 ~ 128"));

    // Loop
    while(confirmLength <= -1 || confirmLength >= 129) {
      alert("Password length must be between 0-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain? \nChoose a number between 0 ~ 128"));
      } 
    
      // Password Criteria
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        
        // Loop
        while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
          alert("You must choose at least one parameter");
          var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
          var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
          var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
          var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
          }
        
          // Confirm completion of criteria
          alert("Your password has been generated");

    // Password parameters action
    var passwordCharacters = []
        
        if (confirmLowerCase) {
          passwordCharacters = passwordCharacters.concat(lowercase)
        }
        
        if (confirmUpperCase) {
          passwordCharacters = passwordCharacters.concat(uppercase)
        }
        
        if (confirmNumericCharacter) {
          passwordCharacters = passwordCharacters.concat(number)
        }
        
        if (confirmSpecialCharacter) {
          passwordCharacters = passwordCharacters.concat(specialChar)
        }

          console.log(passwordCharacters)

    // Loop selecting random charcters from array
      var randomPassword = ""
        for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
        return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
