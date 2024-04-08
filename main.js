const addTaskButton = document.getElementById("addTask");
const taskInput = document.querySelector(".input-container input");
const taskList = document.getElementById("taskList");
const addButtonContainer = document.querySelector(".input-container button");
const clearInputButton = document.querySelector(".fa-regular.fa-circle-xmark");
const inputGroup = document.querySelector(".input-group");

addTaskButton.addEventListener("click", function () {
    if (inputGroup.style.display === "none") {
        inputGroup.style.display = "block";
    } else {
        addTask();
    }
});
