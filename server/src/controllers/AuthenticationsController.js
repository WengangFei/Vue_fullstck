//get model User class to create register user into DB
const { User } = require('../models');
//web authentication token
const jwt  = require('jsonwebtoken');
const config = require('../config/config');
const { is } = require('bluebird');

//sign a user object using the jwt library to give back jwt token
function jwtSignUser(user){
    const ONE_WEEK = 60 * 60 *7 *24;
    //if add callback function in sign(),it wont return token
    return jwt.sign(user,config.authentication.jwtSecret,{expiresIn: ONE_WEEK})
}

module.exports = {
    async register(req,res){
        console.log('________');
        console.log('Server received the post data email: ' + req.body.email + '. password: ' + req.body.password)
        // res.send({
        //     message:`Your ${req.body.email} and password ${req.body.password} are registered!`
        // })
        console.log('________');
       
        //write the user into User DB
        try{
            //received the valid user registered credentials
            //User model instance to create user table
            const user = await User.create(req.body);
            // console.log(user.toJSON())
            // console.log(req.body)
            res.send(user.toJSON());
        }catch(e){
            res.status(400).send({
                error:'The email is exist!'
            })
        } 
    },

    async login(req,res){
        console.log('________');
        console.log('Server received the login data email: ' + req.body.email + '. password: ' + req.body.password)
        // res.send({
        //     message:`Your ${req.body.email} and password ${req.body.password} are registered!`
        // })
        console.log('________');
       
        try{
            
            //get request email and password
            const { email,password } = req.body;
            //find the user by user email from DB
            const user = await User.findOne({
                where:{
                    email: email
                }
            })
            
            //can not find the email
            if(!user){
                //add return to prevent send multiple response to the same request
                return(
                    res.status(403).send({
                        error:'User email not exist.'
                }));
            }

            
            //validate exist user's password and see if match the password that saved in DB
            const isPasswordValid = await user.comparePassword(password);
            // const isPasswordValid = password === user.password;
            if(!isPasswordValid){
                //add return to prevent send multiple response to the same request
                console.log(password,user.password)
                return(
                    res.status(403).send({
                        error:'Password is not matching.'
                }));
                
            } 

            //show login user's information in json format
            console.log('user', user.toJSON())
            //create jwt 
            const userToken = jwtSignUser(user.toJSON());
            //log in successfully, do other logic here
            console.log('server side Log in successfully.')
            res.send({
                message:'Client side prompt: Log in successfully.',
                token: userToken,
            })
        }
        catch(e){
            //this will rare happen.
            res.status(500).send({
                error:'Something else wrong.'
            })
        }
    }
}