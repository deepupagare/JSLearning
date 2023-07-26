var squareOfWordLength=function(string){
    var length=string.length
    console.log(`The length of the string is : ${length}`);
    var square = length * length
    console.log(`The square of the word length is : ${square}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer smart");
console.log("==========Step 2=============");

var givenString =function(string){
   var result = string.length
   console.log(`The length of the string is : ${result}`);
   var result=string.split(" ")
    var words=result.length; 
    console.log(`Total words in string : ${words} "The divide result is : ${words%2}"`);
}
givenString("I am Angular Developer");