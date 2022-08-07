const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {} 
const dbInit = () => {
    const sequelize = new Sequelize(
       process.env.DB_NAME,
       process.env.DB_USERNAME,
       process.env.DB_PASSWORD,
      {
        host: '127.0.0.1',
        logging: false,
        dialect: 'postgres',
        port: process.env.DB_PORT
      }
    );
  
    if (sequelize) {
      const basename = path.basename(module.filename);
  
      fs
        .readdirSync(__dirname)
        .filter(file => {
          return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
          );
        })
        .forEach(file => {
          const model = sequelize.import(
            path.join(__dirname, file.split('.')[0])
          );
          db[model.name] = model;
        });

  
      db.sequelize = sequelize;
      db.Sequelize = Sequelize;
      return db;
    } else {
      console.error(
        'Error, Not connecteed to database. Please check the connection!'
      );
    }
};

module.exports = {
    dbInit,
    db
}