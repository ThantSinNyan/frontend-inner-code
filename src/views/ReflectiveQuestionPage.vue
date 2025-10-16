<script setup lang="ts">
import { useRouter} from 'vue-router'
import { usePersonalInfoStore } from '@/stores/personalInfo'
import CustomAlert from '@/components/Alert/CustomAlert.vue'
import { ref } from 'vue'
const personalInfoStore = usePersonalInfoStore()
const reflectiveQuestions=personalInfoStore.data.reflectiveQuestionDTOs
const journeyPlanDay1=personalInfoStore.data.healingPlans[0].id
const router = useRouter()
const answers = ref<Record<number, string>>({})
const showSuccessAlert = ref(false)
const answerMap: Record<string, string> = {
  'Strongly Disagree': 'STRONGLY_DISAGREE',
  'Disagree': 'DISAGREE',
  'Neutral': 'NEUTRAL',
  'Agree': 'AGREE',
  'Strongly Agree': 'STRONGLY_AGREE'
}
function selectAnswer(questionId: number, value: string) {
  answers.value[questionId] = value
}

async function submitAnswers() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  const numericAnswers: Record<string, string> = {}
  for (const [id, text] of Object.entries(answers.value)) {
    numericAnswers[id] = answerMap[text] ?? 'NOT_ANSWER'
  }
  await personalInfoStore.saveReflectiveAnswers(numericAnswers)
  showSuccessAlert.value = true
}
function closeAlert() {
  showSuccessAlert.value = false
  router.push('/showAllJourney')
}
</script>
<template>
  <div class="hs_indx_title_main_wrapper">
    <div class="hs_title_img_overlay" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_left_wrapper">
            <h2>Reflect on Your Reading Experience</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_right_wrapper">
            <ul>
              <li><a href="#">Birth Chart</a> &nbsp;&nbsp;&nbsp;></li>
              <li>Reflective Question</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="survey-container">
    <h2>How Did This Reading Resonate With You?</h2>
    <div
        v-for="(question, index) in reflectiveQuestions"
        :key="question.id"
        class="question-card"
      >

       <p>{{ index + 1 }}. {{ question.question }}</p>
      <div class="options">
       <label
          v-for="option in ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree']"
          :key="option"
          class="option"
        >
         <input
            type="radio"
            :name="'q' + question.id"
            :value="option"
            :checked="answers[question.id] === option"
            @change="selectAnswer(question.id, option)"
          />
          <span class="custom-radio"></span>
          {{ option }}
        </label>
      </div>
    </div>
   <button class="submit-btn" @click="submitAnswers">Submit Answers</button>
     <CustomAlert
        :visible="showSuccessAlert"
        type="success"
        title="✅ Thank you for your answer!"
        message="You will now get a free trial to use your healing journey."
        button-text="OK"
        :onConfirm="closeAlert"
      />
  </div>
</template>
<style scoped>

.survey-container {
  max-width: 900px;
  margin: 400px auto 0;
  padding: 30px;
  font-family: 'Segoe UI', Roboto, sans-serif;
}

.survey-container h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: 600;
  color: #1f1f1f;
}

.question-card {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease;
}

.question-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.question-card p {
  font-weight: 500;
  margin-bottom: 15px;
  color: #262626;
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.option {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #444;
}

.option input[type='radio'] {
  display: none;
}

.custom-radio {
  width: 18px;
  height: 18px;
  border: 2px solid #7b3fa0;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  transition: all 0.3s ease;
}

.option input[type='radio']:checked + .custom-radio {
  background: #7b3fa0;
  border-color: #7b3fa0;
}

.option input[type='radio']:checked + .custom-radio::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
}

.submit-btn {
  display: block;
  margin: 30px auto 0;
  padding: 12px 40px;
  background: #7b3fa0;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #582b75;
}
</style>
