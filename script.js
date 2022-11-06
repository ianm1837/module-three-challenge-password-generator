// Assignment code here

//valid characters



//get user input
const getUserInput = function(isPromptLength, prompContents){
	let userInput = ""

	if (isPromptLength){
		do{
			userInput = prompt("how long do you want your password? min: 8 max 128")
			if(userInput < 8 || userInput > 128){
				alert("you must choose a length between 8 and 128 characters!")
			}
		}while(userInput < 8 || userInput > 128)
		return userInput
	} else if(!isPromptLength){
		do{
			userInput = prompt(prompContents)
			if(userInput != "y" || userInput != "n"){
				alert("you must enter y or n!")
			}
		}while (userInput < 8 || userInput > 128)
		return userInput
	}
}

//TODO: rename variables and add conditionals for types
const createPassword = function(length, upperCase, lowerCase, symbol){
	let generatedPassword = ""
	let lowerCase = "abcdefghijklmnopqrstuvwxyz"
	let upperCase = "ABCDEFGHIJKLMNOPGRSTUVWXYZ"
	let num = "0123456789"
	let symbol = "!@#$%^&*()-=_+"

	for(i = 0; i < length.length; i++){
		charType = Math.floor(Math.random() * 4 - 1)
		if(charType = 1){
			randomNumber = num[Math.floor(Math.random() * 10 - 1)]
			generatedPassword += randomNumber
		}
		else if(charType = 2){
			randomLowerCase = lowercase[Math.floor(Math.random() * 26 - 1)]
			generatedPassword += randomLowerCase
		}
		else if(charType = 3){
			randomUpperCase = upperCase[Math.floor(Math.random() * 26 - 1)]
			generatedPassword += randomUpperCase
		}
		else if(charType = 4){
			randomSymbol = symbol[Math.floor(Math.random() * 14 - 1)]
			generatedPassword += randomSymbol
		}
	}
}





const generatePassword = function() {
//get user input, pass to create password, return password
	return createPassword(
		getUserInput(true),
		getUserInput(false, "Do you want lower case letters? 'y or n'"),
		getUserInput(false, "Do you want upper case letters? 'y or n'"),
		getUserInput(false, "Do you want numbers? 'y or n'"),
		getUserInput(false, "Do you want symbols? 'y or n'")
	)
}

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