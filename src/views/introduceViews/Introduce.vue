<template>
  <IntroduceHeader @toLoction="toLoction" style="position:fixed;z-index: 15"></IntroduceHeader><!--  子组件IntroduceHeader绑定父组件的方法toLoction-->
<!--  开头-->
  <div class="backgroundBase" style="background-color: #343a40;display: flex " id="idHead">
    <div style="width: 65%;height: 80%;margin-top:6.2%;">
      <div class="textHeadBase" style="padding-left: 20%;margin-top: 5%">
     多去看看<div style="color: #42b883">书</div>
      </div>
      <div class="textBase" style="margin: 5%">
        书籍是少年的食物，使老年人快乐，是繁荣的装饰和危难的避难所，慰人心灵。<br/>
        在家庭成为快乐的种子，在外也不致成为障碍物， 但在旅行之际，<br/>
        却是夜间的伴侣。 ——西塞罗
      </div>
      <div style="display: flex;margin-left: 7%"><img :src=svgBook style="width: 5%"><div style="margin-left: 2%;padding-top: 1.3%;font-size: 1.25rem;color:#007bff;">传习录</div><div class="textBase" style="color: #a6adb5!important;font-size: 1rem;">是王阳明的问答语录和论学书信集。是一部儒家简明而有代表性的哲学著作。</div></div>
      <div style="display: flex;margin-left: 7%"><img :src=svgBuddhaBead style="width: 5%"><div style="margin-left: 2%;padding: 1.3%;font-size: 1.25rem;color:#007bff;">坛经</div><div class="textBase" style="color: #a6adb5!important;font-size: 1rem;">佛教禅宗典籍,禅宗代表著作之一，简称《坛经》</div></div>
    </div >
    <div style="width: 35%;height: 80%;margin-top:6.2%;">
      <img :src=svgHead style="width: 40%;margin: 20%">
    </div>
  </div>
  <div :style=bgurl1></div>
<!--  起因-->
  <div class="backgroundBase" style="background-color: #eeeeee;" id="idReason">
    <h4 class="textHeadBase" style="font-size: 2.5rem;margin-bottom: .5rem;padding-top: 5%;padding-left:46%">起 因</h4>
    <div class="textBase" style="color:#212529;margin:auto;text-align: center">
      大学教育目标在于培养学生独立思考能力和独立人格。这不是通过基础课就可以解决的，那通过什么来实施呢？<br>
      我认为就是要读经典。 读经典的好处，首先能够形成对国家和民族的文化认同，<br>
      如果中国传统文化的经典都没有读过，何以谈到认同？<br>
      并非读经典就会照搬其中体现的价值观。<br>
      但在文化的传承中，我们实际上是在做不断的选择，来选择与新的时代相适合的价值观。<br>
    </div>
    <el-row class="mb-4" >
      <el-button type="primary" size='large' class="buttonBase" style="margin-left: 10%;" color="#42b883" @click="toLoction('idCourse')" plain>方 式</el-button>
      <el-button type="primary" size='large' class="buttonBase" plain color="#626aef" @click="toLoction('idFountion')">活 动</el-button>
      <el-button type="info" size='large' class="buttonBase" @click="toLoction('idAnalysis')" plain>场 所</el-button></el-row>
  </div>
  <div :style=bgurl2></div>

<!--  方式-->
  <div class="backgroundBase" style="background-color:#fff " id="idCourse">
    <h4 class="textHeadBase" style="font-size: 2.5rem;margin-bottom: .5rem;padding-top: 5%;padding-left:40%;color: #6c757d">阅读方式情况</h4>
      <div style="display:flex;">
        <DigitalReadingRatingEchart style="width: 30%;height: 300px;margin-left: 5%"></DigitalReadingRatingEchart>
        <DigitalReadingAgeRatingEchart style="width: 30%;height: 300px"></DigitalReadingAgeRatingEchart>
        <ComprehensivrReadingRatingEchart style="width: 30%;height: 300px"></ComprehensivrReadingRatingEchart>
    </div>
  </div>
  <div :style=bgurl3></div>
<!--  活动-->
  <div class="backgroundBase" style="background-color:#eee " id="idFountion">
    <h4 class="textHeadBase" style="font-size: 2.5rem;margin-bottom: .5rem;padding-top: 5%;padding-left:40%;color: #6c757d">阅读方式情况</h4>
    <div style="display:flex;">
      <PersonalReadingSatisfactionEchart style="width: 30%;height: 300px;margin-left: 5%"></PersonalReadingSatisfactionEchart>
      <ReadingParticipationRateEchart style="width: 30%;height: 300px"></ReadingParticipationRateEchart>
      <ReadingActivitySatisfactionEchart style="width: 30%;height: 300px"></ReadingActivitySatisfactionEchart>
    </div>
  </div>
