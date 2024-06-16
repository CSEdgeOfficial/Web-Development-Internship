let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const priorityInput = document.getElementById('priorityInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const task = { 
        text: taskInput.value, 
        completed: false,
        priority: priorityInput.value,
        dueDate: new Date(dueDateInput.value)
    };
    tasks.push(task);
    taskInput.value = '';
    priorityInput.value = '';
    dueDateInput.value = '';
    renderTasks();
}

function editTask(index) {
    const task = tasks[index];
    const newText = prompt('Edit task', task.text);
    if(newText) {
        task.text = newText;
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function sortTasks(key) {
    tasks.sort((a, b) => a[key] > b[key] ? 1 : -1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    for(let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleTask(${i})">${task.text}</span>
            <button onclick="editTask(${i})">Edit</button>
            <button onclick="deleteTask(${i})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    }
}
