<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
=========================================================================================
<!-- =========================================================================================
    File Name: Echarts.vue
    Description: Echarts (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-echarts-demo">
        

        <div class="vx-row match-height">
            <div class="vx-col w-full" id="dashboard">
               <img src="\img\bienvenida3.png
               " width="350px">
              <br><br>
               <img src="\img\logo_divisoft_azul.png
               " width="180px">

            </div>
           
        </div>
    </div>
</template>

<script>
import EchartsBarChart from '@/views/charts-and-maps/charts/echarts/EchartsBarChart.vue'


export default {
  components: {
    EchartsBarChart,
 
  }
}
</script>

<style>
#dashboard{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  /* border: solid 1px red; */
  display:block;
}
</style>
