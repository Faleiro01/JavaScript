//1
document.getElementById('.container');
//2
document.querySelector('#container');
//3
document.querySelectorAll('.second');
//4
document.querySelector('ol .third');
//5
const section = document.querySelector('section');
section.innerText = "Hello!."
//6
const footer = document.querySelector('.footer');
footer.classList.add = ('main');
//7
footer.classList.remove('main');
//8
const newLi = document.createElement('li');
//9
newLi.innerText = 'four';
//10
const ul = document.querySelector('ul');
ul.append(newLi);
//11
const lis = document.querySelectorAll('ol li');
for (let li of lis) {
    lis[li].style.backgroundColor = "green"
}
//12
const div = document.querySelector('div');
const removeDiv = div.nextElementSibling.nextElementSibling;
// removeDiv.remove()

