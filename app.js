/* --- Theme Engine --- */
function initTheme() {
    const savedTheme = localStorage.getItem('lf_theme') || 'dark';
    applyTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lf_theme', theme);
    
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.innerText = theme === 'light' ? '☀️' : '🌙';
    }

    // Update PWA / mobile status bar color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'light' ? '#f1f5f9' : '#0f172a');
    }
}
function toggleMenu() {
    const drawer = document.getElementById('menu-drawer');
    drawer.classList.contains('open') ? closeMenu() : openMenu();
}

function openMenu() {
    document.getElementById('menu-drawer').classList.add('open');
    document.getElementById('menu-overlay').classList.add('open');
    document.getElementById('menu-btn').setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    document.getElementById('menu-drawer').classList.remove('open');
    document.getElementById('menu-overlay').classList.remove('open');
    document.getElementById('menu-btn').setAttribute('aria-expanded', 'false');
}

function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(view => view.classList.remove('active-view'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(viewId).classList.add('active-view');
    
    if (viewId === 'home-view') document.getElementById('btn-home')?.classList.add('active');
    else if (viewId === 'vocab-view') document.getElementById('btn-vocab')?.classList.add('active');
    else if (viewId === 'grammar-view') document.getElementById('btn-grammar')?.classList.add('active');
    else if (viewId === 'exercises-view') document.getElementById('btn-exercises')?.classList.add('active');
    else if (viewId === 'exams-view') document.getElementById('btn-exams')?.classList.add('active');

    closeMenu();
}

function speakDailyWord(word) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = currentAccent || 'fr-FR';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
}
async function loadDailyWord() {
    const wordFrEl = document.getElementById('dailyWordFr');
    const wordEnEl = document.getElementById('dailyWordEn');
    if (!wordFrEl || !wordEnEl) return;
    /* --- User Stats & Streak Engine --- */
function updateStatsUI() {
    const streak = localStorage.getItem('lf_streak') || 1;
    const cardsExplored = localStorage.getItem('lf_cards_viewed') || 0;
    const currentLevel = (localStorage.getItem('lf_user_level') || activeLevel || 'a1').toUpperCase();

    const streakEl = document.getElementById('homeStreak');
    const cardsEl = document.getElementById('homeCardsMastered');
    const levelEl = document.getElementById('homeLevelDisplay');

    if (streakEl) streakEl.innerText = streak;
    if (cardsEl) cardsEl.innerText = cardsExplored;
    if (levelEl) levelEl.innerText = currentLevel;
}

function recordDailyVisit() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lf_last_visit');
    let streak = parseInt(localStorage.getItem('lf_streak') || '0', 10);

    if (!lastVisit) {
        streak = 1;
    } else if (lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastVisit === yesterday.toDateString()) {
            streak += 1;
        } else {
            streak = 1; // Streak broken
        }
    }

    localStorage.setItem('lf_last_visit', today);
    localStorage.setItem('lf_streak', streak);
}

function incrementCardsExplored() {
    let count = parseInt(localStorage.getItem('lf_cards_viewed') || '0', 10);
    count += 1;
    localStorage.setItem('lf_cards_viewed', count);
    updateStatsUI();
}

    // Pull from current level data or fallback list
    let pool = levelVocabData.length > 0 ? levelVocabData : [
        { fr: "Démarche", en: "Approach / Procedure" },
        { fr: "Incontournable", en: "Essential / Unavoidable" },
        { fr: "Épanouissement", en: "Fulfillment / Thriving" },
        { fr: "Auparavant", en: "Previously / Beforehand" },
        { fr: "Cependant", en: "However / Nevertheless" }
    ];

    // Seed index by day of the year so it stays stable all day
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const selected = pool[dayOfYear % pool.length];

    wordFrEl.innerText = selected.fr;
    wordEnEl.innerText = "Loading...";

    if (currentTargetLang === 'en') {
        wordEnEl.innerText = selected.en;
    } else {
        const translated = await fetchDynamicTranslation(selected.fr, currentTargetLang);
        wordEnEl.innerText = translated || selected.en;
    }
}
// --- Standardized Exam Bank ---
const liveExams = {
    delf_b2_writing: {
        title: "DELF B2 — Production Écrite",
        durationSeconds: 3600,
        type: "writing",
        passage: "Sujet : Vous résidez dans une commune où la municipalité envisage de supprimer plusieurs pistes cyclables et couloirs de bus pour fluidifier le trafic automobile. En tant que représentant d'un collectif d'usagers, vous rédigez une lettre argumentée au maire pour contester cette décision, défendre les transports doux et proposer des solutions alternatives concrètes (250 mots environ).",
        minWords: 225,
        maxWords: 275
    },
    delf_b2_reading: {
        title: "DELF B2 — Compréhension des écrits",
        durationSeconds: 900,
        type: "reading",
        passage: "Le modèle du télétravail hybride suscite d'intenses débats au sein des instances dirigeantes. Si les gains de flexibilité et d'autonomie sont indéniables pour les salariés, plusieurs sociologues alertent sur un risque d'effritement du sentiment d'appartenance collective. La dilution du lien social au travail, combinée à une frontière de plus en plus poreuse entre sphère privée et vie professionnelle, appelle une redéfinition des obligations de l'employeur. Il s'agit d'encadrer rigoureusement le droit à la déconnexion tout en garantissant des temps d'échange synchrones essentiels à la cohésion des équipes.",
        questions: [
            {
                q: "Quel est l'axe central analysé par l'auteur ?",
                options: [
                    "L'abandon définitif des bureaux physiques par toutes les entreprises",
                    "Les répercussions contrastées de la formule de travail hybride",
                    "La baisse de productivité imputable aux employés en distanciel",
                    "L'obligation légale de supprimer les réunions synchrones"
                ],
                ans: 1
            },
            {
                q: "Que craignent les sociologues mentionnés dans le texte ?",
                options: [
                    "Une perte de connexion et d'adhésion au collectif d'entreprise",
                    "Une hausse démesurée des coûts d'infrastructure",
                    "Le refus des salariés de se conformer aux horaires fixés",
                    "Une surchauffe des serveurs de messagerie professionnelle"
                ],
                ans: 0
            },
            {
                q: "Selon le texte, quelle est la priorité pour l'employeur ?",
                options: [
                    "Interdire tout travail le week-end sans exception",
                    "Réduire les jours autorisés en télétravail",
                    "Réguler la déconnexion et maintenir des créneaux synchrones",
                    "Favoriser uniquement les réunions spontanées et informelles"
                ],
                ans: 2
            }
        ]
    },
    tcf_reading: {
        title: "TCF / TEF — Compréhension écrite",
        durationSeconds: 600,
        type: "reading",
        passage: "Face au vieillissement démographique et aux impératifs de décarbonation, l'urbanisme des villes moyennes doit être repensé. Les politiques territoriales récentes incitent à la réhabilitation des friches et à la limitation stricte de l'étalement urbain afin de sanctuariser les espaces naturels périphériques.",
        questions: [
            {
                q: "Quelle stratégie foncière est expressément préconisée ?",
                options: [
                    "Étendre les lotissements pavillonnaires sur les forêts adjacentes",
                    "Reconvertir les terrains déjà artificialisés et limiter l'expansion",
                    "Démolir les centres historiques jugés inadaptés",
                    "Interdire toute nouvelle construction résidentielle"
                ],
                ans: 1
            },
            {
                q: "Quel enjeu motive en priorité ces réorientations d'aménagement ?",
                options: [
                    "Le déclin du tourisme régional",
                    "La baisse des impôts locaux",
                    "La transition écologique et l'évolution de la population",
                    "L'accélération de la vitesse de circulation automobile"
                ],
                ans: 2
            }
        ]
    }
};

