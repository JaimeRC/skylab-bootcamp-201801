var questions = [
    { letter: "a", status: 0, answer1: "abducir", question1: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"), answer2: "respuesta 2", question2: "CON LA A. Pregunta 2", answer3: "respuesta 3", question3: "CON LA A. Pregunta 3" },
    { letter: "b", status: 0, answer1: "bingo", question1: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"), answer2: "respuesta 2", question2: "CON LA B. Pregunta 2", answer3: "respuesta 3", question3: "CON LA B. Pregunta 3" },
    { letter: "c", status: 0, answer1: "churumbel", question1: ("CON LA C. Niño, crío, bebé") , answer2: "Respuesta 2", question2: "CON LA C. Pregunta 2", answer3: "respuesta 3", question3: "CON LA C. Pregunta 3"},
    { letter: "d", status: 0, answer1: "diarrea", question1: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"), answer2: "respuesta 2", question2: "CON LA D. Pregunta 2", answer3: "respuesta 3", question3: "CON LA D. Pregunta 3" },
    { letter: "e", status: 0, answer1: "ectoplasma", question1: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"), answer2: "respuesta 2", question2: "CON LA E. Pregunta 2", answer3: "respuesta 3", question3: "CON LA E. Pregunta 3" },
    // { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    // { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    // { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    // { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    // { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    // { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    // { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    // { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    // { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    // { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    // { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    // { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    // { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    // { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    // { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    // { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    // { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    // { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    // { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    // { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    // { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    // { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
];

function pasaPalabra(){
    var users = [];
    var name = "";
    var points = 0;
    var errors = 0;

    function menu(){
        var choice = parseInt(prompt("Bienvenido a PasaPalabra.\nIntroduce la opcion que quieres realizar:\n 1.- Empezar el juego.\n 2.- Mostrar los resultados.\n 3.- Salir del programa."));
        switch (choice){
            case 1:
                reset();
                getUser();
            //Eliminamos el Break para mostrar el resultado a continuacion de jugar.
            case 2:
                getScore();
                break;
            case 3:
                alert("Muchas gracias por su visita.");
                break;
        }
    }

    function getUser(){
        name = prompt("Empezemos a jugar, ¿cual es su nombre de usuario?");
        if(name != null){
            alert("Bienvenido " + name + ", ¡Vamos a comenzar a jugar!\nInstrucciones de uso:\n - Si no se introduce una palabra en la respuesta se dará como respuesta Incorrecta.\n - Si se clicka el boton de cancelar o se excribe END se saldrá del juego y volvera al Menu inicial.(No entrara el usuario en el ranking)\n - Si se introduce la palabra PASAPALABRA se pasa a la siguiente pregunta guardandose esa para la proxima ronda.");
            roundOfQuestions();
        } else{
            alert("No has insertado ningun nombre de usuario.")
        }
    }

    function roundOfQuestions(){
        var answer = "";
        var query = [];
        var continueGame = true;
        var cancelGame = false;
        while(continueGame){
            questions.forEach(function (obj){
                if(continueGame === true && obj.status === 0){
                    query = randomQuestions(obj);
                    answer = prompt(query[0]);
                    switch(answer.toLowerCase()){
                        case null:
                        case "end":
                            alert("Has cancelado el Juego. Volvemos al Menu de inicio.")
                            continueGame = false;
                            cancelGame = true;
                            break;
                        case "pasapalabra":
                            alert("Pasapalabra");
                            break;
                        case query[1]:
                            alert("CORRECTO, tienes un 1 punto.")
                            points++; 
                            obj.status = 1;
                            break;
                        default:
                            alert("Lo siento, la respuesta es INCORRECTA.");
                            errors++;
                            obj.status = 1;
                            break;
                    }
                }
            });
            if(cancelGame === false){
                continueGame = nextRound();  
            }
        }
        //Agregamos el Usuario con su puntuacion a nuestro Array de Usuarios si no se ha cancelado el Juego.
        if(cancelGame === false){
           users.push({name: name, points: points, errors: errors});
        }
    }

    function nextRound(){
        var pendingQuestions = 0;
        questions.forEach(function (obj){
            if(obj.status === 0){
                pendingQuestions++;
            }
        });
        if(pendingQuestions > 0){
            alert("¡¡¡Siguiente Ronda!!!");
            return true;
        } else {
            return false;
        }
    }

    function randomQuestions(obj){
        var numberQuestion = Math.floor((Math.random()*3)+1);
        var query = [];
        switch(numberQuestion){
            case 1:
                query[0] = obj.question1;
                query[1] = obj.answer1;
                break;
            case 2:
                query[0] = obj.question2;
                query[1] = obj.answer2;
                break;
            case 3:
                query[0] = obj.question3;
                query[1] = obj.answer3;
                break;
        }
        return query;
    }

    function getScore(){
        var score = "\n";
        users.sort(function(a,b){
            return (b.points - a.points);
        });
        for(i in users){
            score = score.concat(users[i].name.toUpperCase() + " - " + users[i].points + " - " + users[i].errors + "\n");
        }
        alert("Esta es la puntuacion segun los usuarios:\n (Usuario - Puntuacion - Errores)\n" + score);
        menu();
    }

    function reset(){
        //Ponemos todas las cuestiones con el Status a 0 para que se puedan repetir con nuevos usuarios.
        questions.forEach(function (obj){
            obj.status = 0;
        });
        //Borramos el usuario almacenado con su puntuacion para crear uno nuevo.
        name = "";
        points = 0;
        errors = 0;
    }

    menu();
}
pasaPalabra();