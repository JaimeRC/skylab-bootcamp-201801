//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, 
//muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.
function showNums(){
	var nums = [1,2,3,4,5,6,7,8,9];
	var pairs = nums.map(function(n){
		return n*2;
	});
//	for(var i = 0 ; i< nums.length-1 ; i++){
//		pairs.push(i+1 + "º pareja " + nums[i] + " - " + (nums[i+1]*2));
//	}
	for(var i = 0 ; i < nums.length-1; i++){
		console.log(i+1 + "º pareja " + nums[i] + " - " + pairs[i+1]);
	}
}
showNums();

//a1) La funcion debería aceptar la array a tratar como argumento.
function showNums1(nums){
	var pairs = nums.map(function(n){
		return n*2;
	});
	for(var i = 0 ; i < nums.length-1; i++){
		console.log(i+1 + "º pareja " + nums[i] + " - " + pairs[i+1]);
	}
}
showNums1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

//a2) Pasa también el numero a multiplicar a la función como argumento
function showNums2(nums, multBy){
	var pairs = nums.map(function(n){
		return n*multBy;
	});
	for(var i = 0 ; i < nums.length-1; i++){
		console.log(i+1 + "º pareja " + nums[i] + " - " + pairs[i+1]);
	}
}
showNums2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],5);

//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
function showNums3(nums, multBy, showCouple){
	var pairs = nums.map(function(n){
		return n*multBy;
	});
	for(var i = 0 ; i < showCouple-1; i++){
		console.log(i+1 + "º pareja " + nums[i] + " - " + pairs[i+1]);
	}
}
showNums3([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],5,10);

//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
//b2) Puedes añadir además, la posición de cada resultado?
//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.
function fibo(num){
	var fibo = [];
	fibo[0] = 0;
	fibo[1] = 1;
	for(var i = 2; i< num; i++){
		fibo[i] = fibo[i-2] + fibo[i-1];
	}
	for(var i = 0; i < fibo.length-1; i++){
		console.log("Posicion " + i + " => " + fibo[i]);
	}
}
fibo(parseInt(prompt("¿Cuantos numeros quieres mostrar?")));

//b5) Ahora, muestra los resultados en forma piramidal:
function fiboPyramid(n){
	var fibo = [];
	fibo[0] = 0;
	fibo[1] = 1;
	for(var i = 2; i< n; i++){
		fibo[i] = fibo[i-2] + fibo[i-1];
	}
	for(var i = 0; i<n; i++){
		console.log(fibo[i].join(" "));
	}
	for(var a = n; a >= 0; a--){
		console.log(fibo[i].join(" "));
	}
}
fiboPyramid(parseInt(prompt("¿Cuantos numeros quieres mostrar?")));

//c) Simple Scripting program. Crea un programa que transforme un número de 
//4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código
var code = 3712;
function codeScript(){
	var nums = code.toString();
	var newNums = nums.charAt(0);
	nums = nums.substring(1,nums.length);
	code = nums.concat(newNums);
	console.log(code);
}
codeScript();
codeScript();
codeScript();
codeScript();

//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos 
//a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
var code = [];
function codeScript(code1, code2){
	code.push(code1);
	code.push(code2);
	for (var i = 0; i <= code.length-1; i++) {
		var nums = code[i].toString();
		var newNums = nums.charAt(0);
		nums = nums.substring(1, nums.length);
		code[i] = nums.concat(newNums);
	}
	console.log(code[0] + " - " + code[1]);
}
codeScript(1234,4321);
codeScript(code[0], code[1]);
codeScript(code[0], code[1]);
codeScript(code[0], code[1]);

//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos,
// multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. 
//(Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores
var code = [];
var codeDescryp = [];
function codeScript(code1, code2){
	code.push(code1);
	code.push(code2);
	for (var i = 0; i <= code.length-1; i++) {
		var nums = code[i].toString();
		var newNums = nums.charAt(0);
		nums = nums.substring(1, nums.length);
		code[i] = nums.concat(newNums);
		console.log(code[i]);
		code[i] = multBy(code[i]);
	}
	console.log(code[0] + " - " + code[1]);

	function multBy(num){
		var numSeparator = num.toString().split("");
		for(var i = 0; i < numSeparator.length; i++){
			numSeparator[i] = numberRandom(numSeparator[i]);
		}
		return numSeparator.join("");
	}
	function numberRandom(n){
		var random = Math.floor((Math.random()*10)+1) * n;
		while(random.toString().length >= 2){
			random = Math.floor((Math.random()*10)+1) * n;
		}
		codeDescryp.push(random/n);
		return random;
	}
}
codeScript(1234,4321);

//c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado 
//(y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
//c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.
var codeDecryp = [];
function codeScript(code1, code2){
	var code = [];
	code.push(encrypt(code1));
	code.push(encrypt(code2));
	console.log(code);
	for(var i = 0; i < code.length; i++){
		decrypt(code[i],i);
	}
}
function encrypt(numberCode){
	var newCodeDecrypt = [];
	var number = numberCode.toString().split("");
	var newCode = number.map(function(n){
		var num = Math.floor((Math.random()*10)+1) * n;
		while(num.toString().length >= 2){
			num = Math.floor((Math.random()*10)+1) * n;
		}
		newCodeDecrypt.push(num/n);
		return num;
	});
	console.log("Codigo Encriptado: " + newCode.join(""));
	console.log("Codigo de Descriptacion:" + newCodeDecrypt.join(""));
	codeDecryp.push(newCodeDecrypt.join(""));
	return newCode.join("");
}
function decrypt(number, order){
	var numDecryp = codeDecryp[order].toString().split("");
	var numScrip = number.toString().split("");
	var newCode = [];
	for(var i=0; i < numScrip.length; i++){
		newCode[i] = numScrip[i] / numDecryp[i];
	}
	console.log("Codigo Descriptado: " + newCode.join(""));
}
codeScript(1234,4321)

//c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.
var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' '],
}