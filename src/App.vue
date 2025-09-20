<template>
  <HelloWorld />
  <CustomAlert ref="subscriptionAlert" />
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from './views/MainView.vue'
import CustomAlert from '@/components/Alert/AccessDenineDetailPage.vue'
</script>
