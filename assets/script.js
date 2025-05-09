tailwind.config = {
    darkMode: 'class',
}

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const darkToggle = document.getElementById('darkToggle');
const darkToggleMobile = document.getElementById('darkToggleMobile');
const themeIcon = document.getElementById('theme-icon');
const themeIconMobile = document.getElementById('theme-icon-mobile');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function toggleDark() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    themeIcon.textContent = isDark ? '🌙' : '☀️';
    themeIconMobile.textContent = isDark ? '🌙' : '☀️';
}

darkToggle.addEventListener('click', toggleDark);
darkToggleMobile.addEventListener('click', toggleDark);

ScrollReveal().reveal('.animate-fade', {
    distance: '30px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 200
});

function toggleDark() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.textContent = isDark ? '🌙' : '☀️';
    themeIconMobile.textContent = isDark ? '🌙' : '☀️';
}


if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    themeIcon.textContent = '🌙';
    themeIconMobile.textContent = '🌙';
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function activateNavLink() {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // offset for fixed navbar
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("text-indigo-600", "dark:text-indigo-400", "font-semibold");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("text-indigo-600", "dark:text-indigo-400", "font-semibold");
                }
            });
        }
    });
}

window.addEventListener("scroll", activateNavLink);