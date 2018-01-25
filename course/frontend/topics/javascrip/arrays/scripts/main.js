/*isArray
Write a JavaScript function to check 
whether an input is an array or not.
*/
function isArray(array) {
    return Array.isArray(array);
}
arr = [1, 2, 3, 4, 5]
console.log(isArray(arr));



/*joinElements
Write a simple JavaScript program to 
join all elements of the following 
array into a string.
*/
function joinElements(array) {
    return array.join(', ');
}
beatles = ['John', 'George', 'Ringo', 'Paul'];
console.log(joinElements(beatles));



/*array_Clone
Write a JavaScript function to clone 
an array.
*/
function arrayClone(array) {
    var newArray = array.slice();
    return newArray;
}
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));



/*findDifferences
Write a JavaScript function to find the 
difference of two arrays.
*/
function difference(array1, array2) {
    var result = array1.concat(array2).filter(function (val, index, arr) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
    return result;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));



/*Sum and Product
Write a JavaScript program to compute the
sum and product of an array of integers.
*/
function sumArray(arr) {
    var sum = 0;
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        product = product * arr[i];
    }
    return "Sum: " + sum + ", product: " + product;
}
sumArray([1, 3, 4]);



/*addItems
Write a JavaScript program to add items
in an blank array and display the items.
*/
var array = [];
function addItems(item) {
    return array.push(item);
}
console.log(addItems('hola'));
console.log(addItems(123));



/*generateArrayLength
Write a JavaScript function to generate
an array of specified length, filled with
integer numbers, increase by one from 
starting position.
*/
function generateArrayLength(value, index) {
    var array = new Array(index);
    for (var i = 0; i < index; i++) {
        array[i] = value + i;
    }
    return array;
}
console.log(generateArrayLength(1, 4));
console.log(generateArrayLength(-6, 4));



/*last
Write a JavaScript function to get the 
last element of an array. Passing a 
parameter 'n' will return the last 'n' 
elements of the array.
*/
function getLast(array, index) {
    index = index - array.length;

}
console.log(getLast([7, 9, 0, -2]));
console.log(getLast([7, 9, 0, -2], 3));
console.log(getLast([7, 9, 0, -2], 6));



/*sortItems
Write a JavaScript program to sort
 the items of an array.
 */
function sortItems(array) {
    array.sort();
    return array;
}
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortItems(arr1));



/*getRandom
Write a JavaScript function to get a 
random item from an array.
*/
function getRamdonArray(array) {
    var index = Math.floor(Math.random() * (array.length - 0) + 0);
    return array[index];
}
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(getRamdonArray(arr1))



/*findDuplicates
Write a JavaScript program to find 
duplicate values in a JavaScript array.
*/



/* mergeArray
Write a JavaScript function to merge two 
arrays and removes all duplicates elements.
*/
function mergeArray(arr1, arr2) {
    var arr3 = [];
    arr1 = arr1.concat(arr2);
    for (var i = 0; i < arr1.length; i++) {
        if (arr3.indexOf(arr1[i]) === -1)
            arr3.push(arr1[i]);
    }
    return arr3;
}
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(mergeArray(array1, array2));



/*separateEven
Write a JavaScript program which accept a 
number as input and insert dashes (-) 
between each two even numbers. For example
if you accept 025468 the output should be 
0-254-6-8.
*/




/*mostFrequentItem
Write a JavaScript program to find the most
 frequent item of an array.
 */
