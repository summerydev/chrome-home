'use strict'
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newToDo) {
  const p = document.createElement("p");
  p.id = newToDo.id; // li.id => html id="date.now()"
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "chb");
  const label = document.createElement("label");
  label.setAttribute("for", "chb");
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.classList.add("button-toDo");
  button.innerText = "x";
  button.addEventListener("click", deleteToDo);
  p.appendChild(checkbox);
  p.appendChild(label);
  p.appendChild(span);
  p.appendChild(button);
  toDoList.appendChild(p);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
      text: newToDo,
      id: Date.now()
  };
  toDos.push(newToDoObj);
  paintTodo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}