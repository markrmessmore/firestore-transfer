<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card outlined>
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>
                    Firestore Settings
                </v-toolbar-title>
            </v-toolbar>
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
  computed: {
    
  }
}
</script>
