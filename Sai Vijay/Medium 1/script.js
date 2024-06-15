document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const addButton = document.querySelector('button');
    const taskList = document.getElementById('Tasklist');

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = '✖';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(deleteBtn);
            li.addEventListener('click', (e) => {
                if (e.target !== deleteBtn) {
                    li.classList.toggle('checked');
                }
            });

            taskList.appendChild(li);
            inputBox.value = '';
        }
    }

    addButton.addEventListener('click', addTask);
    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
