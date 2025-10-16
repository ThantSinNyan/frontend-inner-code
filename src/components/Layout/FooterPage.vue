<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <!-- hs footer wrapper Start -->
  <div class="hs_footer_main_wrapper v-2_footer">
    <!-- hs footer wrapper Start -->
    <div class="hs_footer_top_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="hs_footer_logo_wrapper">
              <img
                src="/images/content/footer_logo_1.png"
                alt="footer_logo"
                class="img-responsive"
              />
              <h3>+1800-123-123</h3>
              <p>{{ t('footer.description') }}</p>
              <h4>
                <a href="#"
                  >{{ t('birthData.btnReadMore') }} <i class="fa fa-long-arrow-right"
                /></a>
              </h4>
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61576578658604"><i class="fa fa-facebook" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="hs_footer_list_wrapper">
              <h2>{{ t('footer.quickLinks') }}</h2>
              <ul class="hs_footer_list">
                <li>
                  <RouterLink :to="{ name: 'Home' }">
                    <i class="fa fa-caret-right" aria-hidden="true" />
                    {{ t('footer.home') }}
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'About' }">
                      <i class="fa fa-caret-right" aria-hidden="true" />
                    {{ t('footer.about') }}
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'showAllJourney' }">
                    <i class="fa fa-caret-right" aria-hidden="true" />
                    {{ t('footer.startYourJourney') }}
                  </RouterLink>
                </li>
                <li>
                 <RouterLink :to="{ name: 'About' }">
                  <i class="fa fa-caret-right" aria-hidden="true" />
                  {{ t('footer.aboutUs') }}
                </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Contact' }">
                    <i class="fa fa-caret-right" aria-hidden="true" />
                    {{ t('footer.contactUs') }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="hs_footer_list_wrapper">
              <h2>Usefull <span>Links</span></h2>
              <ul class="hs_footer_list">
                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i> How to book</a>
                </li>
                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i> General letting conditions </a>
                </li>
                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i> Jobs and careers </a>
                </li>
                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i> Travel agent resources</a>
                </li>
                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Our Agents </a> </li>
                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>About Us </a> </li>
                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us </a> </li>
              </ul>
            </div>
          </div> -->
          <!-- <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="hs_download_wrapper">
              <h2>Download<span>App</span></h2>
              <p>Download Our Mobile App</p>
              <div class="hs_download_btn_wrapper">
                <a href="#">
                  <img src="images/content/App-Store.png" class="img-responsive" alt="App_Store_img">
                </a>
                <a href="#">
                  <img src="images/content/Google-Play.png" class="img-responsive" alt="Google_Play_img">
                </a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- hs footer wrapper End -->
  <!-- hs bottom footer wrapper Start -->
  <div class="hs_bottom_footer_main_wrapper">
    <a id="return-to-top" href="javascript:"><i class="fa fa-angle-up" /></a>
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <div class="footer_bottom_cont_wrapper" />
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div class="footer_bottom_list_wrapper">
            <ul>
              <li><a href="#">Private policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Refund policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
