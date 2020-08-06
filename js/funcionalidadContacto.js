function validar(){
	var error = 0;
	var mensajesError = '';
	
	var nomApe = document.getElementById("nombreYApellido");
	var email = document.getElementById("email");
	var tel = document.getElementById("telefono");
	
	var expRegNombre = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
	var expRegEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	
	
	

	/*Validacion nombre y apellido*/
	if (!((nomApe.value.length >= 10 && nomApe.value.length < 40) && expRegNombre.test(nomApe.value))) {
		error++;
		mensajesError+="<p>Ingrese un nombre y apellido valido entre 10 y 40 caracteres como maximo</p>";

	}


	/*Validar email con expresion regular*/
	if (!expRegEmail.test(email.value)) {
		error++;
		mensajesError+="<p>Debe ingresar un email valido ejemplo example@example.com</p>"
	}

	/*Validar telefono con el siguiente patron xxxx-xxxx*/
	if (tel.value != "") {
		var test1 = tel.value.charAt(4);
		var test2 = tel.value.substring(0,4);
		var test3 = tel.value.substring(5,9);
		
		if (!(tel.value.length == 9 && test1 == "-" && !isNaN(test2) && !isNaN(test3))) {
			error++;
			mensajesError+="<p>Debe ingresar un numero de telefono valido ejemplo 1234-5678</p>"
		}
	}

	if (error == 0) {
		alert("Se completo el formulario correctamente");
		return true;
	}else{
		document.getElementById("errorMensaje").innerHTML=mensajesError;
		return false;
	}
}

function countChars(obj)
{
    var maxLength = 1000;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("caracteresRestantes").innerHTML = '<span style="color: red;">Usted ha excedido el limite de '+maxLength+' caracteres</span>';
        document.getElementById("enviar").disabled = true;
    }else{
        document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
        document.getElementById("enviar").disabled = false;
    }
}