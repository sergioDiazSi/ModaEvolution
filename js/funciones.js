const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
}

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        return;
    }
    sunIcon.classList.add("hidden");
}

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();


        const burgerIcon = document.getElementById('burger-icon');
        const menuOptions = document.getElementById('menu-options');
    
        burgerIcon.addEventListener('click', () => {
            menuOptions.classList.toggle('hidden');
        });

        document.addEventListener("DOMContentLoaded", function() {
        const nav = document.querySelector('nav');
        const main = document.querySelector('main');
        const navHeight = nav.offsetHeight;
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > main.offsetTop - navHeight) {
            nav.classList.add('fixed');
            } else {
            nav.classList.remove('fixed');
            }
        });

        let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop && currentScrollTop > navHeight) {
            nav.classList.add('hiddenn');
        } else {
            nav.classList.remove('hiddenn');
        }

        lastScrollTop = currentScrollTop;
    });

        });

        function idiomas() {
            let languageSelect = document.getElementById("language-select");
            let selectedLanguage = languageSelect.value;
        
            let baseUrl = "file://" + window.location.pathname.split("/").slice(0, -1).join("/");
        
            switch (selectedLanguage) {
                case "es":
                    location.href = baseUrl + "/index.html";
                    break;
                case "en":
                    location.href = baseUrl + "/en.html";
                    break;
                case "po":
                    location.href = baseUrl + "/po.html";
                    break;
                default:
                    location.href = baseUrl + "/index.html";
            }
        }
               