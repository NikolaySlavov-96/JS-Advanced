function attachGradientEvents() {
    const gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove' , step);
    const result = document.getElementById('result');
    function step(ev) {
        result.textContent = (Math.floor(ev.offsetX / gradient.clientWidth * 100)) + '%';
        // gradient.removeEventListener('mousemove' , step);
    }
}