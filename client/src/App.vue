<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>



<template>
  <nav class="">
    <RouterLink to="/" class="bg-red-400 m-4 px-1 rounded-md text-white">
      Home
    </RouterLink>
    <RouterLink to="/register" class="bg-sky-400 m-4 px-1 rounded-md text-white">
      Register
    </RouterLink>
  </nav>
  
  <h1 class="text-center text-2xl font-bold my-4">
    New Project
  </h1>
  <main>
    <RouterView />
  </main>
</template>
