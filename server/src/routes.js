//receiving the router from front end axios
const AuthenticationsController = require("./controllers/AuthenticationsController");
const AuthenticationsControllerPolicy = require('./policies/AuthenticationControllerPolicy')


module.exports = (app)=>{

    app.post('/register',
        //use joi framework to validate the front inputs
        AuthenticationsControllerPolicy.register,
        //if inputs pass the joi, will write into DB
        AuthenticationsController.register
    ),

    app.post('/login',
        //use joi framework to validate the front inputs
        // AuthenticationsControllerPolicy.register,
        //if inputs pass the joi, will write into DB
        AuthenticationsController.login
    )
}