function updateWordCount(text) {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const countEl = document.getElementById('live-word-count');
    if (!countEl) return;
    countEl.innerText = `Words: ${words}`;
    
    if (words < 225) {
        countEl.style.color = 'var(--text-muted)';
    } else if (words <= 275) {
        countEl.style.color = 'var(--success-color)';
    } else {
        countEl.style.color = 'var(--error-color)';
    }
}

let currentExam = null;
let examStepIndex = 0;
let userExamAnswers = {};
let examTimerInterval = null;
let examTimeRemaining = 0;

function startLiveExam() {
    const selectedKey = document.getElementById('examTypeSelect').value;
    const timePref = document.getElementById('examTimeSelect').value;
    currentExam = liveExams[selectedKey];
    examStepIndex = 0;
    userExamAnswers = {};

    document.getElementById('exam-setup-card').style.display = 'none';
    document.getElementById('exam-results-card').style.display = 'none';
    document.getElementById('exam-active-card').style.display = 'block';

    document.getElementById('live-exam-title').innerText = currentExam.title;
    document.getElementById('exam-passage-box').innerText = currentExam.passage;

    if (currentExam.type === 'writing') {
        document.getElementById('exam-writing-box').style.display = 'flex';
        document.querySelector('.exam-question-box').style.display = 'none';
        document.getElementById('examPrevBtn').style.display = 'none';
        document.getElementById('examNextBtn').style.display = 'none';
        document.getElementById('examSubmitBtn').style.display = 'inline-block';
        document.getElementById('exam-step-counter').style.display = 'none';
        document.getElementById('exam-essay-input').value = '';
        updateWordCount('');
    } else {
        document.getElementById('exam-writing-box').style.display = 'none';
        document.querySelector('.exam-question-box').style.display = 'block';
        document.getElementById('examPrevBtn').style.display = 'inline-block';
        document.getElementById('exam-step-counter').style.display = 'inline-block';
        renderExamStep();
    }

    clearInterval(examTimerInterval);
    if (timePref === 'standard') {
        examTimeRemaining = currentExam.durationSeconds;
        document.getElementById('exam-timer').style.display = 'block';
        updateExamTimerDisplay();
        examTimerInterval = setInterval(() => {
            examTimeRemaining--;
            updateExamTimerDisplay();
            if (examTimeRemaining <= 0) {
                clearInterval(examTimerInterval);
                alert("Le temps imparti est écoulé ! Soumission automatique.");
                submitExam();
            }
        }, 1000);
    } else {
        document.getElementById('exam-timer').style.display = 'none';
    }
}

function updateExamTimerDisplay() {
    const m = Math.floor(examTimeRemaining / 60).toString().padStart(2, '0');
    const s = (examTimeRemaining % 60).toString().padStart(2, '0');
    document.getElementById('exam-timer').innerText = `⏱️ ${m}:${s}`;
}

function renderExamStep() {
    const qObj = currentExam.questions[examStepIndex];
    document.getElementById('exam-step-counter').innerText = `${examStepIndex + 1} / ${currentExam.questions.length}`;
    document.getElementById('exam-question-text').innerText = `${examStepIndex + 1}. ${qObj.q}`;

    const container = document.getElementById('exam-options-grid');
    container.innerHTML = '';

    qObj.options.forEach((optText, optIdx) => {
        const isChecked = userExamAnswers[examStepIndex] === optIdx;
        const label = document.createElement('label');
        label.className = 'exam-option-label';
        label.innerHTML = `
            <input type="radio" name="exam-q" value="${optIdx}" ${isChecked ? 'checked' : ''} onchange="selectExamOption(${optIdx})">
            <span>${optText}</span>
        `;
        container.appendChild(label);
    });

    document.getElementById('examPrevBtn').disabled = examStepIndex === 0;
    const isLast = examStepIndex === currentExam.questions.length - 1;
    document.getElementById('examNextBtn').style.display = isLast ? 'none' : 'inline-block';
    document.getElementById('examSubmitBtn').style.display = isLast ? 'inline-block' : 'none';
}

function selectExamOption(idx) {
    userExamAnswers[examStepIndex] = idx;
}

function navigateExam(delta) {
    examStepIndex += delta;
    renderExamStep();
}

const PROXY_WORKER_URL = "https://gemini-evaluator-v4.23navnoor.workers.dev/";

function reAuditWithCurrentLanguage() {
    const text = document.getElementById('exam-essay-input')?.value.trim();
    if (text && currentExam?.type === 'writing') {
        requestGeminiEssayAudit(text);
    }
}

async function requestGeminiEssayAudit(essayText) {
    const reviewSection = document.getElementById('ai-essay-review-section');
    const loadingEl = document.getElementById('ai-review-loading');
    const contentEl = document.getElementById('ai-review-content');
    const selectedLang = document.getElementById('aiAuditLangSelect')?.value || 'fr';

    if (!reviewSection || !loadingEl || !contentEl) return;

    reviewSection.style.display = 'block';
    contentEl.style.display = 'none';
    loadingEl.style.display = 'block';

    const languageInstruction = selectedLang === 'en' 
        ? "Write your explanations, commentary, and suggestions in English, but quote the candidate's French text and provide French corrections."
        : "Write your entire evaluation in French.";

    const examTopic = currentExam?.passage || "Production écrite générale DELF B2";

    const systemPrompt = `You are a certified official DELF B2 and TCF/TEF examiner.
Analyze the following candidate's written production for this prompt:
"${examTopic}"

Candidate's Submission:
"""${essayText}"""

Provide a concise, professional evaluation using this exact structure:
1. **Estimated CEFR Level**: State the level (e.g., A2, B1, B2, C1) and justify in 1 sentence.
2. **Task Completion & Word Count**: Assess format adherence, formal tone/register, and argument quality.
3. **Key Grammatical & Syntactic Corrections**: Mention 2-4 specific phrases written by the candidate that contain errors (agreements, conjugations, prepositions), and show the correct version.
4. **Vocabulary & Connectors**: Highlight strong discourse connectors used or suggest 2-3 higher-level alternatives (e.g., en revanche, par conséquent).

Format cleanly using bullet points. ${languageInstruction}`;

    let critiqueText = null;

    try {
        const response = await fetch(PROXY_WORKER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: systemPrompt })
        });

        const data = await response.json();

        if (response.ok && data?.candidates?.[0]?.content?.parts?.length) {
            critiqueText = data.candidates[0].content.parts.map(p => p.text || '').join('\n');
        } else if (data?.candidates?.[0]?.finishReason && data.candidates[0].finishReason !== 'STOP') {
            critiqueText = `⚠️ Evaluation halted by safety filter: ${data.candidates[0].finishReason}`;
        } else if (data?.error) {
            critiqueText = `⚠️ Google API Error: ${data.error.message || JSON.stringify(data.error)}`;
        }
    } catch (err) {
        console.error("Proxy audit fetch error:", err);
    }

    loadingEl.style.display = 'none';
    contentEl.style.display = 'block';

    if (critiqueText) {
        const formattedHtml = critiqueText
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/^\* (.*$)/gim, '<li>$1</li>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>');
        contentEl.innerHTML = formattedHtml;
    } else {
        contentEl.innerHTML = `<p style="color: var(--error-color); margin: 0;">⚠️ Unable to parse model response. Check browser console.</p>`;
    }
}

