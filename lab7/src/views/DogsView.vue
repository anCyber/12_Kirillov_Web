<script setup>
import { ref } from 'vue'

const dogFact = ref('')
const isLoading = ref(false)

async function getDogFact() {
  isLoading.value = true
  dogFact.value = ''

  try {
    const response = await fetch("https://dogapi.dog/api/v2/facts")
    const factData = await response.json()
    dogFact.value = factData.data[0].attributes.body
  } catch (e) {
    dogFact.value = "An error occurred. :("
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="single_API_content_section">
    <h2>A Random Fact About Dogs</h2>
    
    <button class="call_API_button" @click="getDogFact">
      Get Fact
    </button>

    <div v-if="isLoading" class="loader">
      Loading...
    </div>

    <p v-if="dogFact" class="fact-text">
      {{ dogFact }}
    </p>
  </section>
</template>