function largerInteger(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
/* Simplicar codigo:
function largerIntenger(num1, num2){
    if(num1 > num2)
        return num1;
    return num2;
}
*/

function largerInteger(num1, num2){
    return num1 > num2 ? num1 : num2;
}
console.log('largerInteger should result 56 for inputs -34 and 56 =>', largerIntenger(-34, 56));
console.log('largerInteger should result 56 for inputs -34 and 56 =>', largerIntenger(-34, -56));

//*********************
function signProduct(){
    var isPositive = true;
    for(var i = 0; i < arguments.length; i++){
        if(arguments[i] < 0)
            isPositive = !isPositive;
    }
    return "The sign is " + (isPositive ? "+" : "-");
}

function signProduct(...numArgs){
    var nums = numArgs;
    var boo = true;
    gor(let i = 0; i< numArgs.length;i++){
        numArgs[i] < 0 ? boo = !boo : boo;
    }
    return 'The sign is ${boo ? '+' : '-'}'
}



console.log('signProduct should result "-" for 1,-2,3 ==>', signProduct(1,-2,3));
console.log('signProduct should result "+" for 1,-2,3 ==>', signProduct(1,-2,-3));
console.log('signProduct should result "-" for -1,-2,-3 ==>', signProduct(-1,-2,-3));
console.log('signProduct should result "+" for -1,-2,-3,-4,-5 ==>', signProduct(-1,-2,-3,-4,-5));