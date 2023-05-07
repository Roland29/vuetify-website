<template>
  <v-card>
    <v-card-title class="text-center">Horaires de consultation</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(value, key, index) in businessHours" :key="index">
          <v-row>
            <v-col>{{ DayOfWeek[parseInt(key)] }}</v-col>
            <v-col>{{ formatBusinessHours(value, true) }}</v-col>
            <v-col>{{ formatBusinessHours(value, false) }}</v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
enum DayOfWeek {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
interface IHours {
  morningOpen: string;
  morningClose: string;
  afternoonOpen: string;
  afternoonClose: string;
}

type BusinessHours = {
  [key in DayOfWeek]?: IHours;
};

const businessHours = ref<BusinessHours>({
  [DayOfWeek.Monday]: {
    morningOpen: '9h',
    morningClose: '12h',
    afternoonOpen: '13h',
    afternoonClose: '18h',
  },
  [DayOfWeek.Tuesday]: {
    morningOpen: '9h',
    morningClose: '12h',
    afternoonOpen: '13h30',
    afternoonClose: '18h30',
  },
  [DayOfWeek.Thursday]: {
    morningOpen: '9h',
    morningClose: '12h',
    afternoonOpen: '13h30',
    afternoonClose: '17h30',
  },
  [DayOfWeek.Friday]: {
    morningOpen: '9h',
    morningClose: '12h',
    afternoonOpen: '13h',
    afternoonClose: '18h',
  },
});

function formatBusinessHours(hours: IHours, isMorning: boolean): string {
  const { morningOpen, morningClose, afternoonOpen, afternoonClose } = hours;

  if (isMorning && morningOpen !== 'closed' && morningClose !== 'closed') {
    return `${morningOpen} à ${morningClose}`;
  }

  if (afternoonOpen !== 'closed' && afternoonClose !== 'closed') {
    return `${afternoonOpen} à ${afternoonClose}`;
  }

  return 'closed';
}
onMounted(() => console.log(businessHours.value));
</script>

<style scoped></style>
