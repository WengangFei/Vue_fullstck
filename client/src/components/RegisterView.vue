<template>
    <div class="text-center">
        Register Page
        <form action="/register" method="POST" class="border-2 w-6/12 m-auto my-10 rounded-lg p-6">

            <input v-model="email" type='email' class="border-2 my-3 rounded-md" placeholder="Your email"/><br />
            <input v-model="password" type='password' class="border-2 my-3 rounded-md" placeholder="Your password"/><br />
            <button @click="submitForm" class="bg-indigo-500 text-white px-1 rounded-md my-6">Register</button>
        </form>

  
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import AuthenticationService from '@/services/AuthenticationService';


    const email = ref('');
    const password = ref('');

    async function submitForm(e){
        e.preventDefault();
        //here is the place to send front post request to back via axios
        const response = await AuthenticationService.register({
            email,
            password,
        })

        console.log(response);
    }
    
</script>

