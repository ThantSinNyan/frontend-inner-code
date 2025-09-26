<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePersonalInfoStore } from '@/stores/personalInfo'
import type { PersonalFormDTO } from '@/models/PersonalFormDTO'
import { useLoadingStore } from '@/stores/personalInfo/root'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/personalInfo/root'
import { useAuthStore } from '@/stores/auth/auth'
const { t } = useI18n()
const loadingStore = useLoadingStore()
const languageStore = useLanguageStore()
const router = useRouter()
const personalInfoStore = usePersonalInfoStore()
const authStore = useAuthStore()

const formState = reactive<
  PersonalFormDTO & {
    nameOne: string
    gender: string
    agree: boolean
  }
>({
  id:'',
  userId: '',
  nameOne: '',
  gender: '',
  birthDate: '',
  birthTime: '',
  birthPlace: '',
  language: '',
  agree: false,
})

const userIdFromStore = authStore.user?.id

const errors = reactive({
  nameOne: false,
  gender: false,
  birthDate: false,
  birthTime: false,
  birthPlace: false,
  language: false,
  agree: false,
})
const validateForm = () => {
  errors.nameOne = !formState.nameOne.trim()
  errors.gender = !formState.gender
  errors.birthDate = !formState.birthDate
  errors.birthTime = !formState.birthTime.trim()
  errors.birthPlace = !formState.birthPlace.trim()
  errors.language = !formState.language
  errors.agree = !formState.agree

  return !Object.values(errors).some((e) => e) 
}

const fetchDataAndNavigate = async () => {
  if (!validateForm()) {
    return
  }

  loadingStore.start()
  try {
    formState.userId = userIdFromStore
    await personalInfoStore.loadAndSavePersonalInfo(formState)
    if (personalInfoStore.data?.id) {
      router.push(`/birthChart/${personalInfoStore.data.id}`)
    } else {
      console.error('No ID returned from backend')
    }
  } catch (err) {
    console.error(err)
  } finally {
    loadingStore.stop()
  }
}

