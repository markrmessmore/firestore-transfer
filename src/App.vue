<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="10" offset-md="1">
            <v-card outlined>
              <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>
                    <v-icon>mdi-database</v-icon>
                    Firestore Data Transfer
                  </v-toolbar-title>
              </v-toolbar>
              <v-row no-gutters align="center">
                <v-col cols="6" class="text-left">
                  <v-btn outlined color="primary" small @click="reset()" class="ml-4 mt-2 mb-2" :disabled="!getPath">
                    <v-icon left small>mdi-refresh</v-icon>
                    Start Over
                  </v-btn>
                </v-col>
                <v-col cols="6" class="text-right body-2 font-italic pr-4" v-if="activeTab == 1">
                  *Required Field
                </v-col>
              </v-row>
              <v-tabs grow dark background-color="secondary" v-model="activeTab">
                <v-tabs-slider color="accent"></v-tabs-slider>
                <v-tab>
                  <v-icon left small>mdi-file-document-multiple</v-icon>
                  Documentation
                </v-tab>
                <v-tab>
                  <v-icon left small>mdi-file-code</v-icon>
                  Live Demo
                </v-tab>
                <v-tab>
                  <v-icon left small>mdi-information-outline</v-icon>
                  About
                </v-tab>
                <v-tab-item>
                  <documentation></documentation>
                </v-tab-item>
                <v-tab-item>
                  <router-view></router-view>
                </v-tab-item>
                <v-tab-item>
                  <about></about>
                </v-tab-item>
              </v-tabs>
              <loading></loading>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import  about           from  '@/components/about.vue'
import  documentation   from  '@/components/documentation.vue'
import  loading         from  '@/components/loading.vue'
export default {
  components: {
    about, documentation, loading
  },
  data(){
    return{
      activeTab: null
    }
  },
  methods: {
    reset(){
      location.assign('/')
    }
  },
  computed: {
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
