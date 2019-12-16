document.querySelector('.login-form input[type=submit]')
     .addEventListener('click', login);
 function login(e) {
     e.preventDefault();
     fetch('login', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify({
            city: document.querySelector('.login-form input[name=city]').value,
             novaposhta: document.querySelector('.login-form input[name=novaposhta]').value,
             surname: document.querySelector('.login-form input[name=surname]').value,
             name: document.querySelector('.login-form input[name=name]').value,
            phone: document.querySelector('.login-form input[name=phone]').value
         })
     })
     .then(_ => document.querySelector('.login-form').reset());
     }

     const shoppingCartMain = document.querySelector('#shopping-cart-main')