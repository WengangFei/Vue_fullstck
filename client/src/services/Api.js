//axios is a tool for make HTTP calls
import axios from 'axios';


export default()=>{
    //return a connector
    return axios.create({
        //custom config
        //point to backend url of 8080
        baseURL:'http://localhost:8080',
        //here gave me a head ache, forgot to define the headers 
        //that gave me bad request 404 error
        headers:{
            'Content-Type': 'application/json'
        }
   
    })
}
//axios.create() create a new instance with custom configuration
// can use as const axios = require('axios'), but better
//use as const axios = axios.create({url:''}) pass config into itcons


