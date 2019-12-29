
//引入路由并注册 例如
import Cinema from '../pages/Cinema/Cinema';
import Home from '../pages/Home/Home';
import Now from '../pages/Home/Now/Now'
import Will from '../pages/Home/Will/Will'
// import Home from '../pages/Home/Home';
import Personal from '../pages/Personal/Personal';
// import City from '../pages/City/City';
// import CineDetail from '../pages/CineDetail/CineDetail';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import FindPassword from '../pages/FindPassword/FindPassword';
// import CinemaDetail from '../pages/CinemaDetail/CinemaDetail';
// import Now from '../pages/Home/Now/Now';
// import Will from '../pages/Home/Will/Will';


export default [
  //路由放在数组中
  {
    path:'/register',
    component:Register,
    meta:{
      title:'猫眼电影',//传给header组件的title
      isBack:true//需要返回按钮

    }
  },
  {
    path:'/login',
    component:Login,
    meta:{
      title:'猫眼电影',
      isBack:true//需要返回按钮
    }
  },
  {
    path:'/findpassword',
    component:FindPassword,
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