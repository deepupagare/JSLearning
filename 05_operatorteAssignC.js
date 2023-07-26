var eligibility=function(graduation,HSC,SSC,name){
    var result= (graduation>=70,HSC>=80,SSC>=90)? " you are eligible for TCS interview":"Unfortunatly you are not eligibal for interview";
    console.log(`${name} ${result}`);
    
  }
  eligibility(80,86,90,"Ravi");
  eligibility(70,65,55,"Aditya");
  eligibility(60,79,88,"Umesh");