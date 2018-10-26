var num1 = 0;
var num2 = 0;
var result = 0;
var operacion;

function numero(num){
	if(document.getElementById("pantalla").value == 0 || num1 == 0){
		num1 = num;
	}else{
		num1 += num;
	}
	document.getElementById("pantalla").innerHTML = num1;
	console.log(num1)
}

function operar(valor){
	console.log(valor);
	if(valor != "√"){
		num2 = parseFloat(num1);
		num1 = 0;
	}
	document.getElementById("pantalla").innerHTML = valor;
	operacion = valor;
}

function esIgual(){
	num1 = parseFloat(num1);
	switch(operacion){
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num2 - num1;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = (num2 / num1).toFixed(3);
			break;
		case "√":
			result = parseFloat(Math.sqrt(num1)).toFixed(3);
			break;
	}
	document.getElementById("pantalla").innerHTML = result;
	num1 = parseFloat(result);
	console.log(result);
}

function reset(){
	console.log(num1);
	console.log(num2);
	document.getElementById("pantalla").innerHTML = 0;
	num1 = 0;
	num2 = 0;
}
