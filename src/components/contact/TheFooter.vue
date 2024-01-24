
<template>
    <div id="main-footer">
        <ContactMe />
        <FooterSocial />
    </div>
</template>

<script>
import ContactMe from './ContactMe.vue';
import FooterSocial from './FooterSocial.vue';

export default {
    components: {
        ContactMe,
        FooterSocial
    }
}
</script>

<style scoped>
#main-footer {
    height: 100vh;
}
</style>