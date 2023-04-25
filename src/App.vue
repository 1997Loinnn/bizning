<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import HeaderComponent from './components/HeaderComponent.vue';
  import HeroComponent from './components/HeroComponent.vue';
  import AboutComponent from './components/AboutComponent.vue';
  import ServiceComponent from './components/ServiceComponent.vue';
  import ProjectComponent from './components/ProjectComponent.vue';
  import NewsComponent from './components/NewsComponent.vue';
  import ContactComponent from './components/ContactComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div>
    <HeaderComponent />
    <HeroComponent />
    <AboutComponent />
    <ServiceComponent />
    <ProjectComponent />
    <NewsComponent />
    <ContactComponent />
    <FooterComponent />
    <!-- <HelloWorld /> -->
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
