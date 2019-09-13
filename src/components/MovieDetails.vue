<template>
  <div class="text-xs-center">
    <div class="lds-ripple loading" v-if="!detailsLoaded"><div></div><div></div></div>
    <v-dialog
      v-model="dialog"
      width="680px"
    > 
      <div class="mainDiv" v-if="detailsLoaded">
        <v-flex >
          <v-card>
            <v-img
            v-if="movie.backdrop_path"
              class="white--text"
              :src="`https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`"
              lazy-src="https://raw.githubusercontent.com/arifszn/vMovie/master/public/defaultBg.jpg"
              id="myImage"
            >
            </v-img>

            <v-img
            v-else
              class="white--text"
              src="https://raw.githubusercontent.com/arifszn/vMovie/master/public/defaultBg.jpg"
              id="myImage"
            >
            </v-img>
            
              <v-container fill-height fluid style="margin-top: -52%; " >
                <v-layout fill-height>
                  <v-flex  align-end flexbox>
                    <v-flex  class="mt-5 ml-3">
                      <v-card flat class="" width="200px">
                        <v-responsive>
                          
                            <v-img :src="`https://image.tmdb.org/t/p/w370_and_h556_bestv2${ movie.poster_path }`" ></v-img>
                        </v-responsive>
                      </v-card>
                       <v-card-title>
                        <div>
                          <span class="grey--text"><strong>Relase Date:</strong> {{ movie.release_date }}</span> <br>
                        </div>
                      </v-card-title>
                    </v-flex>
                  </v-flex>

                  <v-flex align-start flexbox>
                    <v-flex  class="mt-5 ml-3" style="position:relative">
                        <div class="black--text title" >{{ movie.title }}</div>
                        <span class="grey--text"><strong>Genre:</strong> {{ getGenre(movie.genres) }}</span> <br>
                        <span class="grey--text"><strong>Rating:</strong> {{ movie.vote_average == '0' ? 'Not Yet Rated' : movie.vote_average }}</span> <br>
                        <br>
                        <v-card-text small style="padding: 0;  text-align: justify; text-justify: inter-word;">
                            <div class="black--text small">{{ movie.overview }}</div>
                        </v-card-text>
                  </v-flex>
                  </v-flex>
                  
                </v-layout>
              </v-container>
            
            <v-card-actions>
              <v-btn flat round color="dark" style="min-width: 0px; position: absolute; top: 8px; right: 8px; font-size: 18px;" @click="closePopup">&times;</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </div>    
    </v-dialog>
    
  </div>
</template>

<script>
import secret from '../secret.js'

  export default {
    data () {
      return {
        dialog: false,
        movieId: null,
        movie: [],
        detailsLoaded: false,
      }
    },
    methods : {
        closePopup() {
          this.dialog = false;
          this.$store.dispatch('movieDetailsButtonClosed');
        },
         getGenre(genreList) {
          let myArray = [], result;
          genreList.forEach((item) => myArray.push(item.name));
          result = myArray.join(', ');
          return result;
        }
    },
    watch: {
      dialog (val) {
        !val && this.$store.dispatch('movieDetailsButtonClosed');
      }
    },
    created() {
      this.dialog = this.$store.getters.getMovieDetailsButtonStatus;
      this.movieId = this.$store.getters.getMoviePopupId;
      // GET latest movies from tmdb 
      this.$http.get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${secret.tmdbApiKey}&language=en-US`).then(response => {
        this.movie = response.body;
        this.detailsLoaded = true;
      }, response => {
        console.log(response);
      });

    }
  }
</script>

<style scoped>
  #myImage {
    background-size: cover;
    opacity: 0.2; 
    
  }

  @media only screen and (max-width: 600px) {
    #myImage {
      opacity: 0;
    }
  }
  
  /* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 28px;
}


.lds-ripple div {
  position: absolute;
  border: 4px solid #fed;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}



</style>

