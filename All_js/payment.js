
var getItem = JSON.parse(localStorage.getItem("reservation-details")) || [];

let covidMessageDiv = document.querySelector("#covid-close");
let reservedHotelImage = document.querySelector("#reserved-hotel-img");
let roomPrice = document.querySelector("#room-price");
let tax = document.querySelector("#tax");
let totalPrice = document.querySelector("#total-price");
let hotelName = document.querySelector("#reserved-hotel-name");

let submitButton = document.querySelector("#submit");

var cardNumber = "4598751562368695";
// var total_price = 92.29+11.07;


covidMessageDiv.addEventListener("click", function(){
    event.target.parentNode.remove();
});


reservedHotelImage.src = "https://images.trvl-media.com/hotels/9000000/8740000/8738300/8738241/9fdc0ad2_l.jpg";

roomPrice.innerText = "$92.29";
tax.innerText = "$11.07";
var total_price = 92.29+11.07;


totalPrice.innerText = "$" + total_price.toFixed(2);
hotelName.innerText = "Vivanta New Delhi, Dwarka";

submitButton.addEventListener("click", function(){
    verification();
});


function verification(){

    var name = document.querySelector("#name").value;
    var cardNum = document.querySelector("#card-number").value;
    var expiryMonth = document.querySelector("#expiry_month").value;
    var expiryYear = document.querySelector("#expiry_year").value;
    var sCode = document.querySelector("#security-code").value;
    var zipCode = document.querySelector("#zip-code").value;

    if(name == "" || cardNum == "" || expiryMonth == null || expiryYear == null || sCode == "" || zipCode == "")
    {
        alert("Please fill all the details");
    }
    else
    {
        if(cardNum == cardNumber)
        {
            alert("Booking Success!");
            window.location.href = "index.html";
        }
        else
        {
            alert("wrong Details, please fill again");
            window.location.reload();
        }
    }
}

// document.querySelector("#sign-in-div > a").addEventListener("click", function(){
//     if(document.querySelector("#hidden-div").style.display === "none")
//     {
//         document.querySelector("#hidden-div").style.display = "block";
//     }
//     else
//     {
//         document.querySelector("#hidden-div").style.display = "none";
//     }
// });