import { defineStore } from 'pinia'
import { actions } from './action'
import type { MeditationMediaDTO } from '@/models/MeditationMediaDTO'

export const useMeditationStore = defineStore('meditationMedia', {
  state: () => ({
    meditationMedia: {} as MeditationMediaDTO,
  }),
  actions,
})