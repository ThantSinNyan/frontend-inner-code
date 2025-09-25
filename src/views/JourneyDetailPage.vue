<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { usePromptStore } from '@/stores/prompt'
import { usePersonalInfoStore } from '@/stores/personalInfo'
import { useMeditationStore } from '@/stores/meditation'
import { ref, watch } from 'vue'
import { formatDate } from '@/utils/dateUtils'
import type { PromptDTO } from '@/models/PromptDTO'
import CustomAlert from '@/components/Alert/CustomAlert.vue'
import type { MeditationMediaDTO } from '@/models/MeditationMediaDTO'
const showSuccessAlert = ref(false)
const personalInfoStore = usePersonalInfoStore()
const meditationStore = useMeditationStore()
const journeyPlans = personalInfoStore.data.healingPlans

const route = useRoute()
const router = useRouter()

const planId = ref(route.params.id)

const isCompleted = ref(false)
const isLoading = ref(false)

function toggleStatus() {
  isCompleted.value = !isCompleted.value
}

function goToJourney(id: number | string) {
  isLoading.value = true         
  planId.value = String(id)     

  setTimeout(() => {
    router.push(`/JourneyDetail/${id}`)
    isLoading.value = false      
  }, 500) 
}


const selectedPlan = ref(
  journeyPlans.find(plan => String(plan.id) === String(route.params.id))
)

watch(
  () => route.params.id,
  (newId) => {
    planId.value = newId
    selectedPlan.value = journeyPlans.find(
      (plan) => String(plan.id) === String(newId)
    )
  }
)


const promptStore = usePromptStore()

async function submitAnswers() {
  if (!selectedPlan.value) return

  const payload: PromptDTO[] = selectedPlan.value.prompts.map((p) => ({
    id: p.id,
    question: p.question,
    answer: p.answer,
    status: 'COMPLETED'
  }))

  await promptStore.savePromptAnswers(payload)
  showSuccessAlert.value = true
  isCompleted.value = true
  await personalInfoStore.loadPersonalInfoById({
    id: personalInfoStore.data.id,
    userId: '',
    nameOne: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    language: ''
  })
}

async function markMeditationComplete() {
  if (!selectedPlan.value) return
  const meditationMedia: MeditationMediaDTO = {
    id: 0,
    planId: selectedPlan.value.id,
    status: 'COMPLETED',
    videoLink: selectedPlan.value.meditation, 
    imgLink: '',
    name: selectedPlan.value.activity,
    description: selectedPlan.value.overview,
  }
  await meditationStore.saveMeditationMedia(meditationMedia)
  selectedPlan.value.status = 'COMPLETED'
}


const videoMap: Record<string, string> = {
  "Meeting Your Inner Healer": "https://www.youtube.com/embed/AmK_clZ579M",
  "Releasing the Old Story": "https://www.youtube.com/embed/8Oi3iUJkwFM",
  "Inner Child Connection & Comfort": "https://www.youtube.com/embed/9fvN_Yt9kgo",
  "Strength from the Scar": "https://www.youtube.com/embed/7g96Zq9NSqo",
  "Heart-Centered Self-Compassion": "https://www.youtube.com/embed/vtOAnC73xtk",
  "Grounding & Safety in the Body": "https://www.youtube.com/embed/WjCHRliwZjY",
  "Embracing the Whole Self": "https://www.youtube.com/embed/6jiOQT4P9Cc",
  "Healing Ancestral Roots": "https://www.youtube.com/embed/CmlsWfU-UTc",
  "Forgiveness Practice": "https://www.youtube.com/embed/vtOAnC73xtk",
  "Sacred Boundaries": "https://www.youtube.com/embed/8Oi3iUJkwFM",
  "Gratitude Presence": "https://www.youtube.com/embed/WMzsdMsnxN4",
  "Body as Sanctuary": "https://www.youtube.com/embed/7g96Zq9NSqo",
  "Breath of Release": "https://www.youtube.com/embed/iFqC2DfTOys",
  "Visioning Your Higher Path": "https://www.youtube.com/embed/WMzsdMsnxN4",
  "Compassion for Others": "https://www.youtube.com/embed/-GltqLKq5-g",
  "Shadow Integration": "https://www.youtube.com/embed/6jiOQT4P9Cc",
  "Stillness in Spirit": "https://www.youtube.com/embed/ya4nu7vDqH4",
}

