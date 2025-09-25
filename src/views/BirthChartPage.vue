<script setup lang="ts">
import { usePersonalInfoStore } from '@/stores/personalInfo'
import CustomAlert from '@/components/Alert/CustomAlert.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { onMounted,reactive,computed,ref } from 'vue'
import type { PersonalFormDTO } from '@/models/PersonalFormDTO'
const personalInfoStore = usePersonalInfoStore()
const personOverView = computed(() => personalInfoStore.data)
import { useRoute,useRouter } from 'vue-router'
const showSuccessAlert = ref(false)
const route = useRoute()
const journeyId = route.params.id 
const router = useRouter()
const formState = reactive<
  PersonalFormDTO & {
    nameOne: string
    gender: string
    agree: boolean
  }
>({
  id: journeyId+"",
  userId: '',
  nameOne: '',
  gender: '',
  birthDate: '',
  birthTime: '',
  birthPlace: '',
  language: '',
  agree: false,
})

const zodiacIcons: Record<string, string> = {
  aries: '/images/content/icon1.png',
  taurus: '/images/content/icon2.png',
  gemini: '/images/content/icon3.png',
  cancer: '/images/content/icon4.png',
  leo: '/images/content/icon5.png',
  virgo: '/images/content/icon6.png',
  libra: '/images/content/icon7.png',
  scorpio: '/images/content/icon8.png',
  sagittarius: '/images/content/icon9.png',
  capricorn: '/images/content/icon10.png',
  aquarius: '/images/content/icon11.png',
  pisces: '/images/content/icon12.png',
}

const zodiacIcon = computed(() => {
  const sign = personOverView.value.sign?.toLowerCase() || ''
  return zodiacIcons[sign] || '/images/content/default.png'
})

onMounted(async () => {
  if (journeyId) {
    await personalInfoStore.loadPersonalInfoById(formState)
  }else{
    formState.id=personOverView.value.id
     await personalInfoStore.loadPersonalInfoById(formState)
  }
})

