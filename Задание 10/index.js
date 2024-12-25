let listProds;
const body = document.querySelector("body");
let counter = 0;

(async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
  } catch (err) {
    console.log("Ошибка:" + err);
  }
  console.log(listProds);
  let initialCounter = counter + 6;
  for (let i = 0; i < initialCounter; i++) {
    const cardProd = document.createElement("div");
    cardProd.classList.add("card-product");
    cardProd.innerHTML = `
        <img src=${listProds[i].image} alt="Product figure" class="card-product__img">
        <h2 class="card-product__name">${listProds[i].title}</h2>
        <span class="card-product__price">${listProds[i].price}</span>
        <p class="card-product__disc">${listProds[i].description}</p>`;

    body.appendChild(cardProd);

    counter++;
  }
  const btnMore = document.createElement("button");
  btnMore.classList.add("btn-more");
  btnMore.innerText = "Show more";
  body.appendChild(btnMore);
  btnMore.addEventListener("click", showMore);
  function showMore() {
    let initialCounter = counter + 6;
    for (let i = counter; i < initialCounter; i++) {
      const cardProd = document.createElement("div");
      cardProd.classList.add("card-product");
      cardProd.innerHTML = `
      <span class="card-product__del">&times;</span>
      <img src="${listProds[i].image}" alt="Product figure" class="card-product__img">
      <h2 class="card-product__name">${listProds[i].title}</h2>
      <span class="card-product__price">${listProds[i].price}</span>
      <p class="card-product__disc">${listProds[i].description}</p>"`;

      body.insertBefore(cardProd, btnMore);
      counter++;
    }
  }
  const btnDel = document.querySelector(".card-product__del");
  btnDel.addEventListener("click", ()=>{
    fetch(`https://fakestoreapi.com/products`,{
      method:"DELETE"
    })
    .then(res=>res.json)
    .then(json=>console.log(json))
  })
})();
