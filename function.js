function addCard(object) {
  let parent = document.getElementById("cardContainer");
  let stringified = JSON.stringify(object);
  console.log(stringified);
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "mb-3", "w-75", "mx-auto");
  cardDiv.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
      <img
        src=${object.imageUrl}
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Transport Mode: <span>${object.vehicle}</span></h5>
        <p class="card-text">
          ${object.description}
        </p>
        <p class="card-text">
          <small class="text-muted">Fare-per-kilo: ${object.farePerKilo}</small>
          <small class="text-muted ms-2">Capacity: ${object.capacity}</small>
        </p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
        data-bs-target=".exampleModal" onclick='handleModal(${stringified})'>BOOK NOW</div>
      </div>
    </div>
  
  `;
  parent.appendChild(cardDiv);
}
function handleModal(object) {
  let parent = document.getElementById("mbody");
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "w-100", "mx-auto");
  cardDiv.innerHTML = `
    <img src="${object.imageUrl}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title">${object.vehicle}</h4>
      <small class="text-muted ms-4">Fare-per-kilo:${object.farePerKilo}</small>
      <small class="text-muted ms-4">Capacity:${object.capacity} </small>
      <p class="mt-2">Fare: <small id="fare"></small></p>
      <p>Tax: <small id="tax"></small></p>
      <p>Total-cost: <small id="totalCost"></small></p>
  
      <div class="input-group">
        <input
          type="number"
          aria-label="First name"
          class="form-control"
          placeholder="distance in km"
          id="distance"
          
        />
        <input
          type="number"
          aria-label="Last name"
          class="form-control"
          id="vehicleNum"
          placeholder="number of vehicles"
          
        />
        <span class="input-group-text" type="button" onclick='calc(${JSON.stringify(
          object
        )})'>Submit</span>
      </div>
    </div>
  
      `;
  parent.appendChild(cardDiv);
}
function calc(object) {
  let distance = parseInt(document.getElementById("distance").value);
  let vehicleNUm = parseInt(document.getElementById("vehicleNum").value);
  let fareE = document.getElementById("fare");
  let taxE = document.getElementById("tax");
  let totalCostE = document.getElementById("totalCost");
  let alert = document.getElementById("alert");

  if (isNaN(distance) || isNaN(vehicleNUm)) {
    alert.classList.remove("d-none");
    console.log(document.getElementById("alert").classList);
  } else {
    if (alert.classList.contains("d-none") == false) {
      alert.classList.add("d-none");
    }
    let fare = distance * object.farePerKilo * vehicleNUm;
    let tax = parseInt((2.5 * fare) / 100);
    let totalCost = fare + tax;
    fareE.innerText = fare;
    taxE.innerText = tax;
    totalCostE.innerText = totalCost;
    document.getElementById("distance").value = "";
    document.getElementById("vehicleNum").value = "";
  }
}
