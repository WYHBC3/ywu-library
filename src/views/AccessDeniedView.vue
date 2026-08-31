<template>
  <div class="access-denied-page text-center">
    <h1 class="text-danger mb-3">Access Denied</h1>

    <p class="mb-4">Invalid username or password.</p>

    <router-link to="/login" class="btn btn-primary"> Return to Login </router-link>
  </div>
</template>

<style scoped>
.access-denied-page {
  max-width: 500px;
  margin: 30px auto;
}
</style>
