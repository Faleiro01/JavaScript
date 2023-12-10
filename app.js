function makeBody(color) {
    document.body.style.backgroundColor = color;
}

function makeBodyBlack() {
    document.body.style.backgroundColor = 'black';
}
const teal = document.querySelector('#teal');
teal.onclick = function () {
    makeBody('teal');
}
const eventBtn = document.querySelector('#event');
eventBtn.addEventListener('click', function () {
    makeBody('violet');
})
const h1 = document.querySelector('h1');

eventBtn.addEventListener('mouseover', function () {
    h1.style.color = 'cyan';
})