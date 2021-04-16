<template>
    <v-card-text>
       <v-toolbar flat dense dark color="accent">
            <v-toolbar-title>
                <v-icon left>mdi-file-document-multiple</v-icon>
                App Documentation
            </v-toolbar-title>
        </v-toolbar>
        <v-row class="pa-1" dense>
            <v-col cols="12" class="title text--secondary">
                About
            </v-col>
            <v-divider inset></v-divider>
            <v-col cols="12" class="body-1">
                This tool was created to assist me with an issue: at times I was having to move data from one <a href="https://firebase.google.com/docs/firestore" target="_blank">Firestore</a>  database to another. Google (being a company in business to make money) wanted to charge me for that capability and as a hobby programmer I said...nah. No shade to them; they spend a lot of time, funds and resources to provide great products. But this was something I thought I could handle on my own.
                <br>
                <br>
                This tool is provided with the <a href="https://opensource.org/licenses/ISC" target="_blank">ISC</a> license and is provided <b>AS IS</b> with no warranties. I would <b>strongly recommend</b> backing up, testing or verifying information upon use. That said, I hope this tool helps simplify your life.
            </v-col>
        </v-row>
        <v-row class="pa-1" dense>
            <v-col cols="12" class="title text--secondary">
                To Do:
            </v-col>
            <v-divider inset></v-divider>
            <v-col cols="12" class="body-1">
                <ul>
                    <li>Dialog messages to report results when fetching data from the source database (or report errors)</li>
                    <li>Fix the issue where the back button wants to causes issues by trying to initialize an already-initialized firebase app.</li>
                </ul>
            </v-col>
        </v-row>
        <v-row class="pa-1" dense>
            <v-col cols="12" class="title text--secondary">
                Usage
            </v-col>
            <v-divider inset></v-divider>
            <v-col cols="12" class="body-1">
                <ul>
                    <li>
                        Access your Firebase project via the <a href="https://console.firebase.google.com/">Firebase console</a>. <span class="font-italic subtitle-1">If you do not have a Firebase project, why are you even here?</span>
                    </li>
                    <li>
                        In case you do not yet, make sure you have config information from your Firestore project. To find this information:
                        <br>
                        <br>
                        <ul>
                            <li>
                                Click on the <v-icon>mdi-cog</v-icon> beside <b>Project Overview</b>
                                <v-img :src="require('@/assets/Docs1.jpg')" height="170" width="425"></v-img>
                                <br>
                            </li>
                            <li>
                                Under the <b>Your Apps</b> section you will find the configuration settings. If you do not see this section you will need to create an App, otherwise no appId is visible. You can create an app in a couple minutes by using the <v-btn color="primary" depressed small>Add app</v-btn>. I would recommend creating a <b>Web App</b> for this purpose.
                                <br>
                                <br>
                            </li>
                            <li>
                                You will find the information in the grey box. This information will be needed for both the <b>source</b> and <b>destination</b> databases.
                                <v-img :src="require('@/assets/Docs2.jpg')" height="170" width="450"></v-img>
                                <br>
                            </li>
                            <li>
                                The last piece of information you will need will be <b>different</b> between your source and destination. As of this writing you cannot list all collections in a database. Therefore transfer must happen one collection at a time. On the left navigation pane click on <b>Firestore</b> then identify what collection you wish to back up.
                                <v-img :src="require('@/assets/Docs3.jpg')" height="166" width="339"></v-img>
                                <br>
                                <br>
                            </li>
                            <li>
                                For the <b>destination</b> you will need to know if there is a previously made collection or document where you want this data to reside. Look at the corresponding destination Firebase implementation to find these identifiers.
                                <br>
                                <br>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Once you have your information for both your <b>source</b> and <b>destination</b> databases, enter the requested source information on the <b>Source</b> page and select <v-btn depressed outlined small color="primary">
                            <v-icon left small>mdi-check-box-outline</v-icon>SUBMIT
                        </v-btn>
                        <br>
                        <br>
                    </li>
                    <li>
                       Next, add the information for the destination database on the <b>Destination</b> page and select <v-btn depressed outlined small color="primary">
                            <v-icon left small>mdi-check-box-outline</v-icon>SUBMIT
                        </v-btn>
                        <br>
                        <br>
                    </li>
                    <li>
                        Data should be visible on the <b>Results</b> page.
                    </li>
                </ul>
            </v-col>
        </v-row>
    </v-card-text>
</template>