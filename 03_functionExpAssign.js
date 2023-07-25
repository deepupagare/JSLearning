console.log(`-----------------Step 1-----------------`);
var square= function (num){
    var result= num*num;
    console.log(`The square of "${num}" is: "${result}`);
}
square(5)
square(6)
square(25)
square(100)
square(67,89)
square(59)
console.log(`------------------Step 2-----------------------`);
var dine = function(){
    console.log(`type of function is:${typeof (dine)}`);
}
dine();
console.log(`------------------Step 3-----------------------`)
var area= function(l,b){
    var result= l*b;
    console.log(`area of rectangle is ${result}`);
}
area (499,917);
console.log(`--------------------Step 4----------------------------`);
var swapValues=function (arg1,arg2){
console.log(`before swap the value is :${arg1} & ${arg2}`);

var temp=arg1;
arg1=arg2;
arg2=temp
console.log(`after swap value is :${arg1}&${arg2}`);
}
swapValues( "Mahi" ,"Raina");
swapValues (55,77);
console.log(`-------------------------Step 5------------------------------------`);
var str=function(givenstring){
    console.log(`Total Character Prsent in string:${givenstring.length}`);
    console.log(`Character at index 6 is :${givenstring.charAt(6)}`);
    console.log(`Character at index 11 is:${givenstring.charAt(11)}`);
    console.log(`The Last character is :${givenstring.charAt(givenstring.length-1)}`);
    console.log(`The first Character is : ${givenstring.charAt(0)}`);
    console.log(`The Last character is: ${givenstring.charAt(givenstring.length-3)}`);

    var result = givenstring.split(" ")
    var words =result.length;
    console.log(`Total number of words is : ${words} and "square of number is": ${words*words}`);
}
 str("js the most popular language of internet")
 console.log(`----------------------tar-----------------------`);