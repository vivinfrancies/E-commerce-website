// onload

// login.js
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "user@gmail.com" && password === "user@123") {
        window.location.href = "index.html";
        
        document.getElementById("email").value = "";
        document.getElementById("password").value="";   
        login_id1();    
    } else {
        // Display login error message
        document.getElementById("login_err").innerHTML = "*Login Failed. \n Enter valid Email id And Password";
    }
}

// Show password
function showpassword() {
    var x = document.getElementById("password");

    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}

function new_user(){   
    document.getElementById("new_user").hidden=false;
    document.getElementById("login").hidden=true;
}
