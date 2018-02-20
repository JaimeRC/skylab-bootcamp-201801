/*mostFrequentItem
Write a JavaScript program to find the most
 frequent item of an array.
 */

Array.prototype.mostFrenquentItem = function (array) {
    var contRep = 1;
    var contItem = 0;
    var item;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] == array[j])
                contItem++;
            if (contRep < contItem) {
                contRep = contItem;
                item = array[i];
            }
        }
        contItem = 0;
    }
    var text = item + ": " + contRep;
    return text;
}
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequentItem(array))



/*moveElement
Write a JavaScript function to move an 
array element from one position to another.
*/

Array.prototype.moveElement = function (array, index, pos) {
    var value = array.splice(index, 1);
    array.splice(pos, 0, value[0]);
    return array;
}
console.log(moveElement([10, 20, 30, 40, 50], 0, 2));
console.log(moveElement([10, 20, 30, 40, 50], -1, -2));

