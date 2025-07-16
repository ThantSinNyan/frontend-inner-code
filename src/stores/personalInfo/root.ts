import { defineStore } from 'pinia'

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
