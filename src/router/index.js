import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Volunteer from '../views/Volunteer.vue'
import EventView from '../views/EventsView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/donate',
    name: 'donate',
    component: () => import(/* webpackChunkName: "donate" */ '../views/DonateView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: EventView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
 
  {

    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/AdminLogin.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/AdminView.vue')
  },{
    path: '/volunteer',
    name: 'volunteer',
    component: Volunteer
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
