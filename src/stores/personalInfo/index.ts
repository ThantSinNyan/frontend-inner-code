import { defineStore } from 'pinia'
import { actions } from './actions'

export const usePersonalInfoStore = defineStore('personalInfo', {
  state: () => ({
    data: {} as Record<string, unknown>
  }),
  actions
})

export type PersonalInfoStore = ReturnType<typeof usePersonalInfoStore>