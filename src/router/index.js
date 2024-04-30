import { createRouter, createWebHistory } from 'vue-router'
import bookLayout from '../views/bookLayout/bookLayout.vue'//路由的路径的写法一
import futuresLayout from '../views/futuresLayout/futuresLayout.vue'//路由的路径的写法一

const routes = [
  {
    path: '/Introduce',
    name: 'Introduce',
    component: ()=>import("@/views/introduceViews/Introduce")
  },

  {
    path: '/Login',
    name: 'Login',
    component: ()=>import("@/views/Login")
  },
  {
    path: '/Register',
    name: 'Register',
    component: ()=>import("@/views/Register")
  },
  {//框架路由
    path: '/BookDetail',
    name: 'bookLayout',
    component: bookLayout,
    redirect:"/BookDetail",//重定向(当访问"/"时直接跳到)
    children:[//children是嵌套路由
      {
        path:'/VideoBook',
        name:'VideoBook',
        component:()=>import("@/views/bookLayout/secondaryPage/VideoBook")//路由的路径的写法二
      },
      {
        path:'/User',
        name:'User',
        component:()=>import("@/views/bookLayout/secondaryPage/User")//路由的路径的写法二
      },
      {
        path: '/Person',
        name: 'Person',
        component: ()=>import("@/views/bookLayout/secondaryPage/Person")
      },
      {
        path: '/Book',
        name: 'Book',
        component: ()=>import("@/views/bookLayout/secondaryPage/Book")
      },
      {
        path: '/News',
        name: 'News',
        component: ()=>import("@/views/bookLayout/secondaryPage/News")
      },
      {
        path: '/Echart_work',
        name: 'Echart_work',
        component: ()=>import("@/views/bookLayout/secondaryPage/Echart_work")
      },
      {
        path: '/BookDetail',
        name: 'BookDetail',
        component: ()=>import("@/views/bookLayout/secondaryPage/bookDetailViews/BookDetail")
      },
      {
        path: '/EpubBook',
        name: 'EpubBook',
        component: ()=>import("@/views/bookLayout/secondaryPage/epubBookViews/EpubBook")
      }
    ]
  },
  {//框架路由
    path: '/',
    name: 'futuresLayout',
    component: futuresLayout,
    redirect:"/HomePage",//重定向(当访问"/"时直接跳到)
    children:[//children是嵌套路由
      {
        path:'/HomePage',
        name:'HomePage',
        component:()=>import("@/views/futuresLayout/secondaryPage/HomePage")//路由的路径的写法二
      },
      {
        path:'/BlogPage',
        name:'BlogPage',
        component:()=>import("@/views/futuresLayout/secondaryPage/BlogPage")//路由的路径的写法二
      },
      {
        path:'/BlogSinglePage',
        name:'BlogSinglePage',
        component:()=>import("@/views/futuresLayout/secondaryPage/BlogSinglePage")//路由的路径的写法二
      },
      {
        path:'/ContactPage',
        name:'ContactPage',
        component:()=>import("@/views/futuresLayout/secondaryPage/ContactPage")//路由的路径的写法二
      },
      {
        path:'/UploadData',
        name:'UploadData',
        component:()=>import("@/views/futuresLayout/secondaryPage/UploadData")//路由的路径的写法二
      },
      {
        path:'/UploadModel',
        name:'UploadModel',
        component:()=>import("@/views/futuresLayout/secondaryPage/UploadModel")//路由的路径的写法二
      },
      {
        path:'/LoadData',
        name:'LoadData',
        component:()=>import("@/views/futuresLayout/secondaryPage/LoadData")//路由的路径的写法二
      },
      {
        path:'/ChangeData',
        name:'ChangeData',
        component:()=>import("@/views/futuresLayout/secondaryPage/ChangeData")//路由的路径的写法二
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
