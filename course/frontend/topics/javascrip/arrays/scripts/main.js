/*isArray
Write a JavaScript function to check 
whether an input is an array or not.
*/



/*joinElements
Write a simple JavaScript program to 
join all elements of the following 
array into a string.
*/



/*array_Clone
Write a JavaScript function to clone 
an array.
*/



/*findDifferences
Write a JavaScript function to find the 
difference of two arrays.
*/



/*Sum and Product
Write a JavaScript program to compute the
sum and product of an array of integers.
*/



/*addItems
Write a JavaScript program to add items
in an blank array and display the items.
*/



/*generateArrayLength
Write a JavaScript function to generate
an array of specified length, filled with
integer numbers, increase by one from 
starting position.
*/



/*last
Write a JavaScript function to get the 
last element of an array. Passing a 
parameter 'n' will return the last 'n' 
elements of the array.
*/



/*sortItems
Write a JavaScript program to sort
 the items of an array.
 */



/*getRandom
Write a JavaScript function to get a 
random item from an array.
*/



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



/*moveElement
Write a JavaScript function to move an 
array element from one position to another.
*/



/*swapCase
Write a JavaScript program which accept
 a string as input and swap the case of 
 each character. For example if you input 
 'The Quick Brown Fox' the output should be 
 'tHE qUICK bROWN fOX'.
 */



/*Print elements array
Write a JavaScript program which prints 
the elements of the following array. 
Note : Use nested for loops.
*/



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



/*showLeapYears
Find the leap years in a given range of years.
*/



/* shuffleArray
Write a JavaScript program to shuffle 
an array.
*/



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



/*generateArraySteps
Write a JavaScript function to generate 
an array between two integers of 1 step 
length.
*/



/*flattenArray
Write a JavaScript program to flatten a 
nested (any depth) array. If you pass 
shallow, the array will only be flattened 
a single level.
*/



/* unionArray
Write a JavaScript program to compute the 
union of two arrays. Sample Data :
*/



/* removeFalsy
Write a JavaScript function to remove. 
'null', '0', '""', 'false', 'undefined'
 and 'NaN' values from an array
 */



/* first
Write a JavaScript function to get the 
first element of an array. Passing a 
parameter 'n' will return the first 'n' 
elements of the array.*/



/* SortObjectsTitle
Write a JavaScript function to sort the
following array of objects by title value.
*/



/* findPairSum *******************
Write a JavaScript program to find a pair 
of elements (indices of the two numbers)
 from an given array whose sum equals a 
 specific target number.
*/
function findPairSum(array, target){
    
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


// removeElement
/* findArrayWithElement
Write a JavaScript function to find an 
array contains a specific element.
*/
function findArrayWithElement(arr, num) {
    var arr1 = arr.slice();
    console.log(arr1);
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
    arr.sort();
    console.log(arr)
    var num = arr[i - 1];
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
    arr1 = arr.slice();
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case false:
                arr1.splice(i, 1);
                break;
            case null:
                arr1.splice(i, 1);
                break;
            case '':
                arr1.splice(i, 1);
                break;
            case 0:
                arr1.splice(i, 1);
                break;
            case 'undefined':
                arr1.splice(i, 1);
                break;
        }
    }
    return arr1;
}
console.log(filtesFalsy([58, '', 'abcd', true, null, false, 0]));