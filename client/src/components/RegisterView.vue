<template>
    <div class="text-center py-14">
        <v-sheet class="mx-auto" width="300" >
            <v-form ref="myForm" lazy-validation>
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
                <v-text-field
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    label="Confirm Password"
                    type="password"
                    required
                ></v-text-field>
                <div v-html="error" class="text-red-500 text-xs" />
                <v-btn @click="submitForm" class="mt-2" type="submit" block>Submit</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import AuthenticationService from '@/services/AuthenticationService';


    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const error = ref('');
    const myForm = ref(null);
    const emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ];
    const passwordRules = [
      v => !!v || 'Name is required',
      v => (v && v.length >= 3) || 'Name must be at least 3 characters'
    ];

    const confirmPasswordRules = [
        v => !!v || 'Password confirmation is required',
        v => v === password.value || 'Passwords must match'
      ]


    
    async function submitForm(event){
        event.preventDefault();
        if((await myForm.value.validate()).valid){

            try{
                
            //here is the place to send front post request to back via axios
                await AuthenticationService.register({
                    email:email.value,
                    password:password.value,
                    // confirmPassword:confirmPassword.value, 
                })
            

            }catch(e){
                //here are server response.
                console.log(e)
                error.value = e.response.data.error
                
            }
        
            //log the error
            if(error.value) console.log(error.value)
        }
        else{
            console.log('form no good')
        }
    }
  
    
</script>

