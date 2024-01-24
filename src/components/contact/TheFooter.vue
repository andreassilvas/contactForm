
<template>
    <div id="footer-container">
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
#footer-container {
    max-width: 1920px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
}

@media (min-width: 600px) and (max-width:1100px) {
    #footer-container {
        height: 92vh;
    }
}

@media screen and (width:480px) {
    @media (orientation: landscape) {
        #footer-container {
            height: 180vh;
        }
    }
}
</style>