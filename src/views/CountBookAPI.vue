<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const error = ref(null)
const jsondata = ref(null)

const getBookCountAPI = async () => {
  try {
    const response = await axios.get('https://countbooks-xzu4svd2ka-uc.a.run.app')

    jsondata.value = JSON.stringify(response.data, null, 2)
    error.value = null
  } catch (err) {
    console.error(err)
    error.value = 'Error fetching book count'
    jsondata.value = null
  }
}

onMounted(() => {
  getBookCountAPI()
})
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <pre v-else>{{ jsondata }}</pre>
</template>
