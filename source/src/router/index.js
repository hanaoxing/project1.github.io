import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Beta from '../views/Beta.vue'
import Smile from '../views/Smile.vue'
import School from '../views/School.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/beta',
    name: 'beta',
    component: Beta
  },
  {
    path: '/smile',
    name: 'smile',
    component: Smile
  },
  {
    path: '/school',
    name: 'school',
    component: School
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
