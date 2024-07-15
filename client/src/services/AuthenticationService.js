import Api from '@/services/Api';


export default {
    register(credentials){
        //instance.post(url[,data[,config]])
        //The data then encapsulates the request body that 
        //we’re sending or parsing to the URL. It is in an 
        //object format, which means it has a key and value.
        //The key is the schema the server accepts, while 
        //the value is any data type we parse. config is 
        //the third parameter where we specify the header 
        //content type, authorization, and more. It is also 
        //in an object format.
        return Api().post('/register',credentials);
    }
}
// Api()=>
    
// axios.create({
//     //point to backend url of 8080
//     baseURL:'http://localhost:8080/'
// })


//this fun is used by submit the registered form from 
//./register page front end
