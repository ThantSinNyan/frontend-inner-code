import { defineStore } from 'pinia'
import { actions } from './action'
import type { PromptDTO } from '@/models/PromptDTO'

export const usePromptStore = defineStore('prompt', {
  state: () => ({
    prompts: [] as PromptDTO[],
  }),
  actions,
})