const imageMap: Record<string, string> = {
  "Meeting Your Inner Healer": "Meeting_Your_Inner_Healer.jpg",
  "Releasing the Old Story": "Releasing_the_Old_Story.png",
  "Inner Child Connection & Comfort": "Inner_child_connections_and_Comfort.png",
  "Strength from the Scar": "Strength_from_the_Scar.png",
  "Heart-Centered Self-Compassion": "Heart_Centered_Self_Compassion.png",
  "Grounding & Safety in the Body": "Grounding_Safety_in_the_Body.png",
  "Embracing the Whole Self": "Embracing_the_Whole_Self.png",
  "Healing Ancestral Roots": "Healing_Ancestral_Roots.png",
  "Forgiveness Practice": "Forgiveness_Practice.png",
  "Sacred Boundaries": "Sacred_Boundaries.png",
  "Gratitude Presence": "Gratitude_Presence.png",
  "Body as Sanctuary": "Body_as_Sanctuary.png",
  "Breath of Release": "Breath_of_Release.png",
  "Visioning Your Higher Path": "Visioning_Your_Higher_Path.png",
  "Compassion for Others": "Compassion_for_Others.png",
  "Shadow Integration": "Shadow_Integration.png",
  "Stillness in Spirit": "Stillness_in_Spirit.png",
}

</script>

