function runProtection()
{
  console.log("Two Factor authentication showing wait");
  $("#protectionModalWait").modal();
  
  setTimeout(function(){ $("#protectionModalWait").modal("hide"); }, 3000);
  
  console.log("Two Factor authentication showing choice");
  document.getElementById("callme").innerHTML = "Call me at: (***) *** - " + randPhone;
  document.getElementById("textme").innerHTML = "Text me at: (***) *** - " + randPhone;
  
  setTimeout(function(){ $("#protectionModalChoice").modal(); }, 4000);

  return false;
}

function runInitialPrompt() {
  $("#protectionModalChoice").modal("hide");
  $("#protectionModalWait").modal();
  console.log("Two Factor authentication InitialPrompt showing wait again");
  
  /* Please enter your OTP code. */
  setTimeout(function(){ $("#protectionModalWait").modal("hide"); }, 7000);
  console.log("Two Factor authentication Showing response");
  setTimeout(function(){ $("#protectionModalResponse").modal(); }, 8000);
}

function runVerification() {
  let givenSolution = $("#floginVerificationInput").val();
  /* continue the login or show help message. */
  if ((givenSolution.length > 5) && givenSolution.endsWith("0")) {
        $("#protectionModalResponse").modal("hide");
        $("#protectionModalWait").modal();

    
    
        setTimeout(function(){ $("#protectionModalWait").modal("hide"); $('#loginForm').off(); $('#loginForm').submit(); }, 3000);
  else {
    $("#protectionModalResponse").modal("hide");
    $("#protectionModalWait").modal();

    
    
    setTimeout(function(){ $("#protectionModalWait").modal("hide"); }, 3000);
    setTimeout(function(){ $("#protectionModalHelp").modal(); }, 4000);
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


