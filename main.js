const input = document.getElementById('task-input');
const tasks = document.getElementById('todo-list');
const clear = document.getElementById('clear');
const darkMode = document.getElementById('dark-theme');
let bg = document.querySelector('.bg');

loadEventListeners();

function loadEventListeners()  {
    // Add todo
    input.addEventListener('keyup', addTodo);
    // Load all todos
    document.addEventListener('DOMContentLoaded', loadTodos);
    // Remove todo
    document.addEventListener('click', removeTodo);
    // Remove all todos
    // clear.addEventListener('click', removeAllTodos);
    // Dark theme
    darkMode.addEventListener('click', darkTheme);
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
        itemCount();
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
    itemCount();
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
            itemCount();
        }
    }
}

// Items count
function itemCount() {
    let count = document.querySelector('.count');
    let c = 0;
    let todos = JSON.parse(localStorage.getItem('tasks'));
    
    for (let i = 0; i < todos.length; i++) {
        c += 1;
    }
    count.innerText = c;
}

// Dark Theme
function darkTheme() {
    if (darkMode.childNodes[0].alt === 'moon icon'){
        document.body.classList.add('dark-theme');
        tasks.style.backgroundColor = 'hsl(235, 24%, 19%)';
        input.style.backgroundColor = 'hsl(235, 24%, 19%)';
        input.style.color = "white";
        darkMode.childNodes[0].src = "images/icon-sun.svg";
        darkMode.childNodes[0].alt = "sun icon";
        bg.style.background = "url('images/bg-desktop-dark.jpg') no-repeat";
        bg.style.backgroundSize = '100vw 40vh';
    }else {
        document.body.classList.remove('dark-theme');
        tasks.style.backgroundColor = "white";
        input.style.backgroundColor = "white";
        input.style.color = "black";
        darkMode.childNodes[0].src = "images/icon-moon.svg";
        darkMode.childNodes[0].alt = 'moon icon';
        bg.style.background = "url('images/bg-desktop-light.jpg') no-repeat";
        bg.style.backgroundSize = '100vw 40vh';
    }
}
//Remove all Completed todos
// function removeAllTodos() {
//     tasks.innerHTML = '';
//     localStorage.removeItem('tasks');
// }