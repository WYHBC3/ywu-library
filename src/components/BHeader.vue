<script setup>
import { useRouter } from 'vue-router'
import { isAuthenticated, logout } from '../auth'

const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active"> Home (Week 5) </router-link>
        </li>

        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active"> Login </router-link>
        </li>

        <template v-else>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" active-class="active"> About </router-link>
          </li>

          <li class="nav-item">
            <button type="button" class="nav-link border-0 bg-transparent" @click="handleLogout">
              Logout
            </button>
          </li>
        </template>
      </ul>
    </header>
  </div>
</template>
