//Promise library
const Promise = require('bluebird');
//to convert all of the callback-based functions in an object 
//(such as a module) into promise-based functions.
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user,options){
    
    const SALT_FACTOR = 10;
    if(!user.changed('password')){
        return;
    }
    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt=>bcrypt.hashAsync(user.password,salt,null))
    .then(hash=>{
        //the setDataValue method allows you to set an attribute 
        //value directly on a model instance, bypassing any custom setters or hooks that might be defined.
        user.setDataValue('password',hash);
        // user.setDataValue('confirmPassword',hash);
       
       
    })
}
// create a user model
module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define(
        'User',
        {
            email:{
                type:DataTypes.STRING,
                unique: true,
            },
            password:{
                type:DataTypes.STRING,
            },
            // confirmPassword:{
            //     type:DataTypes.STRING,
            // }
        },
        {
            hooks:{
                // beforeCreate:hashPassword,
                // beforeUpdate:hashPassword,
                beforeSave:hashPassword,
            }
        },
        {
            tableName:'users_table'
        }
    )

    User.prototype.comparePassword = function(password){
        return bcrypt.compareAsync(password,this.password);
    }

    return User;
}
    


//this fun creates and returns a model 

   
