// Assignment code here

//valid characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPGRSTUVWXYZ"
var num = "0123456789"
var symbol = "!@#$%^&*()-=_+"
var passwordLength = 0
var charTypes = []
var generatedPassword = ""


const getUserLength = function(){
	let getLength = prompt("How long do you want your password? (min: 8, max: 128)")
	if(getLength == null){
		return "cancelled"
	}
	if (isNaN(getLength) == true) {
		alert("you must enter a number!")
		getUserLength()
	}else if (isNaN(getLength) == false) {
		let getLengthInt = parseInt(getLength)
		if (getLengthInt > 128 || getLengthInt < 8){
			alert("you must enter a number between 8 and 128!")
			getUserLength()
		} else {
			passwordLength = getLengthInt
		}
	}
}

const getUserLowerCase = function(){
	let getLowerCase = prompt("Do you want lower case letters? (y or n)")
	if(getLowerCase == null){
		return "cancelled"
	}
	if (getLowerCase !== "y" && getLowerCase !== "n") {
		alert("You must enter y or n! you entered: " + getLowerCase )
		getUserLowerCase()
	} else {
		if(getLowerCase == "y"){
			charTypes.push("lower")
		}
	}
}

const getUserUpperCase = function(){
	let getUpperCase = prompt("Do you want UPPER CASE letters? (y or n)")
	if(getUpperCase == null){
		return "cancelled"
	}
	if (getUpperCase != "y" && getUpperCase != "n") {
		alert("You must enter y or n!")
		getUserLowerCase()
	} else {
		if(getUpperCase == "y"){
			charTypes.push("upper")
		}
	}
}

const getUserNum = function(){
	let getNum = prompt("Do you want numbers? (y or n)")
	if(getNum == null){
		return "cancelled"
	}
	if (getNum != "y" && getNum != "n") {
		alert("You must enter y or n!")
		getUserLowerCase()
	} else {
		if(getNum == "y"){
			charTypes.push("number")
		}
	}
}

const getUserSymbol = function(){
	let getSymbol = prompt("Do you want symbols? (y or n)")
	if (getSymbol != "y"&& getSymbol != "n") {
		alert("You must enter y or n!")
		getUserLowerCase()
	} else {
		if(getSymbol == "y"){
			charTypes.push("symbol")
		}
	}
}

const randomLowerCase = function(){
	let n = Math.floor(Math.random() * lowerCase.length)
	generatedPassword += lowerCase.charAt(n)
}

const randomUpperCase = function(){
	let n = Math.floor(Math.random() * upperCase.length)
	generatedPassword += upperCase.charAt(n)
}

const randomNumber = function() {
	let n = Math.floor(Math.random() * num.length)
	generatedPassword += num.charAt(n)
}
const randomSymbol = function() {
	let n = Math.floor(Math.random() * symbol.length)
	generatedPassword += symbol.charAt(n)
}

const generatePassword = function() {
	generatedPassword = ""
	if (getUserLength() == "cancelled") {return "Generation Cancelled..."}
	if (getUserLowerCase() == "cancelled") {return "Generation Cancelled..."}
	if (getUserUpperCase() == "cancelled") {return "Generation Cancelled..."}
	if (getUserNum() == "cancelled") {return "Generation Cancelled..."}
	if (getUserSymbol() == "cancelled") {return "Generation Cancelled..."}

	if (charTypes.length == 0){
		return "no character types were picked..."
	}

	for(i = 0; i < passwordLength; i++){
		var n = Math.floor(Math.random() * charTypes.length)

		if (charTypes[n] == "lower"){
			randomLowerCase()
		}
		else if (charTypes[n] == "upper"){
			randomUpperCase()
		}
		else if (charTypes[n] == "number"){
			randomNumber()
		}
		else if (charTypes[n] == "symbol"){
			randomSymbol()
		}
	}
	return generatedPassword
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