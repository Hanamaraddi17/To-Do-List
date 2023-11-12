
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    const userAlert = document.getElementById("userAlert");

    if (taskText === "") {
        setTimeout(() => {
            console.log("userAlert")
            userAlert.classList.toggle("show")
        }, 3000);
        userAlert.classList.toggle("show")
    }

    else {
        var taskList = document.getElementById('taskList');

        var taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="completeTask(this)"class="completeButton">Complete</button>
                <button onclick="deleteTask(this)" class="deleteButton">Delete</button>
            `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function completeTask(button) {
    var taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
}
