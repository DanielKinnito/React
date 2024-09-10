document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const removeTaskButton = document.getElementById('removeTaskButton');
    const removeTaskByNameButton = document.getElementById('removeTaskByNameButton');
    const taskList = document.getElementById('taskList');

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
            taskList.appendChild(listItem);
            taskInput.value = '';
        } else {
            console.log('Task is empty');
        }
    };

    const removeTask = () => {
        const lastTask = taskList.lastElementChild;
        if (lastTask) {
            taskList.removeChild(lastTask);
        } else {
            console.log('No tasks to remove');
        }
    };

    /**
     * Removes a task from the task list by its name.
     * The function performs a binary search to find the task in the list.
     * If the task is found, it is removed from the list.
     * If the task is not found, a message is logged to the console.
     * If the task name is empty, a message is logged to the console.
     *
     * @function
     */
    const removeTaskByName = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItems = taskList.getElementsByTagName('li');
            var left = 0;
            var right = listItems.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (listItems[mid].textContent === taskText) {
                    taskList.removeChild(listItems[mid]);
                    return;
                } else if (listItems[mid].textContent < taskText) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            console.log('Task not found');
        } else {
            console.log('Task name is empty');
        }
    };

    const onEnter = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    addTaskButton.addEventListener('click', addTask);
    removeTaskButton.addEventListener('click', removeTask);
    removeTaskByNameButton.addEventListener('click', removeTaskByName);
    taskInput.addEventListener('keypress', onEnter);
});