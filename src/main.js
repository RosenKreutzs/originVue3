import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'/*引入element-plus的架构*/
import zhCn from 'element-plus/es/locale/lang/zh-cn'/* 将element-plus的默认文字描述变为中文*/
import 'element-plus/dist/index.css'/*引入element-plus的样式*/


/* 全局引入css */
import "@/assets/css/global.css"
import "@/assets/css/animate.css"
import "@/assets/css/base-style.css"
import "@/assets/css/bootstrap-5.0.0-alpha-2.min.css"
import "@/assets/css/bootstrap-5.0.0-beta1.min.css"
import "@/assets/css/glightbox.min.css"
import "@/assets/css/lindy-uikit.css"
import "@/assets/css/LineIcons.2.0.css"
import "@/assets/css/tiny-slider.css"

// import vue3videoPlay from 'vue3-video-play' // 引入组件
// import 'vue3-video-play/dist/style.css' // 引入css





const app=createApp(App).use(store).use(router).use(ElementPlus ,{locale: zhCn,size:'small'}).mount('#app')
