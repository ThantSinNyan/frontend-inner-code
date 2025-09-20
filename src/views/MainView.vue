<template>
  <HeadImport />
  <body>
    <div class="main_header_wrapper">
      <NavLayoutContact />
      <NavLayoutMenu />
      <!-- ✅ Keep the ref on the CustomAlert component -->
      <CustomAlert ref="subscriptionAlert" />
    </div>
    <router-view />
    <Footer />
  </body>
</template>

<script setup lang="ts">
import HeadImport from '@/components/Layout/HeadImport.vue'
import NavLayoutContact from '@/components/Layout/NavLayoutContact.vue'
import NavLayoutMenu from '@/components/Layout/NavLayoutMenu.vue'
import Footer from '@/components/Layout/FooterPage.vue'
import CustomAlert from '@/components/Alert/AccessDenineDetailPage.vue'
import { ref } from 'vue'

const subscriptionAlert = ref()

function openSubscriptionAlert() {
  subscriptionAlert.value?.openAlert()
}

defineExpose({
  openSubscriptionAlert
})
</script>
