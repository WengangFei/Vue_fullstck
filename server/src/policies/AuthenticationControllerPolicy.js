const Joi = require('joi');
//this is validation of front post method request data

module.exports = {
    
    register(req,res, next){

        //defining the constrains
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password:Joi.string().pattern(
                //password is composed a - z/A-Z/least 8 characters and max 32
                new RegExp('^[a-zA-Z0-9]{8,30}$')),
            confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        }).with('email','password')
          
        //validate request body against schema
        const {error,value} = schema.validate({
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        })
        
       
    //   console.log(error)
        if(error){
            // console.log(error.details[0].context)
            console.log(error.details[0].context)
            switch (error.details[0].context.key){
               case 'email':
                res.status(400).send({
                    //value is an object
                    error:error.details[0].message
                })
                    break
               case 'password':
                res.status(400).send({
                    error:`Password length is min. 8 - max. 32 characters. <br />
                    The characters are composed of a-z,A-Z and at least one special character.`
                })
                    break

                case 'confirmPassword':
                    res.status(400).send({
                        error:'Password is not match'
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