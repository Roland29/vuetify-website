<template>
  <v-app-bar color="teal-darken-4">
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <v-app-bar-title class="text-center">
      <v-icon left>mdi-tooth-outline</v-icon>
        <span v-if="isDesktop">Cabinet Dentaire Dr Abasq et Dr Paire<br>Chirurgiens Dentistes - Omnipratique et Parodontie</span>
        <span v-else>Cabinet Dentaire<br>Dr Abasq et Dr Paire</span>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDesktop = ref(false);

function checkScreenSize() {
  isDesktop.value = window.innerWidth >= 600; // set breakpoint here
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>
