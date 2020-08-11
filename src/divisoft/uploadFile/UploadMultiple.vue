<!-- =========================================================================================
    File Name: UploadMultiple.vue
    Description: Uploading multiple files at once
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Multiple" code-toggler>
        
        <p>You can upload multiple files by adding the <code>multiple</code> property within the component</p>


        <div class="mt-5">
            <vs-upload multiple text="Upload Multiple" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
        </div>

        <vs-td>
                        <vs-button size="default" color="danger" icon="remove_circle"   @click="BorraRegistro(tr)" ></vs-button>
        </vs-td>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-upload multiple text=&quot;Upload Multiple&quot; action=&quot;https://jsonplaceholder.typicode.com/posts/&quot; @on-success=&quot;successUpload&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods:{
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    methods: {
        successUpload() {
            this.$vs.notify({ color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur' })
        },
          BorraRegistro: function(dinamicKey) {
            let usuario = this.getProfile.Username;
            if (!usuario) 
               usuario = this.getProfile[0].Username;

            let credencial = this.getProfile.Credencial;
            if (!credencial) credencial = this.getProfile[0].Credencial;
 
                //HEADER
             if (dinamicKey.id == 0) {
                     alert("datos incorrectos");
                    return;
             }
                  

                var header = {
                    MODO: "D",
                    OBJECTID: "8107C",
                    CREDENCIAL: credencial,
                    USERNAME: usuario,
                    REGISTROSXPAGINA: "1",
                    PAGINA: "1"
                };
                this.headertxt = divilib.GetHeaderString(header);
                // agrego las filas 
                let parametros = [];
                 
                    let parametro1 = {
                        NOMBRE: "",
                        OPERADOR: "=",
                        VALOR1: "",
                        VALOR2: "",
                        CDATA: "0"
                    };

 
                    parametro1 = {
                        NOMBRE: "num_publicacion",
                        OPERADOR: "=",
                        VALOR1: dinamicKey.id,
                        VALOR2: "",
                        CDATA: "0"
                    };
                    parametros.push(parametro1);
                    this.paramtxt = divilib.paramArraytoStrintg(parametros);
                     this.filastxt="";
                // cargo la peticion texto

                var petTxt = {
                    header: this.headertxt,
                    parametros: this.paramtxt,
                    filas: this.filastxt
                };

                this.$store.commit("MUTSETURL", "O"); //indUrl
                this.$store.commit("MUTSETPETICIONTXT", petTxt);

                var pedido = {
                    dml: "D",
                    Credencial: this.getProfile.Credencial,
                    ObjectId: "8107C",
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "3", // CRUD
                    origenUrl: this.origenUrl
                };

                //cambia a acDsoaPrueba // acDsoa
                 if (dinamicKey.id>0)
                 { 
                    this.$store.dispatch("acDsoaPHP2", pedido); 
                    this.$parent.activaEdit = false;
                 }
        }
    }
}
</script>