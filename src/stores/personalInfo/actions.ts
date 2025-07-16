import AxiosWithAuth from '@/configs/axiosConfig' 
import { useRootStore } from './root'
import type { AxiosError } from 'axios'
import type { PersonalInfoStore } from '.'
import type { PersonalFormDTO } from '@/models/PersonalFormDTO'

const personalInfoUrl = 'users/personal-inside-data-overview'

export const actions = {
  async loadPersonalInfo(formData:  PersonalFormDTO) {
    const state = this as PersonalInfoStore
    const rootStore = useRootStore()
    try {
      const { data } = await AxiosWithAuth.post(personalInfoUrl,formData)

      state.data = data as Record<string, unknown>
    } catch (err) {
      const error = err as AxiosError<string>
      const errorMessage = error?.response?.data || 'Failed to load personal information.'
      rootStore.setDetailModal('notification.title.error', errorMessage)
      rootStore.setErrorModal(true)
      state.data = {}
    }
  },
  clearData() {
    const state = this as PersonalInfoStore
    state.data = {}
  }
}
