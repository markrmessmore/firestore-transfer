<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card outlined>
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>
                  <v-icon>mdi-database</v-icon>
                  Firestore Data Transfer
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn outlined small class="" :to="getBtnInfo.route">
                  <v-icon left small>{{getBtnInfo.icon}}</v-icon>
                  {{getBtnInfo.label}}
                </v-btn>
            </v-toolbar>
            <v-row no-gutters align="center">
              <v-col cols="6" class="text-left">
                <v-btn outlined color="primary" small @click="reset()" class="ml-4 mt-2" v-if="getPath">
                  <v-icon left small>mdi-refresh</v-icon>
                  Start Over
                </v-btn>
              </v-col>
              <v-col cols="6" class="text-right body-2 font-italic pr-4">
                *Required Field
              </v-col>
            </v-row>
            <router-view></router-view>
            <loading></loading>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import loading from '@/components/loading.vue'
export default {
  components: {
    loading
  },
  
  methods: {
    reset(){
      location.assign('/')
    }
  },
  computed: {
    getBtnInfo(){
      let data  = {
        icon  : '',
        label : '',
        route : ''
      }
      if (this.$route.name == 'About'){
        data.icon   = 'mdi-home'
        data.label  = 'Home'
        data.route  = '/'
      }
      else {
        data.icon   = 'mdi-information-outline'
        data.label  = 'About'
        data.route  = '/About'
      }
      return data
    },
    getPath(){
      if (this.$route.name == 'Home'){
        return false
      }
      else {
        return true
      }
    }
  }
}
</script>
