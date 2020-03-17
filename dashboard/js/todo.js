const todoform = document.querySelector(".todo-form");
const todoinput = document.querySelector(".todo-input"); 
const todolist = document.querySelector(".todo-list");

const TODO = "todo";
let todo = [];

function deleteTodo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    todolist.removeChild(li);

    const rm = todo.filter(function(todos) {
        return todos.id !== parseInt(li.id);
    });

    todo = rm;
    saveTodo();
}

function saveTodo() {
    localStorage.setItem(TODO, JSON.stringify(todo));
}

function loadTodo(current) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todo.length + 1;
    
    deleteBtn.innerText = "delete";
    deleteBtn.addEventListener("click", deleteTodo);
    span.innerText = current;

    li.appendChild(deleteBtn);
    li.appendChild(span);
    li.id = newId;
    todolist.appendChild(li);

    const obj = {
        text: current,
        id: newId
    };

    todo.push(obj);
    saveTodo();
}

function submitHandler(event) {
    event.preventDefault();
    const current = todoinput.value;
    loadTodo(current);
    todoinput.value = "";
}

function getTodo() {
    const load = localStorage.getItem(TODO);

    if (load != null) {
        const parsed = JSON.parse(load);
        parsed.forEach(function(todo) {
            loadTodo(todo.text);
        });
    }
}

function initTodo() {
    getTodo();
    todoform.addEventListener("submit", submitHandler);
}

initTodo();