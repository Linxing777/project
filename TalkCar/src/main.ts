import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.ts'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()) // 使用 Pinia
app.use(router) // 使用 Vue Router
app.mount('#app')
