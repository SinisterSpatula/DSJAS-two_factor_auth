console.log("Two Factor authentication login process module loaded");
var randPhone =  Math.floor(Math.random() * (8999) + 1000);

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
