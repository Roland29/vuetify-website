<script setup lang="ts"></script>

<template>
  <v-card>
    <v-card-title class="text-center">
      <v-icon left>mdi-home</v-icon>
      Adresse
    </v-card-title>
    <v-card-text class="text-body-1">
      <v-img src="../assets/address.png" height="150px" alt="address">
        <template #sources>
          <source srcset="../assets/address.webp" />
        </template>
      </v-img>
      <br />50 rue Raymond Leaustic<br />29200 Brest<br /><br />
      Afin de faciliter votre venue, nous vous conseillons de vous garer sur le parking
      <a href="https://goo.gl/maps/sFA67nRbY9yWNBmb6" target="_blank">7 rampe du vieux bourg</a>
      (zone bleue) face au Carrefour express.<br />Le cabinet se situe à l'étage.
    </v-card-text>
    <v-card-actions class="justify-space-around">
      <v-btn color="primary" variant="outlined" href="https://goo.gl/maps/XDhjnNX1RpbE22pc8" target="_blank">
        <v-icon color="#F44336" left>mdi-google-maps</v-icon>
        Direction
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
