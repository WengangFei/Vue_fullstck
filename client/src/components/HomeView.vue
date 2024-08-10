<template>
    <div v-if="routerStore.isUserLoggedIn" class="font-bold text-lg text-red-500" >
        Your are current logged in
    </div>
    <div> Parent Component</div>
    

    <v-name :msg="atr">
        <template #slot1>
            replacement for slot 1
        </template>
        <template #slot2="s">
            replacement for slot 2 --- {{ s.s }}
        </template>
    </v-name>
</template>
  

<script setup>
import VName from './VName.vue';
import { useRouterStore } from '../piniaStores/routerStore';

const routerStore = useRouterStore();
const atr = 'gun'


</script>