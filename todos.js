// function toggleAllTodos() {
//     const todos = document.querySelectorAll('li');

//     for (let li of todos) {
//         li.classList.toggle('completed');
//     }
// }
// const h1 = document.querySelector('h1');

// setInterval(function () {
//     if (h1.classList.contains('big')) {
//         h1.innerText = "SAD";
//     } else {
//         h1.innerText = "HAPPY"
//     }
//     h1.classList.toggle('big');
//     h1.classList.toggle('small');
// }, 1000)

const newTodo = document.createElement('li');
const boldText = document.createElement('b');
const ul = document.querySelector('ul');
boldText.textContent = "DON'T FORGET TO LOCK THE COOP!"
newTodo.classList = 'todo';
newTodo.append(boldText);

const secondTodo = document.createElement('li');
secondTodo.textContent = "Order more la croix";
secondTodo.className = 'todo';

ul.append(newTodo, secondTodo);

const thirdTodo = document.createElement('li');
thirdTodo.textContent = "Order more oranges";
thirdTodo.className = 'todo';
ul.prepend(thirdTodo);

const removeMe = document.querySelector('#remove-me');
removeMe.remove()
