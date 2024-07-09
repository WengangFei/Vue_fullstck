import axios from 'axios';

export default()=>{
    //return a connector
    return axios.create({
        //point to backend url of 8080
        baseURL:'http://localhost:8080/',
        timeout:1000,
        headers:{}
    })
}


