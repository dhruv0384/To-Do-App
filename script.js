let newTask = document.getElementById("newTask");
let addBtn = document.getElementById("addBtn");
let taskLst = document.getElementById("taskLst");

addBtn.addEventListener("click", addTask);

function addTask(){
    let taskText = newTask.value.trim();
    if(taskText == ""){
        alert("Task cannot be empty");
        return;
    }
    let li = document.createElement("li");

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.addEventListener("click", completeTask);

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteTask);

    li.appendChild(completeBtn);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    taskLst.appendChild(li);
    newTask.value = "";
}

function completeTask(event){
    let li = event.target.parentElement;

    if (li.classList.contains("completed")) {
        li.classList.remove("completed");
    }
    else{
        li.classList.add("completed");
    }
}

function deleteTask(event){
    let li = event.target.parentElement;
    li.remove();
}