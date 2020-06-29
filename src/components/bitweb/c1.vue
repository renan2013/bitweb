<template lang="html">
  <div>
    <vs-table 
        search :data="users"
        pagination
        description
        :description-items="descriptionItems"
        description-title="Registros"
      description-connector="a"
      description-body="Páginas">
    >
      <template slot="header">
        <h5>
          Aqui puede ver todas sus publicaciones, crear, editar y eliminar sus contenidos.....
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
  data:()=>({
    descriptionItems: [10,10,10],
    users:[
      {
        "id": 1,
        "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 2,
        "titulo": "Técnico en Diseño Grafico Digital",
        "categoria": "Diseño",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 3,
        "titulo": "Sivisoft lanza su app GoNow",
        "categoria": "app",
        "fecha": "6/24/2020",
        "autor": "Katerine",
      },
      {
        "id": 4,
        "titulo": "Migración de sistemas a Oracle",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 5,
       "titulo": "Paginas web con PHP, Vue y MySQL",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 6,
       "titulo": "Obtenga su app y cree su propio negocio en linea",
        "categoria": "app",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 7,
        "titulo": "BitWeb el administrador inteligente del futuro",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 8,
        "titulo": "Illustrator, la mejor plataforma par la desarrollar tu creatividad",
        "categoria": "Diseño",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 9,
        "titulo": "InDesing te enseña como maquetar todo en uno",
        "categoria": "Diseño",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 10,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 11,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 12,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 13,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 14,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 15,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 16,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 17,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 18,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 19,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      },
      {
        "id": 20,
       "titulo": "Divisoft lanza su nueva plataforma con tecnologia VUE y NodeJS",
        "categoria": "Programación",
        "fecha": "6/24/2020",
        "autor": "hildegard.org",
      }
    ]
  })
}
</script>

<style >
   h2{
       padding-right: 20px;
   } 
</style>