// === FIREBASE ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getFirestore,
    doc,
    getDoc,
    updateDoc,
    increment,
    collection,
    addDoc,
    getDocs,
    serverTimestamp,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Mobile redirect (except on mobile.html)
// === MOBILE REDIRECT ===
// Only redirect to mobile.html if on a phone and NOT already on that page
const isMobileDevice = /Mobi|Android|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isOnMobilePage = window.location.pathname.includes('mobile.html');

if (isMobileDevice && !isOnMobilePage) {
    window.location.replace('mobile.html');
}


console.log("Script loaded and running");

const firebaseConfig = {
    apiKey: "AIzaSyDJq13DXmft4_6s5nB61QO8qQdD04pZgAc",
    authDomain: "ranani-memorial.firebaseapp.com",
    projectId: "ranani-memorial",
    storageBucket: "ranani-memorial.firebasestorage.app",
    messagingSenderId: "570082970027",
    appId: "1:570082970027:web:906c5c07628f57c3282aee"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// === PARTICLES ===
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        move: { enable: true, speed: 1 }
    },
    interactivity: {
        events: {
            onhover: { enable: false },
            onclick: { enable: false }
        }
    }
});

// === FADE-IN ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

if (window.innerWidth > 768) {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
} else {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}

// === SAFE LOCAL STORAGE
function safeGet(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}
function safeSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn("localStorage unavailable:", e);
    }
}

// === Music Player ===
const audio = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeBar = document.getElementById('volumeBar');
const muteBtn = document.getElementById('muteBtn');

playPauseBtn?.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
    }
});

audio?.addEventListener('timeupdate', () => {
    const { duration, currentTime } = audio;
    const percent = (currentTime / duration) * 100;
    progress.style.width = `${percent}%`;

    const mins = Math.floor(currentTime / 60);
    const secs = Math.floor(currentTime % 60).toString().padStart(2, '0');
    currentTimeEl.textContent = `${mins}:${secs}`;

    const dmins = Math.floor(duration / 60);
    const dsecs = Math.floor(duration % 60).toString().padStart(2, '0');
    if (!isNaN(dmins)) {
        durationEl.textContent = `${dmins}:${dsecs}`;
    }
});

progressContainer?.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

volumeBar?.addEventListener('input', () => {
    audio.volume = volumeBar.value;
});

muteBtn?.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.innerHTML = audio.muted ? '<i class="fa fa-volume-mute"></i>' : '<i class="fa fa-volume-up"></i>';
});

// === CANDLE COUNTER ===
window.addEventListener('DOMContentLoaded', () => {
    (async () => {
        const candleImg = document.getElementById('candle-img');
        const candleCount = document.getElementById('candle-count');
        const userLit = safeGet('candleLit');

        if (!candleImg || !candleCount) return;

        try {
            const counterRef = doc(db, 'candles', 'counter');
            const docSnap = await getDoc(counterRef);
            if (docSnap.exists()) {
                candleCount.textContent = docSnap.data().count;
            }

            if (userLit === 'true') {
                candleImg.src = 'images/candle-on.png';
            }

            candleImg.addEventListener('click', async () => {
                if (safeGet('candleLit') !== 'true') {
                    candleImg.src = 'images/candle-on.png';
                    await updateDoc(counterRef, { count: increment(1) });
                    const updated = await getDoc(counterRef);
                    candleCount.textContent = updated.data().count;
                    safeSet('candleLit', 'true');
                }
            });
        } catch (err) {
            console.error('Error handling candle counter:', err);
        }
    })();
});

