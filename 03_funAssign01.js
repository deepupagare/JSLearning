console.log("Assignment-1");
console.log("---------------------Step 1--------------------------------------");

// Function with no argument and no return value
function show1(){
    console.log('I am a Engineer');
    console.log('My hobbies are ,Learning a new Languages,Playing music Like Guiter');
}
show1(); // Function Invocation
console.log("Assignment-2");

console.log("---------------------Step 2--------------------------------------");

var firstNameLastNameandMyCollegename = "first Name : Deepak  Last Name : Pagare My College name: TIT and Science College"; // updation
console.log(firstNameLastNameandMyCollegename);

   
// Function with argument and no return value
console.log("---------------------Step 3--------------------------------------");

function swapvalue(arg1, arg2){ // arg1, arg2 arguments, parameters
   
    console.log('Before Swapvalue=> arg1', arg1, " arg2", arg2 );
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log('After Swapvalue=> arg1', arg1, " arg2", arg2);
}
var Virat = "VIRAT";
var Anushka = "ANUSHKA";
swapvalue(Virat, Anushka);// Function call or invocation



var arg1 = 1000;
var arg2 = 2000;
swapvalue(arg1, arg2);// Function call or invocation


console.log("===========================step 4====================================");


// Function with argument and return value
function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var resultValue = addition(10.23, 600, 40);
console.log('Result is ', resultValue);


console.log("=================================================================");


// Function with argument and no return value 
function checkType(value){ // var value;
    console.log('Value is', value);
    console.log('Result is: HELLOGOODMORNING ');
}
checkType("HELLO GOOD MORNING")

console.log("===================================================================");


console.log("Assignment-2");
console.log("------------------------------------------------------------------");


// Function with no argument and no return value
function show(){
    console.log('Bank Name:CITI BANK  Account No.:9897675665  Location:Pune  PinCode:431024');
    console.log('Bank Name:AXIS BANK  Account No.:5654323454  Location:Pune  PinCode:441234');
    console.log('Bank Name:HDFC BANK  Account No.:7654536728  Location:Pune  PinCode:987675');
}
show(); // Function Invocation