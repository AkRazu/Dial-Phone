const search = (search, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => searchResult(data.data, dataLimit));
};

const searchResult = (allPhone, dataLimit) => {
  // allPhone
  const phoneDiv = document.getElementById("PhoneSection");
  phoneDiv.textContent = "";
  if (dataLimit && allPhone.length > 10) {
    allPhone = allPhone.slice(0, 10);
    showAllBtn(true);
  } else {
    showAllBtn();
  }

  //   phone not found
  const phoneNotFount = document.getElementById("notFound");
  if (allPhone.length === 0) {
    phoneNotFount.classList.remove("d-none");
  } else {
    phoneNotFount.classList.add("d-none");
  }

  allPhone.map((element) => {
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-12");
    div.innerHTML = `
          <div class="card" >
            <img src="${element.image}" class="w-50 m-auto mt-2" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${element.brand}</h5>
              <p class="card-text">
                ${element.phone_name}
              </p>
              <button onClick="detailsDataPhon('${element.slug}')" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
            </div>
          </div>
          `;
    phoneDiv.appendChild(div);
  });
};

const searchProcess = (dataLimit) => {
  const textField = document.getElementById("searchInput");
  const searchText = textField.value;
  search(searchText, dataLimit);
  textField.value = "";
};
document.getElementById("searchInput").addEventListener("keypress", (e) => {
  if (e.key === "enter") {
    e.searchResult();
  }
});

document.getElementById("searchBtn").addEventListener("click", function () {
  searchProcess(10);
});

document.getElementById("showAll").addEventListener("enter", () => {
  searchResult();
});

const detailsDataPhone = (details) => {
  const url = `https://openapi.programming-hero.com/api/phone/${details}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => phoneDetails(data.data));
};
const phoneDetails = (details) => {
  const displayDetails = document.getElementById("detailsPhone");
  displayDetails.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add('modal-dialog');
  div.innerHTML = `

    `;
  displayDetails.appendChild(div);
};

const showAllBtn = (commend) => {
  const btnShow = document.getElementById("showAll");
  if (commend == true) {
    btnShow.classList.remove("d-none");
  } else {
    btnShow.classList.add("d-none");
  }
};
