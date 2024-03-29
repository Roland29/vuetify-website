<template>
  <v-card>
    <v-card-title class="text-center">
      <v-icon left>mdi-store-clock</v-icon>
      Horaires de consultation
    </v-card-title>
    <v-card-text>
      <v-table density="compact" hover class="custom-table">
        <tbody>
          <tr v-for="(value, key, index) in businessHours" :key="index">
            <td>{{ DayOfWeek[key] }}</td>
            <td>{{ value && formatBusinessHours(value, true) }}</td>
            <td>{{ value && formatBusinessHours(value, false) }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
enum DayOfWeek {
  Dimanche = 'Dimanche',
  Lundi = 'Lundi',
  Mardi = 'Mardi',
  Mercredi = 'Mercredi',
  Jeudi = 'Jeudi',
  Vendredi = 'Vendredi',
  Samedi = 'Samedi',
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
  [DayOfWeek.Lundi]: {
    morningOpen: '9h',
    morningClose: '12h',
    afternoonOpen: '13h',
    afternoonClose: '18h',
  },
  [DayOfWeek.Mardi]: {
    morningOpen: '9h',
    morningClose: '12h',
    afternoonOpen: '13h30',
    afternoonClose: '18h30',
  },
  [DayOfWeek.Jeudi]: {
    morningOpen: '9h',
    morningClose: '12h',
    afternoonOpen: '13h30',
    afternoonClose: '17h30',
  },
  [DayOfWeek.Vendredi]: {
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
</script>

<style scoped>
.custom-table > .v-table__wrapper > table > tbody > tr:not(:last-child) > td {
  border-bottom: none;
}
</style>
