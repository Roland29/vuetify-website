<script setup lang="ts"></script>

<template>
  <v-card>
    <v-card-title class="text-center">
      <v-icon left>mdi-card-account-phone</v-icon>
      Prendre rendez-vous
    </v-card-title>
    <v-card-text class="text-body-1">
      <br />Le secrétariat est ouvert lundi, mardi, jeudi et vendredi matin.<br /><br />N'hésitez pas à nous laisser un
      email ou un message avec votre nom ainsi que le motif de votre appel.
    </v-card-text>
    <v-card-actions class="justify-space-around">
      <v-btn variant="outlined" color="primary" dark href="tel:0298022319">
        <v-icon left>mdi-phone-classic</v-icon>
        02 98 02 23 19
      </v-btn>
      <v-btn variant="outlined" color="primary" dark href="mailto:secretariat.abasq.paire@gmail.com">
        <v-icon left>mdi-email</v-icon>
        <p class="d-none d-sm-block">Envoyer un mail</p>
        <p class="d-block d-sm-none">Envoyer mail</p>
      </v-btn>
    </v-card-actions>
  </v-card>
  <!--        <v-card>-->
  <!--          <v-card-actions class="justify-space-around">-->
  <!--            <v-btn color="primary" variant="tonal">-->
  <!--              <v-icon left>mdi-calendar-clock</v-icon>-->
  <!--                <p v-if="isDesktop">Prendre RDV avec le Dr PAIRE</p>-->
  <!--                <p v-else>RDV Dr PAIRE</p>-->
  <!--            </v-btn>-->
  <!--            <v-btn color="primary" variant="tonal">-->
  <!--              <v-icon left>mdi-calendar-clock</v-icon>-->
  <!--              <p v-if="isDesktop">Prendre un RDV avec le Dr Abasq</p>-->
  <!--              <p v-else>RDV Dr Abasq</p>-->
  <!--            </v-btn>-->
  <!--          </v-card-actions>-->
  <!--        </v-card>-->
</template>

<style scoped></style>
