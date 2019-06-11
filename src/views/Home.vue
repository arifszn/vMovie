<template>
 <div class="home">
    <h1 class="subheading grey--text">Home</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs6 sm6 md3 lg2 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive>
              <v-img src="/godzilla.jpg" ></v-img>
            </v-responsive>
            <v-card-text>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        team: [
        { name: 'John Doe', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Miles Morales', role: 'Graphics designer', avatar: '/avatar-2.png' },
        { name: 'Clark Kent', role: 'Software Engineer', avatar: '/avatar-3.png' },
        { name: 'Peter Parker', role: 'Web developer', avatar: '/avatar-4.png' },
        { name: 'Peter Parker', role: 'Web developer', avatar: '/avatar-4.png' },

      ]
      }
    }
  }
</script>

<style>

</style>

