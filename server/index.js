require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cookie_parser = require('cookie-parser');
const cors = require('cors');
const { dbInit } =require('./src/models');
const routes = require('./src/routes/routes');
const app = express();
// const testUsers = require('./src/testData/users.json')
// const testUsersDiets = require('./src/testData/user_diets.json')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
// app.use(cookie_parser(process.env.COOKIE_SECRET))

const db = dbInit();
let server;

db.sequelize.sync().then(() => {
    server = app.listen(process.env.APP_PORT, '0.0.0.0', () => {
      console.log('server started on port 3010');
      // db.users.bulkCreate(testUsers).then(a => console.log('aa', a))
     // db.user_diets.bulkCreate(testUsersDiets).then(a => console.log('aa', a))
    });
});

routes(app);

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown() {
  server.close(() => {
    db.sequelize.close().then(() => {
      console.log('Closed all the DB connections');
      process.exit(0);
    });
  });
}