<template>
    <div class="contact-container">
        <div class="contact-info-container">
            <div class="contact-col-info">
                <div class="contact-info">
                    <ul>
                        <li>{{ $t('contact.contactInfo.emailTitle') }}</li>
                        <li><a :href="'mailto:' + hashedEmail">{{ $t('contact.contactInfo.email') }}</a></li>
                    </ul>
                </div>
                <div class="contact-info">
                    <ul>
                        <li>{{ $t('contact.contactInfo.phoneNumberTitle') }}</li>
                        <li>{{ $t('contact.contactInfo.phoneNumber') }}</li>
                    </ul>
                </div>
                <div class="contact-info">
                    <ul>
                        <li>{{ $t('contact.contactInfo.city') }}</li>
                    </ul>
                </div>
            </div>
            <div class="contact-col-form">
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from './ContactForm.vue';

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
    background-color: #f7f7f7;
    height: 80vh;
}

.contact-info-container {
    display: flex;
    justify-content: space-evenly;
    padding: 1.5rem 4rem 1rem;
}

ul {
    list-style: none;
}

li a {
    color: #666666;
    text-decoration: none;
}

.contact-col-info,
.contact-col-form {
    width: 50%;
    text-align: start;
}

.contact-col-form {
    margin-top: 1rem;
}

.contact-col-info {
    margin: auto;
    padding: 0 3rem;
}

.contact-info {
    margin-bottom: 2rem;
}

.contact-info::before {
    content: '';
    position: absolute;
    left: 90px;
    background: rgb(10, 46, 44, 0.5);
    height: 2px;
    box-sizing: border-box;
    content: '';
    width: 27px;
    transform: translate(-50%, 50%) rotate(-90deg);
}

.contact-info li a {
    transition: all 0.5s ease;
}

.contact-info li a:hover {
    color: #5F9EA0;
    padding-left: 0.5rem;
}

@media screen and (min-width: 600px) and (max-width:1100px) {
    .contact-container {
        padding: 2rem 0 12rem;
    }
}

@media screen and (min-width: 280px) and (max-width: 568px) {
    .contact-info::before {
        left: 50px;
    }

    .contact-info-container {
        display: block;
        padding: 3rem 2rem 1rem;
    }

    .contact-col-info {
        width: 100%;
    }

    .contact-col-form {
        width: 100%;
    }

    .contact-container {
        height: 100vh;
    }
}

@media screen and (min-width:280px) and (max-width:320px) {
    .contact-info ul li {
        font-size: .7rem;
    }
}

@media screen and (min-width: 640px) and (max-width:932px) {
    @media (orientation: landscape) {
        .contact-container {
            height: 100vh;
        }

        .contact-info ul li {
            font-size: .8rem;
        }
    }
}


@media screen and (min-width: 480px) and (max-width: 568px) {
    @media (orientation: landscape) {
        .contact-container {
            height: 180vh;
        }
        .contact-info ul li {
            font-size: .8rem;
        }
    }
}
</style>