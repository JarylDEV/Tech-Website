$(document).ready(function(){
    $("#SWITCH_BUTTON").click(function(){
        if($(this).text() === "Sign up"){
            $("#SWITCH_OVERLAY").css({
            "transform": "translateX(0)",
            "border-radius": "3% 0% 0% 3% / 3% 10% 10% 3%",
            "box-shadow": "white 3px 0 10px 1px",
            });

            $("#SWITCH_MESSAGE").text("Already have an account?");
            $(this).text("Sign in");
        } else{
            $("#SWITCH_OVERLAY").css({
            "transform": "translateX(37.5em)",
            "border-radius": "0% 3% 3% 0% / 3% 3% 3% 3%",
            "box-shadow": "white -3px 0 10px 1px",
            });

            $("#SWITCH_MESSAGE").text("Don't have an account?");
            $(this).text("Sign up");
        }
    });
});