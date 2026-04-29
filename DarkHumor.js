/**
 * DarkHumor.js - Transparent Black Humor for DarkGameStudio
 * Adds subtle, morbidly funny touches to the site.
 */
(function() {
    'use strict';

    // ===== 1. Manifesto quotes rotation =====
    const quotes = [
        "Because the light at the end of the tunnel is just another bug.",
        "We don't crunch. We just slowly dissolve.",
        "Our office is in a black hole. The rent is cheap.",
        "We put the 'fun' in 'dysfunctional'.",
        "Our games are so dark, even the bugs are depressed.",
        "We're not procrastinating, we're incubating existential dread.",
        "If you don't see the dark humor, maybe you're not dark enough.",
        "Our code is 90% black magic, 10% coffee.",
        "Don't worry, the darkness is cross‑browser compatible.",
        "We store your data in the Calabi‑Yau manifold. It's safe, we promise.",
    ];

    function rotateQuote() {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            heroSubtitle.textContent = randomQuote;
        }
    }
    rotateQuote(); // initial
    setInterval(rotateQuote, 30000); // change every 30 seconds

    // ===== 2. Easter egg on logo =====
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
        logoIcon.style.cursor = 'pointer';
        logoIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            alert("You found the secret: we're actually three raccoons in a trench coat.");
        });
    }

    // ===== 3. Hero badge hover shenanigans =====
    const badge = document.querySelector('.hero-badge');
    const originalBadgeText = badge ? badge.textContent : '';
    const sarcasticTexts = [
        "🎮 Totally Not a Cult",
        "🎮 We're 'Indie' Because No One Else Would Hire Us",
        "🎮 Definitely Not Money Laundering",
        "🎮 Our Games Have Glitches, Not Bugs",
        "🎮 Dark Mode Since 2020",
    ];

    if (badge) {
        badge.addEventListener('mouseenter', () => {
            badge.textContent = sarcasticTexts[Math.floor(Math.random() * sarcasticTexts.length)];
        });
        badge.addEventListener('mouseleave', () => {
            badge.textContent = originalBadgeText;
        });
    }

    // ===== 4. Console dark humor =====
    console.log(
        "%c🖤 Welcome to the Dark Side %c\n%cIf you're reading this, you're either a developer or lost. Either way, we respect your despair.",
        "font-size: 1.4em; color: #e74c3c; font-weight: bold;",
        "",
        "color: #aaa;"
    );
    console.log(
        "%cOur backup policy: We store your data in a 6‑dimensional Calabi‑Yau manifold. If you can find it, you can keep it.",
        "color: #777; font-style: italic;"
    );

    // ===== 5. Contact form humorous feedback =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.textContent = 'Message hurled into the void...';
                btn.disabled = true;
                btn.style.background = '#2c3e50';
                setTimeout(() => {
                    alert("Your message has been received by our intern, Bob. He's currently questioning his life choices. We'll get back to you if we feel like it.");
                    btn.textContent = 'Send Message';
                    btn.disabled = false;
                    btn.style.background = '';
                }, 1500);
            }
        });
    }

    // ===== 6. Fake "light mode" button in footer (just for fun) =====
    const footer = document.querySelector('footer p');
    if (footer) {
        const lightBtn = document.createElement('a');
        lightBtn.href = '#';
        lightBtn.textContent = '☀️ Try Light Mode';
        lightBtn.style.cssText = 'color: #ffffff; margin-left: 12px; text-decoration: none; font-weight: bold;';
        lightBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.documentElement.style.transition = 'all 0.5s';
            document.documentElement.style.setProperty('--bg-deep', '#fff');
            document.documentElement.style.setProperty('--bg-card', '#f0f0f0');
            document.documentElement.style.setProperty('--text', '#000');
            document.documentElement.style.setProperty('--text-light', '#333');
            setTimeout(() => {
                alert("What have you done?! It's an eyesore! Reverting to darkness for your own safety.");
                document.documentElement.removeAttribute('style');
            }, 400);
        });
        footer.appendChild(lightBtn);
    }

    // ===== 7. Random darkness level indicator (always 100%) =====
    const darknessMeter = document.createElement('div');
    darknessMeter.id = 'darkness-meter';
    darknessMeter.innerHTML = '🌑 Darkness Level: <span id="dark-level">100%</span>';
    darknessMeter.style.cssText = 'position: fixed; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); color: #e74c3c; padding: 8px 14px; border-radius: 20px; font-size: 0.8rem; z-index: 9999; border: 1px solid #e74c3c;';
    document.body.appendChild(darknessMeter);

    // Sometimes it drops to 99% as a joke, then snaps back
    setInterval(() => {
        const span = document.getElementById('dark-level');
        if (span && Math.random() < 0.1) {
            span.textContent = '99%';
            setTimeout(() => { span.textContent = '100%'; }, 1500);
        }
    }, 10000);

    // ===== 8. Game card descriptions with dark humor tooltips =====
    const gameCards = document.querySelectorAll('.game-card-body p');
    const jokeDescriptions = [
        "We copied the idea from a dream we forgot. It might be good.",
        "So many plot holes, you'll need a black hole to fill them.",
        "Our AI wrote this description. Please clap.",
        "40% story, 60% bug fixes.",
        "You will die. A lot. In the game, maybe.",
        "We added a flashlight, so it's a feature now.",
        "It's like therapy, but with more screaming.",
    ];
    gameCards.forEach((cardDesc, index) => {
        cardDesc.setAttribute('data-original', cardDesc.textContent);
        cardDesc.addEventListener('mouseenter', () => {
            cardDesc.textContent = jokeDescriptions[index % jokeDescriptions.length];
        });
        cardDesc.addEventListener('mouseleave', () => {
            cardDesc.textContent = cardDesc.getAttribute('data-original');
        });
    });

    // ===== 9. Additional: hidden Konami code for "real" developers =====
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.transition = 'filter 2s';
                document.body.style.filter = 'invert(1) hue-rotate(180deg)';
                setTimeout(() => {
                    alert("You've unlocked the void mode. Now everything is opposite. We're not responsible for your eyes.");
                    document.body.style.filter = '';
                }, 3000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    console.log('%cDarkHumor.js loaded. Embrace the absurdity.', 'color: #888;');
})();
