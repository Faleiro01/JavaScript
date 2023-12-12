const ul = document.querySelector('#cars');
ul.addEventListener('click', function (e) {
    console.log(e.target.getAttribute('data-id'));
    console.log(e.target.dataset);
    e.target.dataset.condition = 'poor';
})