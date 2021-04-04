// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      
      }
      
      function generatePassword() {
      
        var generatedPassword = "";
        var userPassword = "";
      
        var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ; 
        var lowerCaseLetter= "abcdefghijklmnopqrstuvwxyz";
        var numericChar= "1234567890";
        var specialChar= "!@#$%^&*()_+-" ;
      
        var passwordLength = prompt ("How many characters would you like your password to contain?");
      
         passwordLength = parseInt(passwordLength);
//Checks for input and if it is a valid number between 8 - 128.      
         if (!passwordLength) {
           alert("Please enter a number");
           
           return;
         }else if (passwordLength < 8 || passwordLength > 128) {
           passwordLength = parseInt(prompt("Please choose a number between 8 and 128"));
         }
//Confirms characters to include in the password      
        var confrmUppercase = confirm("Click ok if you want uppercase characters included" );
        var confrmLowercase = confirm("Click ok if you want lowercase characters included");
        var confrmNumeric = confirm("Click ok if you want numbers included");
        var confrmSpecial = confirm("Click ok if you want special characters included")
      
        if (confrmUppercase) {
          userPassword = userPassword.concat (upperCaseLetters);
        }
      
        if (confrmLowercase) {
          userPassword = userPassword.concat (lowerCaseLetter);
        }
      
        if (confrmNumeric) {
          userPassword = userPassword.concat (numericChar);
        }
      
        if (confrmSpecial) {
          userPassword = userPassword.concat (specialChar);
        }
//Checks for at least one option selected or cancels        
        while(confrmUppercase === false && confrmLowercase === false && confrmSpecial === false && confrmNumeric === false) {
          alert("You must choose at least one option");
          return;
        }
//Chooses random characters from the chosen options      
        for (var i =0; i < passwordLength; i++) {
          generatedPassword = generatedPassword + userPassword [Math.floor(Math.random() * userPassword.length )];
        }
      
       return generatedPassword;
       
      }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






