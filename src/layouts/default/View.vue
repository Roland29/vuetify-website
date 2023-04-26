<template>
  <v-main class="hero">
    <router-view />
  </v-main>
  <v-footer class="justify-center hero2 font-weight-light">
    <a href="mailto:secretariat.abasq.paire@gmail.com">secretariat.abasq.paire@gmail.com</a>
  </v-footer>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped>
.hero {
  background: url('../../assets/cabinetBlur1.jpg');
  background-size: cover;
}
 .hero2 {
   background: linear-gradient(#13547acc, #80d0c7cc);
   background-size: cover;
 }
</style>
