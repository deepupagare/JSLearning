const arraynums = [20,3,4,56,90,400,49]
let clonearraynums = arraynums;
clonearraynums.push(55,66);
console.log(`before clone [${arraynums}]`);
console.log(`after clone [${clonearraynums}]`);

console.log(`-----------------spread operator----------------------`);

let deepclone = [...arraynums];
arraynums.push(10,25);
console.log(`before deepclone[${arraynums}]`);
console.log(`after deepclone[${deepclone}]`);

console.log(`--------------------Given other array-----------------------------`);

let arrayeven = [2,30,14,8];
let mergedarray = [...arrayeven,...arraynums];
console.log(`after merged [${mergedarray}]`);

console.log(`----------------create employee info-----------------------`);

let employeeinfo = {
    EmpID : 27,
    EmployeeName : "Deepak",
    Salary:{
        July_Month: 40000,
        Augest_month:50000,
        June_month:60000,

    },
    

    Address:{
    Locality:{
        Colony:"Vrindavan Society",
        Street:"Karad",
        showAddress(){
            console.log(`locality: Colony->${this.Colony}, Street->${this.Street} `);
        }
    }

    },
Address1:{
    City: "Mumbai",
    State: "Maharashtra",
    country:"India",
},
    showAddress(){
        console.log(`Address: city${this.City}, State->${this.state}, Country->${this.country} `);

    
},
mobile: ["9897656545", "8888888888"],
}
console.log(`Address colony ${employeeinfo.Address.Locality.Colony},
 ${ employeeinfo.Address.Locality.Street},
 ${ employeeinfo.Address1.State},${ employeeinfo.Address1.country}`);

 console.log(`---------------------JSON Strinify----------------------`);

 let deepcopy = JSON.parse(JSON.stringify(employeeinfo)) ;
 console.log(`updated Salary of July Month ${ deepcopy.Salary.July_Month = 80000}`);
 console.log(`updated country ${ deepcopy.Address.country = "UnitedKingdom"}`);
 

