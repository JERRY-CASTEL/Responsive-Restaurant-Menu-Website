let button = document.getElementById('btn')
let input = document.getElementById('input')
let todoList = document.getElementById('todoList')

let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todoList')) || [];
    todos.forEach(element => {
        addtodo(element);
    });
}

button.addEventListener('click', () => {
    let todo = input.value;
    todos.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todos));
    addtodo(input.value);
    input.value = ''
});

function addtodo(todo){
    let para = document.createElement('p');
    para.textContent = todo;
    todoList.appendChild(para);
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
        remove(todo)
    })

    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
    }
    localStorage.setItem('todoList', JSON.stringify(todos));
}