// === DEPOIMENTS ===
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');
    const grid = document.getElementById('depoimentGrid');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');

    if ((form && messageList) || grid) {
        let allMessages = [];
        let currentPage = 0;
        const pageSize = 6;

        async function loadMessages() {
            try {
                const q = query(collection(db, 'depoiments'), orderBy('timestamp', 'desc'));
                const snapshot = await getDocs(q);
                allMessages = snapshot.docs.map(doc => doc.data());

                if (grid) renderPage(0);
                if (messageList) renderList();
            } catch (err) {
                console.error("Failed to load messages:", err);
            }
        }

        function renderList() {
            messageList.innerHTML = '';
            if (allMessages.length === 0) {
                const li = document.createElement('li');
                li.textContent = 'No messages yet. Be the first to write one 💬';
                li.style.fontStyle = 'italic';
                li.style.color = '#666';
                messageList.appendChild(li);
                return;
            }

            allMessages.forEach(data => {
                const li = document.createElement('li');
                li.className = 'message-item';

                let timeStr = '';
                try {
                    const date = data.timestamp?.toDate?.();
                    if (date instanceof Date && !isNaN(date)) {
                        timeStr = date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });
                    }
                } catch (e) {
                    console.warn("Invalid timestamp format:", data.timestamp);
                }

                li.innerHTML = `
          <div class="message-bubble">
            <div class="message-name">${data.name}</div>
            <div class="message-text">${data.message}</div>
            <div class="message-date">${timeStr}</div>
          </div>
        `;
                messageList.appendChild(li);
            });
        }

        function renderPage(index) {
            const totalPages = Math.ceil(allMessages.length / pageSize);
            index = Math.max(0, Math.min(index, totalPages - 1));
            grid.style.opacity = '0';
            currentPage = index;

            setTimeout(() => {
                grid.innerHTML = '';
                const start = index * pageSize;
                const page = allMessages.slice(start, start + pageSize);

                page.forEach(({ name, message }) => {
                    const card = document.createElement('div');
                    card.className = 'depoiment-card';
                    card.innerHTML = `
            <div class="message">${message}</div>
            <div class="name">– ${name}</div>
          `;
                    grid.appendChild(card);
                });

                requestAnimationFrame(() => {
                    grid.style.opacity = '1';
                });

                updateButtons();
            }, 200);
        }

        function updateButtons() {
            const totalPages = Math.ceil(allMessages.length / pageSize);
            if (prevBtn) prevBtn.style.display = currentPage === 0 ? 'none' : 'inline-block';
            if (nextBtn) nextBtn.style.display = currentPage >= totalPages - 1 ? 'none' : 'inline-block';
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPage > 0) renderPage(currentPage - 1);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if ((currentPage + 1) * pageSize < allMessages.length) {
                    renderPage(currentPage + 1);
                }
            });
        }

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value.trim();
                const message = document.getElementById('message').value.trim();
                if (!name || !message) return;

                await addDoc(collection(db, 'depoiments'), {
                    name,
                    message,
                    timestamp: serverTimestamp()
                });

                form.reset();
                form.style.display = 'none';

                const thankYou = document.getElementById('thankYouMessage');
                if (thankYou) {
                    thankYou.style.display = 'block';
                }

                loadMessages();
            });
        }

        loadMessages();
    }
});

// === LOAD HEADER & FOOTER ===
(async () => {
    await loadComponent("header-placeholder", "/components/header.html");
    await loadComponent("footer-placeholder", "/components/footer.html");
})();

async function loadComponent(id, path) {
    try {
        const html = await fetch(path).then(res => res.text());
        document.getElementById(id).innerHTML = html;
    } catch (e) {
        console.warn(`Component ${path} could not be loaded.`, e);
    }
}

// === INIT TRANSLATION ===
i18next
    .use(window.i18nextHttpBackend)
    .init({
        lng: localStorage.getItem("lang") || "en",
        fallbackLng: "en",
        backend: {
            loadPath: "/locales/{{lng}}/translation.json"
        }
    }, () => {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            el.innerHTML = i18next.t(el.dataset.i18n);
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            el.placeholder = i18next.t(el.dataset.i18nPlaceholder);
        });
    });

// === LANGUAGE SWITCH FUNCTION ===
window.changeLang = function (lng) {
    try {
        localStorage.setItem("lang", lng);
    } catch (e) {
        console.warn("Failed to set language:", e);
    }
    location.reload();
};
