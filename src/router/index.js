import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import News from "@/views/News";
import History from "@/views/History";
import FAQ from "@/views/FAQ";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/events',
    name: 'Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Home
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
