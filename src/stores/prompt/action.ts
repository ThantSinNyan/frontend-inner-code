import AxiosWithAuth from '@/configs/axiosConfig'
import { useRootStore } from '../personalInfo/root'
import type { AxiosError } from 'axios'
import type { PromptDTO } from '@/models/PromptDTO'

const savePromptAnswersUrl = 'users/save-prompt-answers'

export const actions = {
  async savePromptAnswers(prompts: PromptDTO[]) {
    const rootStore = useRootStore()
    try {
      await AxiosWithAuth.post(savePromptAnswersUrl, prompts)
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
