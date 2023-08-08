console.log(`-----------------------------------------------`);
console.log(`================================`);
const bankSBI = {
    bankName: "SBIbank" ,
    location: "Swargate",
    AccountNumber: "123456789",
    IFSC: "SBIN0001234",

}
console.log(`Before Cloning Object are `);
console.log(bankSBI);

const bankLocation= {
    street:"near Swargate Depo ",
    City:"Pune",
    Pincode:"411037"

}
console.log(bankLocation);
console.log(`----------------------Step 1---------------------`);
console.log(` Using Obeject.assign()For cloning Bank and Location`);
let cloneSBI = Object.assign({},bankSBI)
//cloneSBI.Location = "Pune"
console.log(cloneSBI);

let cloneLocation = Object.assign({},bankSBI)
//cloneLocation.city = "mumbai";
console.log(cloneLocation);
console.log(`  `);

console.log(`-----------------------using Spread Oprator----------------`);
let clonedSBIbank = {... bankSBI}
console.log(clonedSBIbank);

let clonedLocation = {...bankLocation}
console.log(clonedLocation);

console.log(`--------------------------------------------`);
console.log(`-----------------Rate of Interest---------------------`);
const rateOfInterest = {
    homeLoanInterest : "4.50",
    PersonalloanInterest: "5.25",
    duelInterest : "5.50",
}

console.log(rateOfInterest);

console.log(`------------------------------------------`);
console.log(`     Merging step 1 ,step 2 and  4 objects`);
let mergedObjects = Object.assign({},bankSBI);
console.table(mergedObjects);

console.log(`-----------------------------------------`);
console.log(`------------------Traversing Merged object Using-----------------------------`);

for (const value in mergedObjects) {
    if (Object.hasOwnProperty.call( mergedObjects, value)) {
      
    const element = mergedObjects [value];
    console.log(`bank details:${value}:${element}`);
        
    }

}