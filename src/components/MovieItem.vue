
<template>
    <v-flex xs6 sm6 md3 lg2 class="mb-3" id="movieCard" @click="openPopup(movie.id)">
        <v-card flat class="text-xs-center mt-3 ml-3 mr-3 elevation-15">
        <v-responsive>
            <v-img :src="`https://image.tmdb.org/t/p/w370_and_h556_bestv2${ movie.poster_path }`" ></v-img>
        </v-responsive>
        </v-card>
        <v-card-text small class="text-xs-center">
            <div class="grey--text">{{ movie.title }}</div>
        </v-card-text>
    </v-flex>
</template>

<script>
import MovieDetails from './MovieDetails.vue'

export default {
    props: ['movie'],
    components: {
        MovieDetails: MovieDetails
    },
    methods: {
        openPopup(movieId) {
            this.$store.dispatch('movieDetailsButtonPressed', movieId);
                
        }
    }
}
</script>

<style>
    #movieCard {
        transition: transform .2s;
    }

    #movieCard:hover {
        -ms-transform: scale(1.1); /* IE 9 */
        -webkit-transform: scale(1.1); /* Safari 3-8 */
        transform: scale(1.1); 
    }
</style>

