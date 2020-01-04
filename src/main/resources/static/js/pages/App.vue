<template>
    <v-app>
        <v-app-bar v-if="profile">
            <v-toolbar-title>Sarafan</v-toolbar-title>
            <v-spacer></v-spacer>
            <span>{{profile.name}}</span>
            <v-btn href="/logout" icon>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container >Необходимо авторизоваться через
                <a href="/login">Google</a>
            </v-container>
            <v-container v-if="profile">
                <messages-list :messages="messages" />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import MessagesList from 'components/messages/MessageList.vue'
    import {addHandler} from "../utils/ws";
    import { mdiExitToApp } from '@mdi/js'

    export default {
        components: {
            MessagesList
        },
        data() {
            return {
                messages: frontendData.messages,
                profile: frontendData.profile,
                logout: mdiExitToApp
            }
        },
        created() {
            addHandler(data => {
                if (data.objectType === 'MESSAGE') {
                    const index = this.messages.findIndex(item => item.id === data.body.id)
                    switch (data.eventType) {
                        case 'CREATE':
                        case 'UPDATE':
                            if (index > -1) {
                                this.messages.splice(index, 1, data.body)
                            } else {
                                this.messages.push(data.body)
                            }
                            break
                        case 'REMOVE':
                            this.messages.splice(index, 1)
                            break
                        default:
                            console.error('Looks like event type is unknown "${data.eventType}"')
                    }
                } else {
                    console.error('Looks like object type type is unknown "${data.objectType}"')
                }
            })
        }
    }
</script>

<style>
</style>