document.getElementById("submit").addEventListener("click",function(){
    // get email address
    const emailField=document.getElementById("user-email");
    const userEmail=emailField.value;
    // get password
    const passwordField=document.getElementById("user-password");
    const userPassword=passwordField.value;
    if (userEmail == "abcd@gmail.com" && userPassword== "abcd"){
        
        window.location.href="banking.html";
    }

});