function submitExam() {
    clearInterval(examTimerInterval);
    document.getElementById('exam-active-card').style.display = 'none';
    document.getElementById('exam-results-card').style.display = 'block';

    if (currentExam.type === 'writing') {
        const text = document.getElementById('exam-essay-input').value.trim();
        const words = text ? text.split(/\s+/).length : 0;
        
        document.getElementById('exam-score-number').innerText = `${words} mots`;
        let verdict = "";
        if (words >= 225 && words <= 275) {
            verdict = "🎯 Longueur optimale respectée (250 mots &plusmn;10%). Structure prête pour évaluation.";
        } else if (words < 225) {
            verdict = `⚠️ Volume insuffisant (${words}/250 mots). Pénalité de longueur probable au DELF B2.`;
        } else {
            verdict = `⚠️ Dépassement de consigne (${words}/250 mots). Veillez à synthétiser vos arguments.`;
        }
        document.getElementById('exam-benchmark-verdict').innerHTML = verdict;
        requestGeminiEssayAudit(text);
    } else {
        const reviewSec = document.getElementById('ai-essay-review-section');
        if (reviewSec) reviewSec.style.display = 'none';

        let score = 0;
        currentExam.questions.forEach((q, idx) => {
            if (userExamAnswers[idx] === q.ans) score++;
        });

        const total = currentExam.questions.length;
        const pct = Math.round((score / total) * 100);

        document.getElementById('exam-score-number').innerText = `${score} / ${total}`;

        let verdict = "";
        if (pct >= 80) verdict = "🎯 Excellent — Score projeté : B2 Réussi / NCLC 7-8";
        else if (pct >= 50) verdict = "🟡 Admis — Niveau intermédiaire consolidé (B1+)";
        else verdict = "🔴 Non validé — Travaillez vos connecteurs et le lexique B2.";
        
        document.getElementById('exam-benchmark-verdict').innerText = verdict;
    }
}

function resetExamCenter() {
    document.getElementById('exam-results-card').style.display = 'none';
    document.getElementById('exam-setup-card').style.display = 'block';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

function switchVocabMode(mode) {
    const flashcardView = document.getElementById('mode-flashcards');
    const listView = document.getElementById('mode-list');
    const btnFlashcard = document.getElementById('toggle-flashcard');
    const btnList = document.getElementById('toggle-list');

    if (mode === 'flashcards') {
        flashcardView.style.display = 'flex';
        listView.style.display = 'none';
        btnFlashcard.classList.add('active');
        btnList.classList.remove('active');
    } else {
        flashcardView.style.display = 'none';
        listView.style.display = 'block';
        btnFlashcard.classList.remove('active');
        btnList.classList.add('active');
        renderList();
    }
}

let activeLevel = 'a1';
let levelVocabData = [];
let currentCards = [];
let currentIndex = 0;

let currentTargetLang = localStorage.getItem('universalTargetLang') || 'en';
const translationCache = JSON.parse(localStorage.getItem('vocabTranslationCache') || '{}');

document.addEventListener('DOMContentLoaded', () => {
    const selectElem = document.getElementById('nativeLangSelect');
    if (selectElem) selectElem.value = currentTargetLang;
});

async function changeTargetLanguage(langCode) {
    currentTargetLang = langCode;
    localStorage.setItem('universalTargetLang', langCode);
    loadCard();
}

async function fetchDynamicTranslation(frenchText, targetLang) {
    const cleanWord = frenchText.replace(/\(.*?\)/g, '').replace(/\//g, ' ').trim();
    const cacheKey = `${cleanWord}_${targetLang}`;

    if (translationCache[cacheKey]) {
        return translationCache[cacheKey];
    }

    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanWord)}&langpair=fr|${targetLang}`);
        const data = await res.json();
        if (data.responseData && data.responseData.translatedText) {
            const result = data.responseData.translatedText.toLowerCase();
            translationCache[cacheKey] = result;
            localStorage.setItem('vocabTranslationCache', JSON.stringify(translationCache));
            return result;
        }
    } catch (err) {
        console.warn('Live translation failed, using fallback:', err);
    }
    return null;
}

async function switchProficiencyLevel(levelCode) {
    activeLevel = levelCode;
    try {
        const response = await fetch(`data/vocab-${levelCode}.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        levelVocabData = await response.json();
    } catch (err) {
        console.error(`Could not load vocab-${levelCode}.json:`, err);
        levelVocabData = [];
    }

    populateCategoryDropdown();
    filterChapter();
}

function populateCategoryDropdown() {
    const chFilter = document.getElementById('chapterFilter');
    chFilter.innerHTML = '<option value="all">🌐 All Topics in Level</option>';

    const categories = [];
    const seen = new Set();

    levelVocabData.forEach(item => {
        const key = item.category || `Chapter ${item.catId}`;
        if (!seen.has(key)) {
            seen.add(key);
            categories.push({ id: item.catId, name: key });
        }
    });

    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.innerText = `📖 ${cat.name}`;
        chFilter.appendChild(opt);
    });
}

function filterChapter() {
    const selected = document.getElementById('chapterFilter').value;
    currentCards = selected === "all" 
        ? [...levelVocabData] 
        : levelVocabData.filter(v => v.catId == selected);
    
    currentIndex = 0;
    loadCard();
    if (document.getElementById('mode-list').style.display === 'block') {
        renderList();
    }
}

function updateCounter() {
    const counterEl = document.getElementById('cardCounter');
    const progressEl = document.getElementById('progressBar');
    if (currentCards.length === 0) {
        counterEl.innerText = "0 / 0";
        progressEl.style.width = '0%';
    } else {
        counterEl.innerText = `Card ${currentIndex + 1} of ${currentCards.length}`;
        const percent = ((currentIndex + 1) / currentCards.length) * 100;
        progressEl.style.width = `${percent}%`;
    }
}

function renderList() {
    const listContainer = document.getElementById('mode-list');
    listContainer.innerHTML = '<div class="vocab-grid" id="vocab-grid"></div>';
    const grid = document.getElementById('vocab-grid');
    const selectedCat = document.getElementById('chapterFilter').value;
    
    let categoriesToRender = selectedCat === 'all' 
        ? [...new Set(levelVocabData.map(item => item.category))] 
        : [levelVocabData.find(v => v.catId == selectedCat)?.category].filter(Boolean);
    
    categoriesToRender.forEach(catName => {
        const words = levelVocabData.filter(v => v.category === catName);
        if (words.length === 0) return;
        const block = document.createElement('div');
        block.className = 'chapter-table-container';
        let html = `<h3>${catName}</h3><table class="vocab-table"><thead><tr><th>French</th><th>English</th></tr></thead><tbody>`;
        words.forEach(card => html += `<tr><td class="fr">${card.fr}</td><td class="en">${card.en}</td></tr>`);
        html += `</tbody></table>`;
        block.innerHTML = html;
        grid.appendChild(block);
    });
}