watch(
  () => languageStore.language,
  (newLang) => {
    formState.language = newLang === 'en' ? 'English' : 'Myanmar'
  },
  { immediate: true }
)
</script>
<template>
  <div class="slider-area">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="carousel-captions caption-1">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="content">
                    <h1 data-animation="animated bounceInLeft">{{ t('birthData.title') }}</h1>
                    <h2 data-animation="animated zoomInDown">{{ t('birthData.subTitle') }}</h2>
                    <p data-animation="animated bounceInUp">{{ t('birthData.description') }}</p>
                    <div class="hs_effect_btn">
                      <ul>
                        <li data-animation="animated flipInX">
                          <a href="#" class="hs_btn_hover">{{ t('birthData.btnReadMore') }}</a>
                        </li>
                      </ul>
                    </div>
                    <div class="clear" />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-xs">
                  <div class="content_tabs">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div
                          class="hs_slider_right_tabs_wrapper hs_slider_right_tabs_wrapper2"
                          data-animation="animated bounceInRight hs_slider_tab_tow"
                        >
                          <div class="hs_slider_tabs_icon_wrapper">
                            <i class="flaticon-home" />
                          </div>
                          <div class="hs_slider_tabs_icon_cont_wrapper">
                            <ul>
                              <li>
                                <a href="#" class="hs_tabs_btn">{{
                                  t('birthData.healingCategory.family')
                                }}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div
                          class="hs_slider_right_tabs_wrapper hs_slider_right_tabs_wrapper2 right_tab"
                          data-animation="animated bounceInLeft hs_slider_tab_three"
                        >
                          <div class="hs_slider_tabs_icon_wrapper">
                            <i class="flaticon-avatar" />
                          </div>
                          <div class="hs_slider_tabs_icon_cont_wrapper">
                            <ul>
                              <li>
                                <a href="#" class="hs_tabs_btn">{{
                                  t('birthData.healingCategory.presonality')
                                }}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-lg-offset-2">
                        <div class="slider_bottom_tab">
                          <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div
                                class="hs_slider_right_tabs_wrapper hs_slider_right_tabs_wrapper2"
                                data-animation="animated bounceInRight hs_slider_tab_four"
                              >
                                <div class="hs_slider_tabs_icon_wrapper">
                                  <i class="flaticon-shapes" />
                                </div>
                                <div class="hs_slider_tabs_icon_cont_wrapper">
                                  <ul>
                                    <li>
                                      <a href="#" class="hs_tabs_btn">{{
                                        t('birthData.healingCategory.relationship')
                                      }}</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div
                                class="hs_slider_right_tabs_wrapper hs_slider_right_tabs_wrapper2"
                                data-animation="animated bounceInLeft hs_slider_tab_fifth"
                              >
                                <div class="hs_slider_tabs_icon_wrapper">
                                  <i class="flaticon-coins" />
                                </div>
                                <div class="hs_slider_tabs_icon_cont_wrapper">
                                  <ul>
                                    <li>
                                      <a href="#" class="hs_tabs_btn">{{
                                        t('birthData.healingCategory.career')
                                      }}</a>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-nevigation">
          <a class="prev" href="#carousel-example-generic" role="button" data-slide="prev">
            <i class="fa fa-sign-out" />
          </a>
          <a class="next" href="#carousel-example-generic" role="button" data-slide="next">
            <i class="fa fa-sign-in" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="hs_sign_main_wrapper">
    <!-- hs_slider_bottom_wrapper Start -->
    <div class="hs_slider_bottom_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_slider_bottom_box">
              <div class="container">
                <form>
                  <div class="row">
                    <!-- Column 1 -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>{{ t('birthData.birthDataForm.name') }}</label>
                        <input
                          v-model="formState.nameOne"
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': errors.nameOne }"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div class="form-group">
                        <label>{{ t('birthData.birthDataForm.gender') }}</label>
                        <select
                          v-model="formState.gender"
                          class="form-control"
                          :class="{ 'is-invalid': errors.gender }"
                        >
                          <option value="">-- Select --</option>
                          <option value="male">{{ t('birthData.birthDataForm.male') }}</option>
                          <option value="female">{{ t('birthData.birthDataForm.female') }}</option>
                        </select>
                      </div>
                    </div>

                    <!-- Column 2 -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>{{ t('birthData.birthDataForm.birthDate') }}</label>
                        <input
                          v-model="formState.birthDate"
                          type="date"
                          class="form-control"
                          :class="{ 'is-invalid': errors.birthDate }"
                        />
                      </div>

                      <div class="form-group">
                        <label>{{ t('birthData.birthDataForm.birthTime') }}</label>
                        <input
                          v-model="formState.birthTime"
                          type="time"
                          class="form-control"
                          :class="{ 'is-invalid': errors.birthTime }"
                        />
                      </div>
                    </div>

                    <!-- Column 3 -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>{{ t('birthData.birthDataForm.birthPlace') }}</label>
                        <input
                          v-model="formState.birthPlace"
                          type="text"
                          class="form-control"
                          placeholder="Enter your birth place"
                          :class="{ 'is-invalid': errors.birthPlace }"
                        />
                      </div>

                      <div class="form-group">
                        <label>{{ t('birthData.birthDataForm.language') }}</label>
                        <select
                          v-model="formState.language"
                          class="form-control"
                          :class="{ 'is-invalid': errors.language }"
                        >
                          <option value="">-- Select --</option>
                          <option value="English">English</option>
                          <option value="Myanmar">မြန်မာ</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Checkbox (full width row) -->
                  <div class="row mt-3">
                    <div class="col-lg-12">
                      <div class="form-check">
                        <input
                          id="agreeCheckbox"
                          v-model="formState.agree"
                          type="checkbox"
                          class="form-check-input"
                          :class="{ 'is-invalid': errors.agree }"
                        />
                        <label
                          for="agreeCheckbox"
                          class="form-check-label"
                          style="padding-left: 1rem"
                          :class="{ 'error-text': errors.agree }"
                        >
                          {{ t('birthData.birthDataForm.teamAndConduction') }}
                        </label>
                        <div class="privacy-note" style="padding-bottom: 1rem">
                          {{ t('birthData.birthDataForm.note') }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Submit button -->
                  <div class="row mt-3">
                    <div class="col-lg-12">
                      <button
                        type="button"
                        class="btn-purple"
                        @click.prevent="fetchDataAndNavigate"
                      >
                        {{ t('birthData.birthDataForm.submit') }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hs_slider_bottom_wrapper {
  margin-bottom: 10px; /* enough space for footer */
  position: relative;
  z-index: 2; /* keep it above footer if needed */
}
</style>
