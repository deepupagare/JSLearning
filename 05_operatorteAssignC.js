
  var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
    var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
     ? `Congrats ${candidateName} you are eligible for TCS interview.`
     :  `Unfortunately you are not eligible for interview`;
     console.log(result);
 }
 
 interviewEligibility(80, 86, 90, 'Mahi');
 interviewEligibility(70, 65, 55, 'Gill');
 interviewEligibility(60, 79, 88, 'Stew');
 console.log(`----------------------------------`);

 var eligibility=function(graduation,HSC,SSC,name){
  var result= (graduation>=70,HSC>=80,SSC>=90)? " you are eligible for TCS interview":"Unfortunatly you are not eligible for interview";
  console.log(`${name} ${result}`);
  
}
eligibility(80,86,90,"Ravi");
eligibility(70,65,55,"Aditya");
eligibility(60,79,88,"Umesh");