<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const jsondata = ref(null)
const error = ref(null)

const getAllBooksAPI = async () => {
  try {
    const response = await axios.get('https://getallbooks-xzu4svd2ka-uc.a.run.app')

    jsondata.value = JSON.stringify(response.data, null, 2)
    error.value = null
  } catch (err) {
    console.error(err)
    error.value = 'Error fetching books'
    jsondata.value = null
  }
}

onMounted(() => {
  getAllBooksAPI()
})
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <pre v-else>{{ jsondata }}</pre>
</template>
