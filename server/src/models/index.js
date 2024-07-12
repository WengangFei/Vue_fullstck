const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
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
.forEach(f=>{
 
    const model = require(path.join(__dirname,f))
    db[model.name] = model;
    
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;