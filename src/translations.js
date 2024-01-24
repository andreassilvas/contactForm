import { createI18n } from 'vue-i18n';

const portfolioWebTranslations = {
    en: {
        contact: {
            contactInfo: {
                emailTitle: "Email",
                email: "dummy@dummy.com",
                phoneNumberTitle: "Phone number",
                phoneNumber:"(555) 555-5555",
                city:"City"
            },
            contactForm: {
                email: {
                    title: "Email",
                    placeholder: "enter your email",
                },
                message: {
                    title: "Message",
                    placeholder: "enter your message",
                },
                buttons: {
                    send: "Send Message",
                    reset: "Reset",
                },
            }
        },
        footer: {
            footerSocialMedia: {
                socialMedia: "Social",
            }
        },
        copyright: "Copyright 2024",
        formValidation: {
            validationMessage: {
                completeContactForm: "Please complete the form before send it.",
                emailValidation: "Please enter a valid email address.",
                messageSubmited: "Successfully submitted.",
                sendMessageError: "Something when wrong, try later.",
                completeFeedbackForm: "Please select at least one answer from any question.",
            }
        }
    },
    //French translation ---------------------------
    fr: {
        contact: {
            contactInfo: {
                emailTitle: "Courriel",
                email: "dummy@dummy.com",
                phoneNumberTitle: "Numéro de téléphone",
                phoneNumber:"(555) 555-5555",
                city:"City"
            },
            contactForm: {
                email: {
                    title: "Courriel",
                    placeholder: "entrez votre courriel",
                },
                message: {
                    title: "Message",
                    placeholder: "entrez votre message",
                },
                buttons: {
                    send: "Envoyer le message",
                    reset: "Réinitialiser",
                },
            }
        },
        footerPage: {
            footerSocialMedia: {
                socialMedia: "Médias sociaux",
            }
        },
        copyright: "Copyright 2024",
        formValidation: {
            validationMessage: {
                completeTheFormText: "Veuillez compléter le formulaire avant de l'envoyer.",
                emailValidation: "Veuillez entrer une adresse électronique valide.",
                messageSubmited: "Soumis avec succès.",
                sendMessageError: "Quelque chose ne va pas, réessayez plus tard."
            }
        }
    }
}

const i18n = createI18n({
    locale: 'en', // set the initial locale
    fallbackLocale: 'en', // fallback to English if translation is missing
    messages: portfolioWebTranslations,
});

export default i18n;

