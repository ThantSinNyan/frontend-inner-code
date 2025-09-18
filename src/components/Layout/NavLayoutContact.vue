<script setup lang="ts">
import { useLoadingStore } from '@/stores/personalInfo/root'
import { useLanguageStore } from '@/stores/personalInfo/root'
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
  currentLang.value = lang
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
  },
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
  <div v-if="loadingStore.isLoading" id="preloader">
    <div id="status">
      <img id="preloader_image" src="/images/header/horoscope.gif" alt="loader" />
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
                <input type="text" :placeholder="t('navBar.search')" />
                <button><i class="fa fa-search" /></button>
              </div>
              <ul class="cart_login_wrapper">
                <li class="dropdown menu-button hs_top_user_profile">
                  <a href="#">
                    <span
                      v-if="authStore.user"
                      class="hidden-xs"
                      style="cursor: pointer"
                      @click="handleLogout"
                    >
                      Logout
                    </span>
                  </a>
                </li>
              </ul>
              <ul class="cart_login_wrapper">
                <li class="dropdown menu-button hs_top_user_profile">
                  <a href="#">
                    <img src="/images/header/top_user.png" alt="user" />
                    <span v-if="authStore.user" class="hidden-xs">
                      {{ authStore.user.name }}
                    </span>
                    <span v-else class="hidden-xs">
                      <a style="cursor: pointer" @click.prevent="goToLogin">
                        {{ t('navBar.login') }}
                      </a>
                      /
                      <a style="cursor: pointer" @click.prevent="goToRegister">
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
                  <ul v-show="isDropdownOpen" class="dropdown-menu">
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
