<template>
    <div class="text-center">
        Register Page
        <form action="/register" method="POST" class="border-2 w-6/12 m-auto my-10 rounded-lg p-6">

            <input v-model="email" type='email' class="border-2 my-3 rounded-md" placeholder="Your email"/><br />
            <input v-model="password" type='password' class="border-2 my-3 rounded-md" placeholder="Your password"/><br />
            <div v-html="error" class="text-red-500 text-xs" />
            <button @click="submitForm" class="bg-indigo-500 text-white px-1 rounded-md my-6">Register</button>
            
        </form>
        
            


  
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import AuthenticationService from '@/services/AuthenticationService';


    const email = ref('');
    const password = ref('');
    const error = ref('');

    async function submitForm(e){
        e.preventDefault();
        try{
            //here is the place to send front post request to back via axios
            await AuthenticationService.register({
                email,
                password,
            })

        }catch(e){
            error.value = e.response.data.error
            console.log(e.response.data.error)
        }
       
        // console.log(response);
    }
    
</script>

