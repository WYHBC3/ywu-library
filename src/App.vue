<script setup>
import BHeader from './components/BHeader.vue'
</script>

<template>
  <BHeader />

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
