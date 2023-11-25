function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    const userAlert = document.getElementById("userAlert");

    if (taskText === "") {
        setTimeout(() => {
            console.log("userAlert");
            userAlert.classList.toggle("show");
        }, 3000);
        userAlert.classList.toggle("show");
    } else {
        var taskList = document.getElementById('taskList');

        var taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)" class="completeButton">Complete</button>
            <button onclick="deleteTask(this)" class="deleteButton">Delete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        // Save tasks to local storage after adding a new task
        saveTasksToLocalStorage();
    }
}

function completeTask(button) {
    var taskItem = button.parentElement;
    taskItem.classList.toggle('completed');

    // Save tasks to local storage after completing a task
    saveTasksToLocalStorage();
}

function deleteTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();

    // Save tasks to local storage after deleting a task
    saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    var tasks = [];
    var taskList = document.getElementById('taskList').getElementsByTagName('li');

    for (var i = 0; i < taskList.length; i++) {
        var taskText = taskList[i].getElementsByTagName('span')[0].innerText;
        tasks.push(taskText);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage

function loadTasksFromLocalStorage() {
    var taskList = document.getElementById('taskList');
    var tasks = localStorage.getItem('tasks');

    if (tasks) {
        tasks = JSON.parse(tasks);
        for (var i = 0; i < tasks.length; i++) {
            var taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
                <span>${tasks[i]}</span>
                <button onclick="completeTask(this)" class="completeButton">Complete</button>
                <button onclick="deleteTask(this)" class="deleteButton">Delete</button>
            `;

            taskList.appendChild(taskItem);
        }
    }
}

loadTasksFromLocalStorage();
