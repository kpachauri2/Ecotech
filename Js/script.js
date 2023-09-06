const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskContent = document.getElementById('task-content').value.trim();
    const taskCategory = document.getElementById('task-category').value;

    if (taskContent !== '') {
        // Create a new task list item with a checkbox
        const taskListItem = document.createElement('li');
        taskListItem.className = 'task-list-item';
        taskListItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span>${taskContent}</span>
        `;

        // Append the task list item to the corresponding category's task list
        document.getElementById(`${taskCategory}-tasks`).appendChild(taskListItem);

        // Clear the input fields
        document.getElementById('task-content').value = '';
        document.getElementById('task-category').selectedIndex = 0;
    }
});