function mostFrequentItem(array) {
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
function moveElement(array, index, pos) {
    var value = array.splice(index, 1);
    array.splice(pos, 0, value[0]);
    return array;
}
console.log(moveElement([10, 20, 30, 40, 50], 0, 2));
console.log(moveElement([10, 20, 30, 40, 50], -1, -2));



/*swapCase
Write a JavaScript program which accept
 a string as input and swap the case of 
 each character. For example if you input 
 'The Quick Brown Fox' the output should be 
 'tHE qUICK bROWN fOX'.
 */
function swapTheCase(word) {
    var result = '';
    for (var i = 0; i < word.length; i++) {
        (word[i] === word[i].toUpperCase()) ? result += word[i].toLowerCase() : result += word[i].toUpperCase();
    }
    return result;
}
console.log('swapTheCase(\'TesTing SWAPcase fUNcTion\') should result \'tEStING swapCASE FunCtION\' : ' + swapTheCase('TesTing SWAPcase fUNcTion'));



/*Print elements array
Write a JavaScript program which prints 
the elements of the following array. 
Note : Use nested for loops.
*/
function printArrayElements(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += 'row ' + i + '\n';
        for (var j = 0; j < arr[i].length; j++) {
            str += arr[i][j] + '\n';
        }
    }
    return str;
}
console.log('printArrayElements([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]) should result row x and below inner elements for all rows: ' + '\n' + printArrayElements([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));



/*array_filled (string)
Write a JavaScript function to create 
a specified number of elements with 
pre-filled string value array.
*/



/* Sum squares
Write a JavaScript program to find the 
sum of squares of a numeric vector.
*/



/*removeDuplicate
Write a JavaScript program to remove 
duplicate items from an array (ignore 
case sensitivity).
*/



/*showChoices
We have the following arrays : 
color = ["Blue ", "Green", "Red", "Orange",
 "Violet", "Indigo", "Yellow "]; 
 o = ["th","st","nd","rd"] Write a JavaScript 
 program to display the colors in the 
 following way : "1st choice is Blue ." "2nd 
 choice is Green." "3rd choice is Red."
Note : Use ordinal numbers to tell their 
position.
*/
function showChoices(arr1, arr2) {
    var newArray = [];
    var x = "";
    for (var i = 0; i < arr1.length; i++) {
        x = (i + 1).toString().concat(arr2[i]).concat(" choice is ").concat(arr1[i]);
        newArray.push(x);
    }
    return newArray;
}
color = ["Blue ", "Green", "Red", "Orange"];//, "Violet", "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"];
console.log(showChoices(color, o));

/*showLeapYears
Find the leap years in a given range of years.
*/
function showLeapYears(ini, fin) {
    var years = [];
    for (var i = ini; i <= fin; i++) {
        if ((i % 4 == 0) && ((i % 100 != 0) || (i % 400 == 0))) {
            years.push(i);
        }
    }
    return years;
}
console.log(showLeapYears(1900, 2017));



/* shuffleArray
Write a JavaScript program to shuffle 
an array.
*/
function getIndexRandom(long) {
    var numbers = [];
    var newNumber = 0;
    while (newNumber === 0) {
        newNumber = Math.floor((Math.random() * long) + 0);
        for (var i = 0; i < long; i++) {
            if (numbers[i] === newNumber) {
                newNumber = 0;
                break;
            }
        }
    }
    return newNumber;
}
function shuffleArray(array) {
    var index = 0;
    var newArray = [];
    array.forEach(function (value) {
        index = getIndexRandom((array.length - 1));
        newArray.splice(index, 0, value);
    });
    return newArray();
}
arr1 = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(shuffleArray(arr1));




/* binarySearch
Write a JavaScript program to perform a 
binary search.
Note : A binary search or half-interval 
search algorithm finds the position of 
a specified input value within an array 
sorted by key value.
*/



/*sumPositions
There are two arrays with individual values,
 write a JavaScript program to compute the 
 sum of each individual index value from 
 the given arrays.
 */
function sumPositions(arr1, arr2) {
    var x, newArray;
    (arr1.length > arr2.length) ? x = arra1.length : x = arr2.length;
    for (var i = 0; i < x; i++) {
        newArray.push(arr1[i] + arr2[i]);
    }
    return newArray;
}
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
console.log(sumPositions(array1, array2));


/*generateArraySteps
Write a JavaScript function to generate 
an array between two integers of 1 step 
length.
*/
function generateArraySteps(init, fin) {
    var array = [];
    for (var i = init; i <= fin; i++) {
        array.push(i);
    }
    return array;
}
console.log(generateArraySteps(4, 7));
console.log(generateArraySteps(-4, 7));



/*flattenArray
Write a JavaScript program to flatten a 
nested (any depth) array. If you pass 
shallow, the array will only be flattened 
a single level.
*/
function flattenArray(array, x) {
    var newArray = [];
    if (x) {

    } else {
        newArray.push(array.toString());
    }
    return newArray;
}
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));



