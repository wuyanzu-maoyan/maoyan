
//引入路由并注册 例如
//import Info from '@/pages/Shop/Info/Info'
import Cinema from '../pages/Cinema/Cinema';
// import Home from '../pages/Home/Home;
// import Personal from '../pages/Personal/Personal';
// import City from '../pages/City/City';
// import CineDetail from '../pages/CineDetail/CineDetail';
// import Login from '../pages/CineDetail/CineDetail';
//  import Now from '../pages/Home/Now/Now;
//  import Will from '../pages/Home/Will/Will;


export default [
  //路由放在数组中
  {
    path:"/cinema",
    component: Cinema
  },
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
  //   path:"/personal",
  //  //component: Personal
  // },
  // {
  //   path:"/city",
  //   //component: City
  // },
  // {
  //   path:"/cinemadetail",
  //   //component: CinemaDetail
  // },
  // {
  //   path:"/login",
  //   //component: Login
  // },
]