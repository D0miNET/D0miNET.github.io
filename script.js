document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const languageSelect = document.getElementById('language-select');

  if (hamburger && navMenu) {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form validation
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
      form.reset();
    });
  });

  // Animate elements on scroll
  const animateElements = document.querySelectorAll(".animate-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  animateElements.forEach((el) => observer.observe(el));
});

// Language.js
const languageSelector = document.getElementById('language-selector');
if (languageSelector) {
  // Language selector event listener
  languageSelector.addEventListener('change', (event) => {
    switchLanguage(event.target.value);
  });

  // Display current language in the language selector
  const currentLanguage = window.location.pathname.split('/').pop().split('.')[1];
  languageSelector.value = currentLanguage === 'eng' ? 'en' : currentLanguage;
}

// Function to switch the site language
function switchLanguage(language) {
  const languageMap = {
    'en': 'index.eng.html',
    'ro': 'index.ro.html',
    'de': 'index.de.html',
    'pl': 'index.pl.html',
    'it': 'index.it.html',
    'hu': 'index.hu.html',
    'ru': 'index.ru.html',
    'fr': 'index.fr.html',
    'es': 'index.es.html'
  };

  const langCode = language.split('-')[0]; // Get the language code (e.g., 'en' from 'en-US')
  const fileName = languageMap[langCode];

  if (fileName) {
    window.location.href = fileName;
  } else {
    console.log(`Language ${language} is not supported.`);
  }
}

// Call the function when the page loads
window.onload = askForLanguagePreference;

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
