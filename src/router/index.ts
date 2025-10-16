// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth/auth'
import { usePersonalInfoStore } from '@/stores/personalInfo'
import { useUiStore } from '@/stores/ui'

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

const scrollPositions = new Map()

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },

  { path: '/birthChart/:id', name: 'birthChart', component: BirthChartPage, meta: { requiresAuth: true } },
  { path: '/birthDataPage', name: 'birthData', component: BirthDataPage, meta: { requiresAuth: true } },
  { path: '/reflectiveQuestion', name: 'reflectiveQuestion', component: ReflectiveQuestionPage, meta: { requiresAuth: true } },
  { path: '/journeyDetail/:id', name: 'journeyDetail', component: JourneyDetailPage, meta: { requiresAuth: true, requiresSubscription: true } },

  { path: '/login', name: 'login', component: LoginPage },
  { path: '/register', name: 'register', component: CreateUserAccountPage },

  { path: '/showAllJourney', name: 'showAllJourney', component: ShowAllJourneyPage, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return { ...savedPosition, behavior: 'smooth' }
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    const remembered = scrollPositions.get(to.fullPath)
    if (remembered) {
      return { left: remembered.left, top: remembered.top, behavior: 'smooth' }
    }
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const personalInfoStore = usePersonalInfoStore()
  const uiStore = useUiStore()

  scrollPositions.set(from.fullPath, {
    left: window.pageXOffset,
    top: window.pageYOffset,
  })

  if (to.meta.requiresAuth && !authStore.token) {
    if (to.name !== 'login' && to.name !== 'register') {
      uiStore.openAlert({
        title: 'Unauthorized',
        message: 'You are not authorized. Please login again.',
        confirmLabel: 'Go to Login',
        onConfirmCallback: () => {
          if (router.currentRoute.value.name !== 'login') {
            router.push({ name: 'login' })
          }
        },
      })
      return next({ name: 'login' })
    }
    return next()
  }

  if (to.meta.requiresSubscription && personalInfoStore.data?.subscription === 'NONE') {
    uiStore.openAlert({
      title: 'Access Required',
      message: 'Please complete the reflective questions first to unlock your healing plan.',
      confirmLabel: 'Go to Reflective Questions',
      onConfirmCallback: () => {
        if (router.currentRoute.value.name !== 'reflectiveQuestion') {
          router.push({ name: 'reflectiveQuestion' })
        }
      },
    })
    return next({ name: 'reflectiveQuestion' })
  }

  next()
})

export default router
