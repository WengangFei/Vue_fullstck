import { defineStore } from 'pinia';
// import { ref, computed } from 'vue';
// import { useRouter, useRoute } from 'vue-router';


export const useRouterStore = defineStore('routerStore',{
    state:()=>({
        currentRoute: '/',
    }),

    actions:{
        updateRoute(route){
            this.currentRoute = route;
        }
    },
})