import Vue from 'vue';
import Router from 'vue-router';
import login from '../views/login/login.vue';
import index from '../views/index/index.vue';
import dashboard from '../views/dashboard/dashboard.vue';


Vue.use(Router);

const router=new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path:'/',
      name:'login',
      component:login,

    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect:'/dashboard',
      children:[
        {path:'/dashboard', component:dashboard,name:'dashboard'},
      ]
    },
  ]
})



export default router
