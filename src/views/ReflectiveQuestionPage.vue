<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToJourney() {
  router.push('/JourneyDetail')
}
</script>
<template>
  <div class="hs_indx_title_main_wrapper">
    <div class="hs_title_img_overlay" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_left_wrapper">
            <h2>Reflect on Your Reading Experience</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full_width">
          <div class="hs_indx_title_right_wrapper">
            <ul>
              <li><a href="#">Birth Chart</a> &nbsp;&nbsp;&nbsp;></li>
              <li>Reflective Question</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="survey-container">
    <h2>How Did This Reading Resonate With You?</h2>

    <!-- Q1 -->
    <div class="question-card">
      <p>
        1. Do you feel safe and emotionally supported when you think about your family or childhood
        home?
      </p>
      <div class="options">
        <label class="option"
          ><input type="radio" name="q1" value="Strongly Agree" /><span class="custom-radio"></span
          >Strongly Agree</label
        >
        <label class="option"
          ><input type="radio" name="q1" value="Agree" /><span class="custom-radio"></span
          >Agree</label
        >
        <label class="option"
          ><input type="radio" name="q1" value="Neutral" /><span class="custom-radio"></span
          >Neutral</label
        >
        <label class="option"
          ><input type="radio" name="q1" value="Disagree" /><span class="custom-radio"></span
          >Disagree</label
        >
        <label class="option"
          ><input type="radio" name="q1" value="Strongly Disagree" /><span
            class="custom-radio"
          ></span
          >Strongly Disagree</label
        >
      </div>
    </div>

    <!-- Q2 -->
    <div class="question-card">
      <p>2. Do you feel a sense of purpose in your daily life?</p>
      <div class="options">
        <label class="option"
          ><input type="radio" name="q2" value="Strongly Agree" /><span class="custom-radio"></span
          >Strongly Agree</label
        >
        <label class="option"
          ><input type="radio" name="q2" value="Agree" /><span class="custom-radio"></span
          >Agree</label
        >
        <label class="option"
          ><input type="radio" name="q2" value="Neutral" /><span class="custom-radio"></span
          >Neutral</label
        >
        <label class="option"
          ><input type="radio" name="q2" value="Disagree" /><span class="custom-radio"></span
          >Disagree</label
        >
        <label class="option"
          ><input type="radio" name="q2" value="Strongly Disagree" /><span
            class="custom-radio"
          ></span
          >Strongly Disagree</label
        >
      </div>
    </div>

    <!-- Q3 -->
    <div class="question-card">
      <p>3. Do you feel connected to your friends and social circle?</p>
      <div class="options">
        <label class="option"
          ><input type="radio" name="q3" value="Strongly Agree" /><span class="custom-radio"></span
          >Strongly Agree</label
        >
        <label class="option"
          ><input type="radio" name="q3" value="Agree" /><span class="custom-radio"></span
          >Agree</label
        >
        <label class="option"
          ><input type="radio" name="q3" value="Neutral" /><span class="custom-radio"></span
          >Neutral</label
        >
        <label class="option"
          ><input type="radio" name="q3" value="Disagree" /><span class="custom-radio"></span
          >Disagree</label
        >
        <label class="option"
          ><input type="radio" name="q3" value="Strongly Disagree" /><span
            class="custom-radio"
          ></span
          >Strongly Disagree</label
        >
      </div>
    </div>

    <!-- Q4 -->
    <div class="question-card">
      <p>4. Do you feel you can manage stress in a healthy way?</p>
      <div class="options">
        <label class="option"
          ><input type="radio" name="q4" value="Strongly Agree" /><span class="custom-radio"></span
          >Strongly Agree</label
        >
        <label class="option"
          ><input type="radio" name="q4" value="Agree" /><span class="custom-radio"></span
          >Agree</label
        >
        <label class="option"
          ><input type="radio" name="q4" value="Neutral" /><span class="custom-radio"></span
          >Neutral</label
        >
        <label class="option"
          ><input type="radio" name="q4" value="Disagree" /><span class="custom-radio"></span
          >Disagree</label
        >
        <label class="option"
          ><input type="radio" name="q4" value="Strongly Disagree" /><span
            class="custom-radio"
          ></span
          >Strongly Disagree</label
        >
      </div>
    </div>

    <!-- Q5 -->
    <div class="question-card">
      <p>5. Do you feel hopeful and optimistic about your future?</p>
      <div class="options">
        <label class="option"
          ><input type="radio" name="q5" value="Strongly Agree" /><span class="custom-radio"></span
          >Strongly Agree</label
        >
        <label class="option"
          ><input type="radio" name="q5" value="Agree" /><span class="custom-radio"></span
          >Agree</label
        >
        <label class="option"
          ><input type="radio" name="q5" value="Neutral" /><span class="custom-radio"></span
          >Neutral</label
        >
        <label class="option"
          ><input type="radio" name="q5" value="Disagree" /><span class="custom-radio"></span
          >Disagree</label
        >
        <label class="option"
          ><input type="radio" name="q5" value="Strongly Disagree" /><span
            class="custom-radio"
          ></span
          >Strongly Disagree</label
        >
      </div>
    </div>
    <button class="submit-btn" @click="goToJourney">Submit Answers</button>
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
