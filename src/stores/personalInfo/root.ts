import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useRootStore = defineStore('root', {
  state: () => ({
    showErrorModal: false,
    detailModal: {
      title: '',
      message: ''
    }
  }),
  actions: {
    setDetailModal(title: string, message: string) {
      this.detailModal = { title, message }
    },
    setErrorModal(show: boolean) {
      this.showErrorModal = show
    }
  }
})
export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    start() {
      this.isLoading = true
    },
    stop() {
      this.isLoading = false
    },
  },
  
})
export const languageStore = defineStore('loading', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    start() {
      this.isLoading = true
    },
    stop() {
      this.isLoading = false
    },
  },
})
export const useLanguageStore = defineStore('language', () => {
  const language = ref(localStorage.getItem('language') || 'en')

  watch(language, (newLang) => {
    localStorage.setItem('language', newLang)
  })

  return {
    language
  }
})