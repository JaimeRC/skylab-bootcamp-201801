function camelCase(text) {
    var regEx = /[A-Z\d]+/g;
    text = text.replace(regEx, function (n) { return ' ' + n; });
    return text;
}
camelCase('hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt');
    // Exprecion regular: 
    //          [A-Z] buscar de la A a la Z en mayusculas.
    //          \d busca los digitos del 0 al 9 (dentro del bloque)
    //          +/g busca en todo el string, global.
