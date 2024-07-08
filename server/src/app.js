const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));//print log in certain way
app.use(bodyParser.json());//pase any json format file request sent in
app.use(cors());//allow any host aor client to access this


app.get('/status',(req,res)=>{
    res.send({
        message:'good'
    })
})

app.listen(process.env.PORT || 8080)