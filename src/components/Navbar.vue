<template>
    <nav>
        <v-toolbar dark flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <router-link :to="{name: 'home'}" class="navbar-brand" style="text-decoration: none;">
                    <span class="font-weight-light text-lowercase" style="color: grey">v</span>
                    <span>Movie</span>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
             
            <router-link :to="{name: 'movies-category', params: {category: 'now_playing'} }" activeClass="active" tag="button">
                <v-btn flat round color="grey" class="hidden-sm-and-down">
                    <span>Latest</span>
                </v-btn>
            </router-link>

            <router-link :to="{name: 'movies-category', params: {category: 'top_rated'} }" activeClass="active" tag="button">
                <v-btn flat round color="grey" class="hidden-sm-and-down">
                    <span>Top Rated</span>
                </v-btn>
            </router-link>

            <router-link :to="{name: 'movies-category', params: {category: 'upcoming'} }" activeClass="active" tag="button">
                <v-btn flat round color="grey" class="hidden-sm-and-down">
                    <span>Upcoming</span>
                </v-btn>
            </router-link>

            <router-link :to="{name: 'movies-category', params: {category: 'popular'} }" activeClass="active" tag="button">
                <v-btn flat round color="grey" class="hidden-sm-and-down">
                    <span>Popular</span>
                </v-btn>
            </router-link>
            
            <v-spacer></v-spacer>
             

            <v-btn flat round color="grey">
                <span>Sign In</span>
            </v-btn>

            <v-btn flat outline round small class="success" color="grey">
                <span>Sign Up</span>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="blue-grey darken-3">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <!-- <img src="/avatar-1.png" alt=""> -->
                    </v-avatar>
                </v-flex>
                    <p class="white--text subheading mt-1"><span class="font-weight-light text-lowercase" style="color: grey"><strong>v</strong></span>
                    <span style="color:#00838f"><b>Movie</b></span></p>
                <v-flex class="mt-4 mb-3">
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile router :to="{name: 'home'}">
                    <v-list-tile-action>
                        <v-icon class="white--text">home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">HOME</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile router :to="{name: 'movies-category', params: {category: 'now_playing'} }">
                    <v-list-tile-action>
                        <v-icon class="white--text">local_movies</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">LATEST MOVIES</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile router :to="{name: 'movies-category', params: {category: 'top_rated'} }">
                    <v-list-tile-action>
                        <v-icon class="white--text">local_movies</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">TOP RATED MOVIES</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile router :to="{name: 'movies-category', params: {category: 'upcoming'} }">
                    <v-list-tile-action>
                        <v-icon class="white--text">local_movies</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">UPCOMING MOVIES</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile router :to="{name: 'movies-category', params: {category: 'popular'} }">
                    <v-list-tile-action>
                        <v-icon class="white--text">local_movies</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">POPULAR MOVIES</v-list-tile-title>
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
