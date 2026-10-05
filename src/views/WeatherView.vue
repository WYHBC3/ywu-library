<template>
  <div class="container">
    <div class="header">
      <h1>Weather</h1>
      <div class="search-bar">
        <input type="text" v-model="city" placeholder="Enter City Name" class="search-input" />
        <button @click="searchByCity" class="search-button">Search</button>
      </div>
    </div>

    <!--The <main> tag in HTML is used to specify the main content of a document
    More info about main, check https://www.w3schools.com/tags/tag_main.asp-->
    <main>
      <!--If there are no data returned, then skip rendering the information-->
      <div v-if="weatherData">
        <!--Display the weather data attribute returned from API
        Example of API data: https://openweathermap.org/current-->
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div>
          <!--The image source of of the weather icon will be coming from a function called iconUrl
              which will be shared in script later-->
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <!-- weather[0] means the current weather, the way we need to obtain data depends on how
        the API JSON data looks-->
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const apikey = 'ca012fb4a162017e6f75f240f233631c'

const city = ref('')
const weatherData = ref(null)
const hourlyForecast = ref([])
const dailyForecast = ref([])

const temperature = computed(() => {
  return weatherData.value ? (weatherData.value.main.temp - 273.15).toFixed(1) : null
})

const iconUrl = computed(() => {
  return weatherData.value
    ? `https://openweathermap.org/img/wn/${weatherData.value.weather[0].icon}@2x.png`
    : null
})

// Methods (defined as standard JavaScript functions)
const fetchWeatherData = async (url) => {
  try {
    const response = await axios.get(url)
    // Use .value to update ref variables
    weatherData.value = response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

const fetchCurrentLocationWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
      await fetchWeatherData(url)
    })
  }
}

// Lifecycle hook (replacing `mounted()`)
onMounted(() => {
  fetchCurrentLocationWeather()
})

const searchByCity = async () => {
  const cityName = city.value.trim()

  if (!cityName) {
    alert('Please enter a city name')
    return
  }

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: cityName,
        appid: apikey,
      },
    })

    weatherData.value = response.data
  } catch (err) {
    console.error(err)
    alert('Unable to find weather. Please check the city name.')
  }
}
</script>
