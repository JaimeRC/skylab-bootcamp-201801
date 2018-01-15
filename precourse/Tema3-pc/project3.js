var bingoCard = [
    {number: 0, matched: false},
    {number: 0, matched: false},
    {number: 0, matched: false},
    {number: 0, matched: false},
    {number: 0, matched: false},
    //next line
    {number: 0, matched: false},
    {number: 0, matched: false},
    {number: 0, matched: false},
    {number: 0, matched: false},
    {number: 0, matched: false}
]

function bingo(){
    var user = "";
    var numbers = [];
    var numberBingo = 0;
    var numBombo = [];
    var cont = 0; // Variable para quedarnos con el carton elegido y no se modifique
    var line = 0; // Variable para que no se repita "Linea" cada vez que obtenemos los resultados.

    function getUser(){
        user = prompt("Bienvenido, ¿cual es su nombre de usuario?\n¡Vamos a comenzar a jugar!");
        getBingoCard();
     }

     function getBingoCard(){
        bingoCard.forEach(function(obj){
            obj.number = randomNumber();
        });
        numbers = []; //Inicianilazamos la variable numbers para que no tenga en memoria los numeros del carton y pueda dar nuevos numeros
        showBingoCard();
     }

     function getNumberBingo(){
        numberBingo = randomNumber();
        numBombo.push(numberBingo);
        for(i in bingoCard){
            if(numberBingo === bingoCard[i].number){
                bingoCard[i].number = "X";
                bingoCard[i].matched = true;
            }
        }
        cont++;
        getResults();
     }

     function getResults(){
        var line1 = 0;
        var line2 = 0;
        for(i in bingoCard){
            if(i<5 && bingoCard[i].matched === true){
                line1++;
            }else if(bingoCard[i].matched === true){
                line2++;
            }
        }
        if(line1 === 5 && line2 === 5){
            alert("BINGO");
            while(confirm("¿Desea volver a Jugar?")){
                getUser();
            }
        }else if(line1 === 5 || line2 === 5 && line === 0){
            alert("Linea!!!");
            line++;
            showBingoCard();
            getNumberBingo();            
        }else{
            showBingoCard();
            getNumberBingo();
        }
     }

    function randomNumber(){
        var newNumber = 0;
        while(newNumber === 0){
            newNumber = Math.floor((Math.random()*15)+1);
            for (var i = 0; i < numbers.length; i++){
                if(numbers[i] === newNumber){
                    newNumber = 0;
                    break;
                }
            }
        }
        numbers.push(newNumber);
        return newNumber;
    }

    function showBingoCard(){
        var primeraLinea = [];
        var segundaLinea = [];
        for(i in bingoCard){
            if(i<5){
                primeraLinea.push(bingoCard[i].number);
            }else{
                segundaLinea.push(bingoCard[i].number);
            }
        }
        if(cont === 0){
            var changeCard = prompt(user + ", este es tu carton:\n1º Linea: " + primeraLinea.join("-") + "\n2ª Linea: " + segundaLinea.join("-") + "\n¿Te gusta este carton? yes/no");
            if(changeCard === "yes"){
                getNumberBingo();
            }else{
                getBingoCard()
            }
        }else{
            alert(user + ", este es tu carton despues de sacar el numero " + numberBingo + ":\n1º Linea: " + primeraLinea.join("-") + "\n2ª Linea: " + segundaLinea.join("-") + "\nIntentos: " + cont + "\nNumeros del bombo: " + numBombo.join("-"));
        }
        
    }
    getUser();
}
bingo();