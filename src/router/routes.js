
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
import Seats from '../pages/Seats/Seats';
import Login from '../pages/Login/Login';
import CardDetail from '../pages/CardDetail/CardDetail'
import Search from '../pages/Search/Search'
import SearchDetail from '../pages/SearchDetail/SearchDetail'


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
    path:'/seats',
    component:Seats,
    meta:{
      title:'中影星美国际影城（温都水城店）',//传给header组件的title
      isBack:true,//需要返回按钮
      isFooter:false,//不需要footer

    }
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
        path: '/home/now',
        component: Now,
        meta:{
          isFooter:true //需要footer
        },
      },
      {
        path: '/home/will',
        component: Will,
        meta:{
          isFooter:true //需要footer
        },
      },
      {
        path:'',
        redirect:'/home/now'
      }
    ]
     
  },
  {
    path:"/Movie/:id",
    component: Movie,
    
  },
  {
    path:"/personal",
    component: Personal, //个人中心
    meta:{
      isFooter:true,
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
      title:'我的优惠券',
      noHeader:true
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
    component: City,
    meta:{
      isFooter:false,//不需要footer
      noHeader:true
    }
  },
  {
    path:"/search",
    component: Search,
    meta:{
      isFooter:false,//不需要footer
      title:'猫眼电影',
      isBack:true,//需要返回按钮
    }
  },
  {
    path:"/searchdetail",
    component: SearchDetail,
    meta:{
      isFooter:false,//不需要footer
      isBack:true,//需要返回按钮
      title:' ',
    }
  },
  {
    name: 'cinemadetail',
    path:"/cinemadetail/:id",
    props: true,
    component: CinemaDetail,
    meta:{
      isBack:true,
      noHeader:true
    }
  },
  {
    name: 'detail',
    path:"/detail/:id",
    props: true,
    component: Detail,
    meta: {
      noHeader:true
    }
  },
  {
    path:"/app",
    component: App,
    meta: {
      noHeader:true
    }
  },
  {
    path:'/carddetail',
    component: CardDetail,
    meta:{
      isBack:true,
      title:'会员卡详情'
    }
  },
  {
    path:'/',
    redirect:'/home',
  }
  
]