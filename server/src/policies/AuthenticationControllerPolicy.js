const Joi = require('joi');


module.exports = {
    
    register(req,res, next){

        //defining the constrains
        const schema = Joi.object({
            email: Joi.string().email(),
            password:Joi.string().pattern(
                //password is composed a - z/A-Z/least 8 characters and max 32
                new RegExp('^[a-zA-Z0-9]{8,30}$'))
        }).with('email','password')
          
        //validate request body against schema
        const {error,value} = schema.validate({
            email: req.body.email._value,
            password: req.body.password._value,
        })
        
       
      console.log(error)
        if(error){
            // console.log(error.details[0].context)
            // console.log(value.email._value)
            switch (error.details[0].context.key){
               case 'email':
                res.status(400).send({
                    //value is an object
                    error:error.details[0].message
                })
                    break
               case 'password':
                res.status(400).send({
                    error:error.details[0].message
                })
                    break
                default:
                    res.status(400).send({
                        error: 'Failed to registered. Try to fix the issue as it prompts.'
                    })
            }
        }
        else{
            //move to the next step to register the user into DB in routes.js file
            next()
        }
        
    }
}