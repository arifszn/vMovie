<template>
 <div class="home">
    <v-container class="my-1 animated zoomIn">
      <v-layout row wrap class="grey lighten-5">
        <v-card-text small class="text-xs">
            <div class="grey--text">
              <h2 class="left">Latest Movies</h2>
              <router-link :to="{name: 'movies-category', params: {category: 'now_playing'} }" activeClass="active" tag="p">
                <p class="right" style="cursor: pointer;">View All</p>
              </router-link>
              
            </div> 
        </v-card-text>
        <Movie-Item v-for="latestMovie in latestMovies" :key="latestMovie.id" :movie="latestMovie"></Movie-Item>
      </v-layout>
    </v-container>

    <v-container class="my-1 animated zoomIn">
      <v-layout row wrap class="grey lighten-5">
        <v-card-text small class="text-xs">
            <div class="grey--text">
              <h2 class="left">Top Rated Movies</h2> 
              <router-link :to="{name: 'movies-category', params: {category: 'top_rated'} }" activeClass="active" tag="p">
                <p class="right" style="cursor: pointer;">View All</p>
              </router-link>
            </div> 
        </v-card-text>
        <Movie-Item v-for="topRatedMovie in topRatedMovies" :key="topRatedMovie.id" :movie="topRatedMovie"></Movie-Item>
      </v-layout>
    </v-container>

    <v-container class="my-1 animated zoomIn">
      <v-layout row wrap class="grey lighten-5">
        <v-card-text small class="text-xs">
            <div class="grey--text">
              <h2 class="left">Upcoming Movies</h2> 
              <router-link :to="{name: 'movies-category', params: {category: 'upcoming'} }" activeClass="active" tag="p">
                <p class="right" style="cursor: pointer;">View All</p>
              </router-link>
            </div> 
        </v-card-text>
        <Movie-Item v-for="upcomingMovie in upcomingMovies" :key="upcomingMovie.id" :movie="upcomingMovie"></Movie-Item>
      </v-layout>
    </v-container>

    <v-container class="my-1 animated zoomIn">
      <v-layout row wrap class="grey lighten-5">
        <v-card-text small class="text-xs">
            <div class="grey--text">
              <h2 class="left">Popular Movies</h2> 
              <router-link :to="{name: 'movies-category', params: {category: 'popular'} }" activeClass="active" tag="p">
                <p class="right" style="cursor: pointer;">View All</p>
              </router-link>
            </div> 
        </v-card-text>
        <Movie-Item v-for="popularMovie in popularMovies" :key="popularMovie.id" :movie="popularMovie"></Movie-Item>
      </v-layout>
    </v-container>
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
        latestMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        popularMovies: [],
        
      }
    },
    components: {
      MovieItem: MovieItem,
      MovieDetails: MovieDetails

    },
    created() {
      // GET latest movies from tmdb 
      this.$http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${secret.tmdbApiKey}&language=en-US&page=1&region=US`).then(response => {
        this.latestMovies = response.body.results.slice(0, 6);
        
      }, response => {
        console.log(response);
      });

      // GET top rated movies from tmdb 
      this.$http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${secret.tmdbApiKey}&language=en-US&page=1&region=US`).then(response => {
        this.topRatedMovies = response.body.results.slice(0, 6);
        
      }, response => {
        console.log(response);
      });

      // GET upcoming movies from tmdb 
      this.$http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${secret.tmdbApiKey}&language=en-US&page=1&region=US`).then(response => {
        this.upcomingMovies = response.body.results.slice(0, 6);
        
      }, response => {
        console.log(response);
      });

      // GET popular movies from tmdb 
      this.$http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${secret.tmdbApiKey}&language=en-US&page=1&region=US`).then(response => {
        this.popularMovies = response.body.results.slice(0, 6);
        
      }, response => {
        console.log(response);
      });
      
    }

    
  }
</script>

<style>

</style>

