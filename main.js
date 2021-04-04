const input = document.getElementById('task-input');
const tasks = document.getElementById('todo-list');

loadEventListeners();

function loadEventListeners()  {
    // Add todo
    input.addEventListener('keyup', addTodo);
    // Load all todos
    document.addEventListener('DOMContentLoaded', loadTodos);
    // Remove todo
    document.addEventListener('click', removeTodo);
}

// Add todo
function addTodo() {
    // Enter key event
    if(event.keyCode === 13 && input.value !== '') {
        //Creates a new li item and appends to ul
        const item = document.createElement('li');
        item.classList.add('item');

        item.innerHTML = `<input type="checkbox" id="${input.value}">
                        <label for="${input.value}">${input.value}</label>
                        <img src="images/icon-cross.svg" class="remove" alt="delete icon">
                        `;
        tasks.append(item);

        saveToLocal(input.value);
        input.value = '';
    }
}

// Save to local storage
function saveToLocal(task) {
    let todos;
    if (localStorage.getItem('tasks') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('tasks'));
    }
    todos.push(task);
    localStorage.setItem('tasks', JSON.stringify(todos));
}

// Loads all todos to screen
function loadTodos() {
    let todos;
    if (localStorage.getItem('tasks') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('tasks'));
    }

    todos.forEach(arrItem => {
        //Creates a new li item and appends to ul
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerHTML = `<input type="checkbox" id="${arrItem}">
                        <label for="${arrItem}">${arrItem}</label>
                        <img src="images/icon-cross.svg" class="remove" alt="delete icon">
                        `;
        tasks.append(item);
    });
}


// Remove todo
function removeTodo(e) {
    if(e.target.matches('.remove')) {
        const warn = confirm('Are you sure you want to delete?');
        if(warn) {
            e.target.parentElement.remove();
    
            let todos;
            if (localStorage.getItem('tasks') === null) {
                todos = [];
            }else {
                todos = JSON.parse(localStorage.getItem('tasks'));
            }

            todos.forEach((todo, index) => {
                if (e.target.previousElementSibling.innerText === todo) {
                    todos.splice(index, 1);
                }
            });
            localStorage.setItem('tasks', JSON.stringify(todos));
        }
    }
}

// Remove all todos
// function removeAllTodos() {
//     tasks.innerHTML = '';
// }