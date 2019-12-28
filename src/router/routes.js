
//引入路由并注册 例如
//import Info from '@/pages/Shop/Info/Info'
import Cinema from '../pages/Cinema/Cinema';

export default [
  //路由放在数组中
  {
    path:'/login',
    component:() => import('@/pages/Login/Login'),
  },
  
  {
    path:"/cinema",
    component: Cinema
  },
  {
    path:'/',
    redirect:'/login'
  }
]