async function loadCard() {
    if (currentCards.length === 0) {
        document.getElementById('word-fr').innerText = 'No cards';
        document.getElementById('word-en').innerText = 'No cards';
        updateCounter();
        return;
    }
    const card = currentCards[currentIndex];
    document.getElementById('word-fr').innerText = card.fr;

    const enDisplay = document.getElementById('word-en');
    if (enDisplay) {
        if (currentTargetLang === 'en') {
            enDisplay.innerText = card.en;
        } else {
            const cleanWord = card.fr.replace(/\(.*?\)/g, '').replace(/\//g, ' ').trim();
            const cacheKey = `${cleanWord}_${currentTargetLang}`;

            if (translationCache[cacheKey]) {
                enDisplay.innerText = translationCache[cacheKey];
            } else {
                enDisplay.innerText = 'Translating...';
                const translated = await fetchDynamicTranslation(card.fr, currentTargetLang);
                enDisplay.innerText = translated || card.en;
            }
        }
    }

    document.getElementById('flashcard').classList.remove('is-flipped');
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === currentCards.length - 1;
    updateCounter();
}

function flipCard() { 
    if (currentCards.length > 0) {
        document.getElementById('flashcard').classList.toggle('is-flipped');
        incrementCardsExplored();
    } 
}

function nextCard() { 
    if (currentIndex < currentCards.length - 1) { 
        currentIndex++; 
        loadCard(); 
        incrementCardsExplored();
    } 
}
function prevCard() { 
    if (currentIndex > 0) { currentIndex--; loadCard(); } 
}

let currentAccent = 'fr-FR';

function toggleAccent(event) {
    if (event) event.stopPropagation();
    const btn = document.getElementById('accentToggleBtn');
    if (currentAccent === 'fr-FR') {
        currentAccent = 'fr-CA';
        btn.innerText = '🇨🇦 QC';
    } else {
        currentAccent = 'fr-FR';
        btn.innerText = '🇫🇷 FR';
    }
}

function speakCurrentWord(event) {
    if (event) event.stopPropagation();

    if (!('speechSynthesis' in window)) {
        alert('Text-to-speech is not supported on this browser.');
        return;
    }

    if (currentCards.length === 0) return;

    let cleanText = currentCards[currentIndex].fr
        .replace(/\(.*?\)/g, '')
        .replace(/\//g, ' ')
        .trim();

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = currentAccent;
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    let voice = voices.find(v => v.lang === currentAccent || v.lang === currentAccent.replace('-', '_'));

    if (!voice) {
        voice = voices.find(v => v.lang && v.lang.startsWith('fr'));
    }

    if (voice) {
        utterance.voice = voice;
    }

    window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

const exerciseData = [
    { ch: 1, ex: "1.1", instruction: "Write the appropriate singular definite article (le, la, l').", questions: [ { q: "_____ ami", a: "l'" }, { q: "_____ homme", a: "l'" }, { q: "_____ lampe", a: "la" }, { q: "_____ fenêtre", a: "la" }, { q: "_____ hôtel", a: "l'" }, { q: "_____ réalisme", a: "le" }, { q: "_____ ingénieur", a: "l'" }, { q: "_____ publicité", a: "la" }, { q: "_____ comédie", a: "la" }, { q: "_____ différence", a: "la" }, { q: "_____ médecin", a: "le" }, { q: "_____ sculpture", a: "la" }, { q: "_____ prononciation", a: "la" }, { q: "_____ gâteau", a: "le" } ] },
    { ch: 1, ex: "1.2", instruction: "Write the plural form of each singular noun/phrase.", questions: [ { q: "une artiste", a: "des artistes" }, { q: "un hors-d'œuvre", a: "des hors-d'œuvre" }, { q: "le milieu", a: "les milieux" }, { q: "l'étudiante", a: "les étudiantes" }, { q: "un Français", a: "des Français" }, { q: "un café", a: "des cafés" }, { q: "le chapeau", a: "les chapeaux" }, { q: "l'eau", a: "les eaux" }, { q: "la fenêtre", a: "les fenêtres" }, { q: "un choix", a: "des choix" }, { q: "une préférence", a: "des préférences" }, { q: "le travail", a: "les travaux" }, { q: "le nez", a: "les nez" }, { q: "un cours", a: "des cours" } ] },
    { ch: 1, ex: "1.4", instruction: "Write the feminine singular form of the adjectives given.", questions: [ { q: "intéressant", a: "intéressante" }, { q: "naïf", a: "naïve" }, { q: "agréable", a: "agréable" }, { q: "sérieux", a: "sérieuse" }, { q: "jaune", a: "jaune" }, { q: "marron", a: "marron" }, { q: "bleu", a: "bleue" }, { q: "costaud", a: "costaude" }, { q: "fier", a: "fière" }, { q: "chic", a: "chic" }, { q: "cher", a: "chère" }, { q: "conservateur", a: "conservatrice" }, { q: "beau", a: "belle" }, { q: "gros", a: "grosse" }, { q: "actif", a: "active" }, { q: "gentil", a: "gentille" }, { q: "travailleur", a: "travailleuse" }, { q: "drôle", a: "drôle" }, { q: "vieux", a: "vieille" }, { q: "heureux", a: "heureuse" } ] },
    { ch: 1, ex: "1.5", instruction: "Provide the correct adjective that agrees in gender and number.", questions: [ { q: "le _____ (old) homme", a: "vieil" }, { q: "la situation _____ (difficult)", a: "difficile" }, { q: "la _____ (beautiful) maison", a: "belle" }, { q: "la personne _____ (nice)", a: "gentille" }, { q: "les fleurs _____ (yellow)", a: "jaunes" }, { q: "des amis _____ (sincere)", a: "sincères" }, { q: "un _____ (great) homme", a: "grand" }, { q: "une voiture _____ (ancient)", a: "ancienne" }, { q: "d' _____ (former) professeurs", a: "anciens" }, { q: "des appartements _____ (inexpensive)", a: "bon marché/pas chers" }, { q: "une comédie _____ (funny)", a: "drôle" }, { q: "un livre _____ (interesting)", a: "intéressant" } ] },
    { ch: 2, ex: "2.1", instruction: "Complete the sentences, translating the subject pronouns.", questions: [ { q: "(You, pl.) _____ êtes en ville?", a: "Vous" }, { q: "(I) _____ suis à la maison.", a: "Je" }, { q: "(They, f.) _____ sont au travail.", a: "Elles" }, { q: "(We) _____ sommes très sympathiques!", a: "Nous" }, { q: "(You, sing.) _____ es architecte?", a: "Tu" }, { q: "(I) _____ suis grand et beau.", a: "Je" }, { q: "(They, m.) _____ sont français.", a: "Ils" }, { q: "(They) _____ sont dans le train.", a: "Ils" }, { q: "(Georges and Marilyn, you) _____ êtes drôles!", a: "Vous" }, { q: "(He) _____ est en vacances.", a: "Il" } ] },
    { ch: 2, ex: "2.2", instruction: "Complete each sentence with the correct form of être.", questions: [ { q: "Le parfum _____ de France.", a: "est" }, { q: "Ils _____ médecins.", a: "sont" }, { q: "Elle _____ dentiste.", a: "est" }, { q: "Les touristes _____ du Portugal?", a: "sont" }, { q: "Les frères de Paul _____ riches!", a: "sont" }, { q: "Le vieil hôtel _____ excellent.", a: "est" }, { q: "Nous _____ les amis de Robert.", a: "sommes" }, { q: "Les chaussures _____ en cuir.", a: "sont" }, { q: "La dame et le monsieur _____ suédois.", a: "sont" }, { q: "L'appartement des étudiants _____ bien situé.", a: "est" } ] },
    { ch: 2, ex: "2.4", instruction: "Complete using il/elle est or c'est/ce sont.", questions: [ { q: "Jeanne est architecte. _____ une voisine sociable.", a: "Elle est" }, { q: "Mes parents sont canadiens. _____ des Québécois fiers.", a: "Ce sont" }, { q: "Loïc est de Bretagne. _____ breton.", a: "Il est" }, { q: "Mon voisin est gentil. _____ un voisin super sympathique.", a: "C'est" }, { q: "La Nouvelle-Orléans. _____ une ville américaine.", a: "C'est" }, { q: "Claude? _____ très intelligent.", a: "Il est" } ] },
    { ch: 2, ex: "2.7", instruction: "Translate the adverbs in parentheses to complete the sentences.", questions: [ { q: "(sometimes) Je suis _____ heureuse.", a: "quelquefois/parfois" }, { q: "(here) Il est _____?", a: "ici" }, { q: "(now) Tu es au travail _____?", a: "maintenant" }, { q: "(today) _____ nous sommes en retard.", a: "Aujourd'hui" }, { q: "(rather) Les livres sont _____ chers.", a: "assez/plutôt" }, { q: "(often) Elles sont _____ au café.", a: "souvent" }, { q: "(always) Nous sommes _____ à l'heure.", a: "toujours" }, { q: "(very) Sylvain est _____ grand.", a: "très" }, { q: "(much) Le dessert est _____ riche.", a: "beaucoup/trop" }, { q: "(a little) Les enfants sont _____ fatigués.", a: "un peu" }, { q: "(over there) Marc est _____ devant la pharmacie.", a: "là-bas" } ] },
    { ch: 2, ex: "2.8", instruction: "Answer each question in the negative (e.g. 'elle n'est pas vieille').", questions: [ { q: "Arlette est vieille? Non, _____.", a: "elle n'est pas vieille" }, { q: "Vous êtes acteur? Non, _____.", a: "je ne suis pas acteur/actrice" }, { q: "Nous sommes en retard? Non, _____.", a: "nous ne sommes pas en retard" }, { q: "Tu es à la maison? Non, _____.", a: "je ne suis pas à la maison" }, { q: "Léon et Chantal sont de retour? Non, _____.", a: "ils ne sont pas de retour" }, { q: "Tes sœurs sont d'accord? Non, _____.", a: "elles ne sont pas d'accord" }, { q: "Georges est en train de danser? Non, _____.", a: "Georges n'est pas en train de danser" }, { q: "Je suis trop fière? Non, _____.", a: "tu n'es pas trop fière/vous n'êtes pas trop fière" } ] },
    { ch: 3, ex: "3.2", instruction: "Translate the present tense -er verb forms into French.", questions: [ { q: "we speak", a: "nous parlons" }, { q: "she listens", a: "elle écoute" }, { q: "I like", a: "j'aime" }, { q: "they (f.) rent", a: "elles louent" }, { q: "you (pol.) use", a: "vous utilisez" }, { q: "we live", a: "nous habitons" }, { q: "I arrive", a: "j'arrive" }, { q: "he hates", a: "il déteste" }, { q: "you (fam.) dream", a: "tu rêves" }, { q: "she finds", a: "elle trouve" } ] },
    { ch: 3, ex: "3.3", instruction: "Change the verb forms from singular to plural, or plural to singular.", questions: [ { q: "j'adore", a: "nous adorons" }, { q: "nous dansons", a: "je danse" }, { q: "vous regardez", a: "tu regardes" }, { q: "tu expliques", a: "vous expliquez" }, { q: "il cherche", a: "ils cherchent" }, { q: "elles ferment", a: "elle ferme" }, { q: "vous parlez", a: "tu parles" }, { q: "nous expliquons", a: "j'explique" }, { q: "elle utilise", a: "elles utilisent" }, { q: "tu détestes", a: "vous détestez" } ] },
    { ch: 3, ex: "3.5", instruction: "Provide the correct conjugated form of the indicated verb.", questions: [ { q: "Je _____ la radio. (écouter)", a: "J'écoute" }, { q: "Nous _____ après les cours. (étudier)", a: "étudions" }, { q: "On _____ travailler le samedi. (ne pas aimer)", a: "n'aime pas" }, { q: "Vous _____ un ordinateur? (utiliser)", a: "utilisez" }, { q: "Tu _____ au prof. (parler)", a: "parles" }, { q: "Mes parents _____ de prêter la voiture. (refuser)", a: "refusent" }, { q: "Marc et Josiane _____ le film. (adorer regarder)", a: "adorent regarder" }, { q: "Tu _____ le vendredi soir? (ne pas danser)", a: "ne danses pas" }, { q: "Nous _____ regarder un film. (aimer mieux)", a: "aimons mieux" }, { q: "Amélie _____ de bonnes carottes. (trouver)", a: "trouve" } ] },
    { ch: 3, ex: "3.9", instruction: "Translate the questions into yes/no French questions using inversion.", questions: [ { q: "Do you (fam.) have a cat?", a: "As-tu un chat?" }, { q: "Does Sylvie play the piano?", a: "Sylvie joue-t-elle du piano?" }, { q: "Are you (pol.) American (m.)?", a: "Êtes-vous américain?" }, { q: "Do you (fam.) like tennis or golf better?", a: "Aimes-tu mieux le tennis ou le golf?" }, { q: "Are we playing Scrabble this evening?", a: "Jouons-nous au Scrabble ce soir?" }, { q: "Are the children hungry?", a: "Les enfants ont-ils faim?" }, { q: "Isn't Jacques a teacher?", a: "Jacques n'est-il pas professeur?" }, { q: "Don't you (fam.) work in a bookstore?", a: "Ne travailles-tu pas dans une librairie?" } ] },
    { ch: 4, ex: "4.1", instruction: "Continue the series by typing out the next three numbers in French (separated by commas).", questions: [ { q: "un, deux, trois, _____ ", a: "quatre, cinq, six" }, { q: "deux, quatre, six, _____ ", a: "huit, dix, douze" }, { q: "vingt, trente, quarante, _____ ", a: "cinquante, soixante, soixante-dix" }, { q: "sept, quatorze, vingt et un, _____ ", a: "vingt-huit, trente-cinq, quarante-deux" }, { q: "soixante-sept, soixante-huit, soixante-neuf, _____ ", a: "soixante-dix, soixante et onze, soixante-douze" }, { q: "quatre-vingt-huit, soixante-dix-sept, soixante-six, _____ ", a: "cinquante-cinq, quarante-quatre, trente-trois" } ] },
    { ch: 4, ex: "4.2", instruction: "Solve the arithmetic and write the answer in French.", questions: [ { q: "quatre-vingts / quatre = _____ ", a: "vingt" }, { q: "quarante-cinq + quarante-cinq = _____ ", a: "quatre-vingt-dix" }, { q: "vingt et un * trois = _____ ", a: "soixante-trois" }, { q: "soixante et onze - vingt-six = _____ ", a: "quarante-cinq" }, { q: "quatre-vingt-huit - trente-quatre = _____ ", a: "cinquante-quatre" }, { q: "quarante-huit * deux = _____ ", a: "quatre-vingt-seize" } ] },
    { ch: 4, ex: "4.9", instruction: "Translate the short sentences with -ir verbs into French.", questions: [ { q: "We choose.", a: "Nous choisissons." }, { q: "You (fam.) act (behave) well.", a: "Tu agis bien." }, { q: "They (f.) blush.", a: "Elles rougissent." }, { q: "I'm succeeding.", a: "Je réussis." }, { q: "The children grow.", a: "Les enfants grandissent." }, { q: "They (On) widen the street.", a: "On élargit la rue." }, { q: "You're (pol.) losing weight.", a: "Vous maigrissez." }, { q: "I slow down at night.", a: "Je ralentis la nuit." }, { q: "The leaves are turning yellow.", a: "Les feuilles jaunissent." }, { q: "We finish working.", a: "Nous finissons de travailler." } ] },
    { ch: 5, ex: "5.1", instruction: "Translate into French using present tense regular -re verbs.", questions: [ { q: "Are you (fam.) coming down?", a: "Tu descends?" }, { q: "I'm losing.", a: "Je perds." }, { q: "We're answering.", a: "Nous répondons." }, { q: "Xavier is selling a truck.", a: "Xavier vend un camion." }, { q: "They (f.) visit Grandfather.", a: "Elles rendent visite à Grand-père." }, { q: "You (pol.) don't answer.", a: "Vous ne répondez pas." }, { q: "We're waiting for Charles.", a: "Nous attendons Charles." }, { q: "They (m.) defend their clients.", a: "Ils défendent leurs clients." }, { q: "The student (m.) isn't wasting time.", a: "L'étudiant ne perd pas de temps." }, { q: "Do you (pol.) hear?", a: "Entendez-vous?" }, { q: "Is she returning the book?", a: "Rend-elle le livre?" }, { q: "I'm answering the phone.", a: "Je réponds au téléphone." } ] },
    { ch: 5, ex: "5.9", instruction: "Provide the correct conjugated form for the spelling-change verbs.", questions: [ { q: "Tu _____ (acheter) les provisions?", a: "Achètes" }, { q: "Ils _____ (préférer) la cuisine thaïlandaise.", a: "préfèrent" }, { q: "On _____ (projeter) le film ce soir.", a: "projette" }, { q: "Elle _____ (envoyer) un gros paquet.", a: "envoie" }, { q: "Nous _____ (partager) le plat.", a: "partageons" }, { q: "Je _____ (essayer) de finir les devoirs.", a: "essaie" }, { q: "Quand _____ (commencer)-nous à dîner?", a: "commençons" }, { q: "Nous _____ (prononcer) bien les mots.", a: "prononçons" }, { q: "Je _____ (jeter) toujours les vieux journaux.", a: "jette" }, { q: "Le professeur _____ (annoncer) un examen.", a: "annonce" }, { q: "Monique _____ (lever) toujours la main.", a: "lève" }, { q: "Les enfants adorent _____ (manger) des bonbons.", a: "manger" }, { q: "Ils _____ (voyager) beaucoup en Europe.", a: "voyagent" }, { q: "Tu _____ (payer) les factures?", a: "paies" }, { q: "Comment vous _____ (appeler)-vous?", a: "appelez" }, { q: "Le prof _____ (répéter)-t-il les phrases?", a: "répète" } ] },
    { ch: 6, ex: "6.1", instruction: "Complete the sentences with the correct forms of the verb aller.", questions: [ { q: "Tu _____ en Suisse cet été?", a: "vas" }, { q: "Philippe _____ bientôt au travail.", a: "va" }, { q: "Nous _____ au théâtre samedi soir.", a: "allons" }, { q: "Régine _____ -t-elle à La Nouvelle-Orléans?", a: "va" }, { q: "Comment _____ -vous?", a: "allez" }, { q: "Comment _____ les enfants?", a: "vont" } ] },
    { ch: 6, ex: "6.12", instruction: "Insert the correct French preposition for geographical names (en, au, à, de, du, etc.).", questions: [ { q: "Nous allons _____ Bretagne cet été.", a: "en" }, { q: "Moi, je préfère aller _____ Paris.", a: "à" }, { q: "Les Dubois projettent de voyager _____ Turquie.", a: "en" }, { q: "Vas-tu _____ Hawaï?", a: "à" }, { q: "J'aime mieux passer les vacances _____ Mexique.", a: "au" }, { q: "Robert va travailler _____ Afrique.", a: "en" }, { q: "_____ Québec (province), tout le monde parle français.", a: "Au" }, { q: "Bangkok est _____ Thaïlande.", a: "en Thaïlande" }, { q: "Ils arrivent _____ Canada.", a: "du" }, { q: "Mes parents sont originaires _____ France.", a: "de" }, { q: "Les soldats sont de retour _____ Irak.", a: "d'" }, { q: "Ce sont des oranges _____ Afrique du Nord.", a: "d'" }, { q: "Cet avion arrive _____ États-Unis.", a: "des" }, { q: "La touriste téléphone _____ La Havane.", a: "de" } ] },
    { ch: 7, ex: "7.1", instruction: "Translate using verbs conjugated like partir.", questions: [ { q: "I serve the coffee.", a: "Je sers le café." }, { q: "The cats sleep a lot.", a: "Les chats dorment beaucoup." }, { q: "You're (pol.) not leaving soon?", a: "Vous ne partez pas bientôt?/Ne partez-vous pas bientôt?" }, { q: "Éliane is leaving for New York.", a: "Éliane part pour New York." }, { q: "Are you (fam.) sleeping?", a: "Dors-tu?" }, { q: "We're going out Friday.", a: "Nous sortons/On sort vendredi." }, { q: "Dad serves dinner.", a: "Papa sert le dîner." }, { q: "Is the witness lying?", a: "Le témoin ment-il?" }, { q: "I sense some difficulties here.", a: "Je sens des difficultés ici." }, { q: "Do you (pol.) smell the soup?", a: "Sentez-vous la soupe?" } ] },
    { ch: 7, ex: "7.5", instruction: "Provide the correct form of the suggested irregular verb.", questions: [ { q: "Je _____ bientôt chercher un emploi. (devoir)", a: "dois" }, { q: "Nous _____ venir à l'heure aujourd'hui. (pouvoir)", a: "pouvons" }, { q: "Tu ne _____ pas accompagner Papa? (vouloir)", a: "veux" }, { q: "Iris et Marie-Jo _____ voyager avec vous. (pouvoir)", a: "peuvent" }, { q: "J' _____ quelqu'un au loin. (apercevoir)", a: "aperçois" }, { q: "Les notes de Monique _____ . (décevoir)", a: "déçoivent" }, { q: "Les jeunes élèves _____ rentrer tout de suite. (devoir)", a: "doivent" }, { q: "Arnaud ne _____ pas payer son déjeuner. (pouvoir)", a: "peut" }, { q: "_____ -tu de l'argent à tes amis? (devoir)", a: "Dois" }, { q: "_____ -vous mettre votre nom ici? (vouloir)", a: "Voulez" } ] },
    { ch: 8, ex: "8.4", instruction: "Translate into French using present tense voir or croire.", questions: [ { q: "We believe. (We're believers.)", a: "Nous croyons." }, { q: "Does she see well?", a: "Voit-elle bien?" }, { q: "Sophie and Bernard believe that we're coming.", a: "Sophie et Bernard croient que nous venons." }, { q: "Do you (fam.) see Nicole sometimes?", a: "Vois-tu Nicole quelquefois?" }, { q: "I don't think so.", a: "Je crois que non." }, { q: "They (f.) believe in Einstein!", a: "Elles croient en Einstein!" }, { q: "They (m.) see the sun again in the spring.", a: "Ils revoient le soleil au printemps." }, { q: "We don't see Jo very often.", a: "Nous ne voyons pas/On ne voit pas Jo très souvent." }, { q: "He believes that it's true.", a: "Il croit que c'est vrai." }, { q: "Whom do you (fam.) see?", a: "Qui vois-tu?/Qui est-ce que tu vois?" } ] },
    { ch: 8, ex: "8.9", instruction: "Provide the correct relative pronoun (qui, que, où).", questions: [ { q: "Tu vois une place _____ on peut laisser la voiture?", a: "où" }, { q: "Margot attend les amis _____ doivent bientôt arriver.", a: "qui" }, { q: "On va à pied au café _____ Jeanne-Marie préfère.", a: "que" }, { q: "Aimes-tu les boissons _____ sont gazéifiées?", a: "qui" }, { q: "C'est une rue _____ ils peuvent faire une belle promenade.", a: "où" }, { q: "Je descends à un hôtel _____ a une bonne réputation.", a: "qui" }, { q: "L'hôtel a un restaurant _____ nous aimons dîner.", a: "où" }, { q: "Le serveur, _____ apporte la carte, est aimable.", a: "qui" }, { q: "Je n'aime pas les plats _____ vous choisissez.", a: "que" }, { q: "Je préfère les salades _____ Sylvie recommande.", a: "que" }, { q: "Tu veux une table dans la salle _____ Georges dîne?", a: "où" }, { q: "Nous allons payer l'addition _____ le serveur prépare.", a: "que" } ] },
    { ch: 9, ex: "9.5", instruction: "Answer with a direct object pronoun preceding voici or voilà.", questions: [ { q: "Où sont les livres de français?", a: "Les voici/Les voilà" }, { q: "Je cherche le numéro de téléphone.", a: "Le voici/Le voilà" }, { q: "Où est la confiture?", a: "La voici/La voilà" }, { q: "Marie et Richard, où êtes-vous?", a: "Nous voici/Nous voilà" }, { q: "Nous ne voyons pas les valises.", a: "Les voici/Les voilà" }, { q: "Tu es là?", a: "Me voici/Me voilà" } ] },
    { ch: 9, ex: "9.10", instruction: "Answer the questions affirmatively, replacing the italicized phrase with 'en'.", questions: [ { q: "Vous allez acheter des provisions?", a: "Oui, nous allons en acheter./Oui, je vais en acheter." }, { q: "Sébastien a-t-il de l'argent?", a: "Oui, il en a." }, { q: "Est-ce que tu bois du lait?", a: "Oui, j'en bois." }, { q: "Les étudiants ont-ils beaucoup de devoirs?", a: "Oui, ils en ont beaucoup." }, { q: "Madonna possède-t-elle trois maisons?", a: "Oui, elle en possède trois." }, { q: "Nous avons assez de légumes?", a: "Oui, nous en avons assez./Oui, on en a assez." }, { q: "On va chercher une douzaine d'œufs?", a: "Oui, on va en chercher une douzaine." }, { q: "As-tu besoin de logement?", a: "Oui, j'en ai besoin." }, { q: "Claudie prend deux kilos de pommes de terre?", a: "Oui, elle en prend deux." }, { q: "On utilise trop d'énergie?", a: "Oui, on en utilise trop." }, { q: "Tu as un euro à me prêter?", a: "Oui, j'en ai un." } ] },
    { ch: 10, ex: "10.4", instruction: "Complete the phrases with the correct demonstrative adjective (ce, cet, cette, ces).", questions: [ { q: "_____ belles fleurs", a: "ces" }, { q: "_____ nouvel appartement", a: "ce" }, { q: "_____ gentil chat", a: "ce" }, { q: "_____ repas délicieux", a: "ce/ces" }, { q: "_____ arbre ancien", a: "cet" }, { q: "_____ grosse valise", a: "cette" }, { q: "_____ soldats courageux", a: "ces" }, { q: "_____ article important", a: "cet" } ] },
    { ch: 10, ex: "10.9", instruction: "Write the adverb that corresponds to each adjective.", questions: [ { q: "amical", a: "amicalement" }, { q: "vrai", a: "vraiment" }, { q: "faux", a: "faussement" }, { q: "gentil", a: "gentiment" }, { q: "évident", a: "évidemment" }, { q: "vif", a: "vivement" }, { q: "franc", a: "franchement" }, { q: "différent", a: "différemment" }, { q: "bref", a: "brièvement" }, { q: "terrible", a: "terriblement" }, { q: "lent", a: "lentement" }, { q: "intelligent", a: "intelligemment" }, { q: "cruel", a: "cruellement" }, { q: "constant", a: "constamment" }, { q: "doux", a: "doucement" } ] },
    { ch: 11, ex: "11.10", instruction: "Change the instructions/advice to the 'vous' imperative form.", questions: [ { q: "Il faut faire de l'exercice.", a: "Faites de l'exercice." }, { q: "Il faut boire assez d'eau.", a: "Buvez assez d'eau." }, { q: "Il faut essayer de rester calme.", a: "Essayez de rester calme." }, { q: "Il ne faut pas fumer.", a: "Ne fumez pas." }, { q: "Il faut réfléchir à la vie.", a: "Réfléchissez à la vie." }, { q: "Il faut être sociable.", a: "Soyez sociable(s)." }, { q: "Il ne faut pas manger trop de viande.", a: "Ne mangez pas trop de viande." }, { q: "Il ne faut pas prendre l'ascenseur.", a: "Ne prenez pas l'ascenseur." } ] },
    { ch: 11, ex: "11.11", instruction: "Change these instructions/advice to the 'tu' imperative form.", questions: [ { q: "Tu dois finir tes devoirs.", a: "Finis tes devoirs!" }, { q: "Tu ne dois pas manger de bonbons.", a: "Ne mange pas de bonbons!" }, { q: "Tu dois mettre tes lunettes quand tu lis.", a: "Mets tes lunettes quand tu lis!" }, { q: "Il faut aller au lit à dix heures.", a: "Va au lit à dix heures!" }, { q: "Il ne faut pas regarder la télé le soir.", a: "Ne regarde pas la télé le soir!" }, { q: "Tu ne dois pas trop parler au téléphone.", a: "Ne parle pas trop au téléphone!" }, { q: "Tu dois écrire à ta grand-mère.", a: "Écris à ta grand-mère!" }, { q: "Tu ne dois pas perdre ton parapluie.", a: "Ne perds pas ton parapluie!" } ] },
    { ch: 12, ex: "12.3", instruction: "Complete the sentences with the correct form of the reflexive verb.", questions: [ { q: "Après le petit déjeuner, je _____ (se brosser) les dents.", a: "me brosse" }, { q: "Les garçons commencent à _____ (se raser) vers 15 ans.", a: "se raser" }, { q: "Les serveurs _____ (se laver) les mains souvent.", a: "se lavent" }, { q: "Nous _____ (se lever) chercher de l'eau.", a: "nous levons" }, { q: "Tu _____ (s'entraîner) avant de courir.", a: "t'entraînes" }, { q: "Ils vont _____ (s'installer) dans leur nouvelle maison.", a: "s'installer" } ] },
    { ch: 12, ex: "12.5", instruction: "Translate the commands into French.", questions: [ { q: "Don't get up. (polite)", a: "Ne vous levez pas." }, { q: "Wake up! (polite)", a: "Réveillez-vous!" }, { q: "Brush your teeth. (polite)", a: "Brossez-vous les dents." }, { q: "Don't sit down here. (polite)", a: "Ne vous installez pas ici." }, { q: "Go to bed. (familiar)", a: "Couche-toi./Va au lit." }, { q: "Get dressed. (familiar)", a: "Habille-toi." }, { q: "Don't go swimming now. (familiar)", a: "Ne te baigne pas maintenant." }, { q: "Have a good time! (familiar)", a: "Amuse-toi!" } ] },
    { ch: 13, ex: "13.1", instruction: "Change the verbs from the present to the passé composé.", questions: [ { q: "nous écoutons -> nous _____ ", a: "avons écouté" }, { q: "tu réfléchis -> tu _____ ", a: "as réfléchi" }, { q: "on attend -> on _____ ", a: "a attendu" }, { q: "vous choisissez -> vous _____ ", a: "avez choisi" }, { q: "elles parlent -> elles _____ ", a: "ont parlé" }, { q: "nous commençons -> nous _____ ", a: "avons commencé" }, { q: "ils entendent -> ils _____ ", a: "ont entendu" }, { q: "tu achètes -> tu _____ ", a: "as acheté" }, { q: "nous mangeons -> nous _____ ", a: "avons mangé" }, { q: "j'envoie -> j' _____ ", a: "ai envoyé" } ] },
    { ch: 13, ex: "13.4", instruction: "Provide the correct past participle for the verbs in passé composé.", questions: [ { q: "Les enfants ont _____ tard. (dormir)", a: "dormi" }, { q: "Tu as _____ de bonnes notes? (obtenir)", a: "obtenu" }, { q: "On a _____ devant le spectacle. (rire)", a: "ri" }, { q: "Vous avez _____ le train. (prendre)", a: "pris" }, { q: "J'ai _____ le dessert. (servir)", a: "servi" }, { q: "Nous avons _____ au Québec. (vivre)", a: "vécu" }, { q: "J'ai _____ téléphoner. (devoir)", a: "dû" }, { q: "Les agents ont _____ le suspect. (poursuivre)", a: "poursuivi" } ] },
    { ch: 14, ex: "14.1", instruction: "Identify the correct PC or Imparfait conjugation for the context.", questions: [ { q: "Samedi nous _____ (décider) de faire un pique-nique.", a: "avons décidé" }, { q: "On _____ (préparer) des tas de choses.", a: "a préparé" }, { q: "Antoine _____ (ne rien oublier).", a: "n'a rien oublié" }, { q: "Il _____ (mettre) des serviettes.", a: "a mis" }, { q: "Nous _____ (quitter) la maison.", a: "avons quitté" }, { q: "Et nous _____ (partir).", a: "sommes partis" }, { q: "Dans la voiture nous _____ (se mettre à) chanter.", a: "nous sommes mis à" }, { q: "Papa nous _____ (dire) de regarder le paysage.", a: "a dit" } ] },
    { ch: 14, ex: "14.8", instruction: "Translate the commands with double object pronouns (Give both familiar and polite forms separated by a slash).", questions: [ { q: "Ces cahiers? (Give them to me.)", a: "Donne-les-moi./Donnez-les-moi." }, { q: "De l'argent? (Offer him some.)", a: "Offre-lui-en./Offrez-lui-en." }, { q: "Des fruits? (Don't eat any.)", a: "N'en mange pas./N'en mangez pas." }, { q: "La voiture? (Don't sell it to her.)", a: "Ne la lui vends pas./Ne la lui vendez pas." }, { q: "Ce restaurant? (Go there.)", a: "Vas-y./Allez-y." } ] },
    { ch: 15, ex: "15.1", instruction: "Conjugate the verb in the future tense.", questions: [ { q: "Renée _____ (partir).", a: "partira" }, { q: "Olivier _____ (acheter) ses billets.", a: "achètera" }, { q: "Nous _____ (prendre) le train.", a: "prendrons" }, { q: "Mon amie _____ (venir) me voir.", a: "viendra" }, { q: "Vous _____ (être) déjà à Boston.", a: "serez" }, { q: "Il _____ (falloir) remettre ce devoir.", a: "faudra" }, { q: "Ils _____ (avoir) besoin de faire le marché.", a: "auront" }, { q: "Tu _____ (pouvoir) me prêter la voiture.", a: "pourras" } ] },
    { ch: 15, ex: "15.4", instruction: "Conjugate the verb in the conditional.", questions: [ { q: "Je _____ (aimer) sortir.", a: "aimerais" }, { q: "Ils _____ (vouloir) voyager.", a: "voudraient" }, { q: "Mathieu _____ (aller) en Europe.", a: "irait" }, { q: "Nous _____ (venir) volontiers.", a: "viendrions" }, { q: "Je _____ (prendre) deux verres.", a: "prendrais" }, { q: "Elles _____ (être) heureuses.", a: "seraient" }, { q: "_____ (faire)-tu ce voyage?", a: "Ferais" }, { q: "Est-ce que vous _____ (revoir) ce film?", a: "reverriez" } ] },
    { ch: 16, ex: "16.1", instruction: "Change these subjunctive verb forms from singular to plural.", questions: [ { q: "que je choisisse -> que nous _____ ", a: "choisissions" }, { q: "que tu achètes -> que vous _____ ", a: "achetiez" }, { q: "que tu dormes -> que vous _____ ", a: "dormiez" }, { q: "que je parle -> que nous _____ ", a: "parlions" }, { q: "qu'il finisse -> qu'ils _____ ", a: "finissent" }, { q: "qu'elle vende -> qu'elles _____ ", a: "vendent" }, { q: "que j'entende -> que nous _____ ", a: "entendions" }, { q: "que tu partes -> que vous _____ ", a: "partiez" } ] },
    { ch: 16, ex: "16.2", instruction: "Complete the sentences with the present subjunctive.", questions: [ { q: "Il faut que tu _____ à l'heure. (être)", a: "sois" }, { q: "Il est essentiel qu'il _____ de son mieux. (faire)", a: "fasse" }, { q: "Il est important que nous _____ au bureau. (aller)", a: "allions" }, { q: "Il ne faut pas que vous y _____ trop tard. (rester)", a: "restiez" }, { q: "Il n'est pas essentiel que je _____ tout aujourd'hui. (faire)", a: "fasse" }, { q: "Il faut que nous _____ contents. (être)", a: "soyons" }, { q: "Il est nécessaire qu'elle _____ réussir. (vouloir)", a: "veuille" }, { q: "Il n'est pas important qu'ils _____ toujours raison. (avoir)", a: "aient" }, { q: "Il est important que tu _____ l'adresse. (savoir)", a: "saches" }, { q: "Il faut que vous _____ me comprendre. (pouvoir)", a: "puissiez" } ] }
];

let currentExercise = null;

function populateExerciseList() {
    const ch = parseInt(document.getElementById('exChapterFilter').value);
    const exSelect = document.getElementById('exerciseSelect');
    exSelect.innerHTML = '';
    
    const filteredEx = exerciseData.filter(e => e.ch === ch);
    if (filteredEx.length === 0) {
        exSelect.innerHTML = '<option value="">No exercises available</option>';
        document.getElementById('ex-instruction').innerText = "No exercises loaded for this chapter.";
        document.getElementById('ex-questions-container').innerHTML = '';
        document.getElementById('score-display').innerText = 'Score: --';
        return;
    }

    filteredEx.forEach(ex => {
        const opt = document.createElement('option');
        opt.value = ex.ex;
        opt.innerText = `Exercise ${ex.ex}`;
        exSelect.appendChild(opt);
    });
    renderExercise();
}

function renderExercise() {
    const selectedExNum = document.getElementById('exerciseSelect').value;
    currentExercise = exerciseData.find(e => e.ex === selectedExNum);
    
    if (!currentExercise) return;

    document.getElementById('ex-instruction').innerText = currentExercise.instruction;
    document.getElementById('score-display').innerText = 'Score: --';
    
    const container = document.getElementById('ex-questions-container');
    container.innerHTML = '';

    currentExercise.questions.forEach((q, index) => {
        const row = document.createElement('div');
        row.className = 'question-row';
        
        let questionText = q.q;
        let inputHTML = `<input type="text" class="inline-input" id="input-${index}" autocomplete="off">`;
        
        if (questionText.includes('_____')) {
            questionText = questionText.replace('_____', inputHTML);
        } else {
            questionText = `${questionText} ${inputHTML}`;
        }

        row.innerHTML = `
            <div class="question-text"><span class="fr-num">${index + 1}. </span>${questionText}</div>
            <div class="feedback" id="feedback-${index}"></div>
        `;
        container.appendChild(row);
    });
}

function checkAnswers() {
    if (!currentExercise) return;
    
    const inputs = document.querySelectorAll('.inline-input');
    let correctCount = 0;

    inputs.forEach((input, index) => {
        const correctAnswer = currentExercise.questions[index].a;
        const userAnswer = input.value.trim().toLowerCase().replace(/[.,!?]/g, '');
        const possibleAnswers = correctAnswer.toLowerCase().split('/').map(s => s.trim().replace(/[.,!?]/g, ''));
        const feedbackEl = document.getElementById(`feedback-${index}`);
        
        if (userAnswer === "") {
            input.className = 'inline-input';
            feedbackEl.innerHTML = '';
        } else if (possibleAnswers.includes(userAnswer)) {
            input.className = 'inline-input correct';
            feedbackEl.innerHTML = '&#10003; Correct';
            feedbackEl.className = 'feedback text-green';
            correctCount++;
        } else {
            input.className = 'inline-input incorrect';
            feedbackEl.innerHTML = `&#10007; Incorrect. Correct answer: <strong>${correctAnswer}</strong>`;
            feedbackEl.className = 'feedback text-red';
        }
    });
    
    document.getElementById('score-display').innerText = `Score: ${correctCount} / ${inputs.length}`;
}

// App Boot
initTheme();
recordDailyVisit();
updateStatsUI();
populateExerciseList();
switchProficiencyLevel('a1').then(() => {
    loadDailyWord();
    updateStatsUI();
});
