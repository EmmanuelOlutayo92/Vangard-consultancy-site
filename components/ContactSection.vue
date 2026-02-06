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
      <form
        class="contact-form"
        action="mailto:info@vangardconsultancy.com"
        method="post"
        enctype="text/plain"
      >
        <label>
          Full name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Work email
          <input type="email" name="email" placeholder="you@company.com" />
        </label>
        <label>
          What are you working on?
          <textarea
            name="message"
            rows="4"
            placeholder="Briefly describe your goals"
          ></textarea>
        </label>
        <button class="btn btn-primary" type="submit">Send message</button>
      </form>
    </div>
  </section>
</template>
