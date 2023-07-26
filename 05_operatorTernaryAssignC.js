var maleMarriageElligibilty=function(gender,age,boyName){
    var result=(gender="male" && age>=21)?"you are eligibale for marriage":"Not Eligible for marriage";
    console.log(`${boyName} ${result}`);
}
maleMarriageElligibilty("male",25,"Billgates");
maleMarriageElligibilty("male",17,"Stew Jobs");

console.log("=======Step 2==========");
var femaleMarriageAligibility=function(gender,age,girlName){
 var result=(gender="Female" && age>=18)?"you are eligibale for marriage":"Not Eligible for marriage";
 console.log(`${girlName} ${result}`);
}
femaleMarriageAligibility("Female",16,"Jenifer");
femaleMarriageAligibility("Female",27,"Malinda Gates");