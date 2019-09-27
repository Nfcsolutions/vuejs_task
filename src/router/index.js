import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

import members from '../views/ui-components/members'
import population from '../views/ui-components/population'
import memberdetail from '../views/ui-components/memberdetail'
import management from '../views/ui-components/management'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [{
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/members/',
    name: 'members',
    component: members
  },
  {
    path: '/members/:id',
    name: 'memberdetail',
    props: true,
    component: memberdetail
  },
  {
    path: '/population/',
    name: 'population',
    component: population
  },
  {
    path: '/management/',
    name: 'management',
    component: management
  }]
})
