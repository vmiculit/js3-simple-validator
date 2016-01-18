// PHONE NUMBER

while (true){
var userPhone = prompt("May I have your Phone Number? Ex: 505-555-1234 \nNo SPAM. Pinky swear!")

if (userPhone.charAt(3) === "-" 
	&& userPhone.charAt(7) === "-" 
	&& isNumber(userPhone.charAt(0)) 
	&& isNumber(userPhone.charAt(1)) 
	&& isNumber(userPhone.charAt(2)) 
	&& isNumber(userPhone.charAt(4)) 
	&& isNumber(userPhone.charAt(5)) 
	&& isNumber(userPhone.charAt(6)) 
	&& isNumber(userPhone.charAt(8)) 
	&& isNumber(userPhone.charAt(9)) 
	&& isNumber(userPhone.charAt(10)) 
	&& isNumber(userPhone.charAt(11)) 
	&& userPhone.length === 12
	)
{
	alert("You entered: " + userPhone + "\nSweet! Let's move on! :)")
	break
}
else {
	alert("You entered: " + userPhone + "\nOops! That's not a valid number. \nLet's give it another shot!")
}
}

// BIRTH DATE

while (true){
var userBirthDate = prompt("What's your DOB? Ex: xx/xx/xx \nNo SPAM. Pinky swear!")

if (
 userBirthDate.charAt(2) === "/" 
 && userBirthDate.charAt(5) === "/" 
 && isNumber(userBirthDate.charAt(0)) 
 && isNumber(userBirthDate.charAt(1)) 
 && isNumber(userBirthDate.charAt(3)) 
 && isNumber(userBirthDate.charAt(4)) 
 && isNumber(userBirthDate.charAt(6)) 
 && isNumber(userBirthDate.charAt(7))
 && userBirthDate.length === 8
 )

{
	alert("You entered: " + userBirthDate + "\nSweet! Let's move on! :)")
	break
}
else {
	alert("You entered: " + userBirthDate + "\nOops! That's not a valid DOB. \nLet's give it another shot!")
}
}

// POSTAL CODE

while (true){
var userPostalCode = prompt("What's your Zip code? Ex: xxxxx OR xxxxx-xxxx \nNo SPAM. Pinky swear!")

if (userPostalCode.length === 5
	&& isNumber(userPostalCode.charAt(0))
	&& isNumber(userPostalCode.charAt(1))
	&& isNumber(userPostalCode.charAt(2))
	&& isNumber(userPostalCode.charAt(3))
	&& isNumber(userPostalCode.charAt(4))
	) {
	alert("You entered: " + userPostalCode + "\nSweet! Let's move on! :)")
	break
}

else if (userPostalCode.length === 10
	&& isNumber(userPostalCode.charAt(0))
	&& isNumber(userPostalCode.charAt(1))
	&& isNumber(userPostalCode.charAt(2))
	&& isNumber(userPostalCode.charAt(3))
	&& isNumber(userPostalCode.charAt(4))
	&& isNumber(userPostalCode.charAt(6))
	&& isNumber(userPostalCode.charAt(7))
	&& isNumber(userPostalCode.charAt(8))
	&& isNumber(userPostalCode.charAt(9))	
	) {
	alert("You entered: " + userPostalCode + "\nSweet! Let's move on! :)")
	break
}

else {
	alert("You entered: " + userPostalCode + "\nOops! That's not a valid Zip Code. \nLet's give it another shot!")
}
}

// STATE ABBREVIATION

while (true){
var userState = prompt("What State do you live in? Ex: CA \nNo SPAM. Pinky swear!")
if (userState.length === 2
	&& isNumber(userState.charAt(0)) != true
	&& isNumber(userState.charAt(1)) != true
	&& userState === userState.toUpperCase()
	) {
	alert("You entered: " + userState + "\nSweet! Let's move on! :)")
	break
}

else {
	alert("You entered: " + userState + "\nOops! That's not a valid State. \nLet's give it another shot!")
}
}


// MARRIED

while (true){
var userMarried = prompt("Are you Married :) ? Ex: Yes, No \nNo SPAM. Pinky swear!")
if (userMarried.toLowerCase() === "yes"
	|| userMarried.toLowerCase() === "no"
	) {
	alert("You entered: " + userMarried + "\nSweet! Thank you! :)")
	break
}

else {
	alert("You entered: " + userMarried + "\nOops! That's not valid. \nLet's give it another shot!")
}
}

// IS NUMBER FUNCTION

function isNumber(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};



