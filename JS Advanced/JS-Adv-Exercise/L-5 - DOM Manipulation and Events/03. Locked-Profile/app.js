function lockedProfile() {

    const eventInButtons = document.querySelectorAll('.profile button');
    for (const button of eventInButtons) {
        button.addEventListener('click' , toggle);
    }

    function toggle(ev) {
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive) {
            const view = profile.querySelector('div');

            if(ev.target.textContent === 'Show more') {
                view.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else {
                view.style.display = '';
                ev.target.textContent = 'Show more';
            }
        }
    }
}