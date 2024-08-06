
// #scrollUpBtn     
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollUpBtn").style.display = "block";
    } else {
        document.getElementById("scrollUpBtn").style.display = "none";
    }
}
document.getElementById("scrollUpBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// index.js
function login_id1() {
    alert("success");
    document.getElementById("login_id").innerHTML="<i class='fa-solid fa-user login_icon'></i> User";
}



