function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);
        
        const buttons = document.createElement('div');
        buttons.classList.add('task-buttons');
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.onclick = () => completeTask(li);
        buttons.appendChild(completeButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(li);
        buttons.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteTask(li);
        buttons.appendChild(deleteButton);
        
        li.appendChild(buttons);
        taskList.appendChild(li);
        
        taskInput.value = '';
        taskInput.focus();
    }
}

function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
}

function editTask(taskItem) {
    const taskText = taskItem.querySelector('span').textContent;
    const newTaskText = prompt('Edit your task:', taskText);
    if (newTaskText !== null && newTaskText.trim()) {
        taskItem.querySelector('span').textContent = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}