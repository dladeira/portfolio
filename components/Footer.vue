<template>
    <footer class="footer">
        <div class="footer-top">
            <div class="branding">
                <nuxt-link href="/" class="logo"> dladeira<span class="logo-domain">.com</span> </nuxt-link>
                <p class="copyright">© 2025 dladeira</p>
            </div>

            <div class="nav-links">
                <nuxt-link href="/" class="nav-link">Home</nuxt-link>
                <nuxt-link href="/portfolio" class="nav-link">Portfolio</nuxt-link>
                <nuxt-link href="/contact" class="nav-link">Contact</nuxt-link>
                <nuxt-link href="/legal" class="nav-link">Legal</nuxt-link>
            </div>
        </div>

        <div class="divider" />

        <div class="footer-bottom">
            <div class="business-info">
                <p class="info-text">KVK: 96336994</p>
                <p class="info-text">VAT: NL005202827B22</p>
            </div>
            <p class="location-text">Based in Amsterdam, The Netherlands</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    width: 100%;

    margin: auto auto 0 auto;
    padding: 1rem 0;
    padding-bottom: 0.75rem;

    font-size: 0.75rem;

    @include resizable-width;

    @media (max-width: 1536px) {
        padding-left: 12rem;
        padding-right: 12rem;
    }

    @include tablet-below {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

.footer-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    @include tablet-below {
        flex-direction: column;
        gap: 1rem;
    }
}

.branding {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
}

.logo {
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    color: white;

    &:hover {
        text-decoration: none;
    }
}

.logo-domain {
    color: #60a5fa;
}

.copyright {
    margin-bottom: 3px;

    color: #9ca3af;
}

.nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
}

.nav-link {
    height: fit-content;

    text-decoration: none;
    color: #9ca3af;

    transition: color 200ms $transition;

    &:hover {
        color: #d1d5db;
    }
}

.divider {
    width: 100%;
    height: 1px;

    background-color: rgba(white, 0.08);
}

.footer-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    @include tablet-below {
        justify-content: center;
    }
}

.business-info {
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

.info-text {
    margin: 0;

    color: #9ca3af;
}

.location-text {
    margin: 0;

    color: #9ca3af;

    @include tablet-below {
        display: none;
    }
}
</style>

<script setup></script>
