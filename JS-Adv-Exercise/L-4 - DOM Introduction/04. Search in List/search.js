function search() {
   	// TODO
	let cityCounter = 0;
	const citys = document.querySelectorAll(`ul#towns li`);
	const textInput = document.getElementById(`searchText`).value;
	let results = '';

	if(textInput.length !== 0){
		for (const city of citys) {
	
			let text = city.textContent;
			if(text.match(textInput)){
				city.style.fontWeight = 'bold';
				city.style.textDecoration = 'underline';
				cityCounter++;
			}
		}
	}

   	document.getElementById('result').textContent = `${cityCounter} matches found`;
	document.getElementById(`searchText`).value = '';
}
