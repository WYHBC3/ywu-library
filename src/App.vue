<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BHeader from './components/BHeader.vue'

const route = useRoute()

const showHeader = computed(() => {
  return !['CountBookAPI', 'GetAllBookAPI'].includes(route.name)
})
</script>

<template>
  <BHeader v-if="showHeader" />

  <main class="page-container">
    <router-view />
  </main>
</template>

<style scoped>
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
</style>
