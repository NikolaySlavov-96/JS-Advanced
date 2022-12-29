function solve() {

    const inputText = document.getElementById('input').value;
    const outputText = document.getElementById(`output`);

    let newArray = inputText.split(`.`).filter(n => n.length !== 0);

    while(newArray.length !== 0) {
        let currentP = newArray.splice(0, 3).join(`. `) + '.';

        let p = document.createElement(`p`);

        p.textContent = currentP;

        outputText.appendChild(p);
    }
}