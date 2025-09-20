import type { HealingPlanDTO } from './HealingPlanDTO'
import type {ReflectiveQuestionDTO} from './ReflectiveQuestionDto'
export interface PersonalOverViewDTO {
  id: string
  sign: string
  mainTitle: string
  description: string
  coreWoundsAndEmotionalThemes: string[]
  patternsAndStruggles: string[]
  healingAndTransformation: string[]
  spiritualWisdomAndGifts: string[]
  woundPoints: string[]
  patternsConnectedToThisWound: string[]
  healingBenefits: string[]
  subscription: string
  reflectiveQuestionDTOs: ReflectiveQuestionDTO[]
  healingPlans: HealingPlanDTO[]
}
