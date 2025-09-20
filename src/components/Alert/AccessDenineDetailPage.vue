<script setup>
import { useUiStore } from '@/stores/ui'
const uiStore = useUiStore()

function handleConfirm() {
  if (uiStore.onConfirm) uiStore.onConfirm() // ✅ Call custom callback if provided
  uiStore.closeAlert()
}

function handleCancel() {
  if (uiStore.onCancel) uiStore.onCancel()
  uiStore.closeAlert()
}
</script>

<template>
  <div v-if="uiStore.showAlert" class="custom-alert-overlay">
    <div class="custom-alert-box">
      <h3>{{ uiStore.alertTitle }}</h3>
      <p>{{ uiStore.alertMessage }}</p>
      <div class="actions">
        <button v-if="uiStore.showConfirm" class="btn-primary" @click="handleConfirm">
          {{ uiStore.confirmText }}
        </button>
        <button v-if="uiStore.showCancel" class="btn-secondary" @click="handleCancel">
          {{ uiStore.cancelText }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-alert-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.custom-alert-box {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.custom-alert-box h3 {
  color: #75429c;
  margin-bottom: 10px;
}

.actions {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}

.btn-primary {
  background-color: #75429c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-secondary {
  background: #e4e4e4;
  color: #333;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
