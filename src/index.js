document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById("create-task-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value;
      const prioritySelect = document.getElementById("priority-select");
      const priority = prioritySelect.value; // Get selected priority
  
      const taskItem = document.createElement("li");
      taskItem.textContent = `${taskDescription} (Priority: ${priority})`; // Display task description with priority
  
      const taskList = document.getElementById("tasks");
      taskList.appendChild(taskItem);
  
      taskInput.value = ""; // Clear input field after adding task
    });
  });
  