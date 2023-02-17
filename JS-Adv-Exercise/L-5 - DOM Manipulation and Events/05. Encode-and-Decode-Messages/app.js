function encodeAndDecodeMessages() {

    const main = document.getElementById('main');
    main.addEventListener('click' , onClick);

    function onClick (ev) {
        
        if(ev.target.tagName === 'BUTTON') {
            
            const isEncode = ev.target.childNodes[0].textContent === 'Encode and send it';

            if(isEncode) {
                const parent = ev.target.parentElement;
                const inputText = parent.querySelector('textarea');
                
                code(isEncode , inputText.value );
                inputText.value = '';

            } else {
                code(isEncode);
            }
        }
        
        function code (type , text) {
            
            const printResult = main.children[1].querySelector('textarea');
            
            let editSum = 1;
            
            if(!type) {
                editSum = -1;
                text = printResult.value;
            }

            const decodeResult = [];

            const beforeDecode = text.split(``);

            for (const letter of beforeDecode) {
                
                let result = String.fromCharCode(letter.charCodeAt() + editSum);
                console.log(editSum)
                
                decodeResult.push(result);
            }

            printResult.value = decodeResult.join(``);
        }
    }
}