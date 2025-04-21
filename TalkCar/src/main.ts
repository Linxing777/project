import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.ts'
import './assets/tailwind.css'
import './assets/main.css'
import App from './App.vue'
import 'wc-waterfall'
import { Toast } from 'vant';
import lazy from './directives/lazy'
const app = createApp(App)

app.use(createPinia()) // 使用 Pinia
app.use(router) // 使用 Vue Router
app.use(Toast)
app.directive('lazy', lazy);
app.mount('#app')
