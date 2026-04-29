/**
 * DarkHumor.js – Transparent Black Humor for DarkGameStudio
 * Include this file AFTER your main HTML to infuse the site with
 * dry, dark, self‑aware jokes. No dependencies.
 * 
 * Usage: <script src="DarkHumor.js"></script> before </body>
 */

(function() {
    'use strict';

    // --- 1. Hero subtitle becomes a rotating manifesto of dark humour ---
    const manifesto = [
        "Because the light at the end of the tunnel is just another bug.",
        "We don't crunch. We just slowly dissolve.",
        "Our office is in a black hole. The rent is cheap.",
        "We put the 'fun' in 'dysfunctional'.",
        "Our games are so dark, even the bugs are depressed.",
        "We're not procrastinating, we're incubating existential dread.",
        "If you don't see the dark humor, maybe you're not dark enough.",
        "Our code is 90% black magic, 10% coffee.",
        "Don't worry, the darkness is cross‑browser compatible.",
        "We store your data in the Calabi‑Yau manifold. It's safe, we promise."
    ];

    function rotateManifesto() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            subtitle.textContent = manifesto[Math.floor(Math.random() * manifesto.length)];
        }
    }
    rotateManifesto();
    setInterval(rotateManifesto, 25000); // every 25 seconds

    // --- 2. Click on the DG logo for a studio secret ---
    const logo = document.querySelector('.logo-icon');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', (e) => {
            e.stopPropagation();
            alert("🎭 You found the secret: we're actually three raccoons in a trench coat. Please don't tell the investors.");
        });
    }

    // --- 3. Hero badge turns sarcastic on hover ---
    const badge = document.querySelector('.hero-badge');
    const originalBadge = badge?.textContent;
    const sarcasticBadges = [
        "🎮 Totally Not a Cult",
        "🎮 We're 'Indie' Because No One Else Would Hire Us",
        "🎮 Definitely Not Money Laundering",
        "🎮 Our Games Have Glitches, Not Bugs",
        "🎮 Dark Mode Since 2020"
    ];
    if (badge) {
        badge.addEventListener('mouseenter', () => {
            badge.textContent = sarcasticBadges[Math.floor(Math.random() * sarcasticBadges.length)];
        });
        badge.addEventListener('mouseleave', () => {
            badge.textContent = originalBadge;
        });
    }

    // --- 4. Console messages with a dark smile ---
    console.log(
        "%c🖤 Welcome to the Dark Side%c\n%cIf you're reading this, you're either a developer or completely lost. Either way, we respect your despair.",
        "font-size:1.4em;color:#e74c3c;font-weight:bold;",
        "",
        "color:#aaa;"
    );
    console.log(
        "%cOur backup policy: We store your data in a 6‑dimensional Calabi‑Yau manifold. If you can find it, you can keep it.",
        "color:#777;font-style:italic;"
    );

    // --- 5. Contact form: message goes straight into the void ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.textContent = 'HURLING INTO VOID…';
                btn.disabled = true;
                btn.style.backgroundColor = '#2c3e50';
                setTimeout(() => {
                    alert("📬 Your message has been received by our intern, Bob. He's currently questioning his life choices. We'll reply if we feel like it.");
                    btn.textContent = 'Send Message';
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }, 1600);
            }
        });
    }

    // --- 6. "Try Light Mode" button (pure evil) ---
    const footer = document.querySelector('footer p');
    if (footer) {
        const lightBtn = document.createElement('a');
        lightBtn.href = '#';
        lightBtn.textContent = 'Try Black Mode';
        lightBtn.style.cssText = 'color:#000000;margin-left:12px;text-decoration:none;font-weight:bold;';
        lightBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Temporarily murder the dark aesthetic
            document.documentElement.style.transition = 'all 0.6s';
            document.documentElement.style.setProperty('--bg-deep', '#ffffff');
            document.documentElement.style.setProperty('--bg-card', '#f5f5f5');
            document.documentElement.style.setProperty('--text', '#111111');
            document.documentElement.style.setProperty('--text-light', '#333333');
            setTimeout(() => {
                alert("What have you done?! It's an abomination. We're going back to darkness for your own protection.");
                document.documentElement.removeAttribute('style');
            }, 500);
        });
        footer.appendChild(lightBtn);
    }

    // --- 7. Permanent darkness gauge (bottom‑right corner) ---
    const gauge = document.createElement('div');
    gauge.id = 'darkness-gauge';
    gauge.innerHTML = '🌑 Darkness Level: <span id="dark-level">100%</span>';
    gauge.style.cssText = 'position:fixed;bottom:20px;right:20px;background:rgba(0,0,0,0.85);color:#e74c3c;padding:8px 16px;border-radius:20px;font-size:0.8rem;z-index:9999;border:1px solid #e74c3c;pointer-events:none;';
    document.body.appendChild(gauge);

    // Sometimes it pretends to drop to 99%, then snaps back
    setInterval(() => {
        const level = document.getElementById('dark-level');
        if (level && Math.random() < 0.15) {
            level.textContent = '99%';
            setTimeout(() => { level.textContent = '100%'; }, 1800);
        }
    }, 12000);

    // --- 8. Hover over game description – see the "truth" ---
    const trueDescriptions = [
        "We copied this from a dream we forgot. It might be good.",
        "So many plot holes, you'll need a black hole to fill them.",
        "Our AI wrote this. Please clap.",
        "40% story, 60% bug fixes.",
        "You will die. A lot. In the game, maybe.",
        "We added a flashlight, so it's a feature now.",
        "It's like therapy, but with more screaming."
    ];
    document.querySelectorAll('.game-card-body p').forEach((desc, i) => {
        const original = desc.textContent;
        desc.dataset.original = original;
        desc.addEventListener('mouseenter', () => {
            desc.textContent = trueDescriptions[i % trueDescriptions.length];
        });
        desc.addEventListener('mouseleave', () => {
            desc.textContent = desc.dataset.original;
        });
    });

    // --- 9. Konami Code: unlock "Void Mode" ---
    const konami = ['ArrowUp','ArrowDown','ArrowRight','ArrowLeft','ArrowFront','ArrowBack','b','a'];
    let kIdx = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === konami[kIdx]) {
            kIdx++;
            if (kIdx === konami.length) {
                document.body.style.transition = 'filter 2s';
                document.body.style.filter = 'invert(1) hue-rotate(180deg)';
                setTimeout(() => {
                    alert("You've unlocked Void Mode. Everything is now opposite. We're not responsible for your retinas.");
                    document.body.style.filter = '';
                }, 3200);
                kIdx = 0;
            }
        } else {
            kIdx = 0;
        }
    });

    console.log('%cDarkHumor.js loaded – embrace the absurd.', 'color:#888;');
})();
