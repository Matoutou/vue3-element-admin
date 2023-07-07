import './assets/styles/main.scss' // vue init css

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
