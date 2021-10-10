import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import registerElementPlus from './element-plugins'

const app = createApp(App)
app.use(registerElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
