//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function hello(myName){
	console.log("Hola, " + myName);
}
hello("Jaime");

//b) Intenta retornar los valores en lugar de usar console.log
function hello1(myName){
	return "Hola, "+ myName;
}
console.log(hello1("Jaime"));

//c) Ahora, añade tu edad y concaténala al return
function hello2(myName, age){
	var myMessage = "Hola, " + myName + ", tienes " + age + " años.";
	return myMessage;
}
console.log(hello2("Jaime",33));

//d) Iguala tu función a una variable y ejecútala
var message = hello2("Jaime", 33);
console.log(message);

//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, 
//intenta imprimir sus dos resultados concatenados Now, try to declare other function and assign
// it result to other variable called myAge, and try to print the result of both functions in one line.
function hello3(myName){
	return "Hola + "+ myName + "!!!";
}
function myAge(age){
	return "Tengo " + age + " años.";
}
var nameAge = hello3("Jaime") + " " + myAge(33);
console.log(nameAge);

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
function myRandomNumber(){
	return Math.floor((Math.random().toFixed()*10)+0);;
}
var nameAgeRandom = hello3("Jaime") + myAge(33 + myRandomNumber());
console.log(nameAgeRandom);

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
var saludo = hello3("Jaime")
var edad = myAge(33 + myRandomNumber());
console.log(saludo + edad);

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
function myMessage(){
	var x = hello3("Jaime");
	var y = myAge(33 + myRandomNumber());
	return x+y;
}
console.log(myMessage());

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
function myMessage1(){
	var x = hello3("Jaime");
	var y = myAge(randomNumber);
	function randomNumber(){
		return Math.random.toFixed();
	}
	return x + y;
}
console.log(myMessage1());

//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
function myMessage2(){
	var x = hello3("Jaime");
	var y = myAge(randomNumber());
	function randomNumber(){
		return Math.floor((Math.random().toFixed()*50)+1);
	}
	if( y <= 20){
		return x+y+", eres menor de 20 años.";
	}else{
		return x+y+", eres mayor de 20 años.";
	}
}
console.log(myMessage2());

//j) Al return de la función name(), concaténale otro mensaje
console.log(myMessage2() + " Eres un loco");

//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
****

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamadafunction 
function myMessage3(name){
	var z = "";
	var x = "La primera funcion devuelve: " + hello(name);
	console.log(x);
	if(name != "Jaime"){
		z = "Tu no eres Jaime!!!";
		console.log(z);
	}else{
		var y = "La segunda funcion devuelve: " + age(randomNumber());
		console.log(y);
		if( y <= 20){
			return ", eres menor de 20 años.";
		}else{
			return ", eres mayor de 20 años.";
		}
	}
	function hello(name){
		return "Hola + "+ name + "!!!";
	}
	function age(age){
		return "Tengo " + age + " años.";
	}
	function randomNumber(){
		return Math.floor((Math.random().toFixed()*50)+1);
	}
}
console.log(myMessage3("Jaim"));

//m) Vamos a complicarlo un poco... El número random debería generarse en otra 
//función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.
function myMessage4(name){
	var z = "";
	var x = "La primera funcion devuelve: " + hello(name);
	console.log(x);
	if(name != "Jaime"){
		z = "Tu no eres Jaime!!!";
		console.log(z);
	}else{
		var y = "La segunda funcion devuelve: " + age(randomNumber());
		console.log(y);
		if( y <= 20){
			return ", eres menor de 20 años.";
		}else{
			return ", eres mayor de 20 años.";
		}
	}
	function hello(name){
		return "Hola + "+ name + "!!!";
	}
	function age(age){
		return "Tengo " + age + " años.";
	}
}
function randomNumber(){
	return Math.floor((Math.random().toFixed()*50)+1);
}
console.log(myMessage4("Jaime"));

//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, 
//éste último se encargará de llamarlas todas y mostrar sus resultados.
function father(name){
	firstFuncion(name);
	var y = secondFunction();
	thirdFunction(y);
}
function firstFuncion(name){
	var x = "La primera funcion devuelve: ";
	console.log(x + "Hola "+ name + "!!!");
}
function secondFunction(){
	function randomNumber(){
		return Math.floor((Math.random().toFixed()*50)+1);
	}
	var y = "La segunda funcion devuelve: ";
	var age = randomNumber();
	console.log(y + "Tengo " + age + " años");
	return age;
}
function thirdFunction(number){
	var z = "La tercera funcion devuelve: ";
	var higherAge = "";
	if(number <= 20){
		higherAge = "Eres menor de 20 años.";
	}else{
		higherAge = "Eres mayor de 20 años.";
	}
	console.log(z + higherAge);
}
father("Jaime");

//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre,
// muestra los resultados de esta array como siempre.
var acc = 0;
function father(name){
	var results = [];
	var myAge = randomNumber();
	results.push(firstFunction(name));
	results.push(secondFunction(myAge));
	results.push(thirdFunction(myAge));
	if (acc == 0){
		console.log(results.join(". "));
		acc++;
	}else{
		results.push("hello from the dark side...");
		console.log(results.join(". "));
	}
}
function firstFunction(name){
	var x = "La primera funcion devuelve: ";
	x = x + "Hola "+ name + "!!!";
	return x;
}
function secondFunction(age){
	var y = "La segunda funcion devuelve: ";
	y = y + "Tengo " + age + " años";
	return y;
}
function thirdFunction(age){
	var z = "La tercera funcion devuelve: ";
	if(age <= 20){
		z += "Eres menor de 20 años.";
	}else{
		z += "Eres mayor de 20 años.";
	}
	return z;
}
function randomNumber(){
	return Math.floor((Math.random()*50)+1);
}
father("Jaime");

//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, 
//deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.
function darkSide(){
	father("Jaime");
}
darkSide();

//p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, 
//mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres,
//con lo cual, también deberás refactorizar las funciones hijas.
function father(name){
	var results = [];
	var persona = {};
	var myAge = randomNumber();
	results.push(firstFunction(name));
	results.push(secondFunction(myAge));
	results.push(thirdFunction(myAge));
	persona.nombre = name;
	persona.edad = myAge;
	persona.comentarios =  results;
	return persona;
}
function firstFunction(name){
	var x = "La primera funcion devuelve: ";
	x = x + "Hola "+ name + "!!!";
	return x;
}
function secondFunction(age){
	var y = "La segunda funcion devuelve: ";
	y = y + "Tengo " + age + " años";
	return y;
}
function thirdFunction(age){
	var z = "La tercera funcion devuelve: ";
	if(age <= 20){
		z += "Eres menor de 20 años.";
	}else{
		z += "Eres mayor de 20 años.";
	}
	return z;
}
function randomNumber(){
	return Math.floor((Math.random()*50)+1);
}
function grandFather(){
	var selectedName = father("Jaime");
	var selectedName1 = father("Hulk");
	console.log(selectedName.comentarios);
	console.log(selectedName1.comentarios);
	if (selectedName.edad > selectedName1.edad) {
		console.log(selectedName.nombre + " es mayor de edad")
	}else{
		console.log(selectedName1.nombre + " es mayor de edad")
	}
}
grandFather();
