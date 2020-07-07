<!-- =========================================================================================
    File Name: 
    Description: Login Page
    ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 sm:m-0 m-4"  >
      <vx-card>
        
          <div class="vx-row no-gutter justify-center items-center">
            
            

            <div class="vx-col sm:w-full md:w-full lg:w-3/5 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">
                <div class="vx-card__title mb-4" id="logo">
                  <img src="@/assets/images/logo/logo.png" alt="login" class="mx-auto" />
                  <vs-divider>Iniciar Sesión</vs-divider>
                </div>
                <LoginDsoa></LoginDsoa>
                <div class="pie">Developed by grupodivisoft 2020</div>
              </div>
              
            </div>
          </div>
        
      </vx-card>
    </div>
  </div>
</template>


<script>
import LoginDsoa from "./login/LoginDsoa.vue";

export default {
  components: {
    LoginDsoa
  }
};
</script>

<style lang="scss">
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}
#logo img{
  width: 100%;
}

.pie{
  font-size: 12px;
  margin-top: 30px;
  text-align: center;
}




</style>
