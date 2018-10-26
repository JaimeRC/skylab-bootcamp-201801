/*moveElement
Write a JavaScript function to move an 
array element from one position to another.
*/

Array.prototype.moveElement = function (array, index, pos) {
    var value = array.splice(index, 1);
    array.splice(pos, 0, value[0]);
    return array;
}


console.log(Array.prototype.moveElement([10, 20, 30, 40, 50], 0, 2));
//[20, 30, 10, 40, 50]
console.log(Array.prototype.moveElement([10, 20, 30, 40, 50], -1, -2));
//[10, 20, 50, 30, 40]


