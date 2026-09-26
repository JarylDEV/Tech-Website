$(document).ready(function(){
    $("#HEADER").css({
        "transform": "translateY(1em)"
    });
    
    $("#INFO_LINKS").css({
        "transform": "translate(2em, 20em)"
    });

    $("#INFO_DESCRIPTION").fadeIn(1500);
    $("#TITLE").fadeIn(1500);

    let currentUser = JSON.parse(localStorage.getItem('CurrentUser'));

    $("#USER_TITLE").text("Welcome, " + currentUser.Name);
    $("#USER_TITLE").fadeIn(1500);

    $("#CART").on("click", function(e){
        e.preventDefault()
        $("#CART_POPUP").toggleClass("HIDE_CART")
    })

    $(".TECH").on("click", function(e){
        e.preventDefault()

        $(".PRODUCTS").css({"background-color": "transparent"})
        $(this).parent().css({"background-color": "rgb(210, 210, 216)"})

        const item = $(this).attr("id")
        
        $("#IMAGE1, #IMAGE2, #IMAGE1_BUTTON, #IMAGE2_BUTTON, #PRICE1, #PRICE2").show();


        if(item === "KEYBOARD_INTERACT"){
            $("#IMAGE1").attr("src", "images/keyboard1.png");
            $("#IMAGE2").attr("src", "images/keyboard2.png");
            $("#PRICE1").text("Aula Win 60 HE")
            $("#PRICE2").text("RAZER HUNTSMAN V3 PRO TENKEYLESS")
        } else if(item === "MOUSE_INTERACT"){
            $("#IMAGE1").attr("src", "images/mouse.png");
            $("#IMAGE2").attr("src", "images/mouse2.png");
            $("#PRICE1").text("Logitech G PRO X Superlight 2")
            $("#PRICE2").text("Razer DeathAdder V4 Pro")
        } else if(item === "HEADSET_INTERACT"){
            $("#IMAGE1").attr("src", "images/headest.png");
            $("#IMAGE2").attr("src", "images/headset2.png");
            $("#PRICE1").text("Razer BlackShark V3 Pro")
            $("#PRICE2").text("Audeze Maxwell 2")
        }
    })

    $("#IMAGE1_BUTTON, #IMAGE2_BUTTON").on("click", function(){
        let clickedButtonId = $(this).attr("id");
        let targetImageSrc = "";

        if(clickedButtonId === "IMAGE1_BUTTON") {
            targetImageSrc = $("#IMAGE1").attr("src");
        } else if(clickedButtonId === "IMAGE2_BUTTON") {
            targetImageSrc = $("#IMAGE2").attr("src");
        }

        let cloneItem = $("#IMAGE_CONT").first().clone();

        cloneItem.removeAttr("id").addClass("cart-item-row");
        cloneItem.find("#IMAGE_HOLDER").removeAttr("id").attr("src", targetImageSrc);
        cloneItem.find("#REMOVE").removeAttr("id").addClass("cart-remove-btn");

        $("#CART_POPUP").append(cloneItem);
        alert("Product added to cart!");
    });

    $(document).on("click", ".cart-remove-btn", function(){
    $(this).parent(".cart-item-row").remove();
    });
});