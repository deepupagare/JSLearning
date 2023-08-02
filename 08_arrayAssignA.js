console.log(`--------------------log first and last -----------------------`);
var array =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);

let removedElement = array.splice(1,2,3);
console.log(removedElement);

console.log(`----------------------Add Papaya-------------------------------`);

var array =["Banana","Orange","Apple","Mango","Water Melon"];
array.unshift("Papaya");
console.log(array);

console.log(`----------------removed mango---------------`);

var array1 =["Banana","Orange","Apple","Mango","Water Melon"];
let elementRemoved1 = array1.splice(3,1);
console.log(array1);
console.log(elementRemoved1);// removed element mango 

console.log(`----------------------Element or Insert pinepple at last position -----------------------`);

var array =["Banana","Orange","Apple","Mango","Water Melon"];
array.push("Pineapple");
console.log(array);

console.log(`-------------------------------Insert Element Dragan Fruit Befor Water melon------------------------`);

var array =["Banana","Orange","Apple","Mango","Water Melon"];
array.splice(4,1,"Dragon Fruit");
console.log(array);

console.log(`-----------------------Replace Orange to kiwi-------------------------------`);

    var array =["Banana","Orange","Apple","Mango","Water Melon"];
    array.splice(2,1,"kiwi");
    console.log(array);

    console.log(`------------------Log element starting from 1 to 4--------------------------------`);
    //array.splice(1,4);
    console.log(array.splice (1,4));
    

    console.log(`-----------------------select last 3 element ---------------------------`);
    var array =["Banana","Orange","Apple","Mango","Water Melon"];
    lastThreeElement=array.slice(array.length-3)
    console.log(`Print the last three element in the array - [${lastThreeElement}]`);