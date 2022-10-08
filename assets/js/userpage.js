import { localStorageService } from "./service.js";

// body onload
document.querySelector("body").onload = function () {
  let arrs = localStorageService.get("list-items")
    ? localStorageService.get("list-items")
    : [];

  menu__list.innerHTML = arrs
    .map(
      (arr) => `
          <div class="menu__card">
              <div class="menu__card-img">
              <img
                  src="${arr.imageUser}"
                  alt=""
              />
              </div>
              <div class="menu__card-decs">
              <h3>${arr.foodName}</h3>
              <p>
                  ${arr.decs}
              </p>
              <div class="price">
                  <p>${arr.typeFood}</p>
                  <p>${arr.price}</p>
              </div>
              </div>
      </div>
  `
    )
    .join("");
};

// handle filter food
const listItem = document.querySelectorAll(".nav-item");
const menu__list = document.querySelector(".menu__list");

listItem.forEach((element) => {
  element.onclick = function () {
    if (this.innerText == "Tất cả") {
      handleActive(this);
      let arrs = localStorageService.get("list-items")
        ? localStorageService.get("list-items")
        : [];

      menu__list.innerHTML = arrs
        .map(
          (arr) => `
                <div class="menu__card">
                    <div class="menu__card-img">
                    <img
                        src="${arr.imageUser}"
                        alt=""
                    />
                    </div>
                    <div class="menu__card-decs">
                    <h3>${arr.foodName}</h3>
                    <p>
                        ${arr.decs}
                    </p>
                    <div class="price">
                        <p>${arr.typeFood}</p>
                        <p>${arr.price}</p>
                    </div>
                    </div>
            </div>
        `
        )
        .join("");
    }

    if (this.innerText == "Tráng miệng") {
      handleActive(this);
      let arrs = localStorageService.get("list-items")
        ? localStorageService.get("list-items")
        : [];

      const listFood = arrs.filter((item) => item.typeFood == "Tráng miệng");

      menu__list.innerHTML = listFood
        .map(
          (arr) => `
                <div class="menu__card">
                    <div class="menu__card-img">
                    <img
                        src="${arr.imageUser}"
                        alt=""
                    />
                    </div>
                    <div class="menu__card-decs">
                    <h3>${arr.foodName}</h3>
                    <p>
                        ${arr.decs}
                    </p>
                    <div class="price">
                        <p>${arr.typeFood}</p>
                        <p>${arr.price}</p>
                    </div>
                    </div>
            </div>
        `
        )
        .join("");
    }
    if (this.innerText == "Soup") {
      handleActive(this);
      let arrs = localStorageService.get("list-items")
        ? localStorageService.get("list-items")
        : [];

      const listFood = arrs.filter((item) => item.typeFood == "Soup");

      menu__list.innerHTML = listFood
        .map(
          (arr) => `
                <div class="menu__card">
                    <div class="menu__card-img">
                    <img
                        src="${arr.imageUser}"
                        alt=""
                    />
                    </div>
                    <div class="menu__card-decs">
                    <h3>${arr.foodName}</h3>
                    <p>
                        ${arr.decs}
                    </p>
                    <div class="price">
                        <p>${arr.typeFood}</p>
                        <p>${arr.price}</p>
                    </div>
                    </div>
            </div>
        `
        )
        .join("");
    }
    if (this.innerText == "Đồ nướng") {
      handleActive(this);
      let arrs = localStorageService.get("list-items")
        ? localStorageService.get("list-items")
        : [];

      const listFood = arrs.filter((item) => item.typeFood == "Đồ nướng");

      menu__list.innerHTML = listFood
        .map(
          (arr) => `
                <div class="menu__card">
                    <div class="menu__card-img">
                    <img
                        src="${arr.imageUser}"
                        alt=""
                    />
                    </div>
                    <div class="menu__card-decs">
                    <h3>${arr.foodName}</h3>
                    <p>
                        ${arr.decs}
                    </p>
                    <div class="price">
                        <p>${arr.typeFood}</p>
                        <p>${arr.price}</p>
                    </div>
                    </div>
            </div>
        `
        )
        .join("");
    }

    if (this.innerText == "Nước uống") {
      handleActive(this);
      let arrs = localStorageService.get("list-items")
        ? localStorageService.get("list-items")
        : [];

      const listFood = arrs.filter((item) => item.typeFood == "Nước uống");

      menu__list.innerHTML = listFood
        .map(
          (arr) => `
                <div class="menu__card">
                    <div class="menu__card-img">
                    <img
                        src="${arr.imageUser}"
                        alt=""
                    />
                    </div>
                    <div class="menu__card-decs">
                    <h3>${arr.foodName}</h3>
                    <p>
                        ${arr.decs}
                    </p>
                    <div class="price">
                        <p>${arr.typeFood}</p>
                        <p>${arr.price}</p>
                    </div>
                    </div>
            </div>
        `
        )
        .join("");
    }
  };
});

// handle active
function handleActive(item) {
  document.querySelector(".nav-item.active").classList.remove("active");
  item.classList.add("active");
}

// search
const searchIpt = document.querySelector(".search-ipt");
let dataFood = localStorageService.get("list-items")
  ? localStorageService.get("list-items")
  : [];

searchIpt.onkeyup = function (e) {
  let arrSearch = [];
  const txt = e.target.value.toLowerCase();
  const isActive = document.querySelector(".nav-item.active");

  if (isActive.innerText == "Tất cả") {
    for (let i = 0; i < dataFood.length; i++) {
      const testText = dataFood[i].foodName.toLowerCase();
      if (testText.indexOf(txt) > -1) {
        arrSearch.push(dataFood[i]);
      }
    }

    menu__list.innerHTML = arrSearch
      .map(
        (arr) => `
            <div class="menu__card">
                <div class="menu__card-img">
                <img
                    src="${arr.imageUser}"
                    alt=""
                />
                </div>
                <div class="menu__card-decs">
                <h3>${arr.foodName}</h3>
                <p>
                    ${arr.decs}
                </p>
                <div class="price">
                    <p>${arr.typeFood}</p>
                    <p>${arr.price}</p>
                </div>
                </div>
        </div>
    `
      )
      .join("");
  } else {
    for (let i = 0; i < dataFood.length; i++) {
      const testText = dataFood[i].foodName.toLowerCase();
      if (
        testText.indexOf(txt) > -1 &&
        dataFood[i].typeFood == isActive.innerText
      ) {
        arrSearch.push(dataFood[i]);
      }
    }

    menu__list.innerHTML = arrSearch
      .map(
        (arr) => `
            <div class="menu__card">
                <div class="menu__card-img">
                <img
                    src="${arr.imageUser}"
                    alt=""
                />
                </div>
                <div class="menu__card-decs">
                <h3>${arr.foodName}</h3>
                <p>
                    ${arr.decs}
                </p>
                <div class="price">
                    <p>${arr.typeFood}</p>
                    <p>${arr.price}</p>
                </div>
                </div>
        </div>
    `
      )
      .join("");
  }
};
