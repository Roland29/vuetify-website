<template>
  <v-container>
    <v-row>
      <v-col> <OfficePresentation /> </v-col>
    </v-row>
    <v-row>
      <v-col> <OfficeHours id="hours" /> </v-col>
      <!--      <v-col> <BookAppointment id="book" /> </v-col>-->
    </v-row>
    <v-row>
      <v-col> <Location id="location" /></v-col>
      <v-col> <Specialities /> </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import OfficeHours from '@/components/OfficeHours.vue';
import BookAppointment from '@/components/BookAppointment.vue';
import OfficePresentation from '@/components/OfficePresentation.vue';
import Specialities from '@/components/Specialities.vue';
import Location from '@/components/Location.vue';
</script>
