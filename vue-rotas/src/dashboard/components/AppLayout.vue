<template>
    <div>
        <AppToolbar v-model="drawer"/>

        <app-menu v-model="drawer"></app-menu>

        <v-container grid-list-md>
            <v-row>
                <v-col xs="12">
                    <slot/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import AppMenu from './AppMenu.vue'
import AppToolbar from './AppToolbar.vue'
export default {
    name:'AppLayout',
    components:{
        AppMenu,
        AppToolbar
    },
    data() {
        return {
            drawer:false
        }
    },
}
</script>