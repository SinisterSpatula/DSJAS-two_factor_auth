console.log("Two Factor authentication login process module loaded");
var randPhone
if (!localStorage.hasOwnProperty("dsjas2faphone")) {
    let storerandPhone =  Math.floor(Math.random() * (8999) + 1000);
    localStorage.setItem("dsjas2faphone", storerandPhone);
    randPhone = storerandPhone;
    console.log("Two Factor module: local storage key was empty generate new: " + storerandPhone);
    }

function wait(ms)
{
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

$(document).ready(
    function () {

        $('#loginForm').submit(
            function () {
                return runProtection();
            }
        );
    }
);
