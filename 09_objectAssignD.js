let professor={
    Name:"Dr.Prafull Patil",
    Education:"Phd.",
    Age: 35,
    Collage :"GIT COLLAGE",
    isMarried: false,
    degrees : {
       engineering :"CSC",
       PHD : "Adv Computing",
       PHDCompletionYear:2004,
       PHDCollage:"VTU Univercity "
    },
    certificate:["Hacker Rank Participation","Certificate in IT Course","Certificte in Adv Programming"],
   
  show :function(){
       return this.certificate.concat ("Hacker Rank Participation","Certificate in IT Course","Certificte in Adv Programming ");
        
  },
  
}
console.log("========step 1 key value print=================");
console.log(professor);
console.log("==========step 2 added nested object===========");
console.log(professor.degrees);
console.log("==========step 3 added one array in object=====");
console.log(professor.certificate);
console.log("==========step 5 added new property in an object=====");
professor.totalExperiance= "14 years" ;
console.log(professor);
console.log("==========step 6 Modified an existing property =====");
professor.Age = 45;
console.log(professor);
console.log("==========step 7 added one cerificate at the end of the array by using push =====");
professor.certificate.push("Oracle Certified");
console.log(professor.certificate);