//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
var avenger = { 
    name : "Tony", 
    classRoom : "VII", 
    id : 1 
};
function getPropiedades(){
	for(prop in avenger){
		console.log(prop)
	}
}
getPropiedades();

//b) Ahora, crea una función que liste solo los valores de las propiedades.
function getValor(){
	for(prop in avenger){
		console.log(avenger[prop])
	}
}
getValor();

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
avenger.classRoom = "XI";
console.log(avenger.classRoom);

//d) Ahora, elimina la propiedad ID y asegura los cambios.
delete avenger.id;
console.log(avenger);

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.
avenger.city = "Malaga";
console.log(avenger);

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.
console.log(avenger.city);

//f) Lista el numero de propiedades que contiene el objeto.
var acc=0;
for(prop in avenger){
	acc++;
}
console.log("Hay " + acc + " propiedades");

//g) Cambia la propiedad name por fullName.
function nombrePropiedad(obj){
	var propiedad = obj.name;
	delete obj.name;
	obj.fullName = propiedad;
}
nombrePropiedad(avenger);

//g1) Asegura los cambios.
console.log(avenger.fullName);

//h) Lista todas las propiedades del objeto a través de un console.log()
console.log("Hi ther, I'm " + avenger.fullName + " del siglo " + avenger.class + " de " + avenger.city);

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
avenger.job = "Desempleado";
avenger.country = "España";
avenger.studies = "Programacion";

//h2) Asegura los cambios volviendo a listar los valores del objeto
console.log(avenger);

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)
function avenger(fullName, classRoom, city, job, country, studies){
	this.fullName = fullName;
	this.classRoom = classRoom;
	this.city = city;
	this.job = job;
	this.country = country;
	this.studies = studies;
	this.listProperties = function(){
		console.log(this.fullName + ", " + this.classRoom + ", " + this.city + ", " + this.job + ", " + this.country + ", " + this.studies);
	}
	this.name = function(){
		console.log(this.fullName)
	}
}
var tonyStark = new avenger("Tony Stark", "XI", "NYC", "Ingeneer", "USA", "Universidad");
console.log(tonyStark);

//j) Crea otro objeto y imprime sus propiedades por pantalla.
var otherAvenger = new avenger("Jaime Rubio", "XI", "Malaga", "Tecnico", "España", "Grado Superior");
console.log(otherAvenger);


//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:
otherAvenger.listProperties();

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
tonyStark.name();
otherAvenger.name();

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres
// de los Avengers que sean de la misma ciudad y cuantos hay.
var person = [
	{fullName: "Pedro Lopez", city: "Malaga", country: "España", age: 33, markAv: 10},
	{fullName: "Robert De Niro", city: "NYC", country: "USA", age: 60, markAv: 15},
	{fullName: "Nicola Cage", city: "California", country: "USA", age: 50, markAv: 5},
	{fullName: "Juan Rubio", city: "Malaga", country: "España", age: 38, markAv: 20},
	{fullName: "Pepe Flore", city: "California", country: "USA", age: 25, markAv: 25}
]
function compareAndFilter(city){
	var acc = 0;
	person.forEach(function(obj){
		if(obj.city === city){
			console.log(obj.fullName);
			acc	++;
		}
	})
	console.log("Son " + acc + " personas");
}
compareAndFilter('Malaga');

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
person.push({fullName: "Jaime Rubio", city: "Malaga", country: "España", age: 33, markAv: 6});
function getMediaMarkAv(){
	var acc = 0;
	var media = 0;
	person.forEach(function(obj){
		media += obj.markAv;
	 	acc++;
	})
	media = media / acc;
	console.log("La media de los markAv es " + media);
}
getMediaMarkAv();

//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), 
//es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
function getBetter(obj, obj1){
	if(obj.markAv > obj1.markAv){
		console.log(obj.fullName + " vs " + obj1.fullName + " --> " + obj.fullName + " is better.");
	}else{
		console.log(obj.fullName + " vs " + obj1.fullName + " --> " + obj1.fullName + " is better.");
	}
}
getBetter(person[0],person[1]);
getBetter(person[2],person[3]);
getBetter(person[4],person[5]);

//ñ1) Intenta crear las parejas de forma aleatoria.
function getRandom(){
	return Math.floor(Math.random()*(6-0)+0);
}
for(var i=0; i<3; i++){
	getBetter(person[getRandom()],person[getRandom()]);
}
