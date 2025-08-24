<script setup lang="ts">
import { reactive,watch } from 'vue'
import { useRouter } from 'vue-router'
import { usePersonalInfoStore } from '@/stores/personalInfo'
import type { PersonalFormDTO } from '@/models/PersonalFormDTO'
import { useLoadingStore } from '@/stores/personalInfo/root'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/personalInfo/root'

const { t } = useI18n()
const loadingStore = useLoadingStore()
const languageStore = useLanguageStore()
const formState = reactive<PersonalFormDTO>({
  birthDate: '',
  time: '',
  birthPlace: '',
  language: '',
})
const router = useRouter()
const personalInfoStore = usePersonalInfoStore()
const fetchDataAndNavigate = async () => {
  loadingStore.start()
  try {
    await personalInfoStore.loadPersonalInfo(formState)
    router.push('/birthChart')
  } catch (err) {
    console.error(err)
  } finally {
    loadingStore.stop()
  }
}
watch(() => languageStore.language, (newLang) => {

  formState.language = newLang === 'en' ? 'English' : 'Myanmar'
  console.log("formState.language-->",formState.language)
}, { immediate: true })

</script>
<template>
  <div class="slider-area">
    <div
      id="carousel-example-generic"
      class="carousel slide"
      data-ride="carousel"
    >
      <div
        class="carousel-inner"
        role="listbox"
      >
        <div class="item active">
          <div class="carousel-captions caption-1">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="content">
                    <h1 data-animation="animated bounceInLeft"> {{ t('birthData.title') }}</h1>
                    <h2 data-animation="animated zoomInDown">{{ t('birthData.subTitle') }}</h2>
                    <p data-animation="animated bounceInUp">{{ t('birthData.description') }}</p>
                    <div class="hs_effect_btn">
                      <ul>
                        <li data-animation="animated flipInX"><a
                          href="#"
                          class="hs_btn_hover"
                        >{{ t('birthData.btnReadMore') }}</a></li>
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
                              <li><a
                                href="#"
                                class="hs_tabs_btn"
                              >{{ t('birthData.healingCategory.family') }}</a></li>
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
                              <li><a
                                href="#"
                                class="hs_tabs_btn"
                              >{{ t('birthData.healingCategory.presonality') }}</a></li>
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
                                    <li><a
                                      href="#"
                                      class="hs_tabs_btn"
                                    >{{ t('birthData.healingCategory.relationship') }}</a></li>
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
                                    <li><a
                                      href="#"
                                      class="hs_tabs_btn"
                                    >{{ t('birthData.healingCategory.career') }}</a></li>
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
          <a
            class="prev"
            href="#carousel-example-generic"
            role="button"
            data-slide="prev"
          >
            <i class="fa fa-sign-out" />
          </a>
          <a
            class="next"
            href="#carousel-example-generic"
            role="button"
            data-slide="next"
          >
            <i class="fa fa-sign-in" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- hs Slider End -->
  <!-- hs sign wrapper Start -->
  <div class="hs_sign_main_wrapper">
    <!-- hs_slider_bottom_wrapper Start -->
    <div class="hs_slider_bottom_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="hs_slider_bottom_box">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="nameOne"
                    :placeholder="t('birthData.birthDataForm.name')"
                  >
                </div>
                <div class="form-group">
                  <select
                    class="gender_select"
                    name="gender"
                  >
                    <option value="male">{{ t('birthData.birthDataForm.male') }}</option>
                    <option value="female">{{ t('birthData.birthDataForm.female') }}</option>
                  </select>
                </div>
              
                <div class="form-group">
                  <select
                    class="phone_select"
                    name="birthPlace"
                    v-model="formState.birthPlace"
                  >
                    <option value="india">Your Birth Place</option>
                    <option value="india">Yangon, Ahlone  </option>
                    <option value="india">Yangon, Bahan  </option>
                    <option value="india">Yangon, Dawbon  </option>
                    <option value="india">Dawei, Hlaing  </option>
                    <option value="india">Myake, Hlaingthaya  </option>
                    <option value="india">Kamayut, Ahlone  </option>
                    <option value="india">Kyimyindaing, Ahlone  </option>
                  </select>
                </div>
                <div class="form-group">
                  <input
                    type="date"
                    class="form-control"
                    name="birthDate"
                    v-model="formState.birthDate"
                    placeholder="Date Of Birth (dd/mm/yyyy)"
                  >
                </div>
                <div class="form-group">
                  <input
                    type="time"
                    class="form-control"
                    name="time"
                    v-model="formState.time"
                    placeholder="Birth Time (mm:ss)"
                  >
                </div>
                <div class="remember_box">
                  <label class="control control--checkbox">{{ t('birthData.birthDataForm.teamAndConduction') }}
                    <input type="checkbox">
                    <span class="control__indicator" />
                  </label>
                </div>
                <div class="hs_effect_btn">
                  <ul>
                    <li data-animation="animated flipInX"> <router-link
            class="hs_btn_hover"
            to="#"
            @click.prevent="fetchDataAndNavigate"
          >
           {{ t('birthData.birthDataForm.btnBarChart') }}
          </router-link></li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
