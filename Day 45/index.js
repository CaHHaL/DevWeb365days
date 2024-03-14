const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');


const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'WEBDEV',
    password:'!Cahalag18'
  });





let getRandomUser=()=>{
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
console.log(createRandomUser());