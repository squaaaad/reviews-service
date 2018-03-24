// const MongoDBMemoryServer = require('mongodb-memory-server');
// const supertest = require('supertest');
// const path = require('path');
// const fs = require('fs');



// describe('Express Server Endpoints', () => {
//   let memMongo;
//   let serverApp;

//   beforeAll(async () => {
//     jest.setTimeout(120000);
//     //console.log(MongoDBMemoryServer);
//     memMongo = await new MongoDBMemoryServer.MongoMemoryServer();
//     process.env.DATABASE = await memMongo.getConnectionString();
//     //console.log('test connecting');
//     serverApp = require('./server-app.js');
//     const seedDB = require('../db/seedDB.js');
//     await seedDB();
//   });


//   test('It should respond to the root path', async () => {
//     const response = await supertest(serverApp).get('/');
//     expect(response.statusCode).toBe(200);
//   });

//   test('It should respond with an error to invalid paths', async () => {
//     const response = await supertest(serverApp).get('/baloney/85765868798');
//     expect(response.statusCode).toBe(404);
//   });

//   test('It should respond to requests to /<id>', async () => {
//     const response = await supertest(serverApp).get('/1');
//     expect(response.statusCode).toBe(200);
//   });

//   test('It should respond to requests to /<id>/reviews', async () => {
//     const response = await supertest(serverApp).get('/1/reviews');
//     expect(response.statusCode).toBe(200);
//   });

//   test('It should respond to static file requests from the public directory', async () => {

//     const testFilePath = path.join(__dirname, '../client/public/index.test.html');
//     let testHTML = `<!DOCTYPE html>
//       <html>
//       <head>
//         <title>TestFilr</title>
//       </head>
//       <body>
//         This is a test

//       </body>
//       </html>`;

    
//     await fs.writeFileSync(testFilePath, testHTML);
//     const staticResponse = await supertest(serverApp).get('/content/index.test.html');
//     //const expectedResponse = fs.readFileSync(testFilePath, 'utf8');
//     //console.log(staticResponse);
//     expect(staticResponse.statusCode).toBe(200);
//     expect(staticResponse.text).toEqual(testHTML);//expectedResponse);
//   })


// })