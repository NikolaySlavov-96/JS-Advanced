function create(words) {

   const outpurResult = document.getElementById('content');

   words.forEach(element => {
      
      const divCreate = document.createElement('div');
      const pCreate = document.createElement('p');

      pCreate.textContent = element;
      pCreate.style.display = 'none';
      divCreate.appendChild(pCreate);
      divCreate.addEventListener('click' , onClick);

      outpurResult.appendChild(divCreate);
      
   });
   function onClick (ev) {
      ev.target.children[0].style.display = '';
   }
}