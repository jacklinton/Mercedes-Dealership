var fullName = document.getElementById("full-name") //focus1
var emailAddy = document.getElementById("email-addy") //focus2
var emailAddy2 = document.getElementById("email-addy2") //focus3
var emailBody = document.getElementById("email_body") // focus5
var phone = document.getElementById("phone") //focus4
var prefEmail = document.getElementById("pref-email") //focus6
var prefPhone = document.getElementById("pref-phone") //focus7
var submitButton = document.getElementById("submit-button") //focus8

submitButton.disabled = true

$("#email-body").focusin(function() {
	if (checkEmail() && emailAddy.value == emailAddy2.value) {
		submitButton.disabled = false
	} else {
		submitButton.disabled = true
	}
})

$("#email-body").focusin(function(){ // empties text field when it comes into focus
	$("#email-body").text('')
})

$("#email-addy").focusout(function(){
	checkEmail()
})

$("#email-addy2").focusout(function(){
	if (emailAddy.value != emailAddy2.value) {
		$("#emailWarning2").text("Your email addresses must match!")
	}
	else {
		$("#emailWarning2").text("")
	}
	 
})


checkEmail = function() {
		this.emailArr = emailAddy.value.split("@")
		this.emailArr1 = this.emailArr[0]				//splits the email up into sections with "@", ".", the first character as dividers. 
		
		

		var first = this.emailArr1.split("")
		//second = emailArr3.split("")
		//third = emailArr4.split("")

		var firstChar = first[0]

		if (this.emailArr.length != 2) {
			$("#emailWarning1").text("The email address must contain an '@' symbol!")	//A series of checks for the checkpoints above. Throws an alert if the email is invalid in some way.
			return false
		}
		this.emailArr2 = this.emailArr[1].split(".")

		if (this.emailArr2.length != 2) {							//check that there are at least two word characters on either side of the period.
			$("#emailWarning1").text("A valid email address must have a '.' after the '@'!")
			return false
		}
		this.emailArr3 = this.emailArr2[0]
		this.emailArr4 = this.emailArr2[1]

		if (!isNaN(firstChar)) {								//Makes sure email doesn't start with a number.
			$("#emailWarning1").text("A valid email cannot start with a number!")
			return false

		} else {
			valid1 = /[a-z0-9_]+/i
			valid2 = /[a-z0-9_-]+/i

			if (this.emailArr1.match(valid1) && this.emailArr3.match(valid2) && this.emailArr4.match(valid1)) { //Takes the remaining pieces of the email address 																								
				$("#emailWarning1").text("")
				return true																						//and checks to make sure it only uses acceptible characters.

			} else {																							//From http://regexr.com/
				$("#emailWarning1").text("This email contains invalid characters!")
				return false

			}	
		}
}