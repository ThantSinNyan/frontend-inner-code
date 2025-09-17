<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth/auth'

const authStore = useAuthStore()
const router = useRouter()
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false
})

const onRegister = async () => {
  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match!')
    return
  }

  try {
    const result = await authStore.register({
      name: form.name,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword
    })

    alert('Registration successful!')
    console.log('Registered user:', result)
    router.push('/login')
  } catch (error) {
    alert('Registration failed. Please check your input or try again.')
  }
}
</script>

<template>
  <div class="hs_indx_title_main_wrapper">
    <div class="hs_title_img_overlay" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_left_wrapper">
            <h2>Join the Inner Code Journey</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  full_width">
          <div class="hs_indx_title_right_wrapper">
            <ul>
              <li><a href="#">Home</a> &nbsp;&nbsp;&nbsp;> </li>
              <li>Create Your Account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hs_about_indx_main_wrapper about_page_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="hs_about_left_img_wrapper">
            <img
              src="/images/content/about_img_1.png"
              alt="about_img"
            >
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="register_form_wrapper">
           <h2 class="mb-4 text-center">Create Your Account</h2>
            <br>
            <form class="register-form" @submit.prevent="onRegister">
              <!-- Name -->
              <div class="form-group mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  placeholder="Enter your full name"
                  required
                >
              </div>

              <!-- Email -->
              <div class="form-group mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                  required
                >
              </div>

              <!-- Password -->
              <div class="form-group mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  id="password"
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  required
                >
              </div>

              <!-- Confirm Password -->
              <div class="form-group mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  type="password"
                  class="form-control"
                  placeholder="Confirm password"
                  required
                >
              </div>

              <!-- Terms & Conditions -->
              <div class="form-check mb-3">
                <input
                  id="agree"
                  v-model="form.agree"
                  type="checkbox"
                  class="form-check-input"
                  required
                >
                <label class="form-check-label" for="agree">
                  I agree to the <a href="#">Terms & Conditions</a>
                </label>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary w-100">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hs_counter_main_wrapper">
    <div class="hs_counter_cont_wrapper">
      <div class="count-description">
        <span class="timer">123</span>
        <h5 class="con1">Trusted by<br> Million Clients</h5>
      </div>
    </div>
    <div class="hs_counter_cont_wrapper hs_counter_cont_wrapper2">
      <div class="count-description">
        <span class="timer">16</span>
        <h5 class="con2">Years of<br> Experience
        </h5>
      </div>
    </div>
    <div class="hs_counter_cont_wrapper">
      <div class="count-description">
        <span class="timer">13</span>
        <h5 class="con3">Types of <br> Horoscopes
        </h5>
      </div>
    </div>
    <div class="hs_counter_cont_wrapper hs_counter_cont_wrapper4">
      <div class="count-description">
        <span class="timer">16</span>
        <h5 class="con4">Qualified <br> Astrologers
        </h5>
      </div>
    </div>
    <div class="hs_counter_cont_wrapper hs_counter_cont_wrapper5">
      <div class="count-description">
        <span class="timer">36</span>
        <h5 class="con4">Sucess<br> Jyotish
        </h5>
      </div>
    </div>
  </div>
</template>
<style scoped>
.register-form {
  max-width: 450px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}
.form-label {
  font-weight: 600;
}
</style>