function validate() {
    
    const btn = document.getElementById('submit').addEventListener('click' , onClick);
    const commpany = document.getElementById('company');
    commpany.addEventListener('click', onClickCheck);

    function onClick(ev) {
        ev.preventDefault();
    }

    function onClickCheck(ev) {
        if(commpany.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    }
}
