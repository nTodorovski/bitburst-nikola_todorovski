<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="container max-w-3xl h-screen flex flex-col pt-[30px] pb-12">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
