// var object={
//     vehicle:,
//     imageUrl:,
//     farePerKilo:,
//     capacity:,
//     description:,

var carObject = {
  vehicle: "Car",
  imageUrl: "./images/grahame-jenkins-p7tai9P7H-s-unsplash.jpg",
  farePerKilo: 3,
  capacity: 4,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit ",
};
var bikeObject = {
  vehicle: "Bike",
  imageUrl: "./images/harley-davidson-eeTJKC_wz34-unsplash.jpg",
  farePerKilo: 2,
  capacity: 2,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit ",
};
var busObject = {
  vehicle: "Bus",
  imageUrl: "./images/jonathan-borba-T5jzpRTVF1U-unsplash.jpg",
  farePerKilo: 7,
  capacity: 20,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit ",
};
addCard(carObject);
addCard(bikeObject);
addCard(busObject);
function searchOp() {
  document.getElementById("cardContainer").innerHTML = "";
  let search = document.getElementById("search");
  console.log(search.value);
  if (search.value.toLowerCase() == "car") {
    addCard(carObject);
  } else if (search.value.toLowerCase() == "bike") {
    addCard(bikeObject);
  } else if (search.value.toLowerCase() == "bus") {
    addCard(busObject);
  } else if (search.value.toLowerCase() == "") {
    addCard(carObject);
    addCard(bikeObject);
    addCard(busObject);
  } else {
    document.getElementById("cardContainer").innerHTML = "<p>Error<p>";
  }
}
