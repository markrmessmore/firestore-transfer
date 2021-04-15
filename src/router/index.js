import Vue from 'vue'
import VueRouter from 'vue-router'

// COMPONENTS
import destination  from '@/components/destination.vue'
import home         from '@/components/home.vue'
import result       from '@/components/result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/Destination',
    name: 'Destination',
    component: destination
  },
  {
    path: "/Result",
    name: "Result",
    component: result
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