/* unionArray
Write a JavaScript program to compute the 
union of two arrays. Sample Data :
*/
function unionArray(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    var array = newArray.filter(function (value, index, newArray) {
        return newArray.indexOf(item) === index;
    })
    return array;
}
console.log(unionArray([1, 2, 3], [100, 2, 1, 10]));



/* removeFalsy
Write a JavaScript function to remove. 
'null', '0', '""', 'false', 'undefined'
 and 'NaN' values from an array
 */
function removeFalsy(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] != 'number') {
            array.splice(i, i + 1)
        }
    }
    return array;
}
var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null]
console.log(removeFalsy(arr))



/* first
Write a JavaScript function to get the 
first element of an array. Passing a 
parameter 'n' will return the first 'n' 
elements of the array.*/



/* SortObjectsTitle
Write a JavaScript function to sort the
following array of objects by title value.
*/
function sortObjectsTitle(array) {
    var newArray = array.sort(function (a, b) {
        if (a.title > b.title)
            return 1;
        if (a.title < b.title)
            return -1;
        return 0;
    });
    return newArray;
}
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
console.log(sortObjectsTitle(library));




/* findPairSum *******************
Write a JavaScript program to find a pair 
of elements (indices of the two numbers)
 from an given array whose sum equals a 
 specific target number.
*/
function findPairSum(array, target) {

}


/* validValues *************************
Write a JavaScript function to retrieve 
the value of a given property from all 
elements in an array.
*/



/* longestCommon
Write a JavaScript function to find the 
longest common starting substring in a
 set of strings.
 */
function longestCommon(arr) {
    var arr1 = arr.slice();
    for (var i = 0; i < arr.length; i++) {
        if (arr1[0].length < arr[i].length)
            arr1.splice(i, 1);
        else if (arr1[0].length > arr[i].length)
            arr1.splice[0, 1];
    }
    return arr1;
}
console.log(longestCommon(['go', 'google']));



/* fillArray *****************
Write a JavaScript function to fill an 
array with values (numeric, string with
 one character) on supplied bounds.
*/
var x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function fillArray(letter, letter2, inc) {
    var newArray = [];
    var ini = x.indexOf(letter);
    var fin = x.indexOf(letter2);
    while (ini <= fin) {
        newArray.push(x[ini]);
        ini += inc;
    }
    return newArray;
}
console.log(fillArray('a', "z", 2))



// removeElement
/* findArrayWithElement
Write a JavaScript function to find an 
array contains a specific element.
*/
function findArrayWithElement(arr, num) {
    var arr1 = arr.slice();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            arr1.splice(i, 1);
        }
    }
    return arr1;
}
console.log(findArrayWithElement([2, 5, 9, 6], 5));


/* emptyArray
Write a JavaScript script to empty an array
 keeping the original size.
 */
function emptyArray(arr) {
    var newArray = new Array(arr.length);
    return newArray;
}
console.log(emptyArray([1, 2, 3, 4, 5]));


/* getNthLargest
Write a JavaScript function to get nth 
largest element from an unsorted array.
*/
function getNthLargest(arr, i) {
    arr.sort(function (a, b) {
        return b - a;
    });
    var num = arr[i];
    return num;
}
console.log(getNthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4));


/* aray_filled (numeric)
Write a JavaScript function to create a 
specified number of elements with pre-filled 
numeric value array.
*/
function arrayFilled(num1, num2) {
    var arr = new Array(num1);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = num2;
    }
    return arr;
}
console.log(arrayFilled(6, 0));
console.log(arrayFilled(4, 11));


/* Filter Falsy
Write a JavaScript function to filter false, 
null, 0 and blank values from an array.
*/
function filtesFalsy(arr) {
    array = arr.slice();
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case false:
                array.splice(i, 1);
                break;
            case null:
                array.splice(i, 1);
                break;
            case '':
                array.splice(i, 1);
                break;
            case 0:
                array.splice(i, 1);
                break;
            case 'undefined':
                array.splice(i, 1);
                break;
        }
    }
    return array;
}
console.log(filtesFalsy([58, '', 'abcd', true, null, false, 0]));