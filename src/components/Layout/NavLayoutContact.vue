<script setup lang="ts">
import { useLoadingStore } from '@/stores/personalInfo/root';
import { useLanguageStore } from '@/stores/personalInfo/root';
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth/auth'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const { locale } = useI18n()
const { t } = useI18n()
const languageStore = useLanguageStore()
const router = useRouter()
const loadingStore = useLoadingStore()
const isDropdownOpen = ref(false)
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const changeLanguage = (lang: string) => {
  currentLang.value=lang
  isDropdownOpen.value = false
  locale.value = lang
  localStorage.setItem('language', lang)
}

const currentLang = computed({
  get: () => languageStore.language,
  set: (val: string) => {
    languageStore.language = val
    locale.value = val
    isDropdownOpen.value = false
  }
})

const currentLabel = computed(() => {
   return currentLang.value === 'en' ? 'English' : 'မြန်မာ'
})

const handleLogout = () => {
  authStore.logout() 
  router.push('/login') 
}

onMounted(() => {
  const saved = localStorage.getItem('language')
  if (saved) {
    currentLang.value = saved
    locale.value = saved
  }
})
const goToLogin = () => {
  router.push('/login')
}

const goToRegister = () => {
  router.push('/register')
}

</script>
<template>
  <div id="preloader" v-if="loadingStore.isLoading">
    <div id="status">
      <img src="/images/header/horoscope.gif" id="preloader_image" alt="loader">
    </div>
  </div>
  <div class="main_header_wrapper">
    <div class="hs_navigation_header_wrapper">
      <div class="">
        <div class="row">
          <div class="col-lg-6 col-md-5 col-sm-5 col-xs-5" />
          <div class="col-lg-6 col-md-7 col-sm-7 col-xs-7">
            <div class="hs_top_right_wrapper">
              <div class="hs_navi_searchbar_wrapper hidden-sm hidden-xs">
                <input
                  type="text"
                  :placeholder="t('navBar.search')"
                >
                <button><i class="fa fa-search" /></button>
              </div>
                <ul class="cart_login_wrapper">
                <li class="dropdown menu-button hs_top_user_profile">
                  <a href="#">
                   <span 
                      class="hidden-xs" 
                      v-if="authStore.user"
                      @click="handleLogout"
                      style="cursor: pointer;"
                    >
                      Logout
                    </span>
                  </a>
                </li>
              </ul>
              <ul class="cart_login_wrapper">
                <li class="dropdown menu-button hs_top_user_profile">
                  <a href="#">
                    <img
                      src="/images/header/top_user.png"
                      alt="user"
                    >
                    <span class="hidden-xs" v-if="authStore.user">
                      {{ authStore.user.name }}
                    </span>
                <span class="hidden-xs" v-else>
                  <a @click.prevent="goToLogin" style="cursor: pointer;">
                    {{ t('navBar.login') }}
                  </a>
                  /
                  <a @click.prevent="goToRegister" style="cursor: pointer;">
                    {{ t('navBar.register') }}
                  </a>
                </span>
                  </a>
                </li>
              </ul>
              <ul class="cart_login_wrapper"> 
                <li class="dropdown menu-button hs_top_user_profile" @click="toggleDropdown">
                  <a href="javascript:void(0)">
                    <span class="hidden-xs">{{ currentLabel }}</span>
                  </a>
                  <ul class="dropdown-menu" v-show="isDropdownOpen">
                    <li class="signin_dropdown" @click.stop="changeLanguage('en')">
                      <a href="#"><span>English</span></a>
                    </li>
                    <li class="signin_dropdown" @click.stop="changeLanguage('my')">
                      <a href="#"><span>မြန်မာ</span></a>
                    </li>
                  </ul>
                </li>            
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

