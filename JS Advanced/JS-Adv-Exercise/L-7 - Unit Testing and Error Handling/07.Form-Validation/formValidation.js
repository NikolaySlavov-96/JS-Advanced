function validate() {
    
    document.getElementById('submit').addEventListener('click' , onClick);
    const commpany = document.getElementById('company');
    commpany.addEventListener('change', onClickCheck);
    const comanyInfo = document.getElementById('companyInfo');

    function onClick(ev) {
        ev.preventDefault();

        let correctBoolean = true;

        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const companyNumberCheck = document.getElementById('companyNumber');

        const usernamePattern = /[a-zA-Z0-9]{3,20}$/;
        const emailPattertn = /^[^@.]+@[^@]*\.[^@]*$/;
        const passwordPattern = /[\w]{5,15}$/;

        display(username, usernamePattern.test(username.value));
        display(email, emailPattertn.test(email.value));
        
        if((password.value === confirmPassword.value) && passwordPattern.test(password.value) && passwordPattern.test(confirmPassword.value)) {
            display(password, passwordPattern.test(password.value));
            display(confirmPassword, passwordPattern.test(confirmPassword.value));
        } else {
            display(password,false)
            display(confirmPassword, false)
        }
        
        if(commpany.checked) {
            display(companyNumberCheck, companyNumberCheck.value >= 1000 && companyNumberCheck.value <= 9999 ? true : false)
        }

        function display(current, boolean) {
            console.log(boolean)
            if(boolean) {
                current.style.borderColor = '';
            } else if(!boolean) {
                current.style.borderColor = 'red';
                correctBoolean = false;
            }
        }

        const validDisplay = document.getElementById('valid');
        if(correctBoolean) {
            validDisplay.style.display = 'block';
        } else {
            validDisplay.style.display = 'none';
        }
    }

    function onClickCheck(ev) {

        if(commpany.checked) {
            comanyInfo.style.display = 'block';
        } else {
            comanyInfo.style.display = 'none';
        }
    }
}