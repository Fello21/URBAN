const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (input.value) {
    localStorage.setItem("name", input.value);
    alert(`Имя ${input.value} сохранено`);
    input.value="";
  }else alert("Вы ничего не ввели")
});

if (localStorage.length > 0) {
  let userName = localStorage.getItem("name")
  alert(`Привет, ${userName}`);
}