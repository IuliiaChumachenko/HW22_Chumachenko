'use strict';

$(document).ready(() => {

 	$('#showLoginForm').click(() => {
 		$('#myModalLogin').modal();
 	});

	document.getElementById('finishLoginButton').onclick = () => {
		let form = document.forms.mainFormLogin;
	
		let login = form.elements.login.value;
		let regExpName = /^[A-ZА-ЯЁёa-zа-яёё ]{1,20}$/;

		if( !login) {
			$('#login').attr('type', 'text');
	        $('#login').val('Введите логин');
	    } else if(!regExpName.test(login)) { 
	    	$('#login').attr('type', 'text');
	        $('#login').val('Введите логин корректно');
	    } else if ($('#login').val() !== 'Введите логин' && $('#login').val() !== 'Введите логин корректно') {
	    	console.log(login);	    	
	    }

	   $('#login').focus (() => {
	    	if($('#login').val() === 'Введите логин' || $('#login').val() === 'Введите логин корректно'){
	    		$('#login').attr('type', 'password');
	            $('#login').val('');
        	}
	    });

	   	let password = form.elements.password.value;
		let regExpPass = /^[A-ZА-ЯЁёa-zа-яёё#$%&*]{1,15}$/;

		if( !password) {
	        $('#password').val('Введите пароль');
	    } else if(!regExpPass.test(password)) { 
	        $('#password').val('Введите пароль корректно');
	    } else if ($('#password').val() !== 'Введите пароль' && $('#password').val() !== 'Введите пароль корректно') {
	    	console.log(password);	    	
	    }

	   $('#password').focus (() => {
	    	if($('#password').val() === 'Введите пароль' || $('#password').val() === 'Введите пароль корректно'){
	           $('#password').val('');
        	}
	    });

	}

});

