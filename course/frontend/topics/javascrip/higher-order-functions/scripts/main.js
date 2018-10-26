/* map
Write a high order function that take the array 
of months and create a new array that contains 
the same months but with the first letter in 
upper case.
*/
function upperCaseMonths(months) {
    var array = months.map(function (n) {
        n = n.charAt(0).toUpperCase() + n.slice(1);
        return n;
    });
    return array;
}
console.log(upperCaseMonths(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']))


/*filter
Write a high order function that take the array 
of months and create a new array that contains
 only the months that begin with j.
*/
function filterMonths(months) {
    var array = months.filter(function (n) {
        if (n.indexOf('j') >= 0)
            return n;
    });
    return array;
}
console.log(filterMonths(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']))


/* reduce
Write a high order function that counts all the 
vowels of the following text.
*/
function reduceText(text) {
    var regEx = /[aeiouAEIOUáéíóúàèìòùäëïöü]/gi;
    return text.split('').reduce(function (vowelsCount, letter) {
        if (letter.toLowerCase().match(regEx)) {
            return vowelsCount += 1;
        }
        return vowelsCount;
    }, 0);
}
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';
console.log(reduceText(loremIpsum));

/* OTRA FORMA DE HACERLO: SOME INSOLATED
var countVowels;
(function(){
    var regEx = /[aeiouAEIOUáéíóúàèìòùäëïöü]/gi;
    countVowels = function(text){
        return text.split('').reduce(function (vowelsCount, letter) {
        if (regEx.test(letter)) {
            return vowelsCount += 1;
        }
        return vowelsCount;
    }, 0);
    };
})();

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';
console.log(reduceText(loremIpsum));
*/


/* every & some
Write a high order function that returns true
 if all months have five letters or more, 
 and if some month has five letters or more.
*/
function moreFiveLetter(words) {
    return words.some(function (word) {
        return word.length >= 5;
    });
}
moreFiveLetter(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'])

function isNumber(array){
    return array.every(function(n){
        return typeof n == 'number';
    });
}
console.log('Son numeros: ', isNumber([1,2,3,4,'a','b','0']));
console.log('Son numeros: ', isNumber([1,2,3,4]));

/*
## Callback
Write a callback function that receives an 
age and a callback function, if age is 
equal or great than 18, call the callback 
function to allow enter in a bar, if hasn't 
18 the entrance is not allowed.
*/
