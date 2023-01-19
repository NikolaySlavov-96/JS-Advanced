function solve() {

    const event = document.getElementById('quizzie');
    event.addEventListener('click', ques);
    const allSection = Array.from(document.querySelectorAll('#quizzie section'));

    const correctAnswer = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    const allAnswers = correctAnswer.length;
    const answers = [];
    let current = 0;

    function ques(ev){
        if(ev.target.className === 'answer-text') {
            let isCheck = correctAnswer.includes(ev.target.textContent);
            answers.push(isCheck);
            showOrHideSection();
            current++;
            if(answers.length === allAnswers) {
                showScore();
            }
        }
    }
    
    function showOrHideSection() {
        for(let n = current; n < current + 1; n++) {
            allSection[current].style.display = 'none'
            if(current < 2) {
                allSection[current + 1].style.display = 'block';
            }
        }
    }

    function showScore() {
        const score = document.getElementById('results');
        score.style.display = 'block';

        const result = answers.filter(c => c == true);

        const h1 = document.querySelector('.results-inner h1');
        if(result.length === allAnswers) {
            h1.textContent = "You are recognized as top JavaScript fan!"
        } else {
            h1.textContent = `You have ${result.length} right answers`
        }
    }
}