<!--  场所-->
  <div :style=bgurl2></div>
  <div class="backgroundBase" style="background-color:#fff " id="idAnalysis">
    <h4 class="textHeadBase" style="font-size: 2.5rem;margin-bottom: .5rem;padding-top: 5%;padding-left:40%;color: #6c757d">阅读场所情况</h4>
    <div style="display:flex;">
      <ReadingPlaceSatisfactionEchart style="width: 40%;height: 300px;margin-left: 10%"></ReadingPlaceSatisfactionEchart>
      <ReadingSpaceUtilizationRateEchart style="width: 40%;height: 300px"></ReadingSpaceUtilizationRateEchart>
    </div>
  </div>
  <div :style=bgurl3></div>
  <div class="backgroundBase" style="background-color:#eee  " id="idOpinon">
    <h4 class="textHeadBase" style="font-size: 2.5rem;margin-bottom: .5rem;padding-top: 5%;padding-left:46%">看 法</h4>
    <div class="textBase" style="color:#212529;margin:auto;text-align: center">
      阅读方式指数，阅读活动指标，阅读场所数据三个方面，综合反映全民阅读水平与性质<br>
      其中最显著的特点是数字阅读的流行，<br>
      但阅读大都是电子书，缺乏经典的<br>
    </div>
  </div>
</template>

<script>
import IntroduceHeader from "@/components/headerComponent/IntroduceHeader";
import tryIottie from "@/components/lottieComponent/tryIottie.vue";
import DigitalReadingRatingEchart from "@/components/echartsComponent/DigitalReadingRatingEchart";
import DigitalReadingAgeRatingEchart from "@/components/echartsComponent/DigitalReadingAgeRatingEchart";
import ComprehensivrReadingRatingEchart from "@/components/echartsComponent/ComprehensivrReadingRatingEchart";
import ReadingParticipationRateEchart from "@/components/echartsComponent/ReadingParticipationRateEchart";
import PersonalReadingSatisfactionEchart from "@/components/echartsComponent/PersonalReadingSatisfactionEchart";
import ReadingActivitySatisfactionEchart from "@/components/echartsComponent/ReadingActivitySatisfactionEchart";
import ReadingPlaceSatisfactionEchart from "@/components/echartsComponent/ReadingPlaceSatisfactionEchart";
import ReadingSpaceUtilizationRateEchart from "@/components/echartsComponent/ReadingSpaceUtilizationRateEchart";
export default {
  name: "introduce",
  components:{
    ReadingParticipationRateEchart,
    ComprehensivrReadingRatingEchart,
    DigitalReadingAgeRatingEchart,
    DigitalReadingRatingEchart,
    IntroduceHeader,
    tryIottie,
    PersonalReadingSatisfactionEchart,
    ReadingActivitySatisfactionEchart,
    ReadingPlaceSatisfactionEchart,
    ReadingSpaceUtilizationRateEchart
  },
  data(){
    return {
      svgHead:require("@/assets/importPictures/svgHead.svg"),
      svgBuddhaBead:require("@/assets/importPictures/buddhaBead.svg"),
      svgBook:require("@/assets/importPictures/Book.svg"),
      bgurl1: {
        'background-color': '#eee',
        backgroundImage: "url(" + require("@/assets/importPictures/backGround1.svg") + ")",
        width: '100%',
        height:'200px'
      },
      bgurl2: {
        'background-color': '#fff',
        backgroundImage: "url(" + require("@/assets/importPictures/backGround2.svg") + ")",
        width: '100%',
        height:'200px'
      },
      bgurl3: {
        'background-color': '#eee',
        backgroundImage: "url(" + require("@/assets/importPictures/backGround3.svg") + ")",
        width: '100%',
        height:'200px'
      }
    }
  }, methods: {
    toLoction(idLocation) {
      document.getElementById(idLocation).scrollIntoView({ behavior: 'smooth' });

    }
  },
    mounted(){
  }
}
</script>

<style scoped>
.backgroundBase{
  width: 100%;
  height:420px;

}
.textHeadBase{
  font-size: calc(1.525rem + 3.3vw);
  line-height: 1;
  color: #7952b3;
  text-align: center!important;
  margin-bottom: 1rem!important;
  display: flex;
}
.textBase{
  color: #f8f9fa;
  text-shadow: 1px 1px 2px rgba(0,0,0,.5);
  font-size: 1.25rem;
  font-weight: 300;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

}
.buttonBase{
  width: 20%;
  height: 70px;
  margin: 5%;
  font-size: 1.3rem;
}
</style>