const input = document.getElementById('task-input');
const tasks = document.getElementById('todo-list');
let bg = document.querySelector('.bg');
// let darkTheme = document.getElementById('dark-theme');
// let lightTheme = document.getElementById('light-theme');

// Add todo
input.addEventListener('keyup', addTodo);
// Remove todo
document.addEventListener('click', removeTodo);
// Remove todo
// Remove all todos
// document.addEventListener('click', removeAllTodos);
//Theme toggler
// darkTheme.addEventListener('click', theme);

// Add todo
function addTodo() {
    // Enter key event
    if(event.keyCode === 13 && input.value !== '') {
        // Creates a new li item and appends to ul
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerHTML = `<input type="checkbox" id="${input.value}">
                          <label for="${input.value}">${input.value}</label>
                          <img src="images/icon-cross.svg" class="remove" alt="delete icon">`;
        tasks.append(item);
        input.value = '';
    }
}

// Remove todo
function removeTodo(e) {
    if(e.target.matches('.remove')) {
        e.target.parentNode.remove();
    }
}

// Remove all todos
// function removeAllTodos() {
//     tasks.innerHTML = '';
// }
// Toggle theme
function theme() {
    if (darkTheme) {
        darkTheme.classList.toggle('darkTheme');
        lightTheme.classList.toggle('light-theme');
    }
}


