console.log(`---------------------------------`);
console.log(`------------------------------------------`);
let Personaldetails = {
    FullName: "Deepak Pagare",
    gender:"Male",
    Graduation:"BE",
    MobileNumber: 9890360256,
    EmailID: "deepakpagare444@gmail.com",
    Address: "Swargate"
}
console.log(Personaldetails);
console.log(`----------------------------------------------`);

let collagedetails= {
    collageName: "TIT bhopal",
    Location : "Bhopal",
    Branch:"Electronics and Communication ",
    SecuredMarks: "71%"

}
console.log(collagedetails);
console.log(`-----------------------------------------------`);

let mydetailsMerged = Object.assign({},Personaldetails,collagedetails);
console.table(mydetailsMerged);


console.log(`----------------------------------------`);
console.log(`Creating array of my friends Name`);
let friendsName = [`Umesh,Shubham,Aditya,Shailesh`]
console.log(`friends Name :${friendsName }`);
Object.Freeze(friendsName)
//friendsName.push("pranav")
//console.log('friendsName :${friendsName}');


console.log(`-----------------------------------------------`);
console.log(`Using for Loop,loging friends Name on console it `);
for (const Names of friendsName) {
   console.log(`friendsName${Names}`);
        
    }
//for (const friends of friends name ){
   // console.log(`friendsName:${friends}`);
//}
console.log(`-------------reverse---------------------`);
console.log( ` Given String is : "Technology"`);
const string = "Technology"
let reverseString = "";
for (let i = string.length-1; i>=0;i--){
    reverseString +=string[i]
}
console.log(`Reverse string is : "${reverseString}"`);


