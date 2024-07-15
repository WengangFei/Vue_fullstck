const Joi = require('joi');


module.exports = {
    
    register(req,res, next){

        //defining the constrains
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password:Joi.string().pattern(
                //password is composed a - z/A-Z/least 8 characters and max 32
                new RegExp('^[a-zA-Z0-9]{8,30}$'))
        })
          
        //validate request body against schema
        const {error,value} = schema.validate(req.body)
        
      
        if(error){
            // console.log(error.details[0].context)
            // console.log(value.email._value)
            switch (error.details[0].context.key){
               case 'email':
                res.status(400).send({
                    //value is an object
                    error:`Email ${value.email} is invalid.`
                })
                    break
               case 'password':
                res.status(400).send({
                    error:`The password ${value.password} is invalid.
                    the rules are:
                    Min length of 8 to max 32, a-z and A-Z
                    `
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