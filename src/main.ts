import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
pinia.use(piniaPersistedstate)
app.mount('#app')
