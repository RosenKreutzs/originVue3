<template>
  <div >
    <h1>四种浮游生物的密度和数量</h1>
    <div id='KindNumber' style='width:100%; height:300px'></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as echarts from 'echarts';
import request from "@/utils/request";
onMounted(
    () => {
      init()
    }
)
export default {
  name: "KindNumberEchart",
  data(){
    KindFourData:[]
  },
  methods:{
    KindNumber(){
      request.get("/phytoplankton/selectAdsKindFourPhytoplankton").then(res=>{

        var chartDom = document.getElementById('KindNumber');
        var myChart = echarts.init(chartDom);
        var option;

        const femaleData = [];
        const femaleData0 = [];
        const maleDeta = [];
        const maleDeta0 = [];
        for (let i=0;i<res.data.length;i++){//res.data.length
          if(res.data[i].scientificName == "Foraminiferida "){
            femaleData.push([res.data[i].originalValue,res.data[i].phytoplanktonNumber])
          }
          if(res.data[i].scientificName =="这种spp。"){
            femaleData0.push([res.data[i].originalValue,res.data[i].phytoplanktonNumber])
          }
          if(res.data[i].scientificName =='放射虫类'){
            maleDeta.push([res.data[i].originalValue,res.data[i].phytoplanktonNumber])
          }
          if(res.data[i].scientificName =="Chaetoceros (phaeoceros) spp. "){
            maleDeta0.push([res.data[i].originalValue,res.data[i].phytoplanktonNumber])
          }
        }

        function calculateAverage(data, dim) {
          let total = 0;
          for (var i = 0; i < data.length; i++) {
            total += data[i][dim];
          }
          return (total /= data.length);
        }
        const scatterOption = (option = {
          xAxis: {
            scale: true
          },
          yAxis: {
            scale: true
          },
          series: [
            {
              type: 'scatter',
              id: 'female',
              dataGroupId: 'female',
              universalTransition: {
                enabled: true,
                delay: function (idx, count) {
                  return Math.random() * 400;
                }
              },
              data: femaleData
            },
            {
              type: 'scatter',
              id: 'female0',
              dataGroupId: 'female0',
              universalTransition: {
                enabled: true,
                delay: function (idx, count) {
                  return Math.random() * 400;
                }
              },
              data: femaleData0
            },
            {
              type: 'scatter',
              id: 'male',
              dataGroupId: 'male',
              universalTransition: {
                enabled: true,
                delay: function (idx, count) {
                  return Math.random() * 400;
                }
              },
              data: maleDeta
            },
            {
              type: 'scatter',
              id: 'male0',
              dataGroupId: 'male0',
              universalTransition: {
                enabled: true,
                delay: function (idx, count) {
                  return Math.random() * 400;
                }
              },
              data: maleDeta0
            }
          ]
        });
        const barOption = {
          xAxis: {
            type: 'category',
            data: ['Chaetoceros ','这种spp。','放射虫类','Foraminiferida ']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              id: 'total',
              data: [
                {
                  value: calculateAverage(maleDeta, 0),
                  groupId: 'male'
                },
                {
                  value: calculateAverage(maleDeta, 0),
                  groupId: 'male0'
                },
                {
                  value: calculateAverage(femaleData, 0),
                  groupId: 'female'
                },
                {
                  value: calculateAverage(femaleData, 0),
                  groupId: 'female0'
                }
              ],
              universalTransition: {
                enabled: true,
                seriesKey: ['female', 'male','female0', 'male0'],
                delay: function (idx, count) {
                  return Math.random() * 400;
                }
              }
            }
          ]
        };
        let currentOption = scatterOption;
        setInterval(function () {
          currentOption = currentOption === scatterOption ? barOption : scatterOption;
          myChart.setOption(currentOption, true);
        }, 2000);

        option && myChart.setOption(option);
      })


    },

  },
  mounted() {
    this.KindNumber()
  },

}
</script>

<style>

</style>