// Room Travelar Count Function

document.querySelector("#room-btn").addEventListener("click", roomCountFunc);

document.querySelector("#trav-btn").addEventListener("click", travelarCountFunc);

document.querySelector("#reset").addEventListener("click", resetFunc);

var room=0;
function roomCountFunc(){
    event.preventDefault();
    room++;
    document.querySelector("#c1").innerText=room;
}
var travelar=0;
function travelarCountFunc(){
    event.preventDefault();
    travelar++;
    document.querySelector("#c2").innerText=travelar;
}
function resetFunc(){
    document.querySelector("#c1").innerText="";
    document.querySelector("#c2").innerText="";
    window.location.reload();  
}

// search button functionality

document.querySelector("#search-btn>input").addEventListener("click", searchTravelingFunc);

function searchTravelingFunc(){
    var cityLocation=document.querySelector("#select-Cont").value;
    var inpdate1=document.querySelector("#cd1").value;
    var inpdate2=document.querySelector("#cd2").value;
    var roomCount=document.querySelector("#c1").innerText;
    var travelCount=document.querySelector("#c2").innerText;
    console.log(cityLocation,inpdate1,inpdate2, roomCount, travelCount);

    var inpDataObj={
        location:cityLocation,
        dateD1:inpdate2,
        dateD2:inpdate2,
        roomCD:roomCount,
        travCD:travelCount,
    }
    localStorage.setItem("searchData",JSON.stringify(inpDataObj));

    if (cityLocation==""){
        alert ("please select Destination");
    }
    else {
        window.location.href="./goa.html";
    }
}

