const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const {sequelize} = require('./models');
const config = require('./config/config');
const frontPostRequests = require('./routes');


app.use(morgan('combined'));//print log in certain way
app.use(bodyParser.json());//pase any json format file request sent in
app.use(cors());//allow any host aor client to access this
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

//receives front get requests
app.get('/',(req,res)=>{
    console.log('________')
    console.log('server received get request from home.')
    console.log('________')
    res.send('<h3>Home page</h3>')
});

//receives front post requests
frontPostRequests(app);


sequelize.sync()
    .then(()=>{
        app.listen(config.port);
        console.log(`server stared on port ${config.port}`)
    })

// (async()=>{
//     const resp = await sequelize.sync();
//     app.listen(config.port);
//     console.log(`server stared on port ${config.port}`)
// })()

