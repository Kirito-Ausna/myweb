import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Human from '../views/Human.vue'
import Model from '../views/Model.vue'
import Parts from '../views/Parts.vue'
import Project from '../views/Project.vue'
import Team from '../views/Team.vue'

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
    path: '/Parts',
    name: 'Parts',
    component: Parts
  },
  {
    path: '/Project',
    name: 'Project',
    component: Project
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
