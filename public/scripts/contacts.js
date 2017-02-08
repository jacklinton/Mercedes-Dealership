var fullName = document.getElementById("full-name") //focus1
var emailAddy = document.getElementById("email-addy") //focus2
var emailAddy2 = document.getElementById("email-addy2") //focus3
var emailBody = document.getElementById("email_body") // focus5
var phone = document.getElementById("phone") //focus4
var prefEmail = document.getElementById("pref-email") //focus6
var prefPhone = document.getElementById("pref-phone") //focus7
var submitButton = document.getElementById("submit-button") //focus8

$("#email-body").focusin(function(){
	$("#email-body").text('')
})
