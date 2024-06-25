document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const priorityInput = document.getElementById('priorityInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const sortTasks = document.getElementById('sortTasks');
    const taskList = document.getElementById('taskList');

    let tasks = [];

    function renderTasks() {
        taskList.innerHTML = '';
        const sortedTasks = [...tasks].sort((a, b) => {
            if (sortTasks.value === 'priority') {
                return a.priority.localeCompare(b.priority);
            } else if (sortTasks.value === 'dueDate') {
                return new Date(a.dueDate) - new Date(b.dueDate);
            } else if (sortTasks.value === 'status') {
                return a.completed - b.completed;
            }
        });

        sortedTasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';

            const taskDetails = document.createElement('div');
            taskDetails.className = 'task-details';
            taskDetails.innerHTML = `<strong>${task.text}</strong><small>Priority: ${task.priority} | Due: ${task.dueDate}</small>`;

            const taskActions = document.createElement('div');
            taskActions.className = 'task-actions';
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editTask(index));
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(index));
            const completeButton = document.createElement('button');
            completeButton.textContent = task.completed ? 'Uncomplete' : 'Complete';
            completeButton.addEventListener('click', () => toggleTaskCompletion(index));

            taskActions.append(editButton, deleteButton, completeButton);
            taskItem.append(taskDetails, taskActions);
            taskList.appendChild(taskItem);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        const taskPriority = priorityInput.value;
        const taskDueDate = dueDateInput.value;

        if (taskText && taskDueDate) {
            tasks.push({ text: taskText, priority: taskPriority, dueDate: taskDueDate, completed: false });
            taskInput.value = '';
            dueDateInput.value = '';
            renderTasks();
        }
    }

    function editTask(index) {
        const newTaskText = prompt('Edit task:', tasks[index].text);
        if (newTaskText) {
            tasks[index].text = newTaskText;
            renderTasks();
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    function toggleTaskCompletion(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    addTaskButton.addEventListener('click', addTask);
    sortTasks.addEventListener('change', renderTasks);

    renderTasks();
});
