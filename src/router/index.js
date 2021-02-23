import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Human from '../views/Human.vue'
import Model from '../views/Model.vue'
import Biodesign from '../views/Biodesign.vue'
import Feasibility from '../views/Feasibility.vue'
import Background from '../views/Background.vue'
import Hardware from '../views/Hardware.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Human',
    name: 'Human',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Human
  },
  {
    path: '/Model',
    name: 'Model',
    component: Model
  },
  {
    path: '/Background',
    name: 'Background',
    component: Background
  },
  {
    path: '/Feasibility',
    name: 'Feasibility',
    component: Feasibility
  },
  {
    path: '/Biodesign',
    name: 'Biodesign',
    component: Biodesign
  },
  {
    path:'/Hardware',
    name:'Hardware',
    component:Hardware
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
