// Room Travelar Count Function

document.querySelector("#room-btn").addEventListener("click", roomCountFunc);

document.querySelector("#trav-btn").addEventListener("click", travelarCountFunc);

document.querySelector("#reset").addEventListener("click", resetFunc);

var room=0;
function roomCountFunc(){
    event.preventDefault();
    room++;
    console.log(room);
    document.querySelector("#c1").innerText=room;
}

var travelar=0;
function travelarCountFunc(){
    event.preventDefault();
    travelar++;
    console.log(travelar);
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
    event.preventDefault();

    var inpData={
        goingTo:document.querySelector("#select-Cont").value,
        checkIn: document.querySelector("#d1").value,
        checkOut:document.querySelector("#d2").value,
        roomC1:document.querySelector("#c1").value,
        travelarC2:document.querySelector("#c2").value,
    }
    console.log(inpData);
}




// Destination-dropdown function

const wrapper =document.querySelector(".wrapper");
selectBtn =wrapper.querySelector(".select-btn");
options =wrapper.querySelector(".options");

var infoList =["Flights Under $200","Orbitz Coupons","Travel Deals" , "Car Rental Deals", "Hotels Under $100", "Vacation Package Deals", "Last Minute Travel Deals","All our Destinations"];

addListArrFunc1(infoList);

function addListArrFunc1(listArr){
    listArr.forEach(function(element){
        var li= document.createElement("li");
        li.innerText=element;

        document.querySelector(".options").append(li);
    });

};

selectBtn.addEventListener("click", ()=>{
    wrapper.classList.toggle("active");
});



