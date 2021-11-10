import { createApp } from 'vue'
import Observer from 'mobx-vue-lite'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')
app.use(<any>Observer)
