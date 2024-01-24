<template>
    <form @submit.prevent="sendMessage">
        <FormInputs v-for="inputConfig in formInputsConfig" :key="inputConfig.containerId" v-bind="inputConfig"
            v-model="formData[inputConfig.model]" @input="validateEmail">
            <div v-if="inputConfig.model === 'contactEmail'" class="contact-email-validation">
                <p v-if="!validateContactEmail">{{ $t('formValidation.validationMessage.emailValidation') }}</p>
            </div>
        </FormInputs>

        <FormValidation container-id="validation-container" :input-validation="inputValidation"
            :validation-inputs="validationInputs" :sendMessage-error="sendMessageError"
            :message-submitted="messageSubmited">
        </FormValidation>

        <div class="contact-buttons-container">
            <GobalButton button-class="send-message-button button-common" button-title="send my message">{{
                $t('contact.contactForm.buttons.send') }}
            </GobalButton>

            <GobalButton button-class="reset-form-button button-common" button-title="reset" button-type="button"
                @click="resetInputs">
                <i class="bi bi-arrow-repeat"></i>
                <span>{{ $t('contact.contactForm.buttons.reset') }}</span>
            </GobalButton>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import FormInputs from '../UI/form/FormInputs.vue';
import FormValidation from '../UI/validation/FormValidation.vue';
import GobalButton from '../UI/buttons/GobalButton.vue';

const VALIDATION_TIMEOUT = 3000;

export default {
    components: {
        FormInputs,
        FormValidation,
        GobalButton
    },
    data() {
        return {
            formData: {
                contactEmail: '',
                contactMessage: '',
            },
            validateContactEmail: true,
            inputValidation: false,
            sendMessageError: null,
            messageSubmited: null,
            changesSave: false,
        }
    },
    computed: {
        formInputsConfig() {
            const contactContainer = ['email', 'message'];
            const contactConfig = {};

            contactContainer.forEach(type => {
                const contactContent = `contact-${type}-container`
                contactConfig[contactContent] = {
                    containerId: contactContent,
                    inputId: `contact-${type}`,
                    inputClass: `input-${type}`,
                    inputName: `contact-${type}`,
                    labelClass: `label-${type}`,
                    label: this.$t(`contact.contactForm.${type}.title`),
                    placeholder: this.$t(`contact.contactForm.${type}.placeholder`),
                    model: `contact${type.charAt(0).toUpperCase() + type.slice(1)}`,
                    useTextarea: type === 'message',
                    textareaRows: type === 'message' ? '5' : undefined,
                }
            });
            return contactConfig;
        },
        validateEmailInput() {
            return this.formData.contactEmail.trim() !== '';
        },
        validateMessageInput() {
            return this.formData.contactMessage.trim() !== '';
        },
        validateEnteredEmail() {
            return this.validateContactEmail;
        },
        validationInputs() {
            return this.validateMessageInput && this.validateEmailInput && this.validateEnteredEmail;
        },
    },
    methods: {
        async sendMessage() {
            this.changesSave = true;
            this.messageSubmited = null;
            this.inputValidation = true;

            if (this.validationInputs) {
                this.sendMessageError = null;

                const SERVER_URL = 'https://form2024-6dcba-default-rtdb.europe-west1.firebasedatabase.app/dummyForm.json';
                const { contactEmail, contactMessage } = this.formData;

                const postContactData = {
                    email: contactEmail,
                    message: contactMessage,
                    date: new Date().toDateString()
                }
                const headers = {
                    'Content-Type': 'application/json',
                }

                try {
                    const response = await axios.post(
                        SERVER_URL,
                        postContactData,
                        { headers }
                    );

                    //reset the inputs
                    Object.assign(this.formData, {
                        contactEmail: '',
                        contactMessage: '',
                    });
                    this.inputValidation = false;

                    //data submited
                    this.messageSubmited = response.data
                        ? this.$t('formValidation.validationMessage.messageSubmited')
                        : null;

                    setTimeout(() => {
                        this.messageSubmited = null;
                    }, VALIDATION_TIMEOUT);
                } catch (error) {
                    //server error
                    console.error('Error:', error);
                    this.sendMessageError = this.$t('formValidation.validationMessage.sendMessageError');

                    setTimeout(() => {
                        this.sendMessageError = null;
                    }, VALIDATION_TIMEOUT);
                }
            }
            setTimeout(() => {
                this.inputValidation = false;
            }, VALIDATION_TIMEOUT);
        },
        resetInputs() {
            Object.assign(this.formData, {
                contactEmail: '',
                contactMessage: '',
            });
            this.validateContactEmail = true;
        },
        validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.validateContactEmail = regex.test(this.formData.contactEmail);
        },
    },
}

</script>

<style scoped>
form {
    max-width: 25rem;
    padding: 0.5rem 0.5rem;
    height: 21rem;
}

.contact-buttons-container {
    margin: .3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button-common {
    cursor: pointer;
    transition: background-color 0.3s;
}

.send-message-button {
    font-family: inherit;
    font-size: .8rem;
    padding: 0.4rem 2rem;
    border: 2px solid #0a2e2c;
    background-color: #0a2e2c;
    color: #e2e7f7;
}

.reset-form-button {
    display: inline-block;
    position: relative;
    padding: 0.4rem .5rem;
    font-size: 1.3rem;
    background: transparent;
    color: #0a2e2c;
    border: none;
    margin-right: 1.5rem;
    transition: opacity 0.3s;
}

.send-message-button:hover,
.send-message-button:active {
    border: 2px solid #0a2e2c;
    background-color: transparent;
    color: #0a2e2c;
}


/* Initially hide the icon */
.reset-form-button i {
    opacity: 1;
}

/* Show the icon on button hover */
.reset-form-button:hover i {
    opacity: 0;
}

/* Style for the button text */
.reset-form-button span {
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: .8rem;
    padding: 0.5rem 2rem;
    border: 2px solid #0a2e2c;
    background-color: #6e949a;
    color: #ecfcf9;
}

/* Show text on button hover */
.reset-form-button:hover span {
    opacity: 1;
}

#validation-container.visible {
    visibility: visible;

}

#validation-container,
#contact-email-container p {
    font-size: .7rem;
    color: #ab1800;
}

.contact-email-validation {
    height: 20px;
    padding: .5rem 0;
}

#validation-container {
    display: flex;
    justify-content: flex-start;
    visibility: hidden;
    height: 1.4rem;
    line-height: 1.2;
    margin: 0 1rem;
    font-weight: 500;
}

#validation-container.success-message {
    color: #037603;
}

@media screen and (min-width: 280px) and (max-width: 320px) {
    .send-message-button.button-common {
        padding: 0.4rem 0.4rem;
        font-size: .6rem;
        margin-right: 1rem;
    }

    .reset-form-button.button-common span {
        font-size: .6rem;
    }

    .reset-form-button {
        margin-right: 0;
    }

    .reset-form-button span {
        padding: 0.4rem 1.5rem;
        font-size: .7rem;
    }
}

@media screen and (min-width: 480px) and (max-width:932px) {
    @media (orientation: landscape) {
        .send-message-button.button-common {
            font-size: .6rem;
            margin-right: 1rem;
        }

        .reset-form-button.button-common span {
            font-size: .6rem;
        }

        .reset-form-button {
            margin-right: 0;
        }

        .reset-form-button span {
            padding: 0.4rem 1.5rem;
            font-size: .7rem;
        }
    }
}
</style>
