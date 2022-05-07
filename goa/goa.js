var dataGoa = [
  {
    imgGoa:
      "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/530000/523000/522986/ec1730f3_b.jpg",

    hotelName: "Goa Marriott resort & Spa",
    hotelLocation: "panji",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 172,
    rating: 4.6,
  },
  {
    imgGoa:
      "https://images.trvl-media.com/hotels/78000000/77810000/77808200/77808183/5d425460.jpg?impolicy=resizecrop&rw=455&ra=fit",

    hotelName: "Adam's Beach Resort by Banda Trips",
    hotelLocation: "Baga",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 272,
    rating: 4.4,
  },
  {
    imgGoa:
      "https://images.trvl-media.com/hotels/3000000/2520000/2516300/2516280/e50e4ee7.jpg?impolicy=resizecrop&rw=455&ra=fit",

    hotelName: "Novatel Goa Dona Sylvia Hotel",
    hotelLocation: "Cavelossim",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 89,
    rating: 3.6,
  },
  {
    imgGoa:
      "https://images.trvl-media.com/hotels/25000000/24050000/24041500/24041444/e676e1e5.jpg?impolicy=resizecrop&rw=455&ra=fit",

    hotelName: "Azaya Beach Resort",
    hotelLocation: "Benaulim",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 164,
    rating: 4.1,
  },
  {
    imgGoa:
      "https://images.trvl-media.com/hotels/1000000/670000/663700/663615/5bb5e9f8.jpg?impolicy=resizecrop&rw=455&ra=fit",

    hotelName: "Taj Exotic Resort & Spa, Goa",
    hotelLocation: "Benaulim",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 576,
    rating: 4.7,
  },
  {
    imgGoa:
      "https://images.trvl-media.com/hotels/1000000/440000/438400/438378/bdbe16ac.jpg?impolicy=resizecrop&rw=455&ra=fit",

    hotelName: "The Leela Goa",
    hotelLocation: "Cavelossim",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 272,
    rating: 4.2,
  },
  {
    imgGoa:
      "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24060000/24057300/24057290/7d26f557_b.jpg",

    hotelName: "Hilton Goa Resort",
    hotelLocation: "Saipem",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable ",
    price: 143,
    rating: 3.9,
  },
  {
    imgGoa:
      "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/16000000/15520000/15518800/15518705/61ac74e1_b.jpg",

    hotelName: "Fairfield By Marriott Goa Anjuna",
    hotelLocation: "Anjuna",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 68,
    rating: 3.2,
  },
  {
    imgGoa:
      "https://images.trvl-media.com/hotels/20000000/19220000/19218500/19218418/f0a9d804.jpg?impolicy=resizecrop&rw=455&ra=fit",

    hotelName: "Le Meridien Goa, Calangute",
    hotelLocation: "Calangute",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 105,
    rating: 3.3,
  },
  {
    imgGoa:
      "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/67000000/66040000/66031300/66031217/d7b52c39_b.jpg",

    hotelName: "The Westin Goa",
    hotelLocation: "Anuja",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 167,
    rating: 3.8,
  },
  {
    imgGoa:
      "https://images.trvl-media.com/hotels/47000000/46210000/46205200/46205118/1583475f.jpg?impolicy=resizecrop&rw=455&ra=fit",

    hotelName: "Taj Resort & Convention Center, Goa",
    hotelLocation: "Dona Paula",
    hotelDetail:
      "Situated on the edge of the Miramar beach with oicturesque views. enjoy luxury services coupled with warm award-wining hospitality",
    refundTag: "Fully refundable Reserve now, pay latter",
    price: 247,
    rating: 4.5,
  },
];

var hotel = document.querySelector("#hotel");

display(dataGoa);

function display(dataGoa) {
  hotel.innerHTML = "";
  dataGoa.forEach(function (elem) {
    var hotelBox = document.createElement("div");
    var hotelimg = document.createElement("img");
    hotelimg.setAttribute("src", elem.imgGoa);
    var innerbox = document.createElement("div");
    var nam = document.createElement("h3");
    nam.innerText = elem.hotelName;
    var location = document.createElement("p");
    location.innerText = elem.hotelLocation;
    var detail = document.createElement("p");
    detail.innerText = elem.hotelDetail;

    var costBox = document.createElement("div");
    var ratting = document.createElement("p");
    ratting.innerText = elem.rating;
    var cost = document.createElement("p");
    cost.innerText = "$" + elem.price;
    costBox.append(ratting, cost);
    var refund = document.createElement("p");
    refund.innerText = elem.refundTag;
    refund.setAttribute("class", "refund");
    innerbox.append(nam, location, detail, refund, costBox);
    hotelBox.append(hotelimg, innerbox);
    hotel.append(hotelBox);
  });
}

var ratingSort = document.querySelector("#change");

ratingSort.addEventListener("change", sortfunction);

function sortfunction() {
  var x = ratingSort.value;
  if (x == "None") {
    display(dataGoa);
    window.location.reload();
  } else if (x == "rating") {
    dataGoa.sort(function (a, b) {
      return b.rating - a.rating;
    });
    display(dataGoa);
  }

  if (x == "price") {
    dataGoa.sort(function (a, b) {
      return a.price - b.price;
    });
    display(dataGoa);
  }
  if (x == "price1") {
    dataGoa.sort(function (a, b) {
      return b.price - a.price;
    });
    display(dataGoa);
  }
}
