
//引入路由并注册 例如
import Cinema from '../pages/Cinema/Cinema';
import CinemaDetail from '../pages/CinemaDetail/CinemaDetail';
import Detail from '../pages/Detail/Detail'
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Now from '../pages/Home/Now/Now'
import Will from '../pages/Home/Will/Will'
import Personal from '../pages/Personal/Personal';
import Order from '../pages/Personal/Order'
import City from '../pages/City/City';
import Register from '../pages/Register/Register';
import FindPassword from '../pages/FindPassword/FindPassword';


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
  {
    path:"/personal",
    component: Personal
  },
  {
    path:"/city",
    //component: City
  },
  {
    path:"/cinemadetail",
    component: CinemaDetail
  },
  {
    path:"/detail",
    component: Detail
  },
  // {
  //   path:'/',
  //   redirect:'/home'
  // }
  
]