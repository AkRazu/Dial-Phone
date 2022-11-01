// JSON data section
const PhoneSearch = (phoneText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${phoneText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.data, dataLimit));
  spinnerAdd();
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

// spinner
const spinnerAdd = (value) => {
  const spinnerId = document.getElementById("spinner");
  if (value === true) {
    spinnerId.classList.remove("d-none");
  } else {
    spinnerId.classList.add("d-none");
  }
};
