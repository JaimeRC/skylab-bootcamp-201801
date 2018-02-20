 // STRING

 //a) Puedes contar cuantas letras tiene tu nombre?
 var myName = "Jaime"
 console.log(myName.length)

 //b) Añade tu apellido e indica en que posición se encuentra
 var myLastname = "Rubio"
 myName += " " + myLastname
 console.log(myName)
 console.log(myName.lastIndexOf("Rubio"))

 //c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
 var myFullName = myName.split(" ")
 console.log(myFullName[0])

 //d) Ahora, solo tu apellido.
 console.log(myFullName[1])

 //d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
 var myString = myFullName[0] + " " + myFullName[1]
 console.log(myString + ", " + myFullName[1])

 //e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
  console.log("Hello, " + myString.replace("Jaime","Mr."))

  //f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
 console.log("My lastname is " + myFullName[1].toUpperCase())

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
var something = myName + " is awesome"
console.log(something)

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
console.log(myFullName[0].charAt(0).toUpperCase() + "." + myFullName[1].charAt(0).toUpperCase())


//ARRAY

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
var myString0 = myFullName[0] + myFullName[1]
myString0 = myString0.split("")
console.log(myString0.join("/"))

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
console.log(myLastname.split("").join("|"))

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
var nombre = myFullName[0].split("")
for(var i = 0; i < nombre.length; i++){
	console.log(i+1 + "º " + nombre[i])
}

//d)Como en el ejercicio anterior, pero seleccionando tu apellido
var apellido = myFullName[1].split("")
var numNombre = myFullName[0].length
for(var i = 0; i < apellido.length; i++){
	console.log(i+1+numNombre + "º " + apellido[i])
}

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
var myInitials = myFullName[0].charAt(0).toUpperCase() + "." + myFullName[1].charAt(0).toUpperCase()

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
var mySelector = ["Jaime","Rubio",33]
console.log("My name is " + mySelector[0].toUpperCase() + " and i'm " + mySelector[2] + " years old")

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios
function myCityAdd(city){
	mySelector.push(city)
	console.log("City added to array! => " + mySelector.join(", "))
}
myCityAdd("Malaga")

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
function myCityDelete(){
	mySelector.pop()
	console.log("City deleted! => " + mySelector.join(", "))
}
myCityDelete()

//j) Ahora, elimina el nombre y asegura los cambios
mySelector.shift();
console.log(mySelector.join(", "))

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
mySelector.splice(0,0,"Jaime")
console.log(mySelector.join(", "))

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
var numbers = [0,1,2,3,4,5,6,7,8,9,10]
var multiBTwo = numbers.map(function (valor){ return valor*2})
console.log(multiBTwo.join(", "))

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
var num = 3; // cada número se multiplicará por 3
function multByNum(num){
    var arrayMult = numbers.map(function (valor){ return num*valor})
    return arrayMult
}
console.log(multByNum(num).join(", "))

//m) Podrías mostrarlos en el orden inverso?
console.log(numbers.sort(function(a, b){return b-a}))

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
var letters = "Jaime Rubio Caballero";
var cont = 0;
for (var i = 0; i < letters.length; i++) {
	for (var a = i ; a < letters.length; a++) {
	 if (letters[i].toLowerCase() === letters[a].toLowerCase()) {
	 	cont++;
	 }
	}
	if(cont>1){
	console.log("La letra " + letters[i] + " se muestra " + cont + " veces");
	}
	cont = 0;
}

//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras
*********************************************************************************************


//Numbers

//a) Que hora es? Declara la hora como número y devuelvela como String
var myNumberStringify = 18.02;
console.log("Son las "+myNumberStringify.toString() + " de la tarde.");

//b) Nono, que hora exactamente? Dime la hora sin minutos
console.log("Son las "+myNumberStringify.toFixed() + " de la tarde.");

//c) Ahora, declara tu hora y muéstrala redondeada.
var hora = 10.50;
console.log("Son las " + Math.round(hora));

//d) Hagamos una calculadora. Primero, la suma.
var a = 7;
var b = 3;
var sum = a + b;
console.log("La suma de " + a + " + " + b + " es " + sum);

//d1) Añade la resta...
var rest = a - b;
console.log("La suma de " + a + " + " + b + " es " + sum + " y la resta es " + rest);

//d2) Y la multiplicación
var mult = a * b;
console.log(sum + ", " + rest + ", " + mult);

//d3) Por ultimo, la división
var div = a / b;
console.log(sum + ", " + rest + ", " + mult + " y " + div);

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?
console.log(10*"hour");

//e) Podemos controlar este error con un condicional if?
if(Number.isNaN(10*"hour")){
	console.log("Tu no puedes hacer esta operacion");
}
