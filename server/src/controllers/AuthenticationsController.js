//get model User class to create register user into DB
const { User } = require('../models');

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
            //User model instance
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
                res.status(403).send({
                    error:'User email not exist.'
                })
                console.log('User email not exist')
            }
            //validate exist user's password and see if match the password that saved in DB
            const isPasswordValid = password === user.password;
            if(!isPasswordValid){
                res.status(403).send({
                    error:'Password is not matching.'
                })
            } 

            //log in successfully, do other logic here
            console.log('server side Log in successfully.')
            res.send({
                message:'Client side prompt: Log in successfully.'
        })
        }catch(e){
            //this will rare happen.
            res.status(500).send({
                error:'Login credentials are all correct. No idea Y this happen.'
            })
        }
        
    }


}