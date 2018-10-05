<template>
    <v-app>
        <v-navigation-drawer
                :permanent="$vuetify.breakpoint.lgAndUp"
                :clipped="$vuetify.breakpoint.lgAndUp"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
        >
            <sidebar></sidebar>
        </v-navigation-drawer>
        <v-toolbar
                app
                :clipped-left="$vuetify.breakpoint.lgAndUp"
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn icon @click.stop="clipped = !clipped">
                <v-icon>web</v-icon>
            </v-btn>
            <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>web</v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>

        </v-toolbar>
        <v-content>
            <HelloWorld/>
        </v-content>

        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import Sidebar from './components/Sidebar'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Sidebar
        },
        data() {
            return {
                clipped: false,
                drawer: true,
                fixed: false,

                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Vuetify.js'
            }
        }
    }
</script>
