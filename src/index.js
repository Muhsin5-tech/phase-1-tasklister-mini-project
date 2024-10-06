document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = document.querySelector("#new-task-description").value;
    const priority = document.querySelector("#priority").value;

    if (taskDescription.trim() === "") {
      alert("Task description cannot be empty!");
      return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;
    newTask.classList.add(priority);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    form.reset();
  });
});


