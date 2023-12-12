const form = document.querySelector('.monkeyform');
form.addEventListener('submit', function (evt) {
    evt.event.preventDefault();
    // event.preventDefault(form)
    console.log('YOU SUBMITED THE FORM!!')
})
//to stop default behavior use event.preventDefault()  method.
