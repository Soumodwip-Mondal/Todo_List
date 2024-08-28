const msg = document.getElementById("TodoMessage");
const add = document.getElementById("add");
const todoList = document.getElementById("todolist")
const done = document.querySelectorAll(".todo input")

const addTodo = (todoText) => {
    if(todoText !== ""){
        const newTodo = document.createElement("div");
        newTodo.className = "todo";

        const todoPara = document.createElement("p");
        todoPara.textContent = todoText;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = () => {
                newTodo.style.backgroundColor = (checkbox.checked) ? "#c6e9a7" : "";
                todoPara.style.textDecoration = (checkbox.checked) ? "line-through" : "";
        };
        newTodo.appendChild(checkbox);

        
        newTodo.appendChild(todoPara);

        const delButton = document.createElement("button");
        delButton.className = "del";
        delButton.textContent = "delete";
        delButton.onclick = (e) => {
            e.preventDefault();
            todoList.removeChild(newTodo);
        };
        newTodo.appendChild(delButton);

        todoList.appendChild(newTodo);

        msg.value = "";
    }
}

add.onclick = (e) => {
    e.preventDefault();
    addTodo(msg.value)
}

