
function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array
}
//shuffle(['a', 'b', 'c', 1, 2, 3])
/*
function shuffleArray(array) {
    var newArray = new Array(array.length)
    var numberArray = [];

    function numRandom() {
        var number = 0;
        var test = true;
        while (test) {
            number = Math.floor((Math.random() * (newArray.length-1)) + 0);
            for (var j = 0; j < numberArray.length; j++) {
                if (number != numberArray[j]) {
                    test = false;
                }
            }
        }
        numberArray.push(number);
        return number;
    }

    for (var i = 0; i < newArray.length; i++) {
        var taken = array.pop();
        newArray[numRandom()] = taken;
    }
    return newArray;
};
shuffleArray(['a', 'b', 'c', 1, 2, 3]);
*/