<template>
    <v-snackbar
      top right
      color="grey darken-3"
      v-model="getToast.status"
      timeout="6000"
      multi-line
    >
      <v-row class="justify-center">
        {{getToast.msg}}
      </v-row>
    </v-snackbar>
</template>

<script>
export default {
    computed: {
        getToast(){
            return this.$store.getters.getToast
        }
  }
}
</script>
