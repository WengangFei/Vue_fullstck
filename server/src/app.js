const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const {sequelize} = require('./models');
const config = require('./config/config');

console.log(config)

app.use(morgan('combined'));//print log in certain way
app.use(bodyParser.json());//pase any json format file request sent in
app.use(cors());//allow any host aor client to access this


app.get('/status',(req,res)=>{
    res.send({
        message:'good'
    })
})

app.post('/register',(req,res)=>{
    res.send({
        message:`Your email ${req.body.email} is registered.`
    })
})

require('./routes')(app);

sequelize.sync()
    .then(()=>{

        app.listen(config.port);
        console.log(`server stared on port ${config.port}`)
    })

