 //Function with no argument and no return value
function show(){
    console.log('My name is Deepak');
    console.log('I am Technical lead');
    console.log('My tech skill is - Java + Angular + React + DevOps + ');
}
show(); // Function Invocation

 //Function with argument and no return value 
function checkType(value){ // var value;
    console.log('Value is', value);
    console.log('Type is: ', typeof value);
    console.log('-------------------------');
}
checkType(100);
checkType("GK");
checkType(true);
checkType(undefined);
checkType(null);
checkType();

// Function with argument and return value
function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addition(10, 23, 456);
console.log('Result is ', res);
var resultValue = addition(-56, 239, 677);
console.log('Result is ', resultValue);

var result =addition('GK', 'Pune', 88);
console.log('Result is ', result);


function display(){
    return "Learning JS";
}
var resultDisplay = display();
console.log();



/*var greet = "good Morning ";
var lengthgreet = greet.length;
console.log(greet ,"Length of String is :", lengthgreet );


console.log(`-----------------------------`);
var charAt0 = greet.charAt(0);
console.log(`${greet} - charat0th index is ${charAt0}`);



console.log(`-----------------------------`);
var charAtlastindex= greet.charAt(lengthgreet-1);
console.log(`last char is ${charAtlastindex} - charAtlastindex index is ${lengthgreet}`);



console.log(`-----------------------------------------`);


var firstName = "Deepak";
var LastName =  "Pagare ";
var result = firstName + LastName ;


console.log(`concatination string is : ${result}`);

var result = firstName+concat (LastName);
console.log( ` My Full Name is${result}`); 

console.log(`-----------------------------`);

var result = greet.indexOf (`M`);
console.log(`indexof char`M` ${result}`);
*/