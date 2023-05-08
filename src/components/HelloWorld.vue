<template>
  <div>
    <h1>{{ props.message }}</h1>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  message: {
    type: String as PropType<string>,
    required: true,
  },
});
</script>

<style scoped></style>
