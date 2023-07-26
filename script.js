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

// Function to generate a secure password based on user criteria
function generatePassword() {
  // Define character sets for different criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>,.?/:;{}[]|";

  // Variables to store user's chosen criteria
  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // Validate the user input for password length
  if (
    isNaN(passwordLength) || 
    passwordLength < 8 || 
    passwordLength > 128
  ) {
    alert("Invalid password length. Please enter a valid number between 8 and 128.");
    return "";
  }

  // Check if at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("You must select at least one character type.");
    return "";
  }

  // Generate the character set based on the user's selected criteria
  var allowedChars = "";
  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeNumeric) {
    allowedChars += numericChars;
  }
  if (includeSpecialChars) {
    allowedChars += specialChars;
  }

  // Generate the password
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    generatedPassword += allowedChars[randomIndex];
  }

  return generatedPassword;
}