<template>
  <div class="hs_indx_title_main_wrapper">
    <div class="hs_title_img_overlay" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_left_wrapper">
            <h2>{{selectedPlan.activity}}</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_right_wrapper">
            <ul>
              <li><a href="#">Reflective Question</a> &nbsp;&nbsp;&nbsp;></li>
              <li>Healing Journey Detail</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hs_blog_categories_main_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div class="hs_blog_left_sidebar_main_wrapper">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="hs_blog_box1_main_wrapper">
                  <div class="hs_blog_box1_img_wrapper">
                   <img
                      :src="`/images/content/day/${imageMap[selectedPlan?.meditation] || 'default.png'}`"
                      alt="blog_img"
                      height="300"
                    />
                     <div class="overlay-heading">
                        <h2>The Healing Power of your mind</h2>
                        <h1>{{selectedPlan.affirmation}}</h1>
                        <p>by The InnerCode</p>
                    </div>
                    <ul>
                      <li>{{ formatDate(selectedPlan.createdAt) }}</li>
                    </ul>
                  </div>
                  <div class="hs_blog_box1_cont_main_wrapper">
                    <div class="hs_lest_news_meta_wrapper">
                      <ul>
                        <li>
                          <a href="#">By - TheInnerCode</a>
                        </li>
                      </ul>
                    </div>
                    <div class="hs_blog_cont_heading_wrapper">
                      <h2>
                        {{selectedPlan.meditation}}
                      </h2>
                      <h4><span>&nbsp;</span></h4>
                      <p>
                       {{selectedPlan.overview}}
                      </p>
                      <h5>
                        <a href="#">Read More <i class="fa fa-long-arrow-right" /></a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="hs_blog_box1_main_wrapper hs_blog_box2_main_wrapper">
                  <div class="hs_blog_box1_img_wrapper">
                   <iframe
                        v-if="videoMap[selectedPlan?.meditation]"
                        :src="videoMap[selectedPlan.meditation]"
                        frameborder="0"
                        allowfullscreen
                      />
                    <ul>
                      <li>{{ formatDate(selectedPlan.createdAt) }}</li>
                    </ul>
                  </div>
                  <div class="hs_blog_box1_cont_main_wrapper">
                    <div class="hs_lest_news_meta_wrapper">
                      <ul>
                        <li>
                          <a href="#">By - TheInnerCode</a>
                        </li>
                        <li>
                          <a href="#">256 Comments</a>
                        </li>
                      </ul>
                    </div>
                    <div class="hs_blog_cont_heading_wrapper">
                      <h2>Rules and Guidelines Before You Meditate</h2>
                      <h4><span>&nbsp;</span></h4>
                      <p>
                        Find a Quiet Space Choose a place where you won’t be disturbed—peaceful,
                        clean, and free from distractions. Silence Your Phone and Devices Turn off
                        notifications and sounds to fully focus inward. Sit or Lie Down Comfortably
                        Use a cushion, chair, or yoga mat—whatever allows your body to relax without
                        tension. Wear Comfortable Clothing Avoid tight or restrictive clothes;
                        choose something soft and breathable. Avoid Heavy Meals
                      </p>
                      <button 
                        class="btn-purple-small"
                        :class="{ completed: selectedPlan?.status === 'COMPLETED' }"
                        @click="markMeditationComplete"
                      >
                        {{ selectedPlan?.status === 'COMPLETED' ? 'Completed' : 'Mark as Complete' }}
                      </button>

                    </div>
                  </div>
                </div>
              </div>
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="hs_blog_box1_main_wrapper hs_blog_box2_main_wrapper">
                 
                  <div class="hs_blog_box1_cont_main_wrapper">
                    <div class="hs_lest_news_meta_wrapper">
                      <ul>
                        <li>
                          <a href="#">By - TheInnerCode</a>
                        </li>
                        <li>
                          <a href="#">Journaling Prompt Section</a>
                        </li>
                        <li>
                          <button 
                              class="btn-purple-icon"
                              :class="{ completed: isCompleted }"
                              @click="toggleStatus"
                            >
                              {{ isCompleted ? 'Complete' : 'In Progress' }}
                           </button>
                        </li>
                      </ul>
                    </div>
                    <div class="hs_blog_cont_heading_wrapper">
                    <div 
                          v-for="(prompt, index) in selectedPlan.prompts" 
                          :key="prompt.id || index" 
                          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        >
                          <h4 style="margin-top: 30px;">
                            {{ prompt.question }}
                          </h4>

                          <div class="hs_kd_six_sec_input_wrapper i-message">
                            <textarea
                              rows="5"
                              v-model="prompt.answer" 
                              name="message"
                              class="require"
                              :placeholder="`Comments for question ${index + 1}`"
                            ></textarea>
                          </div>
                        </div>
                    </div>
                      <button class="submit-btn" @click="submitAnswers">Submit Answers</button>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div class="hs_blog_right_sidebar_main_wrapper">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="hs_blog_right_search_wrapper">
                  <input type="text" placeholder="Search" />
                  <button type="submit"><i class="fa fa-search" /></button>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="hs_blog_right_cate_list_heading_wrapper hs_vs_list_wrapper">
                  <h2>Healing Journey</h2>
                </div>
                <div class="hs_blog_right_cate_list_cont_wrapper">
                  <ul>
                    <li
                      v-for="(plan, index) in journeyPlans"
                      :key="plan.id"
                    >
                  <a
                    href="#"
                    class="journey-link"
                    :class="{
                      completed: plan.status === 'COMPLETED',
                      'active-plan': String(plan.id) === String(planId)
                    }"
                    @click.prevent="goToJourney(plan.id)"
                  >
                    Day {{ index + 1 }}: {{ plan.activity }}
                  </a>
                    </li>
                  </ul>
                </div>
              </div>
              <CustomAlert
                :visible="showSuccessAlert"
                type="success"
                title="🎉 Congratulations!"
                message="You have successfully submitted your reflective answers. Your healing journey prompt activity is complete."
                button-text="OK"
                @confirm="showSuccessAlert = false"
              />
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 visible-sm visible-xs">
                <div class="pager_wrapper">
                  <ul class="pagination">
                    <li>
                      <a href="#"><i class="fa fa-angle-left" /></a>
                    </li>
                    <li class="btc_shop_pagi"><a href="#">01</a></li>
                    <li class="btc_shop_pagi"><a href="#">02</a></li>
                    <li class="btc_third_pegi btc_shop_pagi"><a href="#">03</a></li>
                    <li class="hidden-xs btc_shop_pagi"><a href="#">04</a></li>
                    <li>
                      <a href="#"><i class="fa fa-angle-right" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isLoading" class="loading-overlay">
  <div class="loading-spinner"></div>
</div>
</template>
<style scope>
.hs_blog_right_cate_list_cont_wrapper li a.active-plan {
  border: 2px solid #75429c;
  color: #75429c;
}
.hs_blog_box1_img_wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.hs_blog_box1_img_wrapper img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}

/* Centered text */
.overlay-heading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white !important;; 
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6); /* makes white text readable on bright images */
}

.overlay-heading h2 {
  font-size: 18px;
  letter-spacing: 3px;
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.overlay-heading h1 {
  font-size: 27px;
  font-weight: bold;
  font-family: 'Georgia', serif;
  margin: 0;
}

.overlay-heading p {
  margin-top: 12px;
  font-size: 16px;
  font-style: italic;
}
.overlay-heading h2,
.overlay-heading h1,
.overlay-heading p {
  color: white !important; 
}

.loading-spinner {
  border: 6px solid rgba(117, 66, 156, 0.2); 
  border-top: 6px solid #75429c; 
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}



</style>
