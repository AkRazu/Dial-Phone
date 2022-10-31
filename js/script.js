const loadPhone = () => {
  const inputSearch = document.getElementById("searchInput");
  search(inputSearch.value);
  inputSearch.value = "";
};
const search = (inputValue) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => searchResult(data.data));
};
/* const responseData = () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=oppo`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => searchResult(data.data));
}; */
// responseData();
const searchResult = (phoneName) => {
  const phoneDiv = document.getElementById("PhoneSection");
  const removeBtn = document.getElementById("showAll");
  if (phoneName.length > 10) {
    phoneName.slice(0, 10).forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("col-md-3");
      div.classList.add("col-sm-12");
      div.innerHTML = `
            <div class="card" >
              <img src="${element.image}" class="w-25 m-auto mt-2" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${element.brand}</h5>
                <p class="card-text">
                  ${element.phone_name}
                </p>
                <a href="#" class="btn btn-primary">Details</a>
              </div>
            </div>
            `;
      phoneDiv.appendChild(div);
    });
    removeBtn.classList.remove("d-none");
  }
};

/* const showAllBtn = (commend) => {
  const btnShow = document.getElementById("showAll");
  if (commend == "true") {
    btnShow.classList.remove = "d-none";
  } else {
    btnShow.classList.add = "d-none";
  }
}; */
