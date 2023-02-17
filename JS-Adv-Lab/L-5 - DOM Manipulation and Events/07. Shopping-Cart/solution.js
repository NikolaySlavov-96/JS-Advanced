function solve() {
   //TODO...
   const shopingCart = document.querySelector('.shopping-cart');
   shopingCart.addEventListener('click', onLoad);
   const textOutput = document.querySelector('textarea');
   const checkOut = document.querySelector('.checkout');
   checkOut.addEventListener('click', checkPay);


   const store = {};
   const displayProduct = [];

   function onLoad(ev){

      if(ev.target.className === 'add-product'){
         const line = ev.target.parentElement.parentElement;
         const productName = line.querySelector('.product-title').textContent;
         const productPrice = line.querySelector('.product-line-price').textContent;
         
         displayProduct.push(`Added ${productName} for ${productPrice} to the cart.`)

         if(!store[productName]) {
            store[productName] = 0;
         }
         store[productName] += Number(productPrice);

         textOutput.textContent = displayProduct.join('\n')
      }
   }

   function checkPay() {
      const button = Array.from(document.querySelectorAll('button')).map(b => b.disabled = true);

      let totalPrice = 0;
      const products = [];

      for (const product in store) {
         totalPrice += Number(store[product]);
         products.push(product);
      }

      displayProduct.push(`You bought ${products.join(`, `)} for ${totalPrice.toFixed(2)}.`)

      textOutput.textContent = displayProduct.join('\n')
   }
}