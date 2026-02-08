<template>
  <section class="contact" id="contact">
    <div class="section-head">
      <p class="eyebrow">Contact</p>
      <h2>Start with a focused conversation</h2>
    </div>
    <div class="contact-grid">
      <div class="contact-card">
        <h3>Let’s talk</h3>
        <p>
          Tell us about the challenges you’re solving. We respond within one
          business day.
        </p>
        <div class="contact-details">
          <span>info@vangardconsultancy.com</span>
          <span>+1 (555) 012-2211</span>
          <span>Lagos • London • Remote</span>
        </div>
      </div>
      <form class="contact-form" @submit.prevent="submitForm">
        <label>
          Full name
          <input v-model="form.name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Work email
          <input v-model="form.email" type="email" placeholder="you@company.com" required />
        </label>
        <label>
          What are you working on?
          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Briefly describe your goals"
            required
          ></textarea>
        </label>
        <button class="btn btn-primary" type="submit" :disabled="isSending">
          {{ isSending ? 'Sending…' : 'Send message' }}
        </button>
        <p v-if="statusMessage" class="form-status">{{ statusMessage }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSending = ref(false)
const statusMessage = ref('')

const submitForm = async () => {
  if (isSending.value) return
  isSending.value = true
  statusMessage.value = ''

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      })
    })

    if (!response.ok) {
      throw new Error('Request failed')
    }

    statusMessage.value = 'Thanks! Your message has been sent.'
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    statusMessage.value = 'Sorry, something went wrong. Please try again.'
  } finally {
    isSending.value = false
  }
}
</script>
