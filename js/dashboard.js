let editIndex = null;


// ===== AUTH CHECK =====
if (!localStorage.getItem("token")) {
  window.location.href = "index.html";
}

// ===== LOAD TASKS =====
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ===== ADD / UPDATE TASK =====
function addTask() {
  const input = document.getElementById("taskInput");
  const button = document.getElementById("addBtn");
  const task = input.value.trim();

  if (task === "") {
    alert("Task cannot be empty");
    return;
  }

  // 🟡 UPDATE MODE
  if (editIndex !== null) {
    tasks[editIndex] = task;
    editIndex = null;
    button.innerText = "Add";
    alert("Item updated successfully");
  }
  // 🟢 ADD MODE
  else {
    tasks.push(task);
    alert("Item added successfully");
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
}


// ===== SEARCH & SHOW TASKS =====
function renderTasks() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("taskList");

  list.innerHTML = "";
  if (search === "") return;

  tasks.forEach((task, index) => {
    if (task.toLowerCase().includes(search)) {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";

      li.innerHTML = `
        <span>${task}</span>
        <div>
          <button
            class="btn btn-sm btn-warning me-1"
            onclick="editTask(${index})"
          >
            Edit
          </button>
          <button
            class="btn btn-sm btn-danger"
            onclick="deleteTask(${index})"
          >
            Delete
          </button>
        </div>
      `;

      list.appendChild(li);
    }
  });
}

// ===== EDIT TASK =====
function editTask(index) {
  const input = document.getElementById("taskInput");
  const button = document.getElementById("addBtn");

  input.value = tasks[index];
  editIndex = index;
  button.innerText = "Update";
}

// ===== DELETE TASK =====
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// ===== LOGOUT =====
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
