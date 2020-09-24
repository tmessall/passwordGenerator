// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// All possible characters in the password
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChars = ["!", "@", "#", "$", "5", "^", "&", "*"];

// To compile the characters we want in the password
var possibleChars = []

// Generate the password
function generatePassword() {
    possibleChars = [];
    checkLowerCase();
    for (var i = 0; i < possibleChars.length; i++) {
        console.log(possibleChars[i]);
    }
    alert("Test test.");
}

function checkLowerCase() {
    var wants = confirm("Do you want lower case letters in your password?");
    if (wants) {
        for (var i = 0; i < letters.length; i++) {
            possibleChars.push(letters[i]);
        }
        alert("Great, adding lower case letters to your password!");
    } else {
        alert("Alright, there won't be any lower case letters in your password.")
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);