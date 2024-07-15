//get model User class to create register user into DB
const { User } = require('../models');

module.exports = {
    async register(req,res){
        console.log('________');
        console.log('Server received the post data email: ' + req.body.email._value + '. password: ' + req.body.password._value)
        // res.send({
        //     message:`Your ${req.body.email} and password ${req.body.password} are registered!`
        // })
        console.log('________');
       
        //write the user into User DB
        try{
            //User model instance
            const user = await User.create(req.body);
            // console.log(user.toJSON())
            res.send(user.toJSON());
        }catch(e){
            res.status(400).send({
                error:'The email is exist!'
            })
        } 

    }
}