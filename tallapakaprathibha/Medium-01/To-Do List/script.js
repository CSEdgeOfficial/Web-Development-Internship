let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();
    const taskPriority = document.querySelector('input[name="priority"]:checked');
    const taskDueDate = document.getElementById('dueDateInput').value;

    if (taskDescription !== '' && taskPriority && taskDueDate !== '') {
        tasks.push({ 
            description: taskDescription, 
            priority: taskPriority.value, 
            dueDate: taskDueDate, 
            completed: false 
        });
        renderTasks();
        taskInput.value = '';
        document.getElementById('dueDateInput').value = '';
        document.querySelectorAll('input[name="priority"]').forEach(input => input.checked = false);
    } else {
        alert('Please fill out all fields.');
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
// Function to edit task details
function editTask(index) {
    const task = tasks[index];
    
    // Ask user for new task details
    const newDescription = prompt('Enter new task description:', task.description);
    const newPriority = prompt('Enter new priority (High, Medium, Low):', task.priority);
    const newDueDate = prompt('Enter new due date (YYYY-MM-DD):', task.dueDate);
    
    // Update task with new details if provided
    if (newDescription !== null && newDescription.trim() !== '') {
        task.description = newDescription.trim();
    }
    if (newPriority !== null && ['High', 'Medium', 'Low'].includes(newPriority.trim())) {
        task.priority = newPriority.trim();
    }
    if (newDueDate !== null && newDueDate.trim() !== '') {
        task.dueDate = newDueDate.trim();
    }
    
    renderTasks(); // Re-render the tasks list
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function sortTasks() {
    const sortBy = document.getElementById('sort').value;
    if (sortBy === 'priority') {
        tasks.sort((a, b) => a.priority.localeCompare(b.priority));
    } else if (sortBy === 'dueDate') {
        tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortBy === 'completionStatus') {
        tasks.sort((a, b) => a.completed - b.completed);
    }
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.description} - Priority: ${task.priority} - Due Date: ${task.dueDate}`;
        if (task.completed) {
            listItem.classList.add('completed');
        }
        listItem.addEventListener('click', () => toggleCompletion(index)); // Toggle completion when clicked
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', (event) => {
            event.stopPropagation();
            editTask(index);
        });      
		const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteTask(index);
        });
		listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}
