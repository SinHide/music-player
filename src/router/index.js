import Vue from 'vue'
import VueRouter from 'vue-router'

import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
const Recommend = () => import('components/recommend/recommend')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})

export default router
