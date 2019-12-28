
//引入路由并注册 例如
//import Info from '@/pages/Shop/Info/Info'
import Cinema from '../pages/Cinema/Cinema';
// import Home from '../pages/Home/Home;
// import Personal from '../pages/Personal/Personal';
// import City from '../pages/City/City';
import CinemaDetail from '../pages/CinemaDetail/CinemaDetail';
// import Login from '../pages/CineDetail/CineDetail';


export default [
  //路由放在数组中
  {
    path:"/cinema",
    component: Cinema
  },
  // {
  //   path:"/home",
  //   //component: Home
  // },
  // {
  //   path:"/personal",
  //  //component: Personal
  // },
  // {
  //   path:"/city",
  //   //component: City
  // },
  {
    path:"/cinemadetail",
    component: CinemaDetail
  },
  // {
  //   path:"/login",
  //   //component: Login
  // }
]