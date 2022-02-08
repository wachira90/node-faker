const  faker = require('faker');

faker.locale = "en_US";

let randomName = faker.name.findName();
// let firstName = faker.name.firstName();
// let lastName = faker.name.lastName();

let phone = faker.phone.phoneNumber();
let cityPrefix = faker.address.cityPrefix();
let randomEmail = faker.internet.email(); 
let randomCard = faker.helpers.createCard(); 
let randomProduct = faker.commerce.productName(); 
let randomCompany = faker.company.companyName(); 

console.log(randomName + "\n");
console.log(phone + "\n");
console.log(cityPrefix + "\n");
console.log(randomEmail + "\n");
// console.log(JSON.stringify(randomCard, null, 2) + "\n");
console.log(randomProduct +"\n");
console.log(randomCompany +"\n");


//FIELD LIST SEE HERE
//https://github.com/fzaninotto/Faker