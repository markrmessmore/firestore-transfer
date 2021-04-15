<template>
    <v-card-text>
        <v-toolbar flat dense dark color="secondary">
            <v-toolbar-title>Source</v-toolbar-title>
        </v-toolbar>
        <v-row class="pa-3" no-gutters>
            <v-col cols="12">
                <v-text-field
                    v-model="source.apiKey"
                    label="Source Project API Key"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" >
                <v-text-field
                    v-model="source.projectId"
                    label="Source Project ID"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" >
                <v-text-field
                    v-model="source.appId"
                    label="Source Project App ID"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" >
                <v-text-field
                    v-model="source.collection"
                    label="Collection"
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
            source: {
                apiKey          : "AIzaSyBnPULgGsiMZHmce8AVeaQyhnYVNibagtc",
                appId           : "1:262730644393:web:d7ffc602bc85668ba4a2b8",
                collection      : "discordUsers",
                projectId       : "wlddiscord"
            }
        }
    },
    methods: {
        clear(){

        },
        submit(){
            this.$store.dispatch('getData', this.source)
        }
    },
    computed: {
        ready(){
            if (this.source.apiKey != "" && this.source.projectId != "" && this.source.appId != "" && this.source.collection){
                return true
            }
            else {
                return false
            }
        }
    }
}
</script>