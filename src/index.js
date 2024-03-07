import formStorage from './script.js';

 var myForm = document.getElementById('myForm');

     myForm.addEventListener('submit', 
       function (evt) {
      evt.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      formStorage.updateData('name', name);
      formStorage.updateData('email', email);
      formStorage.updateData('message', message);

      const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            successMessage.style.color = 'green';

            const closeBtn = document.getElementById('closeBtn');
            closeBtn.style.display = 'inline';

            closeBtn.addEventListener('click', function() {
                successMessage.style.display = 'none';
                closeBtn.style.display = 'none';
            
            })
      console.log('Form submitted. Data:', formStorage.getData());
       });
