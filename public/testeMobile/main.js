
$(document).ready(function () {
    var md = new MobileDetect(window.navigator.userAgent);




    if (!md.mobile()) {
        $("#olo").load("login/loginModal.html")
    }
    else {
        $("#olo").load("mobile.html")
    }

    $("#btn").click(function(event) {
        console.log(event);
        
        $("#lugar").html("teste")
        
    })

})