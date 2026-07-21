/*==================================================
        AryaGlobe LOGISTICS
        MAIN.JS
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==========================================
            AOS
    ==========================================*/

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 900,

            once: true,

            easing: "ease-in-out"

        });

    }

    /*==========================================
            COPYRIGHT YEAR
    ==========================================*/

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /*==========================================
            COUNTER
    ==========================================*/

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = parseInt(counter.dataset.target);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 100));

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.innerHTML = current;

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerHTML = target + "+";

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /*==========================================
            NAVBAR SCROLL
    ==========================================*/

    const navbar = document.querySelector(".navbar");

    function navbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);

    /*==========================================
            BACK TO TOP
    ==========================================*/

    const backTop = document.getElementById("backTop");

    function toggleBackTop() {

        if (!backTop) return;

        if (window.scrollY > 300) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }

    toggleBackTop();

    window.addEventListener("scroll", toggleBackTop);

    if (backTop) {

        backTop.addEventListener("click", function (e) {

            e.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==========================================
            SMOOTH SCROLL
    ==========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });

    /*==========================================
            ACTIVE NAVIGATION
    ==========================================*/

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    /*==========================================
            PRELOADER
    ==========================================*/

    window.addEventListener("load", function () {

        const preloader = document.getElementById("preloader");

        if (preloader) {

            preloader.classList.add("loaded");

            setTimeout(() => {

                preloader.style.display = "none";

            }, 500);

        }

    });

    /*==========================================
            IMAGE PARALLAX
    ==========================================*/

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {

        window.addEventListener("mousemove", function (e) {

            const x = (window.innerWidth / 2 - e.clientX) / 60;

            const y = (window.innerHeight / 2 - e.clientY) / 60;

            heroImage.style.transform = `translate(${x}px, ${y}px)`;

        });

    }

});