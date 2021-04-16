<template>
    <v-card-text class="body-1">
        <v-toolbar flat dense dark color="accent">
            <v-toolbar-title>About</v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col cols="12">
                This tool was made in an afternoon in an effort to easily and quickly transfer data from one Firestore project to another. It has been made using the following technologies:
            </v-col>
        </v-row>
        <v-row dense v-for="item in technologies" :key="item.name">
            <v-col cols="12" md="2">
                <a :href="item.link" target="_blank">{{item.name}}</a>
            </v-col>
            <v-col cols="12" md="10">
                {{item.des}}
            </v-col>
        </v-row>
        <v-toolbar flat dense dark color="accent" class="mt-2 mb-2">
            <v-toolbar-title>License</v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col cols="12">
                Copyright 2021
            </v-col>
            <v-col cols="12">
                Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
            </v-col>
            <v-col cols="12">
                THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
export default {
    data(){
        return{
            technologies: [
                {
                    name: "Vue JS",
                    link: "https://vuejs.org/",
                    des : "A progressive Javascript front-end framework."
                },
                {
                    name: "Vuetify",
                    link: "https://vuetifyjs.com/en/",
                    des : "A Material Design library for Vue JS."
                },
                {
                    name: "Firestore",
                    link: "https://firebase.google.com/docs/firestore",
                    des : "A cloud-based NoSQL database."
                },
                {
                    name: "Github Repository",
                    link: "https://github.com/markrmessmore/firestore-transfer",
                    des : "Go here for information and a live demo."
                },
            ]
        }
    },
    computed: {
        
    }
}
</script>