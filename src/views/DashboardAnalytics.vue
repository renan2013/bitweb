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
        <p class="mb-4">Record de publicaciones en el presente año.</p>

        <div class="vx-row match-height">
            <div class="vx-col w-full">
                <echarts-bar-chart></echarts-bar-chart>
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
