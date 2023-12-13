document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);
    taskList.addEventListener("click", toggleTask);

    // Load tasks from localStorage on page load
    loadTasks();

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteTask);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Save tasks to localStorage
        saveTasks();

        taskInput.value = "";
    }

    function toggleTask(event) {
        const listItem = event.target.closest("li");
        if (listItem) {
            listItem.classList.toggle("completed");

            // Save tasks to localStorage after updating
            saveTasks();
        }
    }

    function deleteTask(event) {
        const listItem = event.target.closest("li");
        if (listItem) {
            listItem.remove();

            // Save tasks to localStorage after deleting
            saveTasks();
        }
    }

    function saveTasks() {
        const tasks = [];
        const taskItems = document.querySelectorAll("#taskList li");

        taskItems.forEach((item) => {
            tasks.push({
                text: item.textContent,
                completed: item.classList.contains("completed"),
            });
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const storedTasks = localStorage.getItem("tasks");

        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);

            tasks.forEach((task) => {
                const li = document.createElement("li");
                li.textContent = task.text;

                if (task.completed) {
                    li.classList.add("completed");
                }

                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.addEventListener("click", deleteTask);

                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
        }
    }
});