import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { TroisJSVuePlugin } from 'troisjs';

const app = createApp(App)
app.mount('#app')
app.use(TroisJSVuePlugin)
