console.log("Two Factor authentication login process module loaded");
var randPhone
if (localStorage.getItem("dsjas2faphone") == null) {
    let storerandPhone =  Math.floor(Math.random() * (8999) + 1000);
    localStorage.setItem("dsjas2faphone", storerandPhone);
    randPhone = storerandPhone;
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
