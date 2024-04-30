<template>
  <div >
    <h1>水污染和浮游生物年份变化图</h1>
    <div id='HomeYear' style='width:400px; height:300px'></div>
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
  name: "HomeEchart",
  data(){
      HomeYear:[]
      HomePhytoplanktonNumber : []
      HomeWaterStrained : []
  },
  methods:{
    HomeYear(){
      request.get("/phytoplankton/selectAdsYearPolluteKindnumber").then(res=>{
        this.HomeYear=[]
        this.HomeWaterStrained=[]
        this.HomePhytoplanktonNumber=[]
        for (let i=0;i<res.data.length;i++){//res.data.length
          this.HomeYear.push(res.data[i].year)
          this.HomeWaterStrained.push(res.data[i].waterStrained)
          this.HomePhytoplanktonNumber.push(res.data[i].phytoplanktonNumber)
        }

        var chartDom = document.getElementById('HomeYear');
        var myChart = echarts.init(chartDom);
        // 指定图表的配置项和数据
        var option = {
          grid: {
            bottom: 80
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              animation: false,
              label: {
                backgroundColor: '#505765'
              }
            }
          },
          legend: {
            data: ['水污染', '浮游生物数量'],
            left: 10
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 65,
              end: 85
            },
            {
              type: 'inside',
              realtime: true,
              start: 65,
              end: 85
            }
          ],
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLine: { onZero: false },
              data: this.HomeYear
            }
          ],
          yAxis: [
            {
              name: '水污染(m³/s)',
              type: 'value'
            },
            {
              name: '浮游生物数量(mm)',
              nameLocation: 'start',
              alignTicks: true,
              type: 'value',
              inverse: true
            }
          ],
          series: [
            {
              name: '水污染',
              type: 'line',
              areaStyle: {},
              lineStyle: {
                width: 1
              },
              emphasis: {
                focus: 'series'
              },
              markArea: {
                silent: true,
                itemStyle: {
                  opacity: 0.3
                },
                data: [//默认位置
                  [
                    {
                      xAxis: '1990'
                    },
                    {
                      xAxis: '1990'
                    }
                  ]
                ]
              },
              data: this.HomeWaterStrained
            },
            {
              name: '浮游生物数量',
              type: 'line',
              yAxisIndex: 1,
              areaStyle: {},
              lineStyle: {
                width: 1
              },
              emphasis: {
                focus: 'series'
              },
              markArea: {
                silent: true,
                itemStyle: {
                  opacity: 0.3
                },
                data: [//默认位置
                  [
                    {
                      xAxis: '1990'
                    },
                    {
                      xAxis: '1990'
                    }
                  ]
                ]
              },
              data: this.HomePhytoplanktonNumber
            }
          ]
        };

        option && myChart.setOption(option);

      })

    },

  },
  mounted() {
    this.HomeYear()
  },

}
</script>

<style>

</style>