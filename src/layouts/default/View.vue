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
  background-size: cover;
  background-image: url('../../assets/cabinetBlur.jpg');
  /*// image-set for FF, only jpg gets downloaded for not supporting browsers*/
  background-image: -webkit-image-set(url('../../assets/cabinetBlur.webp') 1x);
}
.hero2 {
  background: linear-gradient(#13547acc, #80d0c7cc);
  background-size: cover;
}
</style>
