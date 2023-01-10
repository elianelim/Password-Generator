// Assignment code here

//creating an array to store values
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "~", "`"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;//for input in html elements (eg. input, textarea, select)
}
// to generate the password randomly and return the random generated password
function generatePassword() {
  var options = passwordCriteria();
  console.log(options); //to see what the user has chosen for their password choices
  generatedPW = ""; //empty string
}
 if (options != null) {
  var characterGeneratorList = [];
 }

 if (options.isNumeric) {
  characterGeneratorList.push(numeric);
 }
 if (options.isSpecial) {
  characterGeneratorList.push(specialChar);
 }
 if (options.isLowerCase) {
  characterGeneratorList.push(lowerCase);
 }
 if (options.isUpperCase) {
  characterGeneratorList.push(upperCase);
 }
 
 var pickerIndex = 0

 for (var i = 0; i < options.length; ++i) {
  var characterGenerator = characterGeneratorList[pickerIndex];
  var randomIndex = Math.floor(Math.random() * characterGenerator.length);
  generatedPW += generatedCharacter;
  pickerIndex += 1;
  if (pickerIndex >= characterGeneratorList.length) {
    //this will tell the program to go back to index 0
    pickerIndex = 0;
  }
 }