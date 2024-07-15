const fs = require('fs');
const path = require('path');
const { Sequelize,DataTypes } = require('sequelize');
const config = require('../config/config');
const db = {};


const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)


//Make models from each file under the model folder
fs.readdirSync(__dirname).filter(file=>file !== 'index.js')
.forEach(file=>{
    //call the function defined in each file under the models folder  
    // this fun return model class User
    const model = require(path.join(__dirname,file))(sequelize,DataTypes);
    db[model.name] = model;
    // console.log(model.getTableName())
    
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// console.log(sequelize.models.User?.getTableName())

module.exports = db;