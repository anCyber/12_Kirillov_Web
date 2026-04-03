import { createRouter, createWebHistory } from 'vue-router'

import CatsView from '../views/CatsView.vue'
import DogsView from '../views/DogsView.vue'
import WeatherView from '../views/WeatherView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  { path: '/', component: CatsView },
  { path: '/dogs', component: DogsView },
  { path: '/weather', component: WeatherView },
  { path: '/admin', component: AdminView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router