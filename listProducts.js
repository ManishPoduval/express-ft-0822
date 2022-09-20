import { faker } from '@faker-js/faker';
// or, if using CommonJS
// const { faker } = require('@faker-js/faker');

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

for(let i=0; i< 10; i++){
    console.log(faker.commerce.product() + ': $' + faker.commerce.price())
}