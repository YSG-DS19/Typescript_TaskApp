export {};

// var tasklst: string[] = [];
var flag = 0;
var tasklst = new Set();


// Function to add task
function addTask() {
  var task = document.getElementById("TaskName") as HTMLInputElement;
  var tbody = document.getElementById("tbody") as HTMLTableElement;
  var tr = document.createElement("tr") as HTMLTableRowElement;
  var taskvalue: string = task.value;

  console.log(tasklst);
  // var flag = 0;
  //  for (let i = 0; i < tasklst.length; i++) {
  //   if (tasklst[i].trim() == taskvalue.trim()) {
  //     flag = 1;
  //     break;
  //   }
  if (taskvalue===""){
    alert("Task-Name should not be empty")
    return 0;
  }

  
  if (task.value.trim() && tasklst.has(task.value.trim())) {
    alert("Task is already exists");
  } else {
    tr.innerHTML = `<th scope="row"><input type="checkbox" onchange= "checkboxClick(this)" class = 'checkbox' name="checkbox" target="checkbox"></th>  
    <td><p class = 'task-name'>${taskvalue}</p></td>
    <td><select class="form-select"  aria-label="Default select example"  onchange="selectValue(this)" >
        <option selected>Choose Status</option>
        <option value="To Start">To Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select></td>
    <td><button type="button" onclick="removeTask(this)" class="btn btn-danger">Delete Task</button></td>`;


    tbody.appendChild(tr);
    tasklst.add(taskvalue);
  }
}

// Function To Remove task
function removeTask(task) { 
  task.parentElement.parentElement.remove();
  tasklst.delete(
    task.parentElement.parentElement
      .getElementsByTagName("td")[0]
      .getElementsByTagName("p")[0].innerText);
  // console.log(task.parentElement.parentElement.getElementsByTagName("td")[0].getElementsByTagName("p"))
}


// Function for : If task status is  "Completed" then checkbox should be checked
function selectValue(select) {
  const row = select.parentElement.parentElement as HTMLTableRowElement;
  const checkbox = row.querySelector(".checkbox") as HTMLInputElement;
  const name = row.querySelector(".task-name") as HTMLParagraphElement;

  if (select.value === "Completed") {
    checkbox.checked = true; // Check the checkbox if "Completed" is selected
    name.style.textDecoration = "line-through";
  } else {
    checkbox.checked = false; // Uncheck the checkbox for other statuses
    name.style.textDecoration = "none"; // Remove strikethrough style
  }
}

// Function for : If Checkbox is checked then task status should get updated to "Completed"
function checkboxClick(check) {
  const row = check.parentElement.parentElement as HTMLTableRowElement;
  const checkbox = row.querySelector(".checkbox") as HTMLInputElement;
  const name = row.querySelector(".task-name") as HTMLParagraphElement;
  const statusSelect = row.querySelector(".form-select") as HTMLSelectElement;

  
  if (checkbox.checked === true) {
    // Check the checkbox if "Completed" is selected
    name.style.textDecoration = "line-through";
    statusSelect.value = "Completed";
  } else {
    name.style.textDecoration = "none"; // Remove strikethrough style
    statusSelect.value = "To Start";
  }
}

// Function To Search TaskName
function search() {
  var input = document.getElementById("search") as HTMLInputElement;

  var input1: string = input.value.toLowerCase();

  var tbody = document.getElementById("tbody") as HTMLInputElement;

  var tr = tbody.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    if (tr[i].innerText.toLowerCase().indexOf(input1) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
