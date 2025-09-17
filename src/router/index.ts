// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth/auth'

// Import the pages/components to be used as routes
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import BirthChartPage from '@/views/BirthChartPage.vue'
import BirthDataPage from '@/views/BirthDataPage.vue'
import ReflectiveQuestionPage from '@/views/ReflectiveQuestionPage.vue'
import JourneyDetailPage from '@/views/JourneyDetailPage.vue'
import CreateUserAccountPage from '@/views/CreateUserAccountPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/birthChart', name: 'birthChart', component: BirthChartPage },
  { path: '/birthDataPage', name: 'birthData', component: BirthDataPage },
  { path: '/reflectiveQuestion', name: 'reflectiveQuestion', component: ReflectiveQuestionPage},
  { path: '/journeyDetail', name: 'journeyDetail', component: JourneyDetailPage},
  { path: '/register', name: 'register', component: CreateUserAccountPage }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated && to.name !== 'register') {
    next({ name: 'register' })
  } else {
    next()
  }
})

export default router