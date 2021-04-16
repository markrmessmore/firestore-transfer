<template>
    <v-card-text>
        <v-toolbar flat dense dark color="secondary">
            <v-toolbar-title>
                <v-icon left>mdi-format-list-bulleted</v-icon>
                Results
            </v-toolbar-title>
        </v-toolbar>
        <v-row class="pa-3">
            <ul>
                <li v-for="log in getLogs" :key="log" class="body-1">{{log}}</li>
            </ul>
        </v-row>
    </v-card-text>
</template>

<script>
export default {
    computed: {
        getLogs(){
            return this.$store.getters.getLogs
        }
    }
}
</script>