// JSON data section
const PhoneSearch = (phoneText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${phoneText}`;
};

// Input value
const searchValue = (dataLimit) => {
  const searchText = document.getElementById("searchInput").value;
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
