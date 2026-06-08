const task_button = document.getElementById("task-button")
const task_input = document.getElementById("task-input")
const tasks_container = document.getElementById("task-container")

let todos = window.todoAPI.loadTodos().then((t) => {
    todos = t

    for (t in todos){
        addTodoElement(todos[t])
    }
});


function removeTodoJson(text) {
    todos.splice(todos.indexOf(text),1)
    window.todoAPI.saveTodos(todos);
}

function addTodoElement(text){
    let task_node = document.createElement("div")
    task_node.id = "task"

    let p_node = document.createElement("p")
    p_node.textContent = text

    let x_node = document.createElement("button")
    x_node.textContent = "x"

    task_node.appendChild(p_node)
    task_node.appendChild(x_node)

    task_input.value = ""

    tasks_container.append(task_node)

    x_node.addEventListener("click", async () => {
        removeTodoJson(text)
        task_node.remove();
    })
}

function addTodoJson(text) {
    todos.push(text)
    window.todoAPI.saveTodos(todos);
}

task_button.addEventListener("click", async () => {
    let task_value = task_input.value
    if (task_value === ""){
        return;
    }
    
    addTodoElement(task_value)
    addTodoJson(task_value)
});