document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', function () {
        alert('Clicked!')
    })

})

window.addEventListener('load', function () {
    console.log('Fully Loaded');
})