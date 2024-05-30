let tasks = [];

function addtask() {
    const taskinput = document.getElementById("taskinput");
    const taskdescription = taskinput.value.trim();
    const taskpriority = document.querySelector('input[name="priority"]:checked');
    const taskduedate = document.getElementById("duedateinput").value;

    if (taskdescription !== '' && taskpriority && taskduedate !== '') {
        tasks.push({
            description: taskdescription,
            priority: taskpriority.value,
            duedate: taskduedate,
            completed: false
        });
        renderTasks();
        taskinput.value = '';
        document.getElementById('duedateinput').value = '';
        document.querySelectorAll('input[name="priority"]').forEach(input => input.checked = false);
    } else {
        alert("Please fill out all fields.");
    }
}

function deletetask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function edittask(index) {
    const task = tasks[index];
    const newdescription = prompt("Enter new task description:", task.description);
    const newpriority = prompt("Enter new priority (High, Medium, Low):", task.priority);
    const newduedate = prompt("Enter new due date (YYYY-MM-DD):", task.duedate);

    if (newdescription !== null && newdescription.trim() !== '') {
        task.description = newdescription.trim();
    }
    if (newpriority !== null && ['High', 'Medium', 'Low'].includes(newpriority.trim())) {
        task.priority = newpriority.trim();
    }
    if (newduedate !== null && newduedate.trim() !== '') {
        task.duedate = newduedate.trim();
    }
    renderTasks();
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    const tasklist = document.getElementById("tasklist");
    tasklist.innerHTML = '';
    tasks.forEach((task, index) => {
        const listitem = document.createElement("li");
        listitem.textContent = `${task.description} - Priority: ${task.priority} - Due date: ${task.duedate}`;
        if (task.completed) {
            listitem.classList.add("completed");
        }
        listitem.addEventListener('click', () => toggleCompletion(index));

        const editbutton = document.createElement('button');
        editbutton.textContent = 'Edit';
        editbutton.addEventListener('click', (event) => {
            event.stopPropagation();
            edittask(index);
        });

        const deletebutton = document.createElement("button");
        deletebutton.textContent = "Delete";
        deletebutton.addEventListener('click', (event) => {
            event.stopPropagation();
            deletetask(index);
        });

        listitem.appendChild(editbutton);
        listitem.appendChild(deletebutton);
        tasklist.appendChild(listitem);
    });
}
