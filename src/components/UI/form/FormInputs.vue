<template>
    <div class="form-control">
        <div :id="containerId">
            <label :for="inputId" :class="labelClass">{{ label }}</label>
            <template v-if="useTextarea">
                <textarea :id="inputId" :name="inputName" :placeholder="placeholder" :rows="textareaRows"
                    :class="inputClass" v-model="inputValue" @input="updateValue"></textarea>
            </template>

             <template v-else>
                <input :id="inputId" :class="inputClass" :name="inputName" :type="inputType" :placeholder="placeholder"
                    v-model="inputValue" @input="updateValue" :style="displayInput">
            </template> 
            <!-- slot used for validation container -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        containerId: String,
        inputId: String,
        inputClass: String,
        inputName: String,
        label: String,
        labelClass: String,
        placeholder: String,
        validationMessage: String,
        modelValue: String,
        textareaRows: String,
        headerText: String,
        labelImageAlt: String,
        labelImageUrl: String,
        labelImageClass: String,
        displayInput: String,
        inputType: {
            type: String,
            default: 'text', // Default to 'text' type for <input>
        },
        useTextarea: {
            type: Boolean,
            default: false, // Default to <input>
        },
        useHeaderText: {
            type: Boolean,
            default: false
        },
        useLabelText: {
            type: Boolean,
            default: true
        } 
    },

    emits: ['update:modelValue'],
    data() {
        return {
            inputValue: this.modelValue,
        };
    },
    watch: {
        modelValue(newValue) {
            this.inputValue = newValue;
        },
    },
    methods: {
        updateValue() {
            this.$emit('update:modelValue', this.inputValue);
        },
   
    },
};
</script>
  
<style scoped>
.form-control {
    margin: 0.5rem 0;
    width: 70%;
    text-align: justify;
    display: block;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    background-color: transparent;
    background-clip: padding-box;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control h2{
    font-size: .93rem;
    margin: 0.5rem 0;
    font-weight: 100;
}

.form-control input {
    display: block;
    margin-top: 0.3rem;
    padding: .3rem;
    height: 34px;
    width: 100%;
}

.form-control input,
.form-control textarea {
    font-family: inherit;
    font-size: .9rem;
    color: #283747;
    background-color: transparent;
}

.form-control input,
.form-control textarea {
    border-bottom: 2px solid rgb(10, 46, 44, 0.4);
    border-width: 0 0 2px 0;
}

.form-control input::placeholder,
.form-control textarea::placeholder {
    color: rgb(101, 133, 168, .5);
    font-size: .7rem;
}

.form-control textarea {
    padding: .2rem;
    width: 100%;
    resize: none;
}

/* #contact-email-container,
#contact-message-container {
    width: 70%;
} */

.content-image {
    height: 45px;
}

.content-image:hover {
    background: #dde4eb;
    border-radius: 12px;
}

#smiling-content:checked+.content-label .content-image,
#happy-content:checked+.content-label .content-image,
#neutral-content:checked+.content-label .content-image,
#unhappy-content:checked+.content-label .content-image,
#sad-content:checked+.content-label .content-image {
    background: #dde4eb;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(40, 55, 71, 0.60);
}

#single-select {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>