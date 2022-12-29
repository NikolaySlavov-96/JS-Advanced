function toggle() {
    
    const extra =  document.getElementById(`extra`)
    const position = document.getElementsByClassName('button')[0];

    if(position.textContent !== 'Less') {
        position.textContent = 'Less';
        extra.style.display = 'block';
    } else {
        position.textContent = 'More';
        extra.style.display = 'none';
    }
}