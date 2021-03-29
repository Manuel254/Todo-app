const input = document.getElementById('task-input');
const tasks = document.getElementById('todo-list');
let bg = document.querySelector('.bg');
let themeToggle = document.getElementById('theme-toggle');
let remove = document.querySelector('.remove');

// Add todo
document.addEventListener('keyup', addTodo);
// Remove todo
remove.addEventListener('click', removeTodo);
// Remove all todos
// document.addEventListener('click', removeAllTodos);
// Theme toggler
// document.addEventListener('click', theme);

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
function removeTodo() {
    console.log(remove.parentNode);
}
// Remove all todos
// function removeAllTodos() {
//     tasks.innerHTML = '';
// }
// Toggle theme
function theme() {
    // if(themeToggle.src === '/images/icon-moon.svg') {
    //     // Dark theme
    //     bg.style.background = "url('images/bg-mobile-dark.jpg') no-repeat";
    //     themeToggle.src = "images/icon-sun.svg";
    // }else { 
    //     //Light theme
    //     bg.style.background = "url('images/bg-mobile-light.jpg') no-repeat";
    //     themeToggle.src = "images/icon-moon.svg";
    // }
    console.log(themeToggle.src);
}


