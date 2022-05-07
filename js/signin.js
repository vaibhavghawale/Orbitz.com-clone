
  var form = document.querySelector("#sign_in_form");
    var userData = JSON.parse(localStorage.getItem("userData"));
    if(JSON.parse(localStorage.getItem("signin")) != null)
    {
        window.location.href="./signin.html";
    }

    form.addEventListener("submit", function(){
        event.preventDefault();

        var data = {
            signinemail: sign_in_form.signinemail.value,
            signuppassword: sign_in_form.signuppassword.value
        }

        if(userData == null){
            window.location.href="./signup.html"
            alert("Please Create Account");
        }
          
        else if(data.signinemail == userData.useremail && data.signuppassword == userData.userpassword)
        {
            localStorage.setItem("signin",JSON.stringify(data));
            window.location.href="./index.html";
            alert("Login succesfull");
        }
        else{
            alert("user does not exists");
            
        }

    })
