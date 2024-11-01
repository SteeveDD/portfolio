// Animations GSAP
gsap.from('#accueil h1', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('#accueil p', { opacity: 0, y: -30, duration: 1, delay: 1 });
gsap.from('#accueil .btn', { opacity: 0, y: -20, duration: 1, delay: 1.5 });

gsap.from('#apropos img', { opacity: 0, x: -50, duration: 1, scrollTrigger: '#apropos' });
gsap.from('#apropos p', { opacity: 0, x: 50, duration: 1, scrollTrigger: '#apropos' });


// Initialisation de Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    // speed: 3000,
    // autoplay: {
    //     delay: 3000,
    // },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    keyboard: {
        enabled: false
      },
      mousewheel: {
        thresholdDelta: 70
      }
});

// // Animation GSAP pour les projets
gsap.from('.swiper-slide', {
    opacity: 0,
    y: 50,
    stagger:  0.2,
    duration: 1,
    scrollTrigger: {
        trigger: '#projets',
        start: 'top center'
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chat functionality
const chatWidget = document.getElementById('chat-widget');
const chatBody = document.getElementById('chat-body');
const chatToggle = document.getElementById('chat-toggle');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatBody.style.display = 'none'

chatToggle.addEventListener('click', () => {
    chatBody.style.display = chatBody.style.display === 'none' ? 'flex' : 'none';
    chatToggle.textContent = chatBody.style.display === 'none' ? '+' : '-';
});


setTimeout(() => {
    chatBody.style.display = 'flex';
    chatToggle.textContent = '-'; // Mettre à jour le texte du bouton

    // Envoyer le message par défaut après 1 seconde de l'ouverture
    setTimeout(() => {
        addMessage('bot', "Bonjour, je m'appel Nestor, je suis le major d'homme de ce portfolio. Comment puis-je vous aider aujourd'hui ?");
    }, 1000);
}, 10000);


chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
        addMessage('user', message);
        chatInput.value = '';
        // Simulate bot response
        setTimeout(() => {
            addMessage('bot', "Merci pour votre message. Je vous répondrai dès que possible.");
        }, 1000);
    }
});

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message. Je vous contacterai bientôt !');
    contactForm.reset();
});