window.addEventListener("load", solve);

function solve() {
	
	const btnSubmit = document.getElementById('form-btn');
	const inProgres = document.getElementById('in-progress');
	const finish = document.getElementById('finished');
	const btnClear = document.getElementById('clear-btn');
	const progresCount = document.getElementById('progress-count');

	const firstNameIn = document.getElementById('first-name');
	const lastNameIn = document.getElementById('last-name');
	const ageIn = document.getElementById('age');
	const genderSelectIn = document.getElementById('genderSelect');
	const taskIn = document.getElementById('task');

	btnSubmit.addEventListener('click', onCheck);
	btnClear.addEventListener('click', onClear);

	function onCheck(ev) {
		ev.preventDefault();

		if(firstNameIn.value == '' || lastNameIn.value == '' || ageIn.value == '' || taskIn.value == '') {
			return;
		}

		const li = document.createElement('li');
		li.setAttribute('class', 'each-line');

		const article = document.createElement('article');
		const h4 = document.createElement('h4');
		h4.textContent = `${firstNameIn.value} ${lastNameIn.value}`;
		const pGe = document.createElement('p');
		pGe.textContent = `${genderSelectIn.value}, ${ageIn.value}`;
		const pContent = document.createElement('p');
		pContent.textContent = `Dish description: ${taskIn.value}`;
		article.appendChild(h4);
		article.appendChild(pGe);
		article.appendChild(pContent);

		li.appendChild(article);
		const btnEdit = document.createElement('button');
		btnEdit.setAttribute('class', 'edit-btn');
		btnEdit.textContent = 'Edit'
		const btnComplete = document.createElement('button');
		btnComplete.setAttribute('class', 'complete-btn');
		btnComplete.textContent = 'Mark as complete';
		li.appendChild(btnEdit);
		li.appendChild(btnComplete);

		inProgres.appendChild(li);

		let storeFirstName = firstNameIn.value
		let storeLastname = lastNameIn.value
		let storeAge = ageIn.value
		let storeTask = taskIn.value
		
		firstNameIn.value = ''
		lastNameIn.value = ''
		ageIn.value = ''
		taskIn.value = ''


		progresCount.textContent++;

		btnEdit.addEventListener('click', onEdit);
		btnComplete.addEventListener('click', onComplete);

		function onEdit() {
			firstNameIn.value = storeFirstName;
			lastNameIn.value = storeLastname;
			ageIn.value = storeAge;
			taskIn.value = storeTask;
			li.remove();
			progresCount.textContent--;
		}

		function onComplete() {
			btnComplete.remove();
			btnEdit.remove();
			finish.appendChild(li);
			progresCount.textContent--;
		}
	}

	function onClear(ev) {
		ev.preventDefault();

		finish.innerHTML = '';
	}
}	