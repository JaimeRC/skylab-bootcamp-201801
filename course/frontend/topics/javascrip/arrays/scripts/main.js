// mergeArray
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

// findPairSum
function findPairSum(array, target){
    
}

// validValues *************************



// longestCommon
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

// fillArray *****************


// removeElement
// findArrayWithElement
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

// emptyArray
function emptyArray(arr) {
    var newArray = new Array(arr.length);
    return newArray;
}
console.log(emptyArray([1, 2, 3, 4, 5]));

// getNthLargest
function getNthLargest(arr, i) {
    arr.sort();
    console.log(arr)
    var num = arr[i - 1];
    return num;
}
console.log(getNthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4));

// aray_filled (numeric)
function arrayFilled(num1, num2) {
    var arr = new Array(num1);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = num2;
    }
    return arr;
}
console.log(arrayFilled(6, 0));
console.log(arrayFilled(4, 11));


// Filter Falsy
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