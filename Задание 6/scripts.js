const btnAdd = document.querySelector(".add");
const btnShowAll = document.querySelector(".showall");
const btnShowComp = document.querySelector(".showcompleted");
const btnShowUncomp = document.querySelector(".showuncompleted");
const input = document.querySelector("input");
const list = document.querySelector("ul");

btnAdd.addEventListener("click", () => {
  if (input.value) {
    const li = document.createElement("li");
    const btnDel = document.createElement("button");
    const btnDone = document.createElement("button");

    // Создание элементов li и button
    btnDone.textContent = "✓";
    btnDel.textContent = "-";
    li.textContent = input.value;

    // Добавление классов кнопкам в элементе li
    btnDel.classList.add("del");
    btnDone.classList.add("done");
    
    // Добавление стилей
    btnDone.style.margin="0 10px 0 100px";
    btnDel.style.height="23px";
    li.style.width="fit-content";
    li.style.marginBottom="10px"


    li.append(btnDone, btnDel);
    list.appendChild(li);

    // Функционал выделения выполненных задач
    btnDone.addEventListener("click", () => {
      const li = btnDel.closest("li");
      if (li.style.backgroundColor) {
        li.style.removeProperty("background-color");
        btnDone.textContent = "✓";
      } else {
        li.style.backgroundColor = "greenyellow";
        btnDone.textContent="⨉";
      };
      console.log("click");
    });

    // Функционал удаления задачи
    btnDel.addEventListener("click", () => {
      const li = btnDel.closest("li");
      li.remove();
    });
    input.value = "";
  } else alert("Название задае неданно");
});

// Показать все задачи
btnShowAll.addEventListener("click", () => {
  const elem = document.querySelectorAll("li");
  for (let item of elem) {
    item.style.display = "list-item";
  }
});

// Показать выполненные задачи
btnShowComp.addEventListener("click", () => {
  const elem = document.querySelectorAll("li");
  for (let item of elem) {
    if (item.style.backgroundColor) {
      item.style.display = "list-item";
    } else item.style.display = "none";
  }
});

// Показать невыполненные задачи
btnShowUncomp.addEventListener("click", () => {
  const elem = document.querySelectorAll("li");
  for (let item of elem) {
    if (!item.style.backgroundColor) {
      item.style.display = "list-item";
    } else item.style.display = "none";
  }
});
