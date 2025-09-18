import AxiosWithAuth from '@/configs/axiosConfig'
import { useRootStore } from './root'
import type { AxiosError } from 'axios'
import type { PersonalInfoStore } from '.'
import type { PersonalFormDTO } from '@/models/PersonalFormDTO'
import type { PersonalOverViewDTO } from '@/models/PersonalOverViewDTO'

const personalInfoUrl = 'users/personal-inside-data-overview'
const personalInfosByUserId = 'users/getHealingJourneyByUserId'
const personalInfoById = 'users/get-personal-inside-data-overview'

export const actions = {
  async loadAndSavePersonalInfo(formData: PersonalFormDTO) {
    const state = this as PersonalInfoStore
    const rootStore = useRootStore()
    try {
      const { data } = await AxiosWithAuth.post(personalInfoUrl, formData)
      state.data = data as PersonalOverViewDTO
    } catch (err) {
      const error = err as AxiosError<string>
      const errorMessage =
        error?.response?.data || 'Failed to load personal information.'
      rootStore.setDetailModal('notification.title.error', errorMessage)
      rootStore.setErrorModal(true)
      state.data = {} as PersonalOverViewDTO
    }
  },
  async loadPersonalInfoById(formData: PersonalFormDTO) {
    const state = this as PersonalInfoStore
    const rootStore = useRootStore()
    try {
      const { data } = await AxiosWithAuth.post(personalInfoById, formData)
      state.data = data as PersonalOverViewDTO
    } catch (err) {
      const error = err as AxiosError<string>
      const errorMessage =
        error?.response?.data || 'Failed to load personal information.'
      rootStore.setDetailModal('notification.title.error', errorMessage)
      rootStore.setErrorModal(true)
      state.data = {} as PersonalOverViewDTO
    }
  },
  async loadPersonalInfos(formData: PersonalFormDTO) {
    const state = this as PersonalInfoStore
    const rootStore = useRootStore()
    try {
      const { data } = await AxiosWithAuth.post(personalInfosByUserId, formData)
      state.dataList = data as PersonalOverViewDTO[]
    } catch (err) {
      const error = err as AxiosError<string>
      const errorMessage =
        error?.response?.data || 'Failed to load personal information.'
      rootStore.setDetailModal('notification.title.error', errorMessage)
      rootStore.setErrorModal(true)
      state.dataList = []
    }
  },
  clearData() {
    const state = this as PersonalInfoStore
    state.data = {} as PersonalOverViewDTO
    state.dataList = []
  },
}
