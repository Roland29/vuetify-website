<template>
  <v-app-bar color="teal-darken-4">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <v-app-bar-title class="text-center">
      <v-icon left>mdi-tooth-outline</v-icon>
      <p class="d-none d-sm-inline">
        Cabinet Dentaire Dr Catherine Abasq et Dr David Paire<br />Chirurgiens Dentistes - Omnipratique et Parodontie
      </p>
      <p class="d-inline d-sm-none">Cabinet Dentaire<br />Dr Catherine Abasq et Dr David Paire</p>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup></script>
