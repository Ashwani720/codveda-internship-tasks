function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
  
    // Save to local storage
    saveTasks();
    input.value = "";
  }
  
  function saveTasks() {
    const list = document.getElementById("taskList");
    const tasks = Array.from(list.children).map(li => li.firstChild.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.onclick = () => li.remove();
  
      li.appendChild(removeBtn);
      document.getElementById("taskList").appendChild(li);
    });
  }
  
  window.onload = loadTasks;
  