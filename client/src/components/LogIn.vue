<template>
    <div class="text-center">
        <v-sheet class="mx-auto" width="300" >
            <v-form ref="loginForm" lazy-validation>
                <v-text-field
                    v-model="email"
                    label="Email"
                    :rules="emailRules"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    label="Password"
                    :rules="passwordRules"
                    type="password"
                    required
                ></v-text-field>
                <div v-html="error" class="text-red-500 text-xs" />
                <v-btn @click="loginSubmit" class="mt-2 bg-black" type="submit" block >Login</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AuthenticationService from '@/services/AuthenticationService'
import { useRouterStore } from '../piniaStores/routerStore';
import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');
    const error = ref('');
    const loginForm = ref(null);
    const emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ];
    const passwordRules = [
      v => !!v || 'Name is required',
      v => (v && v.length >= 8) || 'Name must be at least 3 characters'
    ];
    //use pinia router store
    const routerStore = useRouterStore();
    //Use global router to navigate to home page after log in
    const router = useRouter();

    async function loginSubmit(event){
        event.preventDefault();
        // console.log(await loginForm.value.validate())
        //if page not fill out, show the error and stop send the request to backend.
        if((await loginForm.value.validate()).valid){
         
            try{
            //here is the place to send front post request to back via axios
            //get back the login token.
                const token = await AuthenticationService.login({
                    email:email.value,
                    password:password.value,
                })
                if(token){
                    routerStore.setToken(token);
                    //set all login information
                    routerStore.$patch({
                        user: email.value,
                        isUserLoggedIn: true,
                    })
                    //after log in, navigate to home page.
                    if(routerStore.isUserLoggedIn){
                        router.push({name:'home'})
                    }else{
                        console.log('Not log in')
                    }
                }
                else{
                    console.log('Server did not send token to front.')
                }
                
            }
            catch(e){
                console.log(e)
                //here are server response.
                error.value = e.response?.data.error 
                // error.value = e.message 
                console.log(error.value);
            }
            
        }  
        else{
            console.log('Login page need to be filled out.')
        } 
    }

</script>

<style lang="scss" scoped>

</style>