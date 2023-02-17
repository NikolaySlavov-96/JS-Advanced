function validate() {
    const current = document.getElementById('email');
    current.addEventListener('change', onChecked);


    function onChecked() {

        const emeil = current.value;
        const patternEmail = /[a-z0-9]+[@]+[a-z0-9]+[.]+[a-z0-9]+/g;

        const result = patternEmail.test(emeil);
        console.log(result)

        if(result) {
            // current.value = '';w
            current.className = '';
        } else {
            current.className = 'error'
        }

    }
}