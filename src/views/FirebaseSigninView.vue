<template>
  <h1>Sign in</h1>

  <p>
    <input type="text" placeholder="Email" v-model="email" />
  </p>

  <p>
    <input type="password" placeholder="Password" v-model="password" />
  </p>

  <p>
    <button @click="signin">Sign in via Firebase</button>
  </p>

  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const router = useRouter()
const auth = getAuth()

const roleMap = {
  'admin.w7@example.com': 'admin',
  'member.w7@example.com': 'member'
}

const signin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )

    const signedInEmail = userCredential.user.email
    const role = roleMap[signedInEmail] ?? 'member'

    localStorage.setItem('userRole', role)

    console.log('Signed in user:', {
      email: signedInEmail,
      role: role
    })

    router.push('/role-dashboard')
  } catch (error) {
    errorMessage.value = error.code
    console.log(error.code)
  }
}
</script>
