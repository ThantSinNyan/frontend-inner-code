import type { PromptDTO } from './PromptDTO'

export interface HealingPlanDTO {
  id: number
  overview: string
  activity: string
  meditation: string
  status: string
  affirmation: string
  createdAt: string
  prompts: PromptDTO[]
}
