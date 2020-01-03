
<template>
    <div>
        <v-card class="my-2">
            <v-card-title primary-title>
                <i>({{ message.id }})</i> {{ message.text }}
            </v-card-title>
            <v-card-actions>
                <v-btn small rounded text="" click="edit">Edit</v-btn>
                <v-btn small icon @click="del">
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: ['message', 'editMessage', 'deleteMessage', 'messages'],
        methods: {
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.deleteMessage(this.message)
            }
        }
    }
</script>

<style>
</style>