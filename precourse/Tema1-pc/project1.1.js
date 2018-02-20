 
 var results = new Array();
 var oper = new Array();

calculator();
mostrarResultados(results)
masOperaciones();

function masOperaciones(){
	var masOper = pregunta("Quieres realizar mas operaciones? y/n",0).toUpperCase();
	console.log(masOper);
	switch(masOper){
		case "Y":
				calculator();
				mostrarResultados(results)
				break;
		case "N":
				alert("Hasta pronto.");
				break;
	}
}


function calculator(){
	var consulta = pregunta("¿Cuantos numeros quieres operar?",1);
	if(consulta == 1){
		var num = pregunta("Introduce un numero:",1);
	 	results.push("Raiz cuadra de " + num + " = " + raiz(num));
 	}else{
	 	for(var i = 0; i < consulta; i++){
 			oper[i] = pregunta("Introduce un numero:",1);
  		}
 		operaciones(oper);
 	}
}

function operaciones(numeros){
	results.push(numeros.join(" + ") + " = " + suma(numeros));
	results.push(numeros.join(" - ") + " = " + resta(numeros));
	results.push(numeros.join(" * ") + " = " + mult(numeros));
	results.push(numeros.join(" / ") + " = " + div(numeros));
}

function pregunta(texto,tipo){
	if(tipo == 0){
		return prompt(texto);
	}else{
		var datos = parseInt(prompt(texto));
		if(comprobar(datos) == true){
			return datos;
		}else{
			alert("No se ha introducido un numero");
		}
	}
}
	



function suma(numeros){
    var acc = 0;
    for (num in numeros){
    acc += numeros[num]   
    }
    return acc;
}

function resta(numeros){
    var acc = 0;
    for (num in numeros){
    acc = numeros[num] - acc;  
    }
    return acc;
}

function mult(numeros){
    var acc = 1;
    for (num in numeros){
    acc *= numeros[num]   
    }
    return acc.toFixed(3);
}

function div(numeros){
    var acc = 1;
    for (num in numeros){
    acc = numeros[num] / acc; 
    }
    return acc.toFixed(3);
}

 function raiz(num1){
 	return Math.sqrt(num1).toFixed(3);
 }

function mostrarResultados(results){
	console.log(results);
}

function comprobar(num){
	if (isNaN(num)) {
		return false;
	} else{
		return true;
	}
}