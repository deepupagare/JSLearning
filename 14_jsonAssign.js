
let details = `{

    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
      "street": "32,Lahum St.",
      "city": "Innsbruck",
      "country": "Austria"
    },
    "referred_by": "E00245"
  }`;
  console.log(typeof details);
  const address1 = JSON.parse(details);
console.log(typeof address1);
console.log(address1.name);


console.log(`=================================================`);

let addressStr = `{
    "street" : " 32, LahamSt ",
    "city" : " Innsbruck ",
    "country" : "Austria"  
}`;
console.log(`type of addressStr  ==> ${typeof addressStr}`);

const address = JSON.parse(addressStr); // Convert from JSON format to object
console.log(` address type of ==>  ${typeof address}`);
console.log(address);
console.log(address.country);




