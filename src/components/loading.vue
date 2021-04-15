<template>  
    <v-dialog
        v-model="getLoading.status"
        height="250"
        width="250"
        persistant
    >
        <v-card color="primary"
            dark
            width="250"
            height="250"
            class="d-flex align-content-center flex-wrap pa-5 justify-center"
        >
           <v-row>
                <v-col cols="12" class="text-center">
                    <v-progress-linear
                        indeterminate
                        color="white"
                    ></v-progress-linear>
                </v-col>
                <v-col cols="12" class="text-center title">
                    {{ getLoading.msg }}
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    computed: {
        getLoading(){
            return this.$store.getters.getLoading
        }
    }
}
</script>