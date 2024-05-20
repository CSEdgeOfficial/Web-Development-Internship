const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <input type="checkbox" class="complete-checkbox"> Completed
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        addTaskItemListeners(taskItem);
    }
});

// Add event listeners to task items
function addTaskItemListeners(taskItem) {
    const editText = taskItem.querySelector('.task-text');
    const editBtn = taskItem.querySelector('.edit-btn');
    const deleteBtn = taskItem.querySelector('.delete-btn');
    const completeCheckbox = taskItem.querySelector('.complete-checkbox');

    // Edit task
    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit task:', editText.textContent);
        if (newText !== null) {
            editText.textContent = newText.trim();
        }
    });

    // Delete task
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });

    // Mark task as completed
    completeCheckbox.addEventListener('change', () => {
        if (completeCheckbox.checked) {
            editText.classList.add('completed');
        } else {
            editText.classList.remove('completed');
        }
    });
}
