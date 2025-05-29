let newTask = document.getElementById("newTask");
let addBtn = document.getElementById("addBtn");
let taskLst = document.getElementById("taskLst");

addBtn.addEventListener("click", addTask);

function addTask {
    if(newTask === ""){
        alert("Task cannot be empty");
        return;
    }
    let li = document.createElement("li");

    let completeBtn = document.createElement("button");
    let taskSpan = document.createElement("span");
    let deleteBtn = document.createElement("button");

    li.appendChild(completeBtn);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    taskLst.appendChild(li);
}