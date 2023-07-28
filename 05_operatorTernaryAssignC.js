var maleMarriageEligibilty=function(gender,age,boyName){
    var result=(gender="male" && age>=21)?"you are eligible for marriage":"Not eligible for marriage";
    console.log(`${boyName} ${result}`);
}
maleMarriageEligibilty("male",25,"Billgates");
maleMarriageEligibilty("male",17,"Stew Jobs");

console.log("------------Step 2----------");
var femaleMarriageAligibility=function(gender,age,girlName){
 var result=(gender="Female" && age>=18)?"you are eligible for marriage":"Not eligible for marriage";
 console.log(`${girlName} ${result}`);
}
femaleMarriageAligibility("Female",16,"Jenifer");
femaleMarriageAligibility("Female",27,"Malinda Gates");