console.log("---Assignment : 0A : Control Flow---");
console.log('--------step-1----------');

// A E I O U
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good IT Developer");


console.log('--------step-2----------');

// WAP to get the sum of cube of numbers from 1 to 5
 function sum(){
    let totalSum = 0;
     for (let index = 1; index <=5; index++) {
         totalSum = totalSum + index*index*index;
     }
     console.log(`Sum of first 5 numbers is : ${totalSum}`);
 }
 sum();



 console.log('--------step-3----------');

 function oddPositionedChars(str1) {
 }

 console.log("Hard work always pay back");
 
 function printOddCharacters(inputString) {
    for (let i = 0; i < inputString.length; i++) {
      if (i % 2 !== 0) {
        console.log(inputString[i]);
      }
    }
  }
  
  const inputString = "Hard work always pay back";
  printOddCharacters(inputString);


  
  function oddPositionedChars(str2) {
  }

  console.log("soon I Will be Angular IT Champ");
 
  function printOddCharacters(inputString2) {
    for (let i = 0; i < inputString2.length; i++) {
      if (i % 2 === 0) {
        console.log(inputString2[i]);
      }
    }
  }
  
  const inputString2 = "Soon I will be Angular IT Champ";
  printOddCharacters(inputString2)


  console.log(`---------------Assignment 2 -----------------`);
  console.log(`-------------Reverse------------`);
  function oddPositionedChars(str3) {
}

console.log("Hard work always pay back");

  function printOddCharactersReverse(inputString3) {
    let result = "";
    for (let i = inputString3.length - 1; i >= 0; i--) {
      if (i % 2 !== 0) {
        result += inputString3[i];
      }
    }
    console.log(result);
  }
  
  const inputString3 = "Hard work always pay back";
  printOddCharactersReverse(inputString3);
  console.log(`-------------------Step 2 ------------------`);

  function oddPositionedChars(str4) {
}

console.log("soon I Will be Angular IT Champ");
function printOddCharactersReverseHorizontal(inputString4) {
    let result = "";
    for (let i = inputString4.length - 1; i >= 0; i--) {
      if (i % 2 !== 0) {
        result += inputString4[i] + " ";
      }
    }
    console.log(result);
  }
  
  const inputString4 = "Soon I will be Angular IT Champ";
  printOddCharactersReverseHorizontal(inputString4);
  

  
  
  
  

  



  
 

