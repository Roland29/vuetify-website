<template>
  <v-app-bar color="teal-darken-4">
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <v-app-bar-title class="text-center">
      <v-icon left>mdi-tooth</v-icon>
        Cabinet Dentaire<br>Dr Abasq et Dr Paire
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
<style>
.v-app-bar-title__title {
  flex: 1;
  text-align: center;
}
</style>
