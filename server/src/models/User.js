


// create a user model
module.exports = (sequelize,DataTypes)=>
    sequelize.define(
        'User',{
            email:{
                type:DataTypes.STRING,
                unique: true,
            },
            password:{
                type:DataTypes.STRING,
            },
            confirmPassword:{
                type:DataTypes.STRING,
            }
        },
        {
            tableName:'users_table'
        }
    )


//this fun creates and returns a model 

   
