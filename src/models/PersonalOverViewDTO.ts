import type { HealingPlanDTO } from './HealingPlanDTO'
export interface PersonalOverViewDTO {
  mainTitle: string
  description: string
  coreWoundsAndEmotionalThemes: string[]
  patternsAndStruggles: string[]
  healingAndTransformation: string[]
  spiritualWisdomAndGifts: string[]
  woundPoints: string[]
  patternsConnectedToThisWound: string[]
  healingBenefits: string[]
  healingPlans: HealingPlanDTO[]
}
