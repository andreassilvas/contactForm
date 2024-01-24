<template>
    <div class="contact-container">
        <div class="contact-contact">
            <div class="contact-col">
                <div class="info-contact">
                    <ul>
                        <li>{{ $t('contact.contactInfo.emailTitle') }}</li>
                        <li><a :href="'mailto:' + hashedEmail">{{ $t('contact.contactInfo.email') }}</a></li>
                    </ul>
                </div>
                <div class="info-contact">
                    <ul>
                        <li>{{ $t('contact.contactInfo.phoneNumberTitle') }}</li>
                        <li>{{ $t('contact.contactInfo.phoneNumber') }}</li>
                    </ul>
                </div>
                <div class="info-contact">
                    <ul>
                        <li>{{ $t('contact.contactInfo.city') }}</li>
                    </ul>
                </div>
            </div>
            <div class="contact-col">
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from './ContactForm';

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            hashedEmail: ''
        }
    },
    methods: {
        async hashEmail() {
            try {
                // Use a secure hashing algorithm like SHA-256
                const encoder = new TextEncoder();
                const data = encoder.encode(this.email);
                const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashedEmail = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
                this.hashedEmail = hashedEmail;
            } catch (error) {
                console.error('Error hashing email:', error);
            }
        }
    },
    mounted() {
        // Hash the email when the component is mounted
        this.hashEmail();
    },
}
</script>

<style scoped>
.contact-container {
    height: 75vh;
    background-color: #f7f7f7;
}

.contact-contact {
    display: flex;
    justify-content: space-evenly;
    padding: 1.5rem 5rem 1rem;
}

ul {
    list-style: none;
}

li a {
    color: #666666;
    text-decoration: none;
}

.contact-col {
    width: 50%;
    padding: 1rem;
    text-align: start;
}

.info-contact {
    margin-bottom: 2rem;

}

.info-contact::before {
    content: '';
    position: absolute;
    left: 79px;
    background: rgb(10, 46, 44, 0.5);
    height: 2px;
    box-sizing: border-box;
    content: '';
    width: 27px;
    transform: translate(-50%, 50%) rotate(-90deg);
}

.info-contact li a {
    transition: all 0.5s ease;
}

.info-contact li a:hover {
    color: #5F9EA0;
    padding-left: 0.5rem;
}
</style>