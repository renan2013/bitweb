<template>
    <div>
      <span>No nos responsabilizamos por el uso de estas herramientas que son de dominio público</span><br><br>
        <vs-row vs-justify="center">
 <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4">
    
    <vs-card>
      <div slot="header">
        <h3>
          {{titulo}}
        </h3>
      </div>

        <div slot="media">
          <img :src="src">
        </div>

      <div>
        <span>{{sintesis}}</span>
      </div>
      <div slot="footer">
        <vs-row vs-justify="flex-end">
          
          <vs-button color="primary" icon="turned_in_not">{{link}}</vs-button>
    
        </vs-row>
      </div>
    </vs-card>
  
  </vs-col>

  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4">
    
    <vs-card>
      <div slot="header">
        <h3>
          {{titulo}}
        </h3>
      </div>

        <div slot="media">
          <img :src="src">
        </div>

      <div>
        <span>{{sintesis}}</span>
      </div>
      <div slot="footer">
        <vs-row vs-justify="flex-end">
          
          <vs-button color="primary" icon="turned_in_not">{{link}}</vs-button>
    
        </vs-row>
      </div>
    </vs-card>
  
  </vs-col>

 <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4">
    
    <vs-card>
      <div slot="header">
        <h3>
          {{titulo}}
        </h3>
      </div>

        <div slot="media">
          <img :src="src">
        </div>

      <div>
        <span>{{sintesis}}</span>
      </div>
      <div slot="footer">
        <vs-row vs-justify="flex-end">
          
          <vs-button color="primary" icon="turned_in_not">{{link}}</vs-button>
    
        </vs-row>
      </div>
    </vs-card>
  
  </vs-col>
</vs-row>
    </div>
</template>

<script>
export default {
  data: function(){
    return{
        src:"https://anydesk.com/_static/img/illustrations/anydesk-guide-alias-b9dae1.png",
        titulo:"titulo de la publicacion",
        sintesis: "sintesis de la publicación",
        link:"Ir a: "
    }
    
  }

}
</script>

<style>
.vs-col{
  padding: 10px;
}
</style>