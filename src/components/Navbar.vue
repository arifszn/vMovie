<template>
    <nav>
        <v-toolbar dark flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light text-lowercase">v</span>
                <span>Dairy</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>


            <!-- <v-btn flat round color="grey" class="hidden-sm-and-down">
                <span>Now Playing</span>
            </v-btn>
            <v-btn flat round color="grey" class="hidden-sm-and-down">
                <span>Upcoming</span>
            </v-btn>
            <v-btn flat round color="grey" class="hidden-sm-and-down">
                <span>Popular</span>
            </v-btn>
            <v-btn flat round color="grey" class="hidden-sm-and-down">
                <span>Top Rated</span>
            </v-btn>
            <v-spacer></v-spacer> -->
             

            <v-btn flat round color="grey">
                <span>Sign In</span>
            </v-btn>

            <v-btn flat outline round small class="success" color="grey">
                <span>Sign Up</span>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                </v-flex>
                    <p class="white--text subheading mt-1">John Doe</p>
                <v-flex class="mt-4 mb-3">
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" >
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/'},
                {icon: 'folder', text: 'My Projects', route: '/projects'},
                {icon: 'person', text: 'Team', route: '/team'}
            ],
        }
    },
    components: {
        
    }
}
</script>