function goToJourney(id: number | string) {
   if (personOverView.value.subscription === 'NONE') {
     showSuccessAlert.value = true
    return
  }
  router.push(`/JourneyDetail/${id}`)
}
function closeAlert() {
  showSuccessAlert.value = false
}
</script>
<template>
  <div class="hs_indx_title_main_wrapper">
    <div class="hs_title_img_overlay" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_left_wrapper">
            <h2>{{ t('journey.journeyOverview') }}</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  full_width">
          <div class="hs_indx_title_right_wrapper">
            <ul>
              <li><a href="#"> {{ t('journey.birthData') }}</a> &nbsp;&nbsp;&nbsp;> </li>
              <li> {{ t('journey.journeyOverview') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hs_sign_main_wrapper">
    <div class="container">
      <div class="hs_sign_heading_wrapper">
        <div class="hs_about_heading_main_wrapper">
          <div class="hs_about_heading_wrapper">
            <h2> <span> {{ t('journey.chironAndHousePlacement') }}</span></h2>
            <h4><span /></h4>
            <p>{{ t('journey.about') }}</p>
          </div>
        </div>
      </div>
      <div class="hs_sign_center_wrapper visible-xs visible-sm">
        <div class="hs_cycle_main_wrapper">
          <div class="hs_cycle_img">
            <img
              src="/images/content/cycle_logo_5.png"
              alt="circle_img"
            >
            <span class="pulse" />
            <div class="hs_tab_shap1">
              <a href="#">
                <svg
                  id="Layer_1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-taurus-astrological-sign-symbol" /></p>
              </a>
            </div>
            <div class="hs_tab_shap2">
              <a href="#">
                <svg
                  id="Layer_2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-aries-sign" /></p>
              </a>
            </div>
            <div class="hs_tab_shap3">
              <a href="#">
                <svg
                  id="Layer_3"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-libra" /></p>
              </a>
            </div>
            <div class="hs_tab_shap4">
              <a href="#">
                <svg
                  id="Layer_4"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-scorpio" /></p>
              </a>
            </div>
            <div class="hs_tab_shap5">
              <a href="#">
                <svg
                  id="Layer_5"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-leo" /></p>
              </a>
            </div>
            <div class="hs_tab_shap6">
              <a href="#">
                <svg
                  id="Layer_6"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-capricorn" /></p>
              </a>
            </div>
            <div class="hs_tab_shap7">
              <a href="#">
                <svg
                  id="Layer_7"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-aquarius-zodiac-sign-symbol" /></p>
              </a>
            </div>
            <div class="hs_tab_shap8">
              <a href="#">
                <svg
                  id="Layer_8"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-gemini-zodiac-sign-symbol" /></p>
              </a>
            </div>
            <div class="hs_tab_shap9">
              <a href="#">
                <svg
                  id="Layer_9"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-virgo-astrological-symbol-sign" /></p>
              </a>
            </div>
            <div class="hs_tab_shap10">
              <a href="#">
                <svg
                  id="Layer_10"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-leo" /></p>
              </a>
            </div>
            <div class="hs_tab_shap11">
              <a href="#">
                <svg
                  id="Layer_11"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-cancer" /></p>
              </a>
            </div>
            <div class="hs_tab_shap12">
              <a href="#">
                <svg
                  id="Layer_12"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-gemini-zodiac-sign-symbol" /></p>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div class="hs_sign_left_wrapper">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_border_wrapper1">
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-aries-sign" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Aries</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <span />
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_left_tabs_border_wrapper2">
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-taurus-astrological-sign-symbol" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Taurus</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <span />
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_left_tabs_border_wrapper3">
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-gemini-zodiac-sign-symbol" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Gemini</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <span />
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_left_tabs_border_wrapper4">
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-cancer" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Cancer</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <span />
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_left_tabs_border_wrapper5">
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-leo" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Leo</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <span />
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_left_tabs_border_wrapper6">
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-virgo-astrological-symbol-sign" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Virgo</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <span />
            </div>
          </div>
        </div>
      </div>
      <div class="hs_sign_right_wrapper visible-xs">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_right_tabs_border_wrapper1">
              <span />

              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-libra" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Libra</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper2">
              <span />
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-scorpio" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Scorpio</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper3">
              <span />
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-sagittarius-arrow-sign" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Sagittarius</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper4">
              <span />
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-capricorn" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >
                    Capricorn
                  </a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper5">
              <span />
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-aquarius-zodiac-sign-symbol" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >
                    Aquarius
                  </a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper6">
              <span />
              <div class="hs_slider_tabs_icon_wrapper sagit-icon">   	
                <i class="flaticon-pisces-astrological-sign" />
              </div>
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Pisces
                  </a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hs_sign_center_wrapper hidden-sm hidden-xs">
        <div class="hs_cycle_main_wrapper">
          <div class="hs_cycle_img">
            <img
              src="/images/content/cycle_logo_5.png"
              alt="circle_img"
            >
            <span class="pulse" />
            <div class="hs_tab_shap1">
              <a href="#">
                <svg
                  id="Layer_13"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-taurus-astrological-sign-symbol" /></p>
              </a>
            </div>
            <div class="hs_tab_shap2">
              <a href="#">
                <svg
                  id="Layer_14"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-aries-sign" /></p>
              </a>
            </div>
            <div class="hs_tab_shap3">
              <a href="#">
                <svg
                  id="Layer_15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-libra" /></p>
              </a>
            </div>
            <div class="hs_tab_shap4">
              <a href="#">
                <svg
                  id="Layer_16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-scorpio" /></p>
              </a>
            </div>
            <div class="hs_tab_shap5">
              <a href="#">
                <svg
                  id="Layer_17"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p>  <i class="flaticon-sagittarius-arrow-sign" /> </p>
              </a>
            </div>
            <div class="hs_tab_shap6">
              <a href="#">
                <svg
                  id="Layer_18"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-capricorn" /></p>
              </a>
            </div>
            <div class="hs_tab_shap7">
              <a href="#">
                <svg
                  id="Layer_19"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-aquarius-zodiac-sign-symbol" /></p>
              </a>
            </div>
            <div class="hs_tab_shap8">
              <a href="#">
                <svg
                  id="Layer_20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p> <i class="flaticon-pisces-astrological-sign" /> </p>
              </a>
            </div>
            <div class="hs_tab_shap9">
              <a href="#">
                <svg
                  id="Layer_21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-virgo-astrological-symbol-sign" /></p>
              </a>
            </div>
            <div class="hs_tab_shap10">
              <a href="#">
                <svg
                  id="Layer_22"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-leo" /></p>
              </a>
            </div>
            <div class="hs_tab_shap11">
              <a href="#">
                <svg
                  id="Layer_23"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-cancer" /></p>
              </a>
            </div>
            <div class="hs_tab_shap12">
              <a href="#">
                <svg
                  id="Layer_24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="68.811px"
                  height="64.729px"
                  viewBox="0 0 68.811 64.729"
                  enable-background="new 0 0 68.811 64.729"
                  xml:space="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0,52.763c0,0,26.125,0.367,42.664,11.967l26.147-46.796
							c0,0-30.278-18.234-68.054-17.929L0,52.763z"
                  />
                </svg>
                <p><i class="flaticon-gemini-zodiac-sign-symbol" /></p>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div class="hs_sign_right_wrapper hidden-xs">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_right_tabs_border_wrapper1">
              <span />
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Libra</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-libra" />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper2">
              <span />
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Scorpio</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-scorpio" />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper3">
              <span />
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Sagittarius</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-sagittarius-arrow-sign" />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper4">
              <span />
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Capricorn</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-capricorn" />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper5">
              <span />
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Aquarius</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <div class="hs_slider_tabs_icon_wrapper">
                <i class="flaticon-aquarius-zodiac-sign-symbol" />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_wrapper_2 hs_sign_right_tabs_border_wrapper6">
              <span />
              <div class="hs_slider_tabs_icon_cont_wrapper">
                <ul>
                  <li><a
                    href="#"
                    class="hs_tabs_btn"
                  >Pisces</a></li>
                  <li>31 March - 12 October</li>
                </ul>
              </div>
              <div class="hs_slider_tabs_icon_wrapper sagit-icon">
                <i class="flaticon-pisces-astrological-sign" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->


  </div>
  <div class="hs_kd_sidebar_main_wrapper hs_num_sidebar_main_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div class="hs_kd_left_sidebar_main_wrapper">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="hs_sign_left_tabs_wrapper hs_sign_left_tabs_border_wrapper1">
                  <div class="hs_slider_tabs_icon_wrapper">
                    <i class="flaticon-aries-sign" />
                  </div>
                  <div class="hs_slider_tabs_icon_cont_wrapper hs_ar_tabs_heading_wrapper">
                    <ul>
                      <li><a
                        href="#"
                        class="hs_tabs_btn"
                      >{{ personOverView.mainTitle }}</a></li>
                      <li>31 March - 12 October</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="hs_ar_first_sec_wrapper">
                  <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                      <div class="hs_sign_box-overview">
                          <div class="sign_box_img">
                            <img :src="zodiacIcon" :alt="personOverView.sign" />
                          </div>
						           </div>
                    </div>
                   <br></br>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                      <div class="hs_ar_first_sec_img_cont_wrapper">
                        <p>{{personOverView.description}}</p>
                      </div>
                    </div>
                   
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="hs_pr_second_cont_wrapper hs_ar_second_sec_cont_list_wrapper">
                        <ul>
                          <li>
                            <div class="hs_pr_icon_wrapper">
                              <i class="fa fa-circle" />
                            </div>
                            <div class="hs_pr_icon_cont_wrapper hs_ar_icon_cont_wrapper">
                              <p>
                                <span>{{ t('journey.coreWoundEmotionalThemes') }} : </span> 
                                  <template v-for="(item, index) in personOverView.coreWoundsAndEmotionalThemes" :key="index">
                                    {{ item }}<span v-if="index < personOverView.coreWoundsAndEmotionalThemes.length - 1">, </span>
                                  </template>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="hs_pr_icon_wrapper">
                              <i class="fa fa-circle" />
                            </div>
                            <div class="hs_pr_icon_cont_wrapper hs_ar_icon_cont_wrapper">
                              <p><span>{{ t('journey.patternsStruggles') }} : </span> 
                                 <template v-for="(item, index) in personOverView.patternsAndStruggles" :key="index">
                                    {{ item }}<span v-if="index < personOverView.patternsAndStruggles.length - 1">, </span>
                                 </template>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="hs_pr_icon_wrapper">
                              <i class="fa fa-circle" />
                            </div>
                            <div class="hs_pr_icon_cont_wrapper hs_ar_icon_cont_wrapper">
                              <p><span>{{ t('journey.healingTransformation') }}  : </span> 
                                 <template v-for="(item, index) in personOverView.healingAndTransformation" :key="index">
                                    {{ item }}<span v-if="index < personOverView.healingAndTransformation.length - 1">, </span>
                                 </template>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="hs_pr_icon_wrapper">
                              <i class="fa fa-circle" />
                            </div>
                            <div class="hs_pr_icon_cont_wrapper hs_ar_icon_cont_wrapper">
                              <p><span>{{ t('journey.spiritualWisdomGifts') }} : </span> 
                                <template v-for="(item, index) in personOverView.spiritualWisdomAndGifts" :key="index">
                                    {{ item }}<span v-if="index < personOverView.spiritualWisdomAndGifts.length - 1">, </span>
                                 </template>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                   <div class="row">
                    <!-- Column 1: Wound Points -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="hs_pr_second_cont_wrapper">
                        <h2>{{ t('journey.woundPoints') }}</h2>
                        <ul>
                          <li v-for="(point, index) in personOverView.woundPoints" :key="index">
                            <div class="hs_pr_icon_wrapper">
                              <i class="fa fa-circle" />
                            </div>
                            <div class="hs_pr_icon_cont_wrapper">
                              {{ point }}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <!-- Column 2: Patterns -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="hs_pr_second_cont_wrapper">
                        <h2>{{ t('journey.patterns') }}</h2>
                        <ul>
                          <li v-for="(point, index) in personOverView.patternsConnectedToThisWound" :key="index">
                            <div class="hs_pr_icon_wrapper">
                              <i class="fa fa-circle" />
                            </div>
                            <div class="hs_pr_icon_cont_wrapper">
                              {{ point }}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <!-- Column 3: Benefits -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="hs_pr_second_cont_wrapper">
                        <h2>{{ t('journey.benefits') }}</h2>
                        <ul>
                          <li v-for="(point, index) in personOverView.healingBenefits" :key="index">
                            <div class="hs_pr_icon_wrapper">
                              <i class="fa fa-circle" />
                            </div>
                            <div class="hs_pr_icon_cont_wrapper">
                              {{ point }}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="hs_kd_six_sec_btn">
                        <ul> 
                          <li v-if="personOverView.subscription === 'NONE'">
                            <router-link class="hs_btn_hover" to="/reflectiveQuestion">
                              {{ t('journey.refecletiveQuestion') }}
                            </router-link>
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
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div class="hs_kd_right_sidebar_main_wrapper">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="hs_kd_right_first_sec_wrapper">
                  <div class="hs_kd_right_first_sec_heading">
                    <h2>Healing Journey</h2>
                  </div>
                  <div class="hs_blog_right_cate_list_cont_wrapper">
                    <ul>
                      <li v-for="(plan, index) in personOverView.healingPlans" :key="plan.id">
                        <a
                          href="#"
                         :class="{ completed: plan.status === 'COMPLETED', disabled: personOverView.subscription === 'NONE' }"
                          @click.prevent="goToJourney(plan.id)"
                        >
                          Day {{ index + 1 }}: {{ plan.activity }}
                        </a>
                      </li>
                      <li>
                        <a href="#">Final Analysis</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>        
            </div>
          </div>
        </div>
           <CustomAlert
              :visible="showSuccessAlert"
              type="warning"
              title="⚠ Access to Healing Plan"
              message="To unlock your healing plan, please take a moment to complete our reflective
                      questions. Your honest answers will help us personalize your journey."
              button-text="OK"
              @confirm="closeAlert"
            />
      </div>
    </div>
  </div>
</template>