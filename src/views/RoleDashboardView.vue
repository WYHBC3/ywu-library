<template>
  <div>
    <h1>Role Dashboard</h1>

    <p>Email: {{ currentEmail }}</p>
    <p>Role: {{ currentRole }}</p>

    <p v-if="currentRole === 'admin'">
      Admin access granted.
    </p>

    <p v-else>
      Member access granted.
    </p>

    <button @click="logout">Log out</button>
  </div>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const auth = getAuth()
const router = useRouter()

const currentEmail = auth.currentUser?.email ?? ''
const currentRole = localStorage.getItem('userRole') ?? ''

const logout = async () => {
  await signOut(auth)
  localStorage.removeItem('userRole')

  console.log('Current user after logout:', auth.currentUser)

  router.push('/FireLogin')
}
</script>
