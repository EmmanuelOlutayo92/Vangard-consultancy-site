<template>
  <div class="page">
    <HeaderNav />

    <main>
      <HeroSection />
      <FounderSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import HeroSection from '../components/HeroSection.vue'
import FounderSection from '../components/FounderSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CtaSection from '../components/CtaSection.vue'
import ContactSection from '../components/ContactSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
