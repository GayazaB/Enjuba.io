// Image Slider
const slider = document.querySelector('.image-slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slides[currentSlide].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide();
});

nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
});

// Notification Popup
const notificationPopup = document.querySelector('.notification-popup');
const notificationClose = document.querySelector('.notification-close');

notificationClose.addEventListener('click', () => {
    notificationPopup.style.display = 'none';
});

// Loading Animation
const loadingAnimation = document.querySelector('.loading-animation');

window.addEventListener('load', () => {
    loadingAnimation.style.display = 'none';
});

// Scroll Progress Bar
const scrollProgressBar = document.querySelector('.scroll-progress-bar');

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    scrollProgressBar.style.width = `${scrollPercent}%`;
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Modal Popup
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('.modal-trigger');
const closeModal = document.querySelector('.close');

modalTrigger.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tabbed Content
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tabContents.forEach((content) => {
            content.style.display = 'none';
        });
        tab.classList.add('active');
        tabContents[index].style.display = 'block';
    });
});

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');

accordionHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
        accordionContents[index].style.display = accordionContents[index].style.display === 'block' ? 'none' : 'block';
    });
});

// Counter
const counter = document.querySelector('.counter');
const count = parseInt(counter.innerText);
const increment = Math.ceil(count / 100);

let start = 0;
const timer = setInterval(() => {
    start += increment;
    counter.innerText = start.toString();
    if (start >= count) {
        clearInterval(timer);
    }
}, 50);

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial() {
    testimonials.forEach((testimonial) => {
        testimonial.style.display = 'none';
    });
    testimonials[currentTestimonial].style.display = 'block';
}

setInterval(() => {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    showTestimonial();
}, 5000);

showTestimonial();

// Responsive Navigation Menu
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links li');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
    navLinks.forEach((link) => {
        link.style.display = link.style.display === 'block' ? 'none' : 'block';
    });
});

// Password Strength Meter
const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strength-meter');
const strengthColors = ['red', 'orange', 'yellow', 'green'];

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = passwordStrength(password);
    strengthMeter.style.backgroundColor = strengthColors[strength];
    strengthMeter.innerText = `Strength: ${strength}`;
});


function passwordStrength(password) {
    let strength = 0;
    if (password.length >= 8) {
        strength += 1;
    }
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }
    if (/[a-z]/.test(password)) {
        strength += 1;
    }
    if (/[0-9]/.test(password)) {
        strength += 1;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
    }
    return strength;
}

// Real-time Search Results
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    fetchSearchResults(searchTerm).then((results) => {
        searchResults.innerHTML = '';
        results.forEach((result) => {
            const resultElement = document.createElement('div');
            resultElement.innerText = result;
            searchResults.appendChild(resultElement);
        });
    });
});

function fetchSearchResults(searchTerm) {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                'Result 1',
                'Result 2',
                'Result 3',
            ]);
        }, 1000);
    });
}

// Customizable Theme Switcher
const themeSwitcher = document.getElementById('theme-switcher');
const themeOptions = document.querySelectorAll('.theme-option');

themeSwitcher.addEventListener('change', () => {
    const selectedTheme = themeSwitcher.value;
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(selectedTheme);
});

themeOptions.forEach((option) => {
    option.addEventListener('click', () => {
        themeSwitcher.value = option.dataset.theme;
        themeSwitcher.dispatchEvent(new Event('change'));
    });
});

// Dynamic Chart Generation
const chartContainer = document.getElementById('chart-container');
const chartData = [
    { label: 'Jan', value: 100 },
    { label: 'Feb', value: 200 },
    { label: 'Mar', value: 300 },
];

function generateChart(data) {
    const chart = document.createElement('canvas');
    chart.width = 400;
    chart.height = 200;
    const ctx = chart.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, chart.width, chart.height);
    data.forEach((point, index) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(index * 50, chart.height - point.value, 40, point.value);
    });
    chartContainer.appendChild(chart);
}

generateChart(chartData);