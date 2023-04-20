<template>
  <v-app>
    <default-bar />

    <default-view class="hero"/>

  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>

<style scoped>
.hero {
  background: url('../../assets/cabinet.jpg');
  background-size: cover;
  height: 100vh;
}
</style>
