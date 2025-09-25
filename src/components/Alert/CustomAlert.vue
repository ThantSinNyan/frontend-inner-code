<template>
  <div v-if="visible" class="overlay">
    <div class="custom-alert" :class="type">
      <strong>{{ title }}</strong>
      <p>{{ message }}</p>
      <button @click="$emit('confirm')" class="close-btn">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CustomAlert',
  props: {
    visible: { type: Boolean, required: true },
    type: {
      type: String as () => 'success' | 'warning' | 'error',
      default: 'success',
    },
    title: { type: String, required: true },
    message: { type: String, required: true },
    buttonText: {
      type: String,
      default: 'OK',
    },
  },
  emits: ['confirm'],
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.custom-alert {
  padding: 20px 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
}

/* Success */
.custom-alert.success {
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  color: #389e0d;
}
.custom-alert.success .close-btn {
  background: #52c41a;
}
.custom-alert.success .close-btn:hover {
  background: #389e0d;
}

/* Warning */
.custom-alert.warning {
  background: #fffbe6;
  border: 1px solid #ffe58f;
  color: #d48806;
}
.custom-alert.warning .close-btn {
  background: #faad14;
}
.custom-alert.warning .close-btn:hover {
  background: #d48806;
}

/* Error */
.custom-alert.error {
  background: #fff2f0;
  border: 1px solid #ffccc7;
  color: #cf1322;
}
.custom-alert.error .close-btn {
  background: #ff4d4f;
}
.custom-alert.error .close-btn:hover {
  background: #a8071a;
}

.close-btn {
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
