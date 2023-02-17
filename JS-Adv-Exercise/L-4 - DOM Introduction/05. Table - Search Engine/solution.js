function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const rows = document.querySelectorAll('tbody tr');
   const searchText = document.getElementById('searchField');

   function onClick() {
      //   TODO:

      for(const row of rows) {
         row.classList.remove('select');
         if(row.innerHTML.includes(searchText.value)){
            row.className = 'select';
         }
      }
      searchText.value = '';
   }
}