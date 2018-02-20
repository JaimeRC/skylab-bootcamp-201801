//a) Declara tu nombre y muéstralo por consola:
var name = 'Jaime'
console.log(name)

//b) Declara tu edad y muéstralo por consola:
var age = 33
console.log(age)

//c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:
var info = ["Jaime", "Rubio","Caballero",33]
console.log(info)

//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
var data = {
	name: "Jaime",
	age: 33
}
console.log(data)

//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
for(var i=0;i<info.length;i++){
	console.log(info[i])
}

//f) Crea una estructura condicional que imprima el número mayor entre dos números.
var a = 25
var b = 12
if(a < b){
	console.log(b)
}else{
	console.log(a)
}

//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:
var a = 25
var b = 12
if(a < b){
	console.log(b)
}else if(a > b){
	console.log(a)
}else{
	console.log("The numbers are equal.")
}

//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.
var numbers = [1,2,3,4,5]
for(var i=0; i<numbers.length; i++){
	if (numbers[i] === 3) {
		console.log(numbers[i])
		console.log("We are in the middle of loop")
	}else{
		console.log(numbers[i])
	}
}

//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error
var myName = "Jaime"
var myAge = 33
if(myName === "Jaime" && myAge === 34){
	console.log("Hi!! Glad to see you again")
}else{
	console.log("This is not you")
}

//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.
var data = ["Jaime","Alfonso",40,"Lopez","Rubio",33,"Caballero"]
var myData = []
for (var i = 0; i < data.length; i++) {
	if (data[i] === "Jaime") {
		myData[0] = data[i]
	}else if (data[i] === "Rubio"){
		myData[1] = data[i]
	}else if (data[i] === 33){
		myData[2] = data[i]
	}
}
console.log("My data are: " + myData[0] + " "+ myData[1]+ " "+ myData[2])