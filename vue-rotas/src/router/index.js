import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import dashboardRoutes from '@/dashboard/router'

Vue.use(VueRouter)

const routes = [
  {path:'/login',component:Login},
  {path:'',redirect:'./login'},
  ...dashboardRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
