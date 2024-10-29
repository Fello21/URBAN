let tasks = [];
let nameTask;
let trackerName = false;

function addTask(writtenTask) {
  nameTask = writtenTask;
  if (nameTask) {
    tasks.push({
      name: nameTask,
      completed: false,
    });
  } else alert("Название задачи не может быть пустым");
}

function markCompleted(writtenTask) {
  nameTask = writtenTask;
    tasks.forEach((item) => {
      if (item.name == nameTask) {
        item.completed = true;
        trackerName = true;
      }
    });
    if (trackerName == false) {
      alert("Такой задачи нет");
    }
  trackerName = false;
}

function deleteTask(writtenTask) {
  nameTask = writtenTask;
  if (nameTask) {
    tasks.forEach((item) => {
      if (item.name == nameTask) {
        tasks = tasks.filter((item) => item.name !== nameTask);
        trackerName = true;
      }
    });
  }
  if (trackerName == false) {
    alert("Такой задачи нет");
  }
  trackerName = false;
}

function showList() {
  tasks.forEach((item) => {
    item.completed
      ? console.log(item.name + " - Выполнено")
      : console.log(item.name + " - Невыполнено");
  });
}

addTask("Выучить JS");
addTask("Купить продукты");
addTask("Сделать домашнее задание");

showList();
markCompleted("Купить продукты");
console.log("_____________________");
showList();
console.log("_____________________");

deleteTask("Сделать домашнее задание");
showList();