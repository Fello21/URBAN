let filterValue = document.querySelector(".filter-value");
const btnFilter = document.querySelector(".filter-btn");

btnFilter.addEventListener("click", ()=>{
  async() => {
  try{
    await fetch(`https://fakestoreapi.com/products/categories/${filterValue.value}`);
  }
  catch(err){
    console.log("Ошибка:" + err);
  }
}
})

