/*const array = [11, 9, 30, 5, 7, 34];
const newArray = array.filter( (currentValue) =>{
    return currentValue>10;
} );
console.log(newArray);


class Student {
    constructor(fullName, rollNo, college, emailId, mobile ){
      this.fullName = fullName;
      this.rollNo = rollNo;
      this.college = college;
      this.emailId = emailId;
      this.mobile = mobile;
    }
    show(){
      console.log(`Student Details is Full Name: ${this.fullName} , Roll Number: ${this.rollNo}
      College Name: ${this.college}, Email Id: ${this.emailId}, Mobile : ${this.mobile}`);
    }
  
  }





  let studentJenny = new Student("Jenny Gates", 11, "COEP Pune", "abc@gmail.com", "9096 78 6789");
  let studentStew = new Student("Stew Page", 22, "JSPM", "stew@gmail.com", "9867 8989 98");
  let studentElon = new Student("Elon Musk", 33, "Standford", "ste@gmail.com", "9867 8989 98");
  let studentSatya = new Student("Satya Nadella", 44, "ABC", "sttya@gmail.com", "9867 8989 98");
  let studentSundar = new Student("Sundar Pichai", 55, "XYZ", "sundar@gmail.com", "9867 8989 98");
  
  const arrayStudents = [studentJenny, studentStew, studentElon, studentSatya,studentSundar ];
  const newStudentList = arrayStudents.filter( (student) => {
    return student.emailId.length > 13;
  });
  console.table(newStudentList);*///////


  /*var num1=100;
  var num2=200;
console.log(`before swap `, "num1 - ",num1,"num2-",num2,);

var temp =num1;
num1=num2;
num2=temp;
console.log(`after sway`,"num1-",num1, "num2",num2);





var name1 = "deepak ";
var name2 = "pagare ";
console.log( `before swap`,"name1",name1,"name2",name2);


var temp = name1;
name1 = name2;
name2 = temp;
console.log(`after swap`,"name1",name1,"name2",name2);
function swap(num3,mun4){}
var num3=500;
var num4=600;

  swap(num3,num4);*/



//console.log(`before swap`,"num3",num3,"num4",num4);//
//
//console.log(`End of program`);//


/*function show(){
  console.log("I am Deepak" );
  console.log("I am a Software Tester");
  console.log("I Have Learn Java ");
}
show();
  function show(){
    console.log("I am a Good Singer ");
 console.log("I am GoodPlayer in Cricket" ); 
  }
  show();


  functionchecktype(value);{
  checktype(100);
  checktype("GK");
  checkType();
  //console.log(`type is: `, typeof value );
  console.log(`-----------------------`);
}*/


function addition(arg1,arg2,arg3){
  console.log(`value are`,arg1,arg2,arg3);
  var result = arg1+arg2+arg3;
  return result;
}


/*ar res = addition( 1,2,3);
console.log(`Result is `, res);*/


var res = addition(100, 2, 2);
console.log('Result is ', res);


function display(){
  return "Learning Js";
}
  var resultdisplay = display();
  console.log();


