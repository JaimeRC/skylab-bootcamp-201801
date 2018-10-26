var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien")},
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")},
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")},
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")},
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
];
var name = "";
var points = 0;
var errors = 0;
var users = [];
var answer = "";
var newUser = true;
var cont = 0;

function newGame(){
    cancelGame("Introduce su nombre de Usuario");
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
}

function game(){
    if(getStatus()){
        users.push({name: name, points: points, errors: errors});
        cancelGame("FIN DEL JUEGO <br> ESTA ES TU PUNTUACION <br>Usuario: " + name + "<br> - Aciertos: " + points + "<br> - Errores: " + errors);
     } else {
        while(questions[cont].status === 1){
            cont++;
        }
        document.getElementById("text").innerHTML = questions[cont].question;
    }
}

function pasapalabra(value){
    if(newUser){
        name = document.getElementById("text1").value;
        newUser = false;
    } else {
        if(value){
            cont++;
        } else {
            answer = document.getElementById("text1").value;
            if (answer.toLowerCase() === questions[cont].answer){
                points++;
                toUpdate(questions[cont].letter, "acierto", "aciertos", points);
            } else {
                errors++;
                toUpdate(questions[cont].letter, "error", "errores", errors);
            }
        }
        if(cont >= questions.length){
            cont = 0;
        }
    }
    document.getElementById("text1").value = "";
    game();
}
    
function toUpdate(letter, newClass, textPoints, valor){
    document.getElementById(textPoints).innerHTML = valor;
    document.getElementById(letter).classList.replace("td", newClass);
    questions[cont].status = 1;
}

function getStatus(){
    var i = 0;
    var todosRespondidos = true;
    while(i < questions.length && todosRespondidos){
        if(questions[i].status === 0){
            todosRespondidos = false;
        }
        i++;
    }
    return todosRespondidos;
}

function credits(){
    var score = "";
    users.sort(function(a,b){
        return (b.points - a.points);
    });
    for(i in users){
        score = score.concat("Usuario: " + users[i].name.toUpperCase() + "<br> - Aciertos: " + users[i].points + "<br> - Errores: " + users[i].errors +"<br>");
    }
    document.getElementById("text").innerHTML = score;
}

function cancelGame(texto){
    points = 0;
    errors = 0;
    name = "";
    cont = 0;
    questions.forEach(function(obj){
        obj.status = 0;
        var oldClass = document.getElementById(obj.letter).getAttribute("class");
        document.getElementById(obj.letter).classList.replace(oldClass,"td");
    });
    document.getElementById("aciertos").innerHTML = "";
    document.getElementById("errores").innerHTML = "";
    document.getElementById("text").innerHTML = texto;
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    newUser = true;
}