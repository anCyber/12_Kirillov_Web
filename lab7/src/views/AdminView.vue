<script setup>
import { ref } from 'vue'

const postTitle = ref('')
const resultText = ref('OUTPUT')
const isLoading = ref(false)
const url = "https://jsonplaceholder.typicode.com/posts"

async function sendRequest(method) {
  isLoading.value = true
  let fetchUrl = url
  let options = {
    method: method,
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  }
  
  if (method === 'POST' || method === 'PATCH') {
    options.body = JSON.stringify({
      title: postTitle.value || "Untitled",
      userId: 1
    })
  }

  try {
    const response = await fetch(fetchUrl, options)
    const data = await response.json()
    
    if (method === 'DELETE') {
      resultText.value = "STATUS: 200 OK\nRECORD #1 DELETED SUCCESSFULLY"
      postTitle.value = ""
    } else {
      resultText.value = `STATUS: ${response.status}\n${JSON.stringify(data, null, 2)}`
    }
  } catch (e) {
    resultText.value = "An error occurred. :("
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="single_API_content_section">
    <h2> Configure DataBase </h2>
    <div class="database_configs_vertical_flexbox">
      <input type="text" v-model="postTitle" placeholder="Enter the Title">
      <div class="database_buttons_horizontal_flexbox">
        <button class="call_API_button" @click="sendRequest('POST')">Create</button>
        <button class="call_API_button" @click="sendRequest('PATCH')">Edit</button>
        <button class="call_API_button" @click="sendRequest('DELETE')">Delete</button>
      </div>
    </div>

    <div v-if="isLoading" class="loader">Loading...</div>
    <div class="result-box">
      <pre>{{ resultText }}</pre>
    </div>
  </section>
</template>