// JSON data section
const PhoneSearch = (phoneText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${phoneText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data.data, dataLimit));
};

// Main data section
const displayData = (data, dataLimit) => {
  const phoneDiv = document.getElementById("PhoneSection");
  phoneDiv.textContent = "";
  //   data slice
  spinnerAdd();
  if (dataLimit && data.length > 10) {
    data = data.slice(0, 10);
    showData(true);
  } else {
    showData();
  }

  // invalid data input
  const warning = document.getElementById("notFound");
  if (data.length === 0) {
    warning.classList.remove("d-none");
  } else if (data === "") {
    warning.classList.remove("d-none");
  } else {
    warning.classList.add("d-none");
  }

  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.classList.add("col-sm-12");
    div.innerHTML = `
    <div class="card">
    <img src="${element.image}" class="w-50 m-auto mt-4" alt="...">
    <div class="card-body">
      <h5 class="card-title">Brand : ${element.brand}</h5>
      <p>Model : ${element.phone_name}</p>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button onClick="moreDetails('${element.slug}')" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
    </div>
    </div>
    `;
    phoneDiv.appendChild(div);
  });
};

// More Details
const moreDetails = (value) => {
  spinnerAdd(true);
  const url = `https://openapi.programming-hero.com/api/phone/${value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => detailsDisplay(data.data));
};

const detailsDisplay = (details) => {
  console.log(details);
  const modelHeader = document.getElementById("modelTitle");
  modelHeader.innerText = `${details.name}`;
  const detailsPhone = document.getElementById("detailModel");
  detailsPhone.innerHTML = `
  <p>Storage : ${details.mainFeatures.storage}</p>
  <p>Display : ${details.mainFeatures.displaySize}</p>
  <p>ChipSet : ${details.mainFeatures.chipSet}</p>
  <p>Memory : ${details.mainFeatures.memory}</p>
  <h5>More Details</h5>
  <p>WLAN: ${details.others.WLAN}</p>
  <p>Bluetooth : ${details.others.Bluetooth}</p>
  <p>GPS : ${details.others.GPS}</p>
  <p>NFC : ${details.others.NFC}</p>
  <p>Radio : ${details.others.Radio}</p>
  <p>USB : ${details.others.USB}</p>
  `;
};
// Input value
const searchValue = (dataLimit) => {
  const searchText = document.getElementById("searchInput").value;
  PhoneSearch(searchText, dataLimit);
  spinnerAdd(true);
};

// input data search
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchValue(10);
    }
  });

document.getElementById("searchBtn").addEventListener("click", function () {
  searchValue(10);
});
document.getElementById("showAll").addEventListener("click", function () {
  searchValue();
});
//
const showData = (value) => {
  const showAllBtn = document.getElementById("showAll");
  if (value === true) {
    showAllBtn.classList.remove("d-none");
  } else {
    showAllBtn.classList.add("d-none");
  }
};
// spinner
const spinnerAdd = (value) => {
  const spinnerId = document.getElementById("spinner");
  if (value === true) {
    spinnerId.classList.remove("d-none");
  } else {
    spinnerId.classList.add("d-none");
  }
};
