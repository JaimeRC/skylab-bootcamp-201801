var results = [];
var num = [];
var suma = 0;
var resta = 0;
var sqrt = 0;
var mult = 1;
var div = 1;
function calculator(){
	function solicitar(){
		var consulta = pregunta("¿Cuantos numeros quieres operar?",1);
		if(consulta == 1){
			num[0] = pregunta("Introduce un numero:",1);
		}else{
		 	for(var i = 0; i < consulta; i++){
				num[i] = pregunta("Introduce un numero:",1);
			}
		}
		operaciones(num);
	}
	function operaciones(numeros){
		if(numeros.length > 1){
   			for (i in numeros){
   				 suma += numeros[i];
   				 resta = (resta*-1) - numeros[i]);
   				 div = numeros[i] / div;
   				 mult *= numeros[i];
   				 console.log(numeros[i]);
   			}
   		} else {
		 	sqrt = Math.sqrt(numeros[0]).toFixed(3);
 		}
 		mostrarResultados()
    }
	function mostrarResultados(){
		if(num.length > 1){
			results.push(num.join(" + ") + " = " + suma);
			results.push(num.join(" - ") + " = " + resta);
			results.push(num.join(" / ") + " = " + div.toFixed(3));
			results.push(num.join(" * ") + " = " + mult;
		} else {
			results.push("Raiz cuadrada de " + num[0] + " es " + sqrt.toFixed(3));
		}
		console.log(results);
	}
	function masOperaciones(){
		var masOper = pregunta("Quieres realizar mas operaciones? y/n",0).toUpperCase();
		switch(masOper){
			case "Y":
					calculator();
					break;
			case "N":
					alert("Hasta pronto.");
					break;
		}
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
	function comprobar(num){
		if (isNaN(num)) {
			return false;
		} else{
			return true;
		}
	}
	solicitar();
	masOperaciones();
}
calculator();
