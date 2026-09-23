$(document).ready(function(){
    // DECLARATIONS
    
    // REGISTRATION
    const signupName = $("#SIGNUP_NAME").val()
    const signupEmail = $("#SIGNUP_EMAIL").val()
    const signupPass = $("#SIGNUP_PASSWORD").val()

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
            $(this).text("Sign up");
        }
    });

    //JSON, REGISTER, LOGIN SYSTEM

    $("#FORM_SIGNUP").on("submit", function(e){
        e.preventDefault();

        const registeredData = {
            Name: signupName,
            Email: signupEmail,
            Pass: signupPass,
        }
        let json = JSON.stringify(registeredData)

        console.log(json)
    })
});