var array=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Total number of elements avaiable is: ${array.length}`);
let element = array;

console.log(`---------------log first and last element in array ----------------------------`);

var array=[20,31,40,25,23,11,29,9,60,2,11];

firstElement=array.slice(array.length+1);
let element2 = array[1];
console.log(`Element first is: ${element2}`);


var array=[20,31,40,25,23,11,29,9,60,2,11];

firstElement=array.slice(array.length+1);
let element3 = array[10];
console.log(`Element last is: ${element3}`);

console.log(`-------------------------------- last  element ---------------------------------`);
var array=[20,31,40,25,23,11,29,9,60,2,11];
array=array.splice(9,1);
console.log(array);
console.log(`-----------------------find All Even number------------------------------------`);
var array=[20,31,40,25,23,11,29,9,60,2,11];

for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];
        console.log(element); 
    }
}

console.log(`-------------------------find Odd number-------------------------------------------`);
var array=[20,31,40,25,23,11,29,9,60,2,11];
for (let index = 1; index < array.length; index++) {
    if (index%2==1) {
        const element = array[index];
        console.log(element); 
    }
}

console.log(`--------------------even position --------------------------`);
var array=[20,31,40,25,23,11,29,9,60,2,11];


for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];
        console.log(element); 
    }
}

console.log(`Total number of elements in array is: ${array.index}`);

console.log(`-------------------find Odd position Element-----------------------`);
var array=[20,31,40,25,23,11,29,9,60,2,11];
for (let index = 1; index < array.length; index++) {
    if (index%2==1) {
        const element = array[index];
        console.log(element); 
    }
}



console.log(`------------------------Sum of all numbers-------------------------------------`);
var array=totalsum=[20,31,40,25,23,11,29,9,60,2,11];
totalsum=[20+31+40+25+23+11+29+9+60+2+11];
console.log(`Sum of number is : ${totalsum}`);


    console.log(`--------------------------which number divide by 5 ------------------------------`);
    var array=[20,31,40,25,23,11,29,9,60,2,11];
    for ( let index = 0; index<=11; index++){
        let num5 = array[index];
        if(num5%5==0){
     console.log(`the element divided by 5 is ${index}`);

    }
    const element = array[index];
   }
    console.log(`--------------------number 115 available in array ?-----------------------------`);
    var array=[20,31,40,25,23,11,29,9,60,2,11];

    let isAvailable = array.includes(115);
    console.log(`Is 115 available : ${isAvailable}`);

    console.log(`-------------------------------number 23 available in array ?-------------------------------------`);
    var array=[20,31,40,25,23,11,29,9,60,2,11];

    let isAvailable1 = array.includes(23);
    console.log(`Is 23 available : ${isAvailable1}`);


    console.log(`-------------------------insert number 55 ,6 before index 3------------------------------------------`);
    var array=[20,31,40,25,23,11,29,9,60,2,11];

    array.splice(3,1,"55","6");
    console.log(array);



    console.log(`------------delete 3 element starting from 4index-----------------------------`);
    var array=[20,31,40,25,23,11,29,9,60,2,11];

    let removedElement = array.splice(4,5,6,7,8,9,10,11);
    console.log(removedElement);