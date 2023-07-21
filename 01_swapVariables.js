function swap(n1,n2) {// n1,n2, argument parameters n1=sweety n2=cutie
console.log('Inside swap function');
console.log('Before Swap' ,'num1 => ', num1, ' num2 => ', num2 ,);
var temp = num1;
num1=num2;
num2=temp;
console.log('After Swap' ,'num1 => ', num1, ' num2 => ', num2,);
}

var sweety = "sweety";
var cutie = "cutie";
swap(sweety , cutie);
console.log("===================================");

function swap(n1,n2,n3) {// n1,n2,n3, argument or parameters n1=100 n2=200 n3=300
var num1 = 100; // 200
var num2 = 200; // 300
var num3 = 300; // 100
console.log( 'Before Swap' ,'num1 => ', num1, ' num2 => ', num2 , 'num3 =>', num3 );
var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log( 'After Swap' ,'num1 => ', num1, ' num2 => ', num2, ' num3 =>', num3 );}