import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import PageNotFound from '../views/PageNotFound.vue';

import CourseDetail from '../views/courses/CourseDetail.vue';
import Addition from '../views/themes/addition.vue';

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/course/:courseId',
    name: 'course',
    component: CourseDetail,
    props: (route) => ({ courseId: parseInt(route.query.courseId) })
  },
  {
    path: '/addition', name: 'addition', component: Addition,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    component: PageNotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
