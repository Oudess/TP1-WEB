document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("todoName").value.trim();
    let content = document.getElementById("todoContent").value.trim();
    addTodo(name, content);
    document.getElementById("todoForm").reset();
});

function addTodo(name, content) {
    let todoList = document.getElementById("todoList");
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("list-group-item");

    let todoContentDiv = document.createElement("div");
    todoContentDiv.innerHTML = `<strong>${name}</strong>: ${content}` +` <i class="fa-solid fa-trash-can" id="deletebtn"></i>`;
    todoDiv.appendChild(todoContentDiv);
    todoList.appendChild(todoDiv);
    document.getElementById("deletebtn").addEventListener("click",function(){
todoDiv.remove();
});

}