<template>
  <div style="display: flex">
    <vue3VideoPlay v-bind="options" :poster="poster" style="width: 70%" />
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto;width:20%;">
      <li v-for="i in 20" :key="i" class="infinite-list-item" @click="plusOne(i+1)">{{ i }}集</li>
    </ul>
</div>
</template>

<script>

import "vue3-video-play/dist/style.css";
    import  vue3VideoPlay from "vue3-video-play";
    import { reactive, toRefs } from "vue";

    export default {
    components: {
    vue3VideoPlay,
    }, data(){
        return{
        }
      },


    props:['video_url','poster'],
    setup(props){
      function plusOne(i){
        var src_list=[
          "https://2023519tryoss.oss-cn-chengdu.aliyuncs.com/videoMin/%E5%BA%94%E8%AE%A9%E6%8A%80%E6%9C%AF%E5%88%9B%E6%96%B0%E6%9C%8D%E5%8A%A1%E4%BA%8E%E4%BA%BA%EF%BC%8C%E8%80%8C%E9%9D%9E%E8%AE%A9%E4%BA%BA%E9%80%82%E5%BA%94%E6%8A%80%E6%9C%AF%20%E3%80%90%E8%A7%86%E9%A2%91%E8%AE%B2%E8%A7%A3%E3%80%91%EF%BC%88%E4%B8%AD%EF%BC%89.mp4?Expires=1684512224&OSSAccessKeyId=TMP.3Kf8vw7gDyrnWau9UqYsE5PGFUWP3puj718nvctc5eSj3ndVbRmccCU1Gbc941NXnLEwG5tLN2WogpgJGea5tCtMrtJR4K&Signature=FA2NyOBTUGyFASBlNTsb2YUeXUw%3D",
          "https://media.w3.org/2010/05/sintel/trailer.mp4",
          "https://view.2amok.com/2019711/d8b7410dd0cf2c8e9086af3492f664bb.mp4",
          "https://2023519tryoss.oss-cn-chengdu.aliyuncs.com/videoMin/%E6%8E%8C%E4%B8%8A%E6%98%8E%E7%8C%AA.mp4?Expires=1684512273&OSSAccessKeyId=TMP.3Kf8vw7gDyrnWau9UqYsE5PGFUWP3puj718nvctc5eSj3ndVbRmccCU1Gbc941NXnLEwG5tLN2WogpgJGea5tCtMrtJR4K&Signature=q1TpmiVDirhNhhFyVwqKMlCFUY4%3D"
        ]
        data.options.src=src_list[1]
      }
    let data = reactive({
    options:{
    width: "800px", //播放器高度
    height: "450px", //播放器高度
    color: "#409eff", //主题色
    title: "视频", //视频名称
    src: "https://2023519tryoss.oss-cn-chengdu.aliyuncs.com/videoMin/%E5%BA%94%E8%AE%A9%E6%8A%80%E6%9C%AF%E5%88%9B%E6%96%B0%E6%9C%8D%E5%8A%A1%E4%BA%8E%E4%BA%BA%EF%BC%8C%E8%80%8C%E9%9D%9E%E8%AE%A9%E4%BA%BA%E9%80%82%E5%BA%94%E6%8A%80%E6%9C%AF%20%E3%80%90%E8%A7%86%E9%A2%91%E8%AE%B2%E8%A7%A3%E3%80%91%EF%BC%88%E4%B8%AD%EF%BC%89.mp4?Expires=1684512224&OSSAccessKeyId=TMP.3Kf8vw7gDyrnWau9UqYsE5PGFUWP3puj718nvctc5eSj3ndVbRmccCU1Gbc941NXnLEwG5tLN2WogpgJGea5tCtMrtJR4K&Signature=FA2NyOBTUGyFASBlNTsb2YUeXUw%3D",//视频源
    muted: false, //静音
    webFullScreen: false,
    speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
    autoPlay: false, //自动播放
    loop: false, //循环播放
    mirror: false, //镜像画面
    ligthOff: true, //关灯模式
    volume: 0.3, //默认音量大小
    control: true, //是否显示控制
    controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
    ], //显示所有按钮,
    },
    poster:props.poster
    });

    return {
    ...toRefs(data),
      plusOne
    }
    }
    };

    </script>
<style>
.infinite-list {
  height: 450px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>

