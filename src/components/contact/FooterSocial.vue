<template>
    <div class="portfolio-footer">
        <div class="footer-container">
            <div class="social-links">
                <a role="link" aria-label="Go to Linkin Page" @click="openLinkedIn"><i class="bi bi-linkedin"></i></a>
                <a role="link" aria-label="Go to GitHub" @click="Githug"><i class="bi bi-github"></i></a>
            </div>
        </div>
        <div class="copyright-2023">
            <p>{{ $t('copyright') }}</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        Githug() {
            window.open('https://github.com', '_blank');
        },
        openLinkedIn() {
            window.open('https://www.linkedin.com', '_blank')
        }
    }
}
</script>

<style scoped>
.portfolio-footer {
    background-color: #0a2e2c;
    padding: 1rem;
    height: 23vh;
    width: 100%;
}

ul {
    list-style: none;
}

.social-links {
    position: relative;
}

.social-links::before {
    content: '';
    position: absolute;
    right: 55%;
    background-color: #3fd5cd;
    height: 2px;
    box-sizing: border-box;
    width: 27px;
    transform: translate(-50%, -50%) rotate(-90deg);
    margin: 1rem 0.3rem;
}

.social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0.5rem 0.5rem;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
    cursor: pointer;
}

.social-links a:hover {
    color: #fff;
    background-color: #3fd5cd;
}

.copyright-2023 {
    display: flex;
    justify-content: center;
    margin: 0 1rem;
    font-size: .8rem;
    border-top: 1px solid #0f4946;
    padding: 0.5rem 0;
    color: #b5b5b5;
}

@media screen and (min-width: 280px) and (max-width: 568px) {
    .social-links::before {
        left: 100px;
    }
}

@media screen and (min-width: 280px) and (max-width:320px) {
    .social-links::before {
        left: 50px;
    }
}

@media screen and (min-width: 640px) and (max-width:932px) {
    @media (orientation: landscape) {
        .portfolio-footer {
            height: 30vh;
        }
    }
}

@media screen and (min-width: 480px) and (max-width: 568px){
    @media (orientation: landscape) {
        .portfolio-footer {
            height: 35vh;
        }
    }
}
</style>

