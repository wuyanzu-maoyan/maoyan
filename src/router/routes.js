
//引入路由并注册 例如
import Cinema from '../pages/Cinema/Cinema';
import Home from '../pages/Home/Home';
import Now from '../pages/Home/Now/Now'
import Will from '../pages/Home/Will/Will'
// import Home from '../pages/Home/Home';
import Personal from '../pages/Personal/Personal';
// import City from '../pages/City/City';
// import CinemaDetail from '../pages/CinemaDetail/CinemaDetail';
import Login from '../pages/Login/Login.vue';
// import Now from '../pages/Home/Now/Now';
// import Will from '../pages/Home/Will/Will';


export default [
  //路由放在数组中
  {
    path:'/login',
    component:Login,
  },
  
  {
    path:"/cinema",
    component: Cinema,
    
  },
    {
     path:"/home",
     component: Home,
     children: [
      {
        path: '/home/Now',
        component: Now
      },
      {
        path: '/home/Will',
        component: Will
      }
      
    ]
     
   },
  // {
  //   path:"/home",
  //   component: Home
  // },
  {
    path:"/personal",
    component: Personal
  },
  // {
  //   path:"/city",
  //   component: City
  // },
  // {
  //   path:"/cinemadetail",
  //   component: CinemaDetail
  // },
  // {
  //   path:"/home",
  //   component: Home,
  //   children:[
  //     {
  //       path:'/home/now',
  //       component: Now
  //     },
  //     {
  //       path:'/home/Will',
  //       component: Will
  //     }
  //   ]
  // },
  // {
  //   path:"/city",
  //   component: City
  // },
  // {
  //   path:"/cinemadetail",
  //   component: CinemaDetail
  // },
  // {
  //   path:'/',
  //   redirect:'/home'
  // }
  
]