<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login } from '../auth'

const username = ref('')
const password = ref('')

const router = useRouter()
const route = useRoute()

const handleLogin = () => {
  const loginSuccessful = login(username.value, password.value)

  if (loginSuccessful) {
    const redirectPath = typeof route.query.redirect === 'string' ? route.query.redirect : '/about'

    router.push(redirectPath)
  } else {
    router.push('/access-denied')
  }
}
</script>

<template>
  <div class="login-page">
    <h1 class="mb-4">Member Login</h1>

    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="login-username" class="form-label"> Username </label>

        <input id="login-username" v-model="username" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="login-password" class="form-label"> Password </label>

        <input
          id="login-password"
          v-model="password"
          type="password"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-page {
  max-width: 500px;
  margin: 30px auto;
}
</style>
