<template>
    <button :class="buttonClass" :title="buttonTitle" :type="buttonType"><slot></slot></button>
</template>

<script>
export default {
    props: {
        buttonClass: String,
        buttonTitle: String,
        buttonType: String
    }
}
</script>