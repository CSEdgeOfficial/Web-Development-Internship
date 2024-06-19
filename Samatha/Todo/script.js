let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const newTask = {
        id: Date.now(),
        text: taskText,
        priority: 'low', 
        dueDate: null,   
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => toggleCompleted(task.id));
        taskList.appendChild(li);
    });
}

function toggleCompleted(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function sortTasks() {
    const sortBy = document.getElementById('sortSelect').value;

    if (sortBy === 'priority') {
        tasks.sort((a, b) => a.priority.localeCompare(b.priority));
    } else if (sortBy === 'dueDate') {
        tasks.sort((a, b) => (a.dueDate || '').localeCompare(b.dueDate || ''));
    } else if (sortBy === 'completion') {
        tasks.sort((a, b) => a.completed - b.completed);
    }

    renderTasks();
}
