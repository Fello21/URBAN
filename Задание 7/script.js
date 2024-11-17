const burger = document.querySelector(".burger__button");
const nav = document.querySelector(".navigation");
const nav1 = document.querySelector(".navigation__nav1");
const nav2 = document.querySelector(".navigation__nav2")

burger.addEventListener("click", ()=>{
  nav.classList.remove("hidden");
  nav1.classList.remove("disable");
  nav2.classList.remove("disable");
})

nav.addEventListener('click', (e)=>{

  const style = getComputedStyle(e.target, "::after");
  const afterW = parseInt(style.width);
  const afterH = parseInt(style.height);

  const relativeX = e.clientX - e.target.getBoundingClientRect().left;
  const relativeY = e.clientY - e.target.getBoundingClientRect().top;

  if (relativeX < e.target.offsetWidth-20 && relativeX >e.target.offsetWidth-afterW-20 && relativeY > 20 && relativeY < 20+afterH) {
    nav.classList.add("hidden");
  }
  
})