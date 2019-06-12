<template>
  <div class="text-xs-center">
    <v-dialog
      v-model=this.$store.getters.getMovieDetailsButtonStatus
      width="500" persistent
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg" weight="100" height="200"></v-img>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="clicked"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    },
    methods : {
        clicked() {
            this.$store.dispatch('movieDetailsButtonClosed');
        }
    }
  }
</script>
