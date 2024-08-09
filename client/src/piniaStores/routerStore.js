import { defineStore } from 'pinia';
// import { ref, computed } from 'vue';
// import { useRouter, useRoute } from 'vue-router';


export const useRouterStore = defineStore('routerStore',{
    state:()=>({
        token: null,
        user: null,
        isUserLoggedIn: false,
        currentRoute: '/',
    }),

    actions:{
        setToken(newToken){
            this.token = newToken;
            localStorage.setItem('authToken',newToken);
        },

        loadToken(){
            const storedToken = localStorage.getItem('authToken');
            if(storedToken){
                this.token = storedToken;
            }
        },

        clearToken(){
            this.token = null;
            localStorage.removeItem('authToken');
        }
    },

    getters:{
        isAuthenticated: state=> !!state.token,
    }

    // actions:{
    //     updateRoute(route){
    //         this.currentRoute = route;
    //     }
    // },
})

