import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router.js'

createApp(App).use(router).mount('#app')
