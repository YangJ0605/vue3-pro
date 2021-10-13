import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import registerApp from './global'

const app = createApp(App)
app.use(registerApp)
app.use(router)
app.use(store)
app.mount('#app')
