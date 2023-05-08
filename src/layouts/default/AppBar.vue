<template>
  <v-app-bar color="teal-darken-4">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title class="text-center">
      <v-icon left>mdi-tooth-outline</v-icon>
      <p class="d-none d-sm-inline">
        Cabinet Dentaire Dr Catherine Abasq et Dr David Paire<br />Chirurgiens Dentistes - Omnipratique et Parodontie
      </p>
      <p class="d-inline d-sm-none" style="font-size: 18px">
        Cabinet Dentaire<br />Dr Catherine Abasq & Dr David Paire
      </p>
    </v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="left" temporary id="nav_drawer">
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :prepend-icon="item.props.prependIcon"
        @click="scrollToAnchor(item.props.to)"
        active-color="primary"
        rounded="shaped"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref(false);
const items = ref([
  {
    title: 'Horaires',
    value: 'hours',
    props: {
      to: 'hours',
      prependIcon: 'mdi-store-clock',
    },
  },
  {
    title: 'Contact',
    value: 'bookAppointment',
    props: {
      to: 'book',
      prependIcon: 'mdi-card-account-phone',
    },
  },
  {
    title: 'Adresse',
    value: 'address',
    props: {
      to: 'location',
      prependIcon: 'mdi-store-marker',
    },
  },
]);
const scrollToAnchor = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  drawer.value = false;
};
</script>

<style>
#nav_drawer {
  background-image: linear-gradient(to bottom, rgba(19, 84, 122, 0.8), rgba(128, 208, 199, 0.8)),
    url('https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg');
  background-size: cover;
  color: white;
}
</style>
