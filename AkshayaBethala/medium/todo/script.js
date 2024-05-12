 let tasks = [];

        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;

            if (taskInput.value.trim() === "") {
                alert("Please enter a task!");
                return;
            }

            const task = {
                id: Date.now(),
                name: taskInput.value,
                dueDate: dueDate,
                priority: priority,
                completed: false
            };

            tasks.push(task);
            renderTasks();
            taskInput.value = "";
            dueDate.value = "";
        }

        function deleteTask(id) {
            tasks = tasks.filter(task => task.id !== id);
            renderTasks();
        }

        function toggleComplete(id) {
            const task = tasks.find(task => task.id === id);
            task.completed = !task.completed;
            renderTasks();
        }

        function renderTasks() {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            tasks.forEach(task => {
                const li = document.createElement("li");
                li.classList.add("priority-" + task.priority);
                if (task.completed) {
                    li.classList.add("completed");
                }

                li.innerHTML = `
                    <span>${task.name} - Due: ${task.dueDate}</span>
                    <div class="actions">
                        <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
                        <button onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                `;

                taskList.appendChild(li);
            });
        }
