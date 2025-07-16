import { defineStore } from 'pinia'
import { actions } from './actions'
import type { PersonalOverViewDTO } from '@/models/PersonalOverViewDTO'

export const usePersonalInfoStore = defineStore('personalInfo', {
  state: () => ({
    data: {} as PersonalOverViewDTO
  }),
  actions,
  persist: true 
})
export type PersonalInfoStore = ReturnType<typeof usePersonalInfoStore>