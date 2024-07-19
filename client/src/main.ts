import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// Add Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
  })

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')


const arr = [1,2,3]

function changeArr(arr){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('good')
      arr.push(4)
      
    },2000)
   
  
  })
}

function get(a){
  for(const i of a){
    console.log(i)
  }
}

async function print(arg){
  console.log(11)
  await changeArr(arg)
  console.log(22)
  get(arg)
  console.log(33)
}

print(arr)





