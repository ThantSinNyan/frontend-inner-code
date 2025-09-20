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
import LoginPage from '@/views/LoginPage.vue'
import ShowAllJourneyPage from '@/views/ShowAllJourneyPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  {
    path: '/birthChart/:id',
    name: 'birthChart',
    component: BirthChartPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/birthDataPage',
    name: 'birthData',
    component: BirthDataPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/reflectiveQuestion',
    name: 'reflectiveQuestion',
    component: ReflectiveQuestionPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/journeyDetail/:id',
    name: 'journeyDetail',
    component: JourneyDetailPage,
    meta: { requiresAuth: true },
  },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/register', name: 'register', component: CreateUserAccountPage },
  { path: '/showAllJourney', name: 'showAllJourney', component: ShowAllJourneyPage,meta: { requiresAuth: true }, },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (!authStore.token && to.meta.requiresAuth) {
    if (to.name !== 'login' && to.name !== 'register') {
      alert('You are not authorized. Please login again.')
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
