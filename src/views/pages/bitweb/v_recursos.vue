<template>
    <div>
      <span>No nos responsabilizamos por el uso de estas herramientas que son de dominio público</span><br><br>
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4" v-for="item in recursos">
    
              <vs-card >
                <div slot="header">
                  <h3>
                    {{item.titulo}}
                  </h3>
                </div>

                  <div slot="media">
                    <img :src="item.src">
                  </div>

                <div>
                  <span>{{item.sintesis}}</span>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    
                   <a :href="item.link"> <vs-button color="primary" icon="turned_in_not">Ir al sitio</vs-button></a>
              
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
      recursos:[
        {
        id:1,
        src:"https://anydesk.com/_static/img/illustrations/anydesk-guide-alias-b9dae1.png",
        titulo:"AnyDesk",
        sintesis: "Conéctese a un ordenador de forma remota desde el otro extremo de la oficina o desde cualquier parte del mundo. Gracias a AnyDesk, contará con conexiones seguras y fiables de escritorio remoto para profesionales informáticos y usuarios en movimiento",
        link:"https://anydesk.com/es"
        },
        {
        id:2,
        src:"https://www.freepik.com/blog/app/uploads/2019/08/blog-EN@2x-100.jpg",
        titulo:"Freepik",
        sintesis: "Millones de recursos gráficos gratis ✓ Vectores ✓ Fotos de stock ✓ PSD ✓ Iconos ✓ Todo lo que necesitas para tus proyectos creativos.",
        link:"https://www.freepik.es/"
        },
        {
        id:3,
        src:"https://img.utdstc.com/screen/1/teamviewer-005.jpg:800",
        titulo:"TeamViewer",
        sintesis: "Maximice la productividad de la fuerza laboral remota con Teamviewer Remote Access y Remote Support. Permita que los equipos dispersos accedan a los dispositivos que necesitan, en el momento en que los necesiten, sin necesidad de VPN.",
        link:"https://www.teamviewer.com/en-us/"
        }
      
      
      ]
        
    }
    
  }

}
</script>

<style>
.vs-col{
  padding: 10px;
}
</style>