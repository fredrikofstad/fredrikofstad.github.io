import {createRouter, createWebHistory} from "vue-router";

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Data from '@/views/Data.vue'
import Dimple from '@/views/Dimple.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/data', name: 'Data', component: Data},
    {path: '/dimple', name: 'Dimple', component: Dimple},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router