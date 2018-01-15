var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

function skyLabAirLines(){
	var user = "";
	var admin = "";
	function getUser(){
		user = prompt(" ¿Cual es su nombre de usuario?");
		alert("Bienvenido a nuestro sistema de gestion de vuelos.")
		admin = prompt("¿Es usted Admin o User? (yes = Admin / no = User)");
		if(admin === "yes"){
			menuAdmin();
		}else if(admin === "no"){
			menuUser();
		}
	}
	function menuUser(){
		var choice = parseInt(prompt("Introduce la opcion que quieres realizar:\n 1.- Mostrar los vuelos de hoy.\n 2.- El coste medio de los vuelos.\n 3.- Vuelos con escala.\n 4.- Los ultimos 5 vuelos.\n 5.- Buscar segun su precio.\n 6.- Salir del programa."));
		switch (choice){
			case 1:
				getFly();
				menuUser();
				break;
			case 2:
				getCostMedio();
				menuUser();
				break;
			case 3:
				getFlyWithScale();
				menuUser();
				break;
			case 4:
				getLastFiveFlights();
				menuUser();
				break;
			case 5:
				getSearchForFlightsByPrice();
				menuUser();
				break;
			case 6:
				alert("Muchas gracias por su visita.");
				break;
		}
	}
	function menuAdmin(){
		var choice = parseInt(prompt("Introduce la opcion que quieres realizar:\n 1.- Introducir un vuelo nuevo.\n 2.- Eliminar un vuelo.\n 3.- Mostrar los vuelos actualizados.\n 4.- Salir del programa."));
		switch (choice){
			case 1:
				setCreateFly();
				menuAdmin();
				break;
			case 2:
				setDeleteFly();
				menuAdmin();
				break;
			case 3:
				getFly();
				menuAdmin();			
				break;
			case 4:
				alert("Muchas gracias por su visita.");
				break;
		}
	}
	function getFly(){
		alert("Estos son los vuelos que tenemos programados para hoy: ");
		flights.forEach(function(obj){
			showFlys(obj);
		});
	}
	function getCostMedio(){
		var media = 0;
		var acc = 0;
		flights.forEach(function(obj){
			media += obj.cost;
			acc++;
		})
		media = media / acc;
		alert("El coste medio de los vuelos de hoy es de " + media);
	}
	function getFlyWithScale(){
		alert("Estos son los vuelos que hacen escala:");
		flights.forEach(function(obj){
			if(obj.scale == true){
				showFlys(obj);
			}
		});
	}
	function getLastFiveFlights(){
		for (var i = flights.length - 1; i > flights.length-6 ; i--) {
			showFlys(flights[i]);
		}
	}
	function getSearchForFlightsByPrice(){
		var price = parseInt(prompt("Introduce el precio a buscar:"));
		var priceHigh = flights.filter(function(obj){ return obj.cost>price});
		var priceEqual = flights.filter(function(obj){ return obj.cost===price});
		var priceLow = flights.filter(function(obj){ return obj.cost<price});
		var choice = parseInt(prompt("Introduce la opcion que quieres realizar:\n 1.- Vuelos con precio superior.\n 2.- Vuelos con el mismo precio.\n 3.- Vuelos con precio inferior."));
		switch (choice){
			case 1:
				showFlys(priceHigh);
				break;
			case 2:
				showFlys(priceEqual);
				break;
			case 3:
				showFlys(priceLow);
				break;
		}
	}
	function setCreateFly(){
		if(flights.length === 15){
			alert("No se pueden introducir mas de 15 vuelos diarios.")
			menuAdmin();
		}else{
			var idFly = parseInt(prompt("Introduce un numero de ID del vuelo:"));
			var idExist = false;
			flights.forEach(function(obj){
				if(obj.id === idFly){
					idFly = prompt("Error! ID ya existe. Introduce uno diferente:")
					idExist = true;
				}
			})
			while(idExist === false){
				var toFly = prompt("Introduce el lugar de origen:");
				var fromFly = prompt("Introduce el lugar de destino:");
				var costFly = prompt("Introduce el coste del vuelo:");
				var scaleFly = prompt("Introduce si tiene escala o no: (si/no)");
				if(scaleFly === "si"){
					scaleFly = true;
				}else if(scaleFly === "no"){
					scaleFly = false;
				}
				flights.push({id: idFly, to: toFly, from: fromFly, cost: costFly, scale: scaleFly});
			}
		}
	}
	function setDeleteFly(){
		getFly();
		var idDelete = prompt("Que vuelo quieres eliminar: (identificalo por su ID)");
		for(i in flights){
			if(flights[i].id === idDelete){
				flights.splice(i,1);
			}
		}
	}
	function showFlys(obj){
		var escala ="";
		if(obj.scale == true){
			escala = "si";
		}else{
			escala = "no";
		}
		alert("- El vuelo con origen: " + obj.to + ", y destino: " + obj.from + " tiene un coste de " + obj.cost + "€ y " + escala + " realiza alguna escala. Ref. "+ obj.id);
	}
	getUser();
}
skyLabAirLines();