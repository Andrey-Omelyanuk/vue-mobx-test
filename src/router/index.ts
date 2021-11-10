import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import TestPage from '../views/test.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/'     , name: 'Home', component: TestPage },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
