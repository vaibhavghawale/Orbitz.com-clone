document.querySelector("#covid-close").addEventListener("click", function(){
    event.target.parentNode.remove();
});



var getItem = JSON.parse(localStorage.getItem("reservation-details")) || [];

document.querySelector("#reserved-hotel-img").src = "https://images.trvl-media.com/hotels/9000000/8740000/8738300/8738241/9fdc0ad2_l.jpg";
document.querySelector("#room-price").innerText = "$92.29";
document.querySelector("#tax").innerText = "$11.07";

var total_price = 92.29+11.07;
var cardNumber = "4598751562368695";

document.querySelector("#total-price").innerText = "$" + total_price.toFixed(2);

document.querySelector("#submit").addEventListener("click", function(){
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