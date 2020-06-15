import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import PageNotFound from '../views/PageNotFound.vue';

import CourseDetail from '../views/courses/CourseDetail.vue';
import Addition from '../views/themes/addition.vue';
import Substraction from '../views/themes/substraction.vue';
import Multiplication from '../views/themes/multiplication.vue';
import Division from '../views/themes/division.vue';
import GreaterOrLess from '../views/themes/greaterOrLess.vue';
import MixinOperations from '../views/themes/mixinOperations.vue';
import Exponentiation from '../views/themes/exponentiation.vue';
import Square from '../views/themes/square.vue';

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
    path: '/substraction', name: 'substraction', component: Substraction,
  },
  {
    path: '/multiplication', name: 'multiplication', component: Multiplication,
  },
  {
    path: '/division', name: 'division', component: Division,
  },
  {
    path: '/greaterOrLess', name: 'greaterOrLess', component: GreaterOrLess,
  },
  {
    path: '/mixedOperations', name: 'mixedOperations', component: MixinOperations,
  },
  {
    path: '/exponentiation', name: 'exponentiation', component: Exponentiation,
  },
  {
    path: '/square', name: 'square', component: Square,
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
