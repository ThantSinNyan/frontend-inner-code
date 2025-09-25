<script setup>
import { useRouter } from 'vue-router'
import { usePersonalInfoStore } from '@/stores/personalInfo'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth/auth'
const authStore = useAuthStore()
const router = useRouter()
const personalInfoStore = usePersonalInfoStore()
const personOverView = usePersonalInfoStore().data
onMounted(async () => {
  console.log('start loadPersonalInfos -->')
  await personalInfoStore.loadPersonalInfos({
    userId: authStore.user.id,
    birthDate: '1999-07-01',
    birthTime: '08:15',
    birthPlace: 'Myanmar, Dawei',
    language: 'English',
  })
   console.log('stop loadPersonalInfos -->')
})

function goToJourney(id) {
  router.push(`/birthChart/${id}`)
}
</script>
<template>
  <div class="hs_indx_title_main_wrapper">
    <div class="hs_title_img_overlay" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_left_wrapper">
            <h2>Transform Wounds Into Wisdom</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_right_wrapper">
            <ul>
                <li>
                  <router-link to="/">Home</router-link>
                  &nbsp;&nbsp;&nbsp;>
                </li>
              <li>Your Journey</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hs_title_main_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="hs_about_heading_main_wrapper">
            <div class="hs_about_heading_wrapper">
              <h2>Your Healing<span>Journey</span></h2>
              <h4><span>&nbsp;</span></h4>
             <p>
              Healing is not a single event—it is a lifelong journey.  
              <br />
              The deeper you understand yourself, the more fulfilling and graceful your life becomes.
            </p>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="hs_effect_btn">
            <ul>
              <li> <router-link class="hs_btn_hover" to="/birthDataPage">+ Create Journey</router-link></li>
            </ul>
          </div>
        </div>
        <div v-for="(item, index) in personalInfoStore.dataList" :key="index">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" @click="goToJourney(item.id)">
            <div class="hs_title_box_main_wrapper">
              <div class="hs_title_img_wrapper">
                <img src="/images/content/healing-card.jpg" alt="totle_img" />
                <ul>
                  <li>Round {{ index+1 }}</li>
                </ul>
              </div>
              <div class="hs_title_img_cont_wrapper">
                <h2><a href="#" @click="goToJourney(item.id)">{{ personalInfoStore.data.mainTitle }}</a></h2>
                <!-- <p>   {{ item.description?.split(' ').slice(0, 10).join(' ') || '' }}...</p> -->
                <h5>
                  <a href="javascript:void(0)" @click="goToJourney(item.id)">Go to Journey<i class="fa fa-long-arrow-right"></i></a>
                </h5>
              </div>
            </div>
          </div>

        </div>  
      </div>
    </div>
  </div>
</template>
<style>
.survey-container {
  max-width: 900px;
  margin: 400px auto 0; /* was 20px, now 40px */
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
