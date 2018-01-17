// larger_integer
function largerInteger(a, b){
    if(a>b){
        console.log("a > b");
    }else if(a>b){
        console.log ("a > b");
    } else if (a===b){
        console.log("a = b");
    }
}
largerInteger(2,4)

// sign_product
function signProduct(a,b,c){
    if(a<b && b<c){
        console.log(a);
    } else if (a>c && c<b){
        console.log(b);
    } else {
        console.log(c);
    }
}
signProduct(1,-3,4)

// sort_numbers
function sort_numbers(nums){
    nums.sort(function(a,b){return b-a});
    console.log(nums);
}
sort_numbers([-5,0,4])

// largest_number
function largest_number(){
}

// odd_or_even
function odd_or_even(nums){
    for(var i=0; i<nums.length-1; i++){
        if(nums[i] % 2 == 0){
            console.log(i + " is odd");
        }else{
            console.log(i + " is even");
        }
    }
}
odd_or_even([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

//FizzBuzz
function fizzBuzz(){
    for(var i = 1; i<=100; i++){
        if(i%3 && i%5){
            console.log(i + " FizzBuzz")       
        } else if(i % 3){
            console.log(i + " Fizz")
        } else if (i % 5){
            console.log(i + " Buzz")
        } 
    }
}
fizzBuzz();

// construct_pattern
var a = "";
var i = 0;
function construct_pattern(){
    while(i < 5){
        console.log(a += "*");
        i++
    }
}
construct_pattern();

// under_1000
var mult = 0;
var i = 0;
function under_1000(){
    while(i <= 1000){
        if(i%3 == 0 && i%5 == 0){
            mult += i;
        }
    i++;
    }
    console.log(mult);
}
under_1000();
