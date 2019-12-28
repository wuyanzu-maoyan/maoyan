
//引入路由并注册 例如
//import Info from '@/pages/Shop/Info/Info'
import Cinema from '../pages/Cinema/Cinema';
// import Home from '../pages/Home/Home';
// import Personal from '../pages/Personal/Personal';
// import City from '../pages/City/City';
// import CineDetail from '../pages/CineDetail/CineDetail';
import Login from '../pages/Login/Login';


export default [
  //路由放在数组中
  {
    path:'/login',
    component:Login,
  },
  
  {
    path:"/cinema",
    component: Cinema
  },
  {
    path:"/home",
    //component: Home
  },
  {
    path:"/personal",
   //component: Personal
  },
  {
    path:"/city",
    //component: City
  },
  {
    path:"/cinemadetail",
    //component: CinemaDetail
  },
  // {
  //   path:'/',
  //   redirect:'/login'
  // }
]