import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from 'Dashboard'
import About from 'About'
import Chat from 'Chat'
import Activities from 'Activities'
import Member from 'Member'
import Login from 'Login'
import AboutDetail from 'AboutDetail'
import ActivitiesDetail from 'ActivitiesDetail'
import Register from 'Register'
import Search from 'SearchDetail'
import Resume from 'Resume'

Vue.use(VueRouter)

const router = new VueRouter({
  history: false,
  linkActiveClass: 'active'
})

router.map({
  '/': {
    name: 'Dashboard',
    component: Dashboard
  },
  '/login': {
    name: 'Login',
    component: Login
  },
  '/about': {
    name: 'About',
    component: About
  },
  '/about/:id': {
    name: 'AboutDetail',
    component: AboutDetail
  },
  '/activities': {
    name: 'Activities',
    component: Activities
  },
  '/Activities/:id': {
    name: 'ActivitiesDetail',
    component: ActivitiesDetail
  },
  '/chat': {
    name: 'Chat',
    component: Chat
  },
  '/member': {
    name: 'Member',
    component: Member
  },
  '/register': {
    name: 'Register',
    component: Register
  },
  '/search': {
    name: 'Search',
    component: Search
  },
  '/resume': {
    name: 'Resume',
    component: Resume
  }
})

router.redirect({
  '*': '/'
})

export default router
