import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ViewAllMovies from './views/ViewAllMovies.vue'
import Error from './components/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/404',
      name: 'error',
      component: Error
    },
    {
      path: '/movies/:category',
      name: 'movies-category',
      component: ViewAllMovies
    },
    { path: '*', redirect: '/' }
  ]
})
