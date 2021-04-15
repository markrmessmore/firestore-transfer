<template>
    <v-card-text>
        <v-toolbar flat dense dark color="secondary">
            <v-toolbar-title>Destination</v-toolbar-title>
        </v-toolbar>
        <v-row class="pa-3" no-gutters>
            <v-col cols="12">
                <v-text-field
                    v-model="destination.apiKey"
                    label="Destination Project API Key"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" >
                <v-text-field
                    v-model="destination.projectId"
                    label="Destination Project ID"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" >
                <v-text-field
                    v-model="destination.appId"
                    label="Destination Project App ID"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field
                    v-model="destination.path"
                    label="Destination Path: Collection"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" offset-md="1">
                <v-text-field
                    v-model="destination.doc"
                    label="Destination Path: Doc (optional)"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" offset-md="1">
                <v-text-field
                    v-model="destination.subCollection"
                    label="Destination Path: Sub-Collection (optional)"
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="pa-3">
            <v-col cols="12" md="6" class="text-center">
                <v-btn outlined color="red darken-3">
                    <v-icon left small>mdi-close-box-outline</v-icon>
                    Clear
                </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
                <v-btn outlined color="primary" :disabled="!ready" @click="submit()">
                    <v-icon left small>mdi-check-box-outline</v-icon>
                    Submit
                </v-btn>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
export default {
    data(){
        return {
            destination: {
                apiKey          : "AIzaSyD7k8-DNfongcvNdrEUAcdfBwyRdbftXkc",
                appId           : "1:493424609908:web:1fa5678b57a53bbee81f21",
                doc             : "",
                path            : "",
                projectId       : "mydotahub",
                subCollection   : ""
            },
        }
    },
    methods: {
        clear(){

        },
        submit(){
            this.$store.dispatch('setData', this.destination)
        }
    },
    computed: {
        ready(){
            if (this.destination.apiKey != "" && this.destination.projectId != "" && this.destination.appId != "" && this.destination.path !== ''){
                //IF THERE IS A SUB-COLLECTION THERE *HAS* TO BE A DOCUMENT
                if (this.destination.doc !== ""){
                    return true
                }
                else {
                    if (this.destination.subCollection !== ""){
                        return false
                    }
                }
            }
            else {
                return false
            }
        }
    }
}
</script>