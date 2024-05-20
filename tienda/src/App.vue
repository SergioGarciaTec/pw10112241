<script setup>
import { RouterView } from 'vue-router'
import MenuView from './views/MenuView.vue'
</script>

<template>
  <header>
    <MenuView></MenuView>
  </header>

  <RouterView />
</template>

