function show()
{
    // console.log("hii")
    var showme=document.querySelector("#moreopt")
    // showme.setAttribute("display","block")
    if(showme.style.display==="none")
    {
        showme.style.display="block";
    }
    else{
        showme.style.display="none"
    }
    
}

function showsign()
{
    var showme=document.querySelector("#sing_in_button")
    // showme.setAttribute("display","block")
    // showme.style.display="block";
    if(showme.style.display==="none")
    {
        showme.style.display="block";
    }
    else{
        showme.style.display="none"
    }
}
//for change name on main index page attach this page and look what happend 

// var signinData=JSON.parse(localStorage.getItem("signin"));
// var showusername =document.querySelector(#showusername);
// if(signinData !=null)
// {
//     showusername.innerHTML=`<p>User</p>`;
// }

