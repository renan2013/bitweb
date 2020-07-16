<!-- =========================================================================================
  File Name: App.vue
  Description: Main vue file - APP
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
<div id="app"  >
CHAT  {{getTokenChat}}
    <router-view @setAppClasses="setAppClasses" />
</div>
</template>

<script>

 import { mapActions } from "vuex";
import themeConfig from '@/../themeConfig.js'
import jwt from '@/http/requests/auth/jwt/index.js'

import {
    mapState
} from "vuex";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

export default {
    data() {
        return {
            vueAppClasses: [],  
             socket : io("http://localhost:5000", {
                        query: { token: this.$store.state.dsoaLogin.token  }
    }),
    }
    },
    computed: { 
          getProfile() {
              return this.$store.state.dsoaLogin.profile[0];
          }, 
          getTokenChat() {
                  return this.$store.state.dsoaLogin.tokenStore; 
         }
     },

    watch: {
        '$store.state.theme'(val) 
        {
            this.toggleClassInBody(val)
        },
        '$vs.rtl'(val) {
            document.documentElement.setAttribute('dir', val ? 'rtl' : 'ltr')
        },
         "getTokenChat": function ()  
        {

         const roomId ="5ef0fe0d315da728a8426fb9";
         this.$socket.emit("rooms/join", roomId);
         console.log("cambio TOKEN");
               
        } 

    },
    methods: {
        ...mapActions({
        login: "dsoaLogin/login",
        loginchat:"dsoaLogin/acLoginChat"
        
      }),
        
        
        toggleClassInBody(className) {
            if (className === 'dark') {
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
                document.body.classList.add('theme-dark')
            } else if (className === 'semi-dark') {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
                document.body.classList.add('theme-semi-dark')
            } else {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
            }
        },
        setAppClasses(classesStr) {
            this.vueAppClasses.push(classesStr)
        },
        handleWindowResize() {
            this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

            // Set --vh property
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
        },
        handleScroll() {
            this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
        },

         traerLocalStorage() 
        {
            //local storage 
              let profile=divilib.traerLocalStorage();  
             if ( profile==0)
                this.$router.push('/pages/login').catch(() => {})
             else   
                this.$store.commit("dsoaLogin/MUTSETPROFILE", profile);   

             let token=divilib.traerLocalStorageTOKEN(); 
             console.log("TOKEN RECUPERADO ",token) 
             console.log("TOKEN STORE ",this.getTokenChat)

             

           /* token = [{
        tokenAPIBOOT: "0",
        tokenCHAT: "0",
        tokenCMS: "0",
        tokenCLOUD: "0",
    }];*/
             if (token[0].tokenCHAT=="0"   )
              {  
                //alert("llama a loguearse a CHAT x App"); 

                let peticion= {
                    password: profile.Username,
                    username: profile.Username,
                    Credencial:profile.Credencial  } 
                this.loginchat(peticion);
                }
             else   
             {  
                this.$store.commit("dsoaLogin/MUTSETTOKEN", token);
               
               }

             // reperar STORE TOKEN 
        },
 
    }, 
    mounted() {
 
        this.toggleClassInBody(themeConfig.theme)
        this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

        this.traerLocalStorage()

        const vh = window.innerHeight * 0.01
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`)

    },

    async created() {

        // jwt
        //jwt.init()
         
        const dir = this.$vs.rtl ? 'rtl' : 'ltr'
        document.documentElement.setAttribute('dir', dir)

        window.addEventListener('resize', this.handleWindowResize)
        window.addEventListener('scroll', this.handleScroll)

        // Auth0
        //try       { await this.$auth.renewTokens() } catch (e) { console.error(e) }

    },
    destroyed() {
        window.removeEventListener('resize', this.handleWindowResize)
        window.removeEventListener('scroll', this.handleScroll)

    }
}
</script>


