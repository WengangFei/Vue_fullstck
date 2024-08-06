<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ref } from 'vue';


//router object
const router = useRouter();
const title = ref('Home Page');
          

function changeToRegisterPage(){
  title.value = 'Register Page'
}

function changeToHomePage(){
  title.value = 'Home Page'
}

function changeToLoginPage(){
  title.value = 'Login Page'
}
//push the route to local router object
function navigateTo(route){
  router.push(route)
}

</script>



<template>
  <v-app>
    <main>
      <v-container class="w-full fixed top-0 z-50">
        <v-toolbar border> 
          <RouterLink to="/" @click="changeToHomePage">
            <v-toolbar-title>
              New Project
            </v-toolbar-title>
          </RouterLink>
         
          <v-toolbar-title >
            {{ title }}
          </v-toolbar-title>
          <v-toolbar-items>
            <!-- <RouterLink 
              to="/" 
              class="bg-red-400 m-4 px-1 rounded-md text-white"
              @click="changeToHomePage"
              >
              Home
            </RouterLink> -->

            <v-btn 
            @click="navigateTo({name:'home'})"
            >
              Home
            </v-btn>

            <RouterLink 
              to="/register"
              class="bg-sky-400 m-4 px-1 rounded-md text-white"
              @click="changeToRegisterPage"
              >
              Register
            </RouterLink>
            <RouterLink 
              to="/login"
              class="bg-sky-400 m-4 px-1 rounded-md text-white"
              @click="changeToLoginPage"
              >
              Log In
            </RouterLink>
          </v-toolbar-items>
        </v-toolbar>
      </v-container>
      <div class="my-20">
        <RouterView />
      </div>
    </main>
  </v-app>
</template>


