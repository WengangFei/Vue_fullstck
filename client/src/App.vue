<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

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

</script>



<template>
  <v-app>
    <main>
      <v-container>
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
            <RouterLink 
              to="/" 
              class="bg-red-400 m-4 px-1 rounded-md text-white pt-1"
              @click="changeToHomePage"
              >
              Home
            </RouterLink>
            <RouterLink 
              to="/register"
              class="bg-sky-400 m-4 px-1 rounded-md text-white pt-1"
              @click="changeToRegisterPage"
              >
              Register
            </RouterLink>
            <RouterLink 
              to="/login"
              class="bg-sky-400 m-4 px-1 rounded-md text-white pt-1"
              @click="changeToLoginPage"
              >
              Log In
            </RouterLink>
          </v-toolbar-items>
        </v-toolbar>
      </v-container>
      <div>
        <RouterView />
      </div>
    </main>
  </v-app>
</template>
