function validate() {
    const inputEmail = document.getElementById('email');

    inputEmail.addEventListener('change', onChange);
    const emailPattern = /[a-z]+\@[a-z]+\.[a-z]+/

    function onChange(ev) {

        if(emailPattern.test(inputEmail.value)) {
            inputEmail.classList.remove('error');
        } else {
            inputEmail.classList.add('error');
        }
    }
}