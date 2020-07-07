<template lang="html">
  <div>
    <vs-table 
        search :data="getPubicaciones"
        pagination
        description
        :description-items="descriptionItems"
        description-title="Registros"
      description-connector="a"
      description-body="Páginas">
    >
      <template slot="header">
        <h5>
          Aqui puede ver todas sus publicaciones, crear, editar y eliminar sus contenidos libremente...
        </h5>
        
      </template>
      <template slot="thead">
        <vs-th sort-key="id">
          No.
        </vs-th>
        <vs-th sort-key="titulo">
          Título
        </vs-th>
        <vs-th sort-key="categoría">
          Categoría
        </vs-th>

        <vs-th sort-key="autor">
          Autor
        </vs-th>

        <vs-th >
          Adjuntar
        </vs-th>

        <vs-th >
          Editar
        </vs-th>

        <vs-th >
          Eliminar
        </vs-th>
 
         
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">

          <vs-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vs-td>
          
          <vs-td :data="data[indextr].titulo">
            {{data[indextr].titulo}}
          </vs-td>

          <vs-td :data="data[indextr].categoria">
            {{data[indextr].categoria}}
          </vs-td>

          <vs-td :data="data[indextr].autor">
            {{data[indextr].autor}}
          </vs-td>

          <vs-td>
            <vs-button  size="default" icon="note_add"></vs-button>
          </vs-td>
            
          <vs-td>
            <vs-button  size="default" color="success" icon="edit"></vs-button>
          </vs-td>

          <vs-td>
            <vs-button  size="default" color="danger" icon="remove_circle"></vs-button>
          </vs-td>
        </vs-tr>
      </template>


    </vs-table>
  </div>
</template>

<script>




export default {
   components: {
   
  },
  mounted() {
    //llama cargar datos de la base datos 

  },
  data:()=>(
    {
    descriptionItems: [10,10,10],

    
  }),
  computed: {
    getPubicaciones()
      {  return this.$store.state.publicaciones;
      }  
    
  },
  
  
}
</script>

<style >
   h2{
       padding-right: 20px;
   } 
</style>