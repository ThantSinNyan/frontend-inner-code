<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="hs_header_Wrapper hidden-sm hidden-xs">
    <div class="hs_top_header_main_Wrapper">
      <div class="hs_header_logo_left">
        <div class="hs_logo_wrapper">
          <a href="index.html"
            ><img
              src="/images/header/inner_code_nav_logo.png"
              class="img-responsive"
              alt="logo"
              title="Logo"
          /></a>
        </div>
      </div>
      <div class="hs_header_logo_right">
        <nav class="hs_main_menu">
          <ul>
            <li class="dropdown menu-button">
              <router-link class="menu-button" to="/">{{ t('menuBar.home') }}</router-link>
            </li>
            <li>
              <router-link class="menu-button" to="/about">{{ t('menuBar.aboutUs') }}</router-link>
            </li>

            <li class="dropdown menu-button">
              <a class="menu-button" href="#">{{ t('menuBar.services') }}</a>
              <ul class="dropdown-menu hs_mega_menu">
                <li>
                  <a class="menu-button" href="aries.html">Healing Journey Plan</a>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/contact">{{ t('menuBar.content') }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="hs_btn_wrapper hidden-md">
          <ul>
            <li>
              <router-link class="hs_btn_hover" to="/birthDataPage">{{
                t('menuBar.btnStartJourney')
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
