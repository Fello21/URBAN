let listProds;
let filterList;
const main = document.querySelector(".all-products");
let counter = 0;
let btnDel;
const filterValue = document.querySelector(".filter-value");
const btnFilter = document.querySelector(".filter-btn");

(async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    listProds = await response.json();
  } catch (err) {
    console.log("Ошибка:" + err);
  }
  console.log(listProds);
  
  addAllAboutCards(listProds);
})();

btnFilter.addEventListener("click", async () => {
  try {
    let response = await fetch(
      `https://fakestoreapi.com/products/category/${filterValue.value}`
    );
    filterList = await response.json();
    console.log(filterList);
  } catch (err) {
    console.log("Ошибка:" + err);
  }

  main.innerHTML = "";
  filterValue.value = "";
  addAllAboutCards(filterList);
});


function addAllAboutCards(productList) {
  let initialCounter = counter + 6;
  for (let i = 0; i < initialCounter; i++) {
    const cardProd = document.createElement("div");
    cardProd.classList.add("card-product");
    cardProd.innerHTML = `
          <span class="card-product__del">&times;</span>
          <img src=${productList[i].image} alt="Product figure" class="card-product__img">
          <h2 class="card-product__name">${productList[i].title}</h2>
          <span class="card-product__price">${productList[i].price} $</span>
          <p class="card-product__disc">${productList[i].description}</p>`;

    main.appendChild(cardProd);
    btnDel = document.querySelectorAll(".card-product__del");
    btnDel[i].addEventListener("click", () => {
      fetch(`https://fakestoreapi.com/products/${i}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => alert("Product seccessfully delete"));
      btnDel[i].parentElement.remove();
    });

    counter++;
  }
  const btnMore = document.createElement("button");
  btnMore.classList.add("btn-more");
  btnMore.innerText = "Show more";
  main.appendChild(btnMore);
  btnMore.addEventListener("click", showMore);
  function showMore() {
    let initialCounter = counter + 5;
    for (let i = counter; i <= initialCounter; i++) {
      const cardProd = document.createElement("div");
      cardProd.classList.add("card-product");
      cardProd.innerHTML = `
        <span class="card-product__del">&times;</span>
        <img src="${productList[i].image}" alt="Product figure" class="card-product__img">
        <h2 class="card-product__name">${productList[i].title}</h2>
        <span class="card-product__price">${productList[i].price} $</span>
        <p class="card-product__disc">${productList[i].description}</p>`;

      main.insertBefore(cardProd, btnMore);

      btnDel = document.querySelectorAll(".card-product__del");
      btnDel[i].addEventListener("click", () => {
        fetch(`https://fakestoreapi.com/products/${i}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => alert("Product seccessfully delete"));
        btnDel[i].parentElement.remove();
      });

      counter++;
      if (counter == productList.length) {
        btnMore.classList.add("hidden");
        break;
      }
    }
  }
}
