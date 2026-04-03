<script setup>
import { ref } from 'vue'

const catImageUrl = ref('')
const isLoading = ref(false)

async function getCatImage() {
  isLoading.value = true
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
    const data = await response.json()
    catImageUrl.value = data[0].url
  } catch (e) {
    alert("Ошибка!")
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="single_API_content_section">
    <h2>Get A Random Cat Image</h2>
    <button class="call_API_button" @click="getCatImage">Get Image</button>

    <div v-if="isLoading" class="loader">Loading...</div>
    
    <div v-if="catImageUrl" id="cat-result">
      <img :src="catImageUrl" alt="Random Cat">
    </div>
  </section>
</template>