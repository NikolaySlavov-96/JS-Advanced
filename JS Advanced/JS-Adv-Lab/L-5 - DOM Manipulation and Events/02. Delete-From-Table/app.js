function deleteByEmail() {

    const inputLetter = document.querySelector('input[name="email"]').value;
    const allInformation = Array.from(document.querySelectorAll('tbody tr'));

    let isFound = false;

    for (const line of allInformation) {
        
        if(line.children[1].textContent == inputLetter) {
            const parent = line.parentElement;

            parent.removeChild(line);
            isFound = true;
        }
    }

    document.getElementById('result').textContent = isFound ? 'Delete' : 'Not found.';
}