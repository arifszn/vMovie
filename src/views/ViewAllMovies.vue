<template>
    <div class="viewAllMovies">
    <v-container class="my-1 animated zoomIn">
      <v-layout row wrap class="grey lighten-5">
        <v-card-text small class="text-xs">
            <div class="grey--text">
              <h2 class="left">{{ movieInfo.categoryName }}</h2> 
            </div> 
        </v-card-text>
        <Movie-Item v-for="movies in allMovies" :key="movies.id" :movie="movies"></Movie-Item>
      
      </v-layout>
    </v-container>
    <div class="text-xs-center" >
        <v-btn @click="loadPreviousPage" v-if="movieInfo.page != 1">
            Previous Page
        </v-btn>
      
        <v-btn @click="loadNextPage">
            Next Page
        </v-btn>
      </div>
    <Movie-Details v-if="this.$store.getters.getMovieDetailsButtonStatus"></Movie-Details>
  </div>
</template>

<script>
import secret from '../secret.js'
import MovieItem from '../components/MovieItem.vue'
import MovieDetails from '../components/MovieDetails.vue'

  export default {
    data() {
      return {
        allMovies: [],
        movieInfo: {
          categoryName: null,
          page: 1
        }
      }
    },
    components: {
      MovieItem: MovieItem,
      MovieDetails: MovieDetails

    },
    methods: {
      loadNextPage() {
        this.movieInfo.page++;
        this.$http.get(`https://api.themoviedb.org/3/movie/${ this.$route.params.category }?api_key=${secret.tmdbApiKey}&language=en-US&page=${ this.movieInfo.page }`).then(response => {
          this.allMovies = response.body.results;
          
        }, response => {
          console.log(response);
        });
      },
      loadPreviousPage() {
        this.movieInfo.page--;
        this.$http.get(`https://api.themoviedb.org/3/movie/${ this.$route.params.category }?api_key=${secret.tmdbApiKey}&language=en-US&page=${ this.movieInfo.page }`).then(response => {
          this.allMovies = response.body.results;
          
        }, response => {
          console.log(response);
        });
      }
    },
    watch: {
      '$route' (to, from) {
        // react to route changes...

        // GET all movies by category
        this.$http.get(`https://api.themoviedb.org/3/movie/${ this.$route.params.category }?api_key=${secret.tmdbApiKey}&language=en-US&page=1`).then(response => {
          this.allMovies = response.body.results;
          
        }, response => {
          console.log(response);
        });
        
        if(this.$route.params.category == "now_playing") {
          this.movieInfo.categoryName = "Latest Movies";
        } else if(this.$route.params.category == "top_rated") {
          this.movieInfo.categoryName = "Top Rated Movies";
        } else if(this.$route.params.category == "upcoming") {
          this.movieInfo.categoryName = "Upcoming Movies";
        } else if(this.$route.params.category == "popular") {
          this.movieInfo.categoryName = "Popular Movies";
        }
      }
    },
    created() {
        // GET all movies by category
        this.$http.get(`https://api.themoviedb.org/3/movie/${ this.$route.params.category }?api_key=${secret.tmdbApiKey}&language=en-US&page=1`).then(response => {
          this.allMovies = response.body.results;
          
        }, response => {
          console.log(response);
        });

        if(this.$route.params.category == "now_playing") {
          this.movieInfo.categoryName = "Latest Movies";
        } else if(this.$route.params.category == "top_rated") {
          this.movieInfo.categoryName = "Top Rated Movies";
        } else if(this.$route.params.category == "upcoming") {
          this.movieInfo.categoryName = "Upcoming Movies";
        } else if(this.$route.params.category == "popular") {
          this.movieInfo.categoryName = "Popular Movies";
        }
    }

  }
</script>
