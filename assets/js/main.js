import { localStorageService } from "./service.js";
import { uploadImage } from "./api.js";

const btn_submit = document.querySelector(".btn_submit");
const formField = [
  "foodName",
  "quantity",
  "price",
  "typeFood",
  "image",
  "decs",
];

let arrs = localStorageService.get("list-items")
  ? localStorageService.get("list-items")
  : [];

btn_submit.onclick = (e) => {
  e.preventDefault();

  let obj = {
    foodName: "",
    quantity: "",
    typeFood: "",
  };

  if (validatiton(obj)) {
    arrs.push(obj);
    localStorageService.set("list-items", arrs);
    render();
    clearInput();
  }
};

// body onload start
document.querySelector("body").onload = () => {
  render();
};

// render ui
const tbody = document.querySelector("tbody");
function render() {
  let listReder = localStorageService.get("list-items")
    ? localStorageService.get("list-items")
    : [];
  tbody.innerHTML = listReder
    .map(
      (arr, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${arr.foodName}</td>
            <td>${arr.quantity}</td>
            <td>${arr.typeFood}</td>
            <td>
                <input type="checkbox" ${arr.quantity == 0 && "checked"} />
            </td>
        </tr>
    `
    )
    .join("");
}

// handle preview image
image.onchange = function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onloadend = function () {
    const result = uploadImage(
      "https://image-uploader-anhhtus.herokuapp.com/api/upload",
      reader.result
    );

    result.then((res) => {
      previewImage.src = res.secure_url;
    });
  };
};

// validate form
function validatiton(obj) {
  let isError = true;

  formField.forEach((field) => {
    let element = document.getElementById(field);

    if (field == "foodName") {
      if (element.value.trim().length < 10) {
        showError(field, "Ten mon an toi thieu 10 ki tu");
        isError = false;
      }
    }
    if (field == "quantity") {
      if (element.value.trim() < 0) {
        showError(field, "So luong phai la so nguyen khong am");
        isError = false;
      }
    }
    if (field == "price") {
      if (element.value.trim() < 0) {
        showError(field, "Gia phai la so nguyen khong am");
        isError = false;
      }
    }

    if (element.value.trim() === "") {
      let textEle = element.previousElementSibling.innerText;
      console.log(field);
      showError(field, `vui lòng thêm thông tin cho ${textEle}`);

      isError = false;
    }

    element.oninput = () => {
      showError(field, "");
    };

    if (isError) {
      obj[field] = element.value;
    }
  });
  if (Object.values(obj).includes("")) {
    return false;
  } else {
    return true;
  }
}

// clear input after render
function clearInput() {
  formField.forEach((field) => {
    document.getElementById(field).value = "";
  });
  previewImage.src = "";
}

// show error

function showError(field, message) {
  const ele = document.getElementById(field);
  ele.parentElement.querySelector(".error").innerText = message;
}
