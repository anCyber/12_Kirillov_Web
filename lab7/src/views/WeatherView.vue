<script setup>
import { ref } from 'vue'

const weatherInfo = ref(null)
const isLoading = ref(false)

async function getWeather() {
  isLoading.value = true
  weatherInfo.ref = null

  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.61&current_weather=true")
    const data = await response.json()
    
    // Сохраняем нужные данные в объект
    weatherInfo.value = {
      temp: data.current_weather.temperature,
      wind: data.current_weather.windspeed
    }
  } catch (e) {
    alert("An error occurred. :(")
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="single_API_content_section">
    <h2> Weather in Moscow </h2>
    
    <button class="call_API_button" @click="getWeather">
      Check Weather
    </button>

    <div v-if="isLoading" class="loader">
      Loading...
    </div>

    <div v-if="weatherInfo" class="fact-text">
      Temperature: {{ weatherInfo.temp }}°C <br>
      Wind Speed: {{ weatherInfo.wind }} km/h
    </div>
  </section>
</template>