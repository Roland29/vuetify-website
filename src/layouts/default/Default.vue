<template>
  <v-app>
    <default-bar />

    <default-view />
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        secretaria.abasq.paire@gmail.com
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
