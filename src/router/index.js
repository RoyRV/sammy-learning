import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import PageNotFound from '../views/PageNotFound.vue';
import CourseDetail from '../views/courses/CourseDetail.vue';

//ALGEBRA
import ExponentPower from '@/views/themes/algebra/exponentPower.vue';

//MathRoutes
import { MathRouter } from './mathRouter';

Vue.use(VueRouter)

let routes = [];
routes = routes.concat(MathRouter.getMathRouters());

routes = routes.concat([
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
    path: '/exponentPower', name: 'exponentPower', component: ExponentPower,
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
])

console.log(routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
