import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const showAlert = ref(false)
  const alertTitle = ref('Alert')
  const alertMessage = ref('')
  const confirmText = ref('OK')
  const cancelText = ref('Cancel')
  const showConfirm = ref(true)
  const showCancel = ref(false)

  let onConfirm: (() => void) | null = null
  let onCancel: (() => void) | null = null

  function openAlert({
    title,
    message,
    confirmLabel = 'OK',
    cancelLabel,
    onConfirmCallback,
    onCancelCallback,
  }: {
    title?: string
    message: string
    confirmLabel?: string
    cancelLabel?: string
    onConfirmCallback?: () => void
    onCancelCallback?: () => void
  }) {
    alertTitle.value = title || 'Alert'
    alertMessage.value = message
    confirmText.value = confirmLabel
    cancelText.value = cancelLabel || 'Cancel'
    showConfirm.value = true
    showCancel.value = !!cancelLabel
    onConfirm = onConfirmCallback || null
    onCancel = onCancelCallback || null
    showAlert.value = true
  }

  function closeAlert() {
    showAlert.value = false
    onConfirm = null
    onCancel = null
  }

  return {
    showAlert,
    alertTitle,
    alertMessage,
    confirmText,
    cancelText,
    showConfirm,
    showCancel,
    openAlert,
    closeAlert,
    onConfirm,
    onCancel,
  }
})
