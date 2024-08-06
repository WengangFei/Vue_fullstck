const fs = require('fs');
const path = require('path');
const { Sequelize,DataTypes } = require('sequelize');
const config = require('../config/config');
const db = {};

// Create a new Sequelize instance
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Data Base connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


//Make models from each file under the model folder
fs.readdirSync(__dirname).filter(file=>file !== 'index.js')
.forEach(file=>{
    //call the function defined in each file under the models folder  
    // this fun return model class User
    const model = require(path.join(__dirname,file))(sequelize,DataTypes);
    db[model.name] = model;
    // console.log(model.getTableName())
    model.sync()  // Sync the model with the database
    .then(() => {
        console.log('User table has been created.');
    })
    .catch(err => {
        console.error('Unable to create the table:', err);
    });
        
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// console.log(sequelize.models.User?.getTableName())

module.exports = db;