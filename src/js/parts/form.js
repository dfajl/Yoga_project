function form () {
    let message = {
        loading: 'Загрузка',
        success: 'Thank you! We will get in touch with you later!',
        failure: 'Что-то пошло не так :('
    };

    let form = document.forms.first, 
    // это альтернативный вариант получения формы. до этого было document.querySelector('.main-form'),

        input = form.getElementsByTagName('input'), // это инпуты с определенной формы, которую я получил выше
        statusMessage = document.createElement('div'), // создал блок, куда помещу сообщения из объекта message
        errorMessage = document.createElement('div'),
		formContacts = document.getElementById('form'),
        inputContacts = formContacts.getElementsByTagName('input');
      
        statusMessage.classList.add('status');
		errorMessage.classList.add('status');

     // formData.append('phone2', '+7(905) 397 74 21'); потренировался в использовании метода к форме
        form.addEventListener('submit', async function (event) { 
            event.preventDefault();
            form.appendChild(statusMessage);
			form.appendChild(errorMessage);
            let formData = new FormData(form);
        
        // formData.append('phone2', '+7(905) 397 74 21'); потренировался в использовании метода к форме

            try {

                let response = await fetch('server.php', {
					method: 'POST',
					body: formData
                }); 
				
				if (response.ok) {
                	statusMessage.innerHTML = message.success;
            	} 

            } catch (error) {
				statusMessage.innerHTML = message.failure;
				errorMessage.innerHTML = error; 
			}
                                      
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			} 
            
			setTimeout(()=> {
				form.removeChild(statusMessage);
				form.removeChild(errorMessage);
			},3000);

        });
        
        

        formContacts.addEventListener('submit', async function(event) { 
            // обрати внимание: обработчик события навешиваем не на кнопку "отправить", а на саму ФОРМУ, то есть, событие происходит лишь тогда, когда отправляется форма
    
		event.preventDefault();
		// так я отменил стандартное поведение браузера. т.е. он при отправке формы всегда перезагружается. даже с использование AJAX

		formContacts.appendChild(statusMessage);
		formContacts.appendChild(errorMessage);

		let formContactsData = new FormData(formContacts);

		let obj = {};

		formContactsData.forEach(function(value, key) {
			obj[key]=value;
		});

		try {
			let response = await fetch('server.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(obj)
			});
			 
			if (response.ok) {
				statusMessage.innerHTML = message.success;
			} 

		} catch (error) {
			statusMessage.innerHTML = message.failure; 
			errorMessage.innerHTML = error;
		}                              
               
        for (let i = 0; i < inputContacts.length; i++) {
            inputContacts[i].value = '';
        }

		setTimeout(()=> {
			formContacts.removeChild(statusMessage);
			formContacts.removeChild(errorMessage);
		}, 3000);
    });
} 

module.exports = form;


