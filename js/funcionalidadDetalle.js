function validar(){
	/*Declaracion de variables*/
	var error = 0;
	var mensajesError = '';
	var expRegNombre = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
	var expRegTelefono = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
	var nomApe = document.getElementById("nombreYApellido");
	var dni = document.getElementById("dni");
	var tel = document.getElementById("tel");
	var ciudad = document.getElementById("ciudad");
	var inputs = document.getElementsByTagName("input"); /*Array*/
	const RPTA = 7;
	var contadorRpta = 0;
	var contadorSintomas = 0;

	/*Validacion nombre y apellido*/
	if (!((nomApe.value.length >= 10 && nomApe.value.length < 40) && expRegNombre.test(nomApe.value))) {
		error++;
		mensajesError+="<p>Ingrese un nombre y apellido valido entre 10 y 40 caracteres como maximo</p>";
		nomApe.focus();
		nomApe.value = '';
	}
	
	/*Validacion dni*/
	if ( (dni.value.length < 8 || dni.value.length >= 9 ) ) {
		error++;
		mensajesError+="<p>Ingrese su dni tiene que estar compuesto por 8 digitos numericos</p>";

	}

	/*Validacion Telefono*/
	if (!expRegTelefono.test(tel.value)) {
		error++;
		mensajesError+= "<p>Ingrese un telefono mas su codigo de area ejemplo 011XXXXXXXX</p>";
	}

	/*Validacion Ciudad*/
	if (!(ciudad.value && expRegNombre.test(ciudad.value))) {
		error++;
		mensajesError+="<p>Ingrese una ciudad valida</p>";
	}

	/*Valida que todos los tipos radio esten contestados*/
	for(i in inputs){
		if(inputs[i].checked){
			contadorRpta++;
			/*En la siguiente parte se cuentan los sintomas*/
			if (inputs[i].value == "si") {
				contadorSintomas++;
			}
		}
	}
	if (contadorRpta != RPTA){
		error++;
		mensajesError+="<p>Por favor conteste todas las preguntas</p>"
	}

	/*En el caso de que halla erroes me escribe mensaje en el div mensaje*/
	if(error==0){
		alert("Se ha detectado que posee: " + contadorSintomas +" sintomas de COVID-19");
		alert("Se completo el formulario correctamente");
		return true;
	}else{
		document.getElementById("mensaje").innerHTML=mensajesError;
		return false;
	}
}

function mostrarYOcultar(){
	var pregunta6 = document.getElementsByName("pregunta6");
	var pregunta1 = document.getElementsByName("pregunta1");

	if (pregunta1[1].checked) {
		document.getElementById("paisesVisitados").style.display = "none";
	}else{
		document.getElementById("paisesVisitados").style.display = "block";
	}

	if(pregunta6[1].checked){
		document.getElementById("cajaDireccion").style.display = "none";
	}else{
		document.getElementById("cajaDireccion").style.display = "flex";
	}
}

		
			
		
		