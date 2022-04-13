let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let qty = document.getElementById("quantities");
let cart = document.querySelectorAll(".link-add-to-cart");
let chartNo = document.querySelector(".chart-no");
let products = [
  {
    name: "xx59_headphones",
    tag: "xx59",
    price: 899,
    incart: 0,
  },
  {
    name: "xx99_mark2",
    tag: "xx99mark2",
    price: 2999,
    incart: 0,
  },
  {
    name: "xx99_mark1",
    tag: "xx99mark1",
    price: 1750,
    incart: 0,
  },
  {
    name: "zx7_speakers",
    tag: "zx7",
    price: 3500,
    incart: 0,
  },
  {
    name: "zx9_speakers",
    tag: "zx9",
    price: 4500,
    incart: 0,
  },
  {
    name: "yz1_earphones",
    tag: "yx1",
    price: 599,
    incart: 0,
  },
];

plus.addEventListener("click", () => {
  qty.value = parseInt(qty.value) + 1;
});
minus.addEventListener("click", () => {
  qty.value = parseInt(qty.value) - 1;
  if (qty.value < 0) {
    qty.value = 0;
  }
});

let openChart = function () {
  chartNo.classList.remove("active");
};

for (const carts of cart) {
  carts.addEventListener("click", () => {
    cartNumbers();
    openChart();
  });
}

function onloadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".chart span").textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".chart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".chart span").textContent = 1;
  }
}

onloadCartNumbers();
