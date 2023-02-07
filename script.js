{
let tasks = [];
let hideDoneTasks = false;

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent},
        ];
        render();
    };

    const clearInput = () => {
        document.querySelector(".js-newTask").value = "";
    };

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {
        let tasksListHTMLContent = "";

    for (const task of tasks) {
        tasksListHTMLContent += `
    <li class= "tasks__item js-task">
    <button class="tasks__button tasks__button--done js-toggleDone">
    ${task.done ? "✔" : ""} 
    </button>
    <span class = "tasks__content ${task.done ? "tasks__content--done" : ""}">${task.content}</span>
    <button class="js-remove tasks__button tasks__button--remove">🗑</button>
    </li>
    `;
    }

    document.querySelector(".js-tasksList").innerHTML = tasksListHTMLContent;};

    const renderButtons = () => {};

    const bindButtonsEvents = () => {};

    const render = () => {
        renderTasks();
        renderButtons();

        bindEvents();
        bindButtonsEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        clearInput();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}