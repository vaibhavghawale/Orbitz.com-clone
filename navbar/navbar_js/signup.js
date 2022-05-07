
    if(JSON.parse(localStorage.getItem("signin")) != null)
{
    window.location.href = "#";
}

var form = document.querySelector("#sign_up_form");

form.addEventListener("submit", function(){
    event.preventDefault();

    var data = {
        useremail: form.useremail.value,
        username: form.username.value,
        userlastname:form.userlastname.value,
        userpassword: form.userpassword.value
    }

    localStorage.setItem("userData", JSON.stringify(data));
    // alert("Sign Success");
    window.location.href="welcome.html"
})