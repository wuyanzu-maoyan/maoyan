
//引入路由并注册 例如
import Cinema from '../pages/Cinema/Cinema';
import CinemaDetail from '../pages/CinemaDetail/CinemaDetail';
import Detail from '../pages/Detail/Detail'
import App from '../pages/App/App'
import Home from '../pages/Home/Home';
import Now from '../pages/Home/Now/Now'
import Movie from '../pages/Movie/Movie'
import Will from '../pages/Home/Will/Will'
import Personal from '../pages/Personal/Personal';
import Order from '../pages/Personal/Order'
import Store from '../pages/Personal/Store'
import Cou from '../pages/Personal/Cou'
import Card from '../pages/Personal/Card'
import VipCard from '../pages/Personal/VipCard'
import City from '../pages/City/City';
import Register from '../pages/Register/Register';
import FindPassword from '../pages/FindPassword/FindPassword';
import Login from '../pages/Login/Login';


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
    meta:{
      isFooter:true,
      title:'影院'
    }
    
  },
  {
    path:"/home",
    component: Home,
    meta:{
      isFooter:true //需要footer
    },
    children: [
      {
        path: '/home/Now',
        component: Now,
        meta:{
          isFooter:true //需要footer
        },
      },
      {
        path: '/home/Will',
        component: Will,
        meta:{
          isFooter:true //需要footer
        },
      }
    ]
     
   },
   {
    path:"/Movie",
    component: Movie,
    
  },
  {
    path:"/personal",
    component: Personal, //个人中心
    meta:{
      isFooter:true,
      isBack:true,
      title:'我的'
    }
  },
  {
    path:"/order",
    component:Order, //电影订单
    meta:{
      isBack:true,
      title:'我的电影订单'
    }
  },
  {
    path:"/store",
    component:Store, //商城订单
    meta:{
      isBack:true,
      title:'我的周边商品'
    }
  },
  {
    path:"/cou",
    component:Cou, //优惠券
    meta:{
      isBack:true,
      title:'我的优惠券'
    }
  },
  {
    path:"/card",
    component:Card, //折扣卡
    meta:{
      isBack:true,
      title:'我的折扣卡'
    }
  },
  {
    path:"/vipcard",
    component:VipCard, //影院会员卡
    meta:{
      isBack:true,
      title:'影院会员卡'
    }
  },
  {
    path:"/city",
    component: City
  },
  {
    path:"/cinemadetail",
    component: CinemaDetail,
    meta:{
      isBack:true,
      noHeader:true
    }
  },
  {
    path:"/detail",
    component: Detail
  },
  {
    path:"/app",
    component: App
  },
  {
    path:'/',
    redirect:'/home',
  }
  
]