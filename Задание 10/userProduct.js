const nameProd = document.querySelector("#name");
const priceProd = document.querySelector("#price");
const descProd = document.querySelector("#desc");
const categProd = document.querySelector("#categ");
const btnAdd = document.querySelector(".card-creater__add");

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: nameProd.value,
      price: priceProd.value,
      description: descProd.value,
      category: categProd.value,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
});