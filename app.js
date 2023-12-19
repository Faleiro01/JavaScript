const btn = document.querySelector('#btn');
const memeF = document.querySelector('#memeForm');
// const imageUrl = document.querySelector('#memeUrl');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const imageMeme = document.querySelector('#image');


btn.addEventListener('submit', function (e) {
    e.preventDefault();

})
btn.addEventListener('click', function (e) {
    let url = document.querySelector('#memeUrl').ariaValueMax;
    let img = document.createElement('img');
    img.src = url
    document.body.appendChild(img);
})

