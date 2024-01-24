<!-- ValidationContainer.vue -->
<template>
    <div :id="containerId" :class="containerClasses" aria-live="assertive">
      <p v-if="inputValidation && !validationInputs">{{ $t('formValidation.validationMessage.completeContactForm') }}</p>
      <p v-if="sendMessageError">{{ sendMessageError }}</p>
      <p v-if="!sendMessageError && messageSubmitted" aria-live="assertive">{{ messageSubmitted }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      containerId: String,
      inputValidation: Boolean,
      validationInputs: Boolean,
      sendMessageError: String,
      messageSubmitted: String,
    },
    computed: {
      containerClasses() {
        return {
          visible: this.sendMessageError || !this.validationInputs || this.messageSubmitted,
          'success-message': this.messageSubmitted,
        };
      },
    },
  };
  </script>

  