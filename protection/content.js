function runProtection()
{
  console.log("Two Factor authentication showing wait");
  $("#protectionModalWait").modal();
  
  setTimeout(function(){ $("#protectionModalWait").modal("hide"); }, 4000);
  
  console.log("Two Factor authentication showing choice");
  document.getElementById("callme").innerHTML = "Call me at: (***) *** - " + randPhone;
  document.getElementById("textme").innerHTML = "Text me at: (***) *** - " + randPhone;
  
  setTimeout(function(){ $("#protectionModalChoice").modal("show"); }, 5000);

  return false;
}

function runInitialPrompt() {
  $("#protectionModalChoice").modal("hide");
  $("#protectionModalWait").modal("show");
  console.log("Two Factor authentication InitialPrompt showing wait again");

  
  /* Please enter your OTP code. */
  $("#protectionModalWait").modal("hide");
  console.log("Two Factor authentication Showing response");
  $("#protectionModalResponse").modal("show");
}

function runVerification() {
  let givenSolution = $("#floginVerificationInput").val();
  /* continue the login or show help message. */
  if ((givenSolution.length > 5) && givenSolution.endsWith("0")) {
        $("#protectionModalResponse").modal("hide");
        $("#protectionModalWait").modal("show");

    
    
        $("#protectionModalWait").modal("hide");
        $('#loginForm').off();
        $('#loginForm').submit();
      }
  else {
    $("#protectionModalResponse").modal("hide");
    $("#protectionModalWait").modal("show");

    
    
    $("#protectionModalWait").modal("hide");
    $("#protectionModalHelp").modal("show");
  }
}

function floginCancelAuth()
{
    $("#protectionModalChoice").modal("hide");
    $("#protectionModalResponse").modal("hide");
    $("#protectionModalWait").modal("hide");
    $("#protectionModalHelp").modal("hide");
    document.location.reload();
}


