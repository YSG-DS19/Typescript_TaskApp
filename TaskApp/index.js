"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var tasklst: string[] = [];
var flag = 0;
var tasklst = new Set();
// Function to add task
function addTask() {
    var task = document.getElementById("TaskName");
    var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var taskvalue = task.value;
    console.log(tasklst);
    // var flag = 0;
    //  for (let i = 0; i < tasklst.length; i++) {
    //   if (tasklst[i].trim() == taskvalue.trim()) {
    //     flag = 1;
    //     break;
    //   }
    if (taskvalue === "") {
        alert("Task-Name should not be empty");
        return 0;
    }
    if (task.value.trim() && tasklst.has(task.value.trim())) {
        alert("Task is already exists");
    }
    else {
        tr.innerHTML = "<th scope=\"row\"><input type=\"checkbox\" onchange= \"checkboxClick(this)\" class = 'checkbox' name=\"checkbox\" target=\"checkbox\"></th>  \n    <td><p class = 'task-name'>".concat(taskvalue, "</p></td>\n    <td><select class=\"form-select\"  aria-label=\"Default select example\"  onchange=\"selectValue(this)\" >\n        <option selected>Choose Status</option>\n        <option value=\"To Start\">To Start</option>\n        <option value=\"In Progress\">In Progress</option>\n        <option value=\"Completed\">Completed</option>\n      </select></td>\n    <td><button type=\"button\" onclick=\"removeTask(this)\" class=\"btn btn-danger\">Delete Task</button></td>");
        tbody.appendChild(tr);
        tasklst.add(taskvalue);
    }
}
// Function To Remove task
function removeTask(task) {
    task.parentElement.parentElement.remove();
    tasklst.delete(task.parentElement.parentElement
        .getElementsByTagName("td")[0]
        .getElementsByTagName("p")[0].innerText);
    // console.log(task.parentElement.parentElement.getElementsByTagName("td")[0].getElementsByTagName("p"))
}
// Function for : If task status is  "Completed" then checkbox should be checked
function selectValue(select) {
    var row = select.parentElement.parentElement;
    var checkbox = row.querySelector(".checkbox");
    var name = row.querySelector(".task-name");
    if (select.value === "Completed") {
        checkbox.checked = true; // Check the checkbox if "Completed" is selected
        name.style.textDecoration = "line-through";
    }
    else {
        checkbox.checked = false; // Uncheck the checkbox for other statuses
        name.style.textDecoration = "none"; // Remove strikethrough style
    }
}
// Function for : If Checkbox is checked then task status should get updated to "Completed"
function checkboxClick(check) {
    var row = check.parentElement.parentElement;
    var checkbox = row.querySelector(".checkbox");
    var name = row.querySelector(".task-name");
    var statusSelect = row.querySelector(".form-select");
    if (checkbox.checked === true) {
        // Check the checkbox if "Completed" is selected
        name.style.textDecoration = "line-through";
        statusSelect.value = "Completed";
    }
    else {
        name.style.textDecoration = "none"; // Remove strikethrough style
        statusSelect.value = "To Start";
    }
}
// Function To Search TaskName
function search() {
    var input = document.getElementById("search");
    var input1 = input.value.toLowerCase();
    var tbody = document.getElementById("tbody");
    var tr = tbody.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        if (tr[i].innerText.toLowerCase().indexOf(input1) > -1) {
            tr[i].style.display = "";
        }
        else {
            tr[i].style.display = "none";
        }
    }
}
