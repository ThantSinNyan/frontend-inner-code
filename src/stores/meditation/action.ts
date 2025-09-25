import AxiosWithAuth from '@/configs/axiosConfig'
import { useRootStore } from '../personalInfo/root'
import type { AxiosError } from 'axios'
import type { MeditationMediaDTO } from '@/models/MeditationMediaDTO'

const saveMeditationStatusUrl = 'users/save-meditation-status'

export const actions = {
  async saveMeditationMedia(meditationMedia: MeditationMediaDTO) {
    const rootStore = useRootStore()
    try {
      await AxiosWithAuth.post(saveMeditationStatusUrl, meditationMedia)
      rootStore.setDetailModal('notification.title.success', 'Answers submitted successfully!')
      rootStore.setSuccessModal(true)
    } catch (err) {
      const error = err as AxiosError<string>
      const errorMessage = error?.response?.data || 'Failed to submit answers.'
      rootStore.setDetailModal('notification.title.error', errorMessage)
      rootStore.setErrorModal(true)
    }
  },
}
