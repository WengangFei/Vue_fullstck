module.exports = (app)=>{
    app.post('/register',(req,res)=>{
        // console.log(req)
        res.send({
            message:`Your ${req.body.email._value} and password ${req.body.password._value} are registered!`
        })
    })
}