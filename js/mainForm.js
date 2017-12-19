'use strict';

$(document).ready(() => {

 	$('[data-toggle="tooltip"]').tooltip();

 	$('#showModal').click(() => {
 		$('#myModal').modal();
 	});

	document.getElementById('finishbutton').onclick = () => {
		let form = document.forms.mainForm;
	
		let name = form.elements.name.value;
		let regExpName = /^[A-ZА-ЯЁёa-zа-яёё ]{1,30}$/;

		if( !name) {
	        $('#name').val('Введите имя');
	    } else if(!regExpName.test(name)) { 
	        $('#name').val('Введите имя корректно');
	    } else if ($('#name').val() !== 'Введите имя' && $('#name').val() !== 'Введите имя корректно') {
	    	console.log(name);	    	
	    }

	   $('#name').focus (() => {
	    	if($('#name').val() === 'Введите имя' || $('#name').val() === 'Введите имя корректно'){
	           $('#name').val('');
        	}
	    });


		let phoneNumber = form.elements.phonenumber.value;
		let regExpPhoneNumber = /^[0-9]{8}$/;

		if( !phoneNumber) {
	        $('#phoneNumber').val('Введите номер телефона');
	    } else if(!regExpPhoneNumber.test(phoneNumber)) { 
	        $('#phoneNumber').val('Введите номер телефона корректно');
	    } else {
	    	console.log(phoneNumber);	    	
	    }

	   $('#phoneNumber').focus (() => {
	    	if($('#phoneNumber').val() === 'Введите номер телефона' || $('#phoneNumber').val() === 'Введите номер телефона корректно'){
	           $('#phoneNumber').val('');
        	}
	    });

		let deliveryMethod = form.elements.delivery.value;

		if( deliveryMethod === '') {
	        $('#deliveryMethodError').html('Необходимо выбрать способ доставки');
	    } else {
	    	$('#deliveryMethodError').html('');
	    	console.log(deliveryMethod);	    	
	    }		
		
		let city;

		for(let i = 0; i < form.elements.city.length; i++) {
			form.elements.city[i].value;
			if(form.elements.city[i].selected) {
				city = form.elements.city[i].value;
			}
		}

		if (city = '--выберите город--'){
			$('#cityError').html('Необходимо выбрать город');
		} else {
			$('#cityError').html('');
			console.log(city);
		}

		let adress = form.elements.adress.value;
		if (!adress) {
			$('#adress').val('Введите адрес доставки');
		} else if (adress !== 'Введите адрес доставки') {
			console.log(adress);
		}

	   $('#adress').focus (() => {
	    	if($('#adress').val() === 'Введите адрес доставки'){
	           $('#adress').val('');
        	}
	    });

	    let email = '';

		if(form.elements.receipt.checked){
			console.log('Получить квитанцию - ' + form.elements.receipt.value);

			email = form.elements.email.value;
			console.log(email);
		}

		if (form.elements.receipt.checked && $('#email').val() === '') {
			$('#emailError').html('Необходимо указать e-mail');
		} else {
			$('#emailError').html('');
			console.log(email);			
		}
	}
 

});

