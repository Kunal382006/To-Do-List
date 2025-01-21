document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="deleteBtn" onclick="deleteTask(this)">Delete</button>`;
  
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
