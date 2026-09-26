$(document).ready(function(){
    // REGISTER/LOGIN ANIMATION

    $("#SWITCH_BUTTON").click(function(){
        if($(this).text() === "Sign up"){
            $("#SWITCH_OVERLAY").css({
            "transform": "translateX(0)",
            "border-radius": "3% 0% 0% 3% / 3% 10% 10% 3%",
            "box-shadow": "white 3px 0 10px 1px",
            });

            $("#LOGIN").css({"transform": "translateX(35em)"})
            $("#SIGNUP").css({"transform": "translateX(0)"})
            $("#SWITCH_MESSAGE").text("Already have an account?");
            $(this).text("Sign in");
        } else{
            $("#SWITCH_OVERLAY").css({
            "transform": "translateX(37.5em)",
            "border-radius": "0% 3% 3% 0% / 3% 3% 3% 3%",
            "box-shadow": "white -3px 0 10px 1px",
            });

            $("#LOGIN").css({"transform": "translateX(0)"})
            $("#SIGNUP").css({"transform": "translateX(-35em)"})
            $("#SWITCH_MESSAGE").text("Don't have an account?");
            $("#SIGNUP_RESULT").text("")
            $(this).text("Sign up");
        }
    });

    //JSON, REGISTER, LOGIN SYSTEM

    $("#FORM_SIGNUP").on("submit", function(e){

        const signupName = $("#SIGNUP_NAME").val()
        const signupEmail = $("#SIGNUP_EMAIL").val()
        const signupPass = $("#SIGNUP_PASSWORD").val()

        e.preventDefault()

        if ($("#SIGNUP_NAME").val().trim() === ""){
            $("#USER_PARAGRAPH").text("Please enter a username.")
        } else if($("#SIGNUP_EMAIL").val().trim() === "") {
            $("#EMAIL_PARAGRAPH").text("Please enter a valid email.")
        } else if($("#SIGNUP_PASSWORD").val().trim() === "") {
            $("#PASSWORD_PARAGRAPH").text("Please enter a password.")
        } else if(!$("#SIGNUP_CHECKBOX").is(':checked')) {
            $("#CHECKBOX_PARAGRAPH").text("You must agree to the terms to continue.")
        } else {
            $("#CHECKBOX_PARAGRAPH").text("")
            $("#PASSWORD_PARAGRAPH").text("")
            $("#EMAIL_PARAGRAPH").text("")
            $("#USER_PARAGRAPH").text("")
            $("#SIGNUP_RESULT").text("Account succesfully created!")

            $(this).trigger("reset")

            const registeredData = {
            Name: signupName,
            Email: signupEmail,
            Pass: signupPass,
            }

            let data = JSON.parse(localStorage.getItem('RegisteredUsers')) || [] //GINA KWA ANG DATA SA LOCALSTORAGE

            data.push(registeredData) // GINABUTANG KAG GINASAVE ANG USER INPUT SA SULOD KA LOCALSTORAGE

            localStorage.setItem('RegisteredUsers', JSON.stringify(data)) // GABUTANG DATA SA LOCAL STORAGE

        }
    })

    $("#FORM_LOGIN").on("submit", function(e){
        e.preventDefault()

        const email = $("#LOGIN_EMAIL").val() // USER INPUT
        const pass = $("#LOGIN_PASSWORD").val() //USER INPUT

        let users = JSON.parse(localStorage.getItem('RegisteredUsers')) || []  //GINA KWA ANG DATA SA LOCALSTORAGE

        const userFound = users.find(function(e){       // GINA PANGITA IF ANG EMAIL NGA NAKA SAVE SA LOCALSTORAGE GA MATCH SA GIN BUTANG KA USER SA LOGIN
            return e.Email === email
        })

        if(!userFound){                                                         // KUNG WALA GA MATCH ANG USER INPUT NGA EMAIL SA LOCALSTORAGE NGA NAKASAVE NGA EMAIL
            $("#LOGIN_USER_P").text("Email not registered or Incorrect.")
        } else if(userFound.Pass !== pass) {
            $("#LOGIN_PASS_P").text("Incorrect password.")                      // SAME THING PERO SA PASSWORD
        } else {
            $("#LOGIN_USER_P").text("")                                         
            $("#LOGIN_PASS_P").text("")
            
            localStorage.setItem('CurrentUser', JSON.stringify(userFound));
            
            window.location.href="homepage.html"
            $(this).trigger("reset")
        }
    })
});