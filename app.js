</head>
<body>

   <!-- Floating Navbar with Slide-Out Menu Tab -->
    <div class="navbar-container">
        <div class="navbar">
           <h1 style="cursor: pointer;" onclick="switchView('home-view')">LearningFrench<span>Sucks</span><span class="logo-tld">.com</span></h1>
            
            <button id="menu-btn" class="menu-tab-btn" aria-label="Toggle menu" aria-expanded="false" onclick="toggleMenu()">
                <span class="menu-tab-icon">☰</span>
                <span class="menu-tab-label">Menu</span>
            </button>

            <!-- Dimmed Backdrop -->
            <div id="menu-overlay" class="menu-overlay" onclick="closeMenu()"></div>

            <!-- Slide-out Drawer Panel -->
            <nav id="menu-drawer" class="menu-drawer">
                <div class="menu-drawer-header">
                    <span>Navigation</span>
                    <button class="menu-close-btn" onclick="closeMenu()" aria-label="Close menu">&times;</button>
                </div>
               <div class="menu-items">
                   <button class="nav-btn active" id="btn-home" onclick="switchView('home-view')">
                        <span class="nav-icon">🏠</span> Home
                    </button>
                    <button class="nav-btn active" id="btn-vocab" onclick="switchView('vocab-view')">
                        <span class="nav-icon">📚</span> Vocabulary
                    </button>
                    <button class="nav-btn" id="btn-grammar" onclick="switchView('grammar-view')">
                        <span class="nav-icon">📖</span> Grammar Library
                    </button>
                    <button class="nav-btn" id="btn-exercises" onclick="switchView('exercises-view')">
                        <span class="nav-icon">✍️</span> Exercises
                    </button>
                   <!-- Add this button -->
                    <button class="nav-btn" id="btn-exams" onclick="switchView('exams-view')">
                        <span class="nav-icon">⏱️</span> Mock Exams
                    </button>

  </div>
                </div>
            </nav>
        </div>
    </div>

    <!-- Main Content Wrapper -->
    <div class="app-main">
<!-- View 0: Home Landing -->
        <div id="home-view" class="view-section active-view">
            
            <div class="home-hero">
                <h2>Master French <span>Without the Fluff</span></h2>
                <p>Interactive drills, comprehensive grammar rules, and automated DELF & TCF standardized exam simulations.</p>
                <div class="home-quick-actions">
                    <button class="primary-btn" onclick="switchView('vocab-view')">Start Flashcards</button>
                    <button class="secondary-btn" onclick="switchView('exams-view')">Take Mock Exam</button>
                </div>
            </div>

            <!-- Mot du Jour Widget -->
            <div class="home-daily-box">
                <div>
                    <div class="home-daily-meta">Mot du Jour (Word of the Day)</div>
                    <div class="home-daily-word">
                        <span>Démarche</span>
                        <button class="audio-btn" style="width: 32px; height: 32px; font-size: 14px;" onclick="speakDailyWord('Démarche')" title="Pronounce">🔊</button>
                    </div>
                    <div class="home-daily-def">Approach, procedure, initiative</div>
                </div>
                <button class="secondary-btn" style="padding: 10px 18px; font-size: 13px;" onclick="switchView('vocab-view')">Browse Decks &rarr;</button>
            </div>

            <!-- Core Hub Modules -->
            <div class="home-grid">
                
                <div class="home-card" onclick="switchView('vocab-view')">
                    <div>
                        <div class="home-card-header">
                            <span class="home-card-icon">🗂️</span>
                            <h3>Vocabulary Decks</h3>
                        </div>
                        <p>Over 1,000+ words structured across A1 through C2 levels with instant audio pronunciation and translations.</p>
                    </div>
                    <span class="home-card-link">Open Flashcards &rarr;</span>
                </div>

                <div class="home-card" onclick="switchView('grammar-view')">
                    <div>
                        <div class="home-card-header">
                            <span class="home-card-icon">📖</span>
                            <h3>Grammar Library</h3>
                        </div>
                        <p>16 organized structural chapters covering everything from basic gender agreements to advanced subjunctive moods.</p>
                    </div>
                    <span class="home-card-link">Study Rules &rarr;</span>
                </div>

                <div class="home-card" onclick="switchView('exercises-view')">
                    <div>
                        <div class="home-card-header">
                            <span class="home-card-icon">✍️</span>
                            <h3>Interactive Drills</h3>
                        </div>
                        <p>Fill-in-the-blank workbook questions with real-time feedback and grading against official textbook answers.</p>
                    </div>
                    <span class="home-card-link">Practice Now &rarr;</span>
                </div>

                <div class="home-card" onclick="switchView('exams-view')">
                    <div>
                        <div class="home-card-header">
                            <span class="home-card-icon">⏱️</span>
                            <h3>Exam Simulator</h3>
                        </div>
                        <p>Timed DELF B2 & TCF assessments featuring full automated AI essay audits and benchmark scoring.</p>
                    </div>
                    <span class="home-card-link">Launch Simulator &rarr;</span>
                </div>

            </div>

        </div>
        <!-- View 1: Vocabulary -->
        <div id="vocab-view" class="view-section">
            
            <div class="page-banner">
                <h2>Vocabulary Deck</h2>
                <p>Master high-frequency French words from Chapters 1 through 16</p>
            </div>

         <div class="vocab-header">
                <!-- Keep Chapter Filter at the top -->
                <div class="filter-controls-row" style="grid-template-columns: 1fr; max-width: 450px;">
                    <select id="chapterFilter" onchange="filterChapter()">
                        <option value="all">🌐 All Topics in Level</option>
                    </select>
                </div>

                <div class="vocab-toggles">
                    <button id="toggle-flashcard" class="active" onclick="switchVocabMode('flashcards')">🗂️ Flashcards</button>
                    <button id="toggle-list" onclick="switchVocabMode('list')">📄 List View</button>
                </div>
            </div>

            <div id="mode-flashcards">
                <!-- Direct Flashcard Toolbar: Level Selector + Card Counter -->
            <!-- Direct Flashcard Toolbar: Level Selector + Translation Selector + Counter -->
                <div class="flashcard-toolbar" style="width: 100%; max-width: 500px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 10px;">
                        <!-- CEFR Level Dropdown -->
                        <select id="levelFilter" onchange="switchProficiencyLevel(this.value)" style="flex: 1; margin-bottom: 0; padding: 8px 12px; font-size: 13px;">
                            <option value="a1" selected>🟢 A1: Beginner</option>
                            <option value="a2">🟢 A2: Elementary</option>
                            <option value="b1">🟡 B1: Intermediate</option>
                            <option value="b2">🟡 B2: Upper-Intermediate</option>
                            <option value="c1">🔴 C1: Advanced</option>
                            <option value="c2">🟣 C2: Mastery</option>
                        </select>

                        <!-- Universal Language Selector -->
                        <select id="nativeLangSelect" onchange="changeTargetLanguage(this.value)" style="flex: 1; margin-bottom: 0; padding: 8px 12px; font-size: 13px;">
                            <option value="en" selected>🇬🇧 English</option>
                            <option value="es">🇪🇸 Spanish (Español)</option>
                            <option value="de">🇩🇪 German (Deutsch)</option>
                            <option value="it">🇮🇹 Italian (Italiano)</option>
                            <option value="pt">🇵🇹 Portuguese (Português)</option>
                            <option value="zh">🇨🇳 Chinese (中文)</option>
                            <option value="ja">🇯🇵 Japanese (日本語)</option>
                            <option value="ko">🇰🇷 Korean (한국어)</option>
                            <option value="ar">🇸🇦 Arabic (العربية)</option>
                            <option value="hi">🇮🇳 Hindi (हिन्दी)</option>
                            <option value="pa">🇮🇳 Punjabi (ਪੰਜਾਬੀ)</option>
                            <option value="ru">🇷🇺 Russian (Русский)</option>
                            <option value="tr">🇹🇷 Turkish (Türkçe)</option>
                            <option value="vi">🇻🇳 Vietnamese (Tiếng Việt)</option>
                            <option value="pl">🇵🇱 Polish (Polski)</option>
                            <option value="nl">🇳🇱 Dutch (Nederlands)</option>
                            <option value="uk">🇺🇦 Ukrainian (Українська)</option>
                            <option value="fa">🇮🇷 Persian (فارسی)</option>
                            <option value="tl">🇵🇭 Tagalog (Filipino)</option>
                        </select>
                    </div>

                    <div class="card-counter" id="cardCounter" style="text-align: center; font-size: 13px; font-weight: 700; color: var(--text-muted); margin-top: 4px;">Card 0 of 0</div>
                </div>
                <div class="progress-container" style="max-width: 500px; margin-bottom: 25px;">
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" id="progressBar"></div>
                    </div>
                </div>

                <div class="card-stack">
                    <div class="flashcard-container" onclick="flipCard()">
                        <div class="flashcard" id="flashcard">
                            <div class="card-face card-front">
                                <div class="card-audio-controls">
                                    <button class="accent-toggle-btn" id="accentToggleBtn" onclick="toggleAccent(event)" title="Switch Accent">🇫🇷 FR</button>
                                    <button class="audio-btn" id="audioBtn" onclick="speakCurrentWord(event)" title="Listen">🔊</button>
                                </div>
                                <div class="word-display" id="word-fr">Loading...</div>
                                <span class="hint">Click deck to flip</span>
                            </div>
                            <div class="card-face card-back">
                                <div class="word-display" id="word-en">Loading...</div>
                                <span class="hint">Click to flip back</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <button class="secondary-btn" id="prevBtn" onclick="prevCard()">&#8592; Previous</button>
                    <button class="primary-btn" onclick="flipCard()">Flip Card</button>
                    <button class="secondary-btn" id="nextBtn" onclick="nextCard()">Next &#8594;</button>
                </div>
            </div>

            <div id="mode-list">
                <div class="vocab-grid" id="vocab-grid"></div>
            </div>
        </div>

        <!-- View 2: Grammar Guide -->
        <div id="grammar-view" class="view-section">
            <div class="grammar-container">
                <div class="page-banner">
                    <h2>Grammar Library</h2>
                    <p>Comprehensive structural rules and conjugations</p>
                </div>

                <details>
                    <summary><span>1. Nouns, Articles, and Adjectives</span></summary>
                    <div class="grammar-content">
                        <h4>Definite & Indefinite Articles</h4>
                        <ul>
                            <li><strong>Definite Articles (The):</strong> Indicate a specific person, place, or thing. Use <span class="fr">le</span> (masculine singular), <span class="fr">la</span> (feminine singular), <span class="fr">l'</span> (before a vowel or mute h), and <span class="fr">les</span> (plural).</li>
                            <li><strong>Indefinite Articles (A/An/Some):</strong> Use <span class="fr">un</span> (masculine), <span class="fr">une</span> (feminine), and <span class="fr">des</span> (plural).</li>
                        </ul>
                        <h4>Adjectives</h4>
                        <ul>
                            <li>Descriptive adjectives usually follow the nouns they modify and agree in gender and number.</li>
                            <li>The feminine form usually ends in <span class="fr">-e</span>, and the plural adds an <span class="fr">-s</span>.</li>
                            <li>Exceptions that precede the noun: <span class="fr">autre, beau, bon, grand, gros, jeune, joli, mauvais, même, nouveau, petit, vieux</span>.</li>
                            <li>Adjectives of color follow the noun and agree with it, except for <span class="fr">marron</span> and <span class="fr">orange</span>, which are invariable.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>2. The Verbs être and avoir, Pronouns & Negation</span></summary>
                    <div class="grammar-content">
                        <p>These are the two most essential irregular verbs in French.</p>
                        <table class="grammar-table">
                            <tr><th>Pronoun</th><th>être (to be)</th><th>avoir (to have)</th></tr>
                            <tr><td><span class="fr">Je / J'</span></td><td>suis</td><td>ai</td></tr>
                            <tr><td><span class="fr">Tu</span></td><td>es</td><td>as</td></tr>
                            <tr><td><span class="fr">Il/Elle/On</span></td><td>est</td><td>a</td></tr>
                            <tr><td><span class="fr">Nous</span></td><td>sommes</td><td>avons</td></tr>
                            <tr><td><span class="fr">Vous</span></td><td>êtes</td><td>avez</td></tr>
                            <tr><td><span class="fr">Ils/Elles</span></td><td>sont</td><td>ont</td></tr>
                        </table>
                        <ul>
                            <li><strong>Subject Pronouns:</strong> <span class="fr">Tu</span> is familiar singular; <span class="fr">vous</span> is polite singular or plural. <span class="fr">On</span> means one, we, or people.</li>
                            <li><strong>Idioms with avoir:</strong> Avoir is used for age (<span class="fr">J'ai vingt ans</span>), feeling hot/cold (<span class="fr">avoir chaud/froid</span>), and hunger/thirst (<span class="fr">avoir faim/soif</span>).</li>
                            <li><strong>Negation:</strong> Place <span class="fr">ne</span> before the conjugated verb and <span class="fr">pas</span> after it (e.g., <span class="fr">Je ne suis pas</span>). Indefinite articles change to <span class="fr">de/d'</span> in negative sentences with <span class="fr">avoir</span>.</li>
                            <li><strong>There is/There are:</strong> Use the invariable expression <span class="fr">Il y a...</span>. Its negative is <span class="fr">Il n'y a pas de...</span>.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>3. Regular -er Verbs and Interrogatives</span></summary>
                    <div class="grammar-content">
                        <h4>Regular <span class="fr">-er</span> Verbs (e.g., parler)</h4>
                        <p>Drop the -er and add the standard endings: <span class="fr">-e, -es, -e, -ons, -ez, -ent</span>.</p>
                        <div class="example-box">
                            <p><span class="fr">Je parl<b>e</b>, Tu parl<b>es</b>, Il parl<b>e</b></span></p>
                            <p><span class="fr">Nous parl<b>ons</b>, Vous parl<b>ez</b>, Ils parl<b>ent</b></span></p>
                        </div>
                        <h4>Forming Questions (Interrogatives)</h4>
                        <ul>
                            <li><strong>Intonation:</strong> Raise the pitch of your voice at the end of the sentence (<span class="fr">Vous êtes d'ici?</span>).</li>
                            <li><strong>Tag Questions:</strong> Add <span class="fr">n'est-ce pas?</span> to the end of a statement to expect agreement.</li>
                            <li><strong>Est-ce que:</strong> Precede the entire statement with <span class="fr">est-ce que</span> (e.g., <span class="fr">Est-ce qu'elle a une opinion?</span>).</li>
                            <li><strong>Inversion:</strong> Invert the subject pronoun and verb, connecting them with a hyphen (<span class="fr">Êtes-vous déjà en retard?</span>). Insert a <span class="fr">-t-</span> between two vowels for third-person singular (<span class="fr">Parle-t-il?</span>).</li>
                            <li><strong>Information Words:</strong> <span class="fr">Qui</span> (who), <span class="fr">Que/Qu'est-ce que</span> (what), <span class="fr">Comment</span> (how), <span class="fr">Où</span> (where), <span class="fr">Quand</span> (when), <span class="fr">Quel</span> (which), <span class="fr">Pourquoi</span> (why).</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>4. Time, Dates, and Regular -ir Verbs</span></summary>
                    <div class="grammar-content">
                        <h4>Regular <span class="fr">-ir</span> Verbs (e.g., choisir)</h4>
                        <p>Drop the -ir and add the standard endings: <span class="fr">-is, -is, -it, -issons, -issez, -issent</span>.</p>
                        <div class="example-box">
                            <p><span class="fr">Je chois<b>is</b>, Tu chois<b>is</b>, Il chois<b>it</b></span></p>
                            <p><span class="fr">Nous chois<b>issons</b>, Vous chois<b>issez</b>, Ils chois<b>issent</b></span></p>
                        </div>
                        <h4>Telling Time & Dates</h4>
                        <ul>
                            <li>Use <span class="fr">Il est...</span> to tell time (e.g., <span class="fr">Il est deux heures</span>).</li>
                            <li>Use <span class="fr">midi</span> for noon and <span class="fr">minuit</span> for midnight.</li>
                            <li>To express time after the hour, state the hour plus the minutes (<span class="fr">Il est cinq heures dix</span>). Use <span class="fr">et quart</span> (quarter past) and <span class="fr">et demie</span> (half past).</li>
                            <li>Dates use the definite article <span class="fr">le</span> + cardinal number + month (<span class="fr">le cinq juillet</span>), except the 1st of the month which uses the ordinal <span class="fr">le premier</span>.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>5. Regular -re Verbs and Spelling Changes</span></summary>
                    <div class="grammar-content">
                        <h4>Regular <span class="fr">-re</span> Verbs (e.g., attendre)</h4>
                        <p>Drop the -re and add: <span class="fr">-s, -s, [nothing], -ons, -ez, -ent</span>.</p>
                        <div class="example-box">
                            <p><span class="fr">J'attend<b>s</b>, Tu attend<b>s</b>, Il attend</span></p>
                            <p><span class="fr">Nous attend<b>ons</b>, Vous attend<b>ez</b>, Ils attend<b>ent</b></span></p>
                        </div>
                        <h4>Spelling Changes in <span class="fr">-er</span> Verbs</h4>
                        <ul>
                            <li><strong>-cer verbs (commencer):</strong> Change <span class="fr">c</span> to <span class="fr">ç</span> before an -o- in the nous form (<span class="fr">nous commençons</span>) to keep the soft 's' sound.</li>
                            <li><strong>-ger verbs (manger):</strong> Add an <span class="fr">e</span> before an -o- in the nous form (<span class="fr">nous mangeons</span>) to keep the soft 'g' sound.</li>
                            <li><strong>-e-er verbs (acheter):</strong> Change mute <span class="fr">e</span> to <span class="fr">è</span> in forms with a mute e ending (e.g., <span class="fr">j'achète</span>, but <span class="fr">nous achetons</span>).</li>
                            <li><strong>-é-er verbs (préférer):</strong> Change <span class="fr">é</span> to <span class="fr">è</span> in forms where it occurs in the final sounded syllable (e.g., <span class="fr">je préfère</span>, but <span class="fr">nous préférons</span>).</li>
                            <li><strong>-eler/-eter verbs (appeler/jeter):</strong> Double the consonant <span class="fr">l</span> or <span class="fr">t</span> when the ending contains a mute e (e.g., <span class="fr">j'appelle, je jette</span>).</li>
                            <li><strong>-yer verbs (envoyer):</strong> Change <span class="fr">y</span> to <span class="fr">i</span> before a mute e ending (e.g., <span class="fr">j'envoie</span>).</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>6. Aller, Prepositions, and faire</span></summary>
                    <div class="grammar-content">
                        <h4>The Verbs aller (to go) and faire (to do/make)</h4>
                        <table class="grammar-table">
                            <tr><th>Pronoun</th><th>aller</th><th>faire</th></tr>
                            <tr><td><span class="fr">Je / J'</span></td><td>vais</td><td>fais</td></tr>
                            <tr><td><span class="fr">Tu</span></td><td>vas</td><td>fais</td></tr>
                            <tr><td><span class="fr">Il/Elle/On</span></td><td>va</td><td>fait</td></tr>
                            <tr><td><span class="fr">Nous</span></td><td>allons</td><td>faisons</td></tr>
                            <tr><td><span class="fr">Vous</span></td><td>allez</td><td>faites</td></tr>
                            <tr><td><span class="fr">Ils/Elles</span></td><td>vont</td><td>font</td></tr>
                        </table>
                        <ul>
                            <li><strong>Futur Proche:</strong> Use the conjugated form of <span class="fr">aller</span> + an infinitive verb to express the near future (e.g., <span class="fr">Je vais dîner</span> <span class="en">&mdash; I'm going to eat dinner</span>).</li>
                            <li><strong>Weather & Idioms with faire:</strong> Use <span class="fr">Il fait...</span> to describe weather (e.g., <span class="fr">Il fait chaud</span>). <span class="fr">Faire</span> is used in many chores and activities like <span class="fr">faire le ménage</span> (clean house) and <span class="fr">faire du sport</span> (play sports).</li>
                            <li><strong>Prepositions à and de:</strong> <span class="fr">à</span> indicates location/destination (at/to) or indirect objects. <span class="fr">de</span> indicates origin (from) or possession (of).</li>
                            <li><strong>Contractions:</strong> They must contract with <span class="fr">le</span> and <span class="fr">les</span>. <span class="fr">à + le = au</span>; <span class="fr">à + les = aux</span>; <span class="fr">de + le = du</span>; <span class="fr">de + les = des</span>.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>7. Irregular Verbs I & Infinitive Constructions</span></summary>
                    <div class="grammar-content">
                        <h4>Key Irregular Verb Families</h4>
                        <ul>
                            <li><strong>partir (to leave):</strong> <span class="fr">je pars, tu pars, il part, nous partons, vous partez, ils partent</span>. (Also: <span class="fr">dormir, sortir, servir, sentir</span>).</li>
                            <li><strong>venir (to come):</strong> <span class="fr">je viens, tu viens, il vient, nous venons, vous venez, ils viennent</span>. (Also: <span class="fr">tenir, devenir, revenir</span>). Note: <span class="fr">venir de</span> + infinitive means "to have just done something".</li>
                            <li><strong>dire (to say):</strong> <span class="fr">je dis, tu dis, il dit, nous disons, vous <b>dites</b>, ils disent</span>.</li>
                            <li><strong>lire (to read):</strong> <span class="fr">je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent</span>.</li>
                            <li><strong>écrire (to write):</strong> <span class="fr">j'écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent</span>.</li>
                            <li><strong>mettre (to put/place):</strong> <span class="fr">je mets, tu mets, il met, nous mettons, vous mettez, ils mettent</span>.</li>
                            <li><strong>pouvoir (can/able to):</strong> <span class="fr">je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent</span>.</li>
                            <li><strong>vouloir (to want):</strong> <span class="fr">je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent</span>.</li>
                            <li><strong>devoir (must/owe):</strong> <span class="fr">je dois, tu dois, il doit, nous devons, vous devez, ils doivent</span>.</li>
                            <li><strong>recevoir (to receive):</strong> <span class="fr">je reçois, tu reçois, il reçoit, nous recevons, vous recevez, ils reçoivent</span>.</li>
                        </ul>
                        <h4>Verb + Verb Constructions</h4>
                        <ul>
                            <li>Some verbs require no preposition before a following infinitive (e.g., <span class="fr">aimer, aller, devoir, pouvoir, vouloir</span>).</li>
                            <li>Some require <span class="fr">à</span> (e.g., <span class="fr">aider à, commencer à, réussir à</span>).</li>
                            <li>Some require <span class="fr">de</span> (e.g., <span class="fr">accepter de, décider de, essayer de, refuser de</span>).</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>8. Irregular Verbs II & Relative Pronouns</span></summary>
                    <div class="grammar-content">
                        <h4>Connaître vs. Savoir</h4>
                        <ul>
                            <li><strong>connaître:</strong> Means to be acquainted with a person, place, or thing. <span class="fr">je connais, tu connais, il connaît, nous connaissons, vous connaissez, ils connaissent</span>.</li>
                            <li><strong>savoir:</strong> Means to know a fact or how to do something. <span class="fr">je sais, tu sais, il sait, nous savons, vous savez, ils savent</span>.</li>
                        </ul>
                        <h4>More Irregular Families</h4>
                        <ul>
                            <li><strong>voir (to see):</strong> <span class="fr">je vois, tu vois, il voit, nous voyons, vous voyez, ils voient</span>. (Also: <span class="fr">croire</span> - to believe).</li>
                            <li><strong>courir (to run):</strong> <span class="fr">je cours, tu cours, il court, nous courons, vous courez, ils courent</span>.</li>
                            <li><strong>rire (to laugh):</strong> <span class="fr">je ris, tu ris, il rit, nous rions, vous riez, ils rient</span>.</li>
                            <li><strong>offrir (to offer):</strong> <span class="fr">j'offre, tu offres, il offre, nous offrons, vous offrez, ils offrent</span>. (Takes -er verb endings! Also: <span class="fr">ouvrir, couvrir, découvrir</span>).</li>
                            <li><strong>conduire (to drive):</strong> <span class="fr">je conduis, tu conduis, il conduit, nous conduisons, vous conduisez, ils conduisent</span>.</li>
                            <li><strong>suivre (to follow):</strong> <span class="fr">je suis, tu suis, il suit, nous suivons, vous suivez, ils suivent</span>.</li>
                            <li><strong>vivre (to live):</strong> <span class="fr">je vis, tu vis, il vit, nous vivons, vous vivez, ils vivent</span>.</li>
                            <li><strong>craindre (to fear):</strong> <span class="fr">je crains, tu crains, il craint, nous craignons, vous craignez, ils craignent</span>.</li>
                        </ul>
                        <h4>Relative Pronouns</h4>
                        <ul>
                            <li><span class="fr">qui</span> (who/that/which) is the subject of a relative clause.</li>
                            <li><span class="fr">que</span> (whom/that/which) is the direct object of a relative clause.</li>
                            <li><span class="fr">où</span> is used for time and place (where/when).</li>
                            <li><span class="fr">lequel/laquelle</span> replaces object of prepositions.</li>
                            <li><span class="fr">dont</span> (of whom/of which/whose) replaces "de + an object" or indicates possession.</li>
                            <li>Indefinite relative pronouns (what) are <span class="fr">ce qui, ce que, ce dont</span>.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>9. Prendre, boire, Partitives & Object Pronouns</span></summary>
                    <div class="grammar-content">
                        <h4>Prendre (to take/have) & Boire (to drink)</h4>
                        <ul>
                            <li><strong>prendre:</strong> <span class="fr">je prends, tu prends, il prend, nous prenons, vous prenez, ils pre<b>nn</b>ent</span>.</li>
                            <li><strong>boire:</strong> <span class="fr">je bois, tu bois, il boit, nous b<b>uv</b>ons, vous b<b>uv</b>ez, ils boivent</span>.</li>
                        </ul>
                        <h4>The Partitive Article (Some/Any)</h4>
                        <ul>
                            <li>Used for unmeasurable quantities (food/drink). Forms: <span class="fr">du</span> (masc), <span class="fr">de la</span> (fem), <span class="fr">de l'</span> (vowel).</li>
                            <li>In the negative, or after expressions of quantity (like <span class="fr">beaucoup</span>), all partitive and indefinite articles shorten to <span class="fr">de/d'</span>.</li>
                        </ul>
                        <h4>Direct and Indirect Object Pronouns</h4>
                        <ul>
                            <li><strong>Direct Objects:</strong> Receive the action directly (answers what? or whom?). Pronouns: <span class="fr">me, te, le, la, nous, vous, les</span>. Placed directly before the conjugated verb.</li>
                            <li><strong>Indirect Objects:</strong> Answer "to whom?" or "for whom?" (requires à). Pronouns: <span class="fr">me, te, lui, nous, vous, leur</span>. Placed before the conjugated verb.</li>
                        </ul>
                        <h4>The Pronouns "y" and "en"</h4>
                        <ul>
                            <li><span class="fr">y</span> replaces a preposition of location (there) or "à + a thing/idea".</li>
                            <li><span class="fr">en</span> replaces nouns preceded by a partitive/indefinite article (some/any) or "de + a noun".</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>10. Possessives, Demonstratives, Comparatives</span></summary>
                    <div class="grammar-content">
                        <h4>Possessive Adjectives and Pronouns</h4>
                        <ul>
                            <li><strong>Adjectives:</strong> Match the gender/number of the item owned, not the owner. <span class="fr">mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs</span>. Use <span class="fr">mon/ton/son</span> before feminine words starting with a vowel.</li>
                            <li><strong>Pronouns:</strong> Stand alone to mean "mine, yours, etc." Always preceded by a definite article. <span class="fr">le mien, le tien, le sien, le nôtre, le vôtre, le leur</span> (and their feminine/plural forms).</li>
                        </ul>
                        <h4>Demonstrative Adjectives and Pronouns</h4>
                        <ul>
                            <li><strong>Adjectives (this/that/these/those):</strong> Always precede a noun. <span class="fr">ce</span> (masc), <span class="fr">cet</span> (masc vowel), <span class="fr">cette</span> (fem), <span class="fr">ces</span> (plural).</li>
                            <li><strong>Pronouns (this one/that one):</strong> Must be followed by -ci/-là, a preposition, or relative clause. <span class="fr">celui, celle, ceux, celles</span>.</li>
                            <li><strong>Indefinite Demonstratives:</strong> <span class="fr">ceci, cela, ça</span>.</li>
                        </ul>
                        <h4>Comparatives and Superlatives</h4>
                        <ul>
                            <li><strong>Adjectives/Adverbs:</strong> Compare using <span class="fr">plus...que</span> (more), <span class="fr">aussi...que</span> (as), <span class="fr">moins...que</span> (less). Superlatives use <span class="fr">le/la/les plus</span> or <span class="fr">le moins</span>.</li>
                            <li><strong>Nouns:</strong> Compare quantities using <span class="fr">plus de...que</span>, <span class="fr">autant de...que</span>, <span class="fr">moins de...que</span>.</li>
                            <li><strong>Verbs:</strong> Compare actions using <span class="fr">plus que, autant que, moins que</span> after the verb.</li>
                            <li><strong>Irregulars:</strong> <span class="fr">bon</span> -> <span class="fr">meilleur</span> (better); <span class="fr">bien</span> -> <span class="fr">mieux</span> (better).</li>
                        </ul>
                        <h4>Adverbs</h4>
                        <ul>
                            <li>Usually formed by adding <span class="fr">-ment</span> to the feminine form of an adjective (e.g., <span class="fr">douce</span> -> <span class="fr">doucement</span>). Or to the masculine if it ends in a vowel (<span class="fr">vraiment</span>). Adjectives ending in -ent/-ant become <span class="fr">-emment</span> and <span class="fr">-amment</span>.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>11. Negatives, Stressed Pronouns, Imperative</span></summary>
                    <div class="grammar-content">
                        <h4>Negative Expressions</h4>
                        <p>Instead of "pas", use these with "ne" before the verb:</p>
                        <ul>
                            <li><span class="fr">ne... jamais</span> (never)</li>
                            <li><span class="fr">ne... pas encore</span> (not yet)</li>
                            <li><span class="fr">ne... plus</span> (no longer)</li>
                            <li><span class="fr">ne... rien</span> (nothing)</li>
                            <li><span class="fr">ne... personne</span> (no one)</li>
                            <li>To express limits (only), use <span class="fr">ne... que...</span> where "que" is placed before the limited noun.</li>
                        </ul>
                        <h4>Stressed (Tonic) Pronouns</h4>
                        <ul>
                            <li>Forms: <span class="fr">moi, toi, lui, elle, soi, nous, vous, eux, elles</span>.</li>
                            <li>Used after prepositions (<span class="fr">avec moi</span>), in compound subjects (<span class="fr">Thomas et toi</span>), for emphasis, after c'est/ce sont, and to indicate possession with "être à".</li>
                        </ul>
                        <h4>The Imperative (Commands)</h4>
                        <ul>
                            <li>Conjugated in three persons without subject pronouns: <span class="fr">tu, nous, vous</span>.</li>
                            <li>For -er verbs (and aller), drop the final "s" in the "tu" form (e.g., <span class="fr">Parle!</span> <span class="fr">Va!</span>).</li>
                            <li><strong>Object Pronouns in Commands:</strong> Attached with a hyphen in affirmative commands (<span class="fr">Passe-moi le sel!</span>), but precede the verb in negative commands (<span class="fr">Ne me passe pas le sel!</span>).</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>12. Pronominal Verbs and Present Participle</span></summary>
                    <div class="grammar-content">
                        <h4>Pronominal (Reflexive) Verbs</h4>
                        <ul>
                            <li>Used when the action reflects back on the subject (e.g., <span class="fr">se laver</span> - to wash oneself).</li>
                            <li>Accompanied by a reflexive pronoun matching the subject: <span class="fr">je me, tu te, il se, nous nous, vous vous, ils se</span>.</li>
                            <li><strong>Reciprocal verbs:</strong> Express a mutual action involving two or more people (e.g., <span class="fr">Ils se regardent</span> - They look at each other).</li>
                            <li><strong>Idiomatic pronominals:</strong> Verbs that change meaning when made reflexive (e.g., <span class="fr">mettre</span> = to put; <span class="fr">se mettre à</span> = to begin to).</li>
                        </ul>
                        <h4>The Present Participle</h4>
                        <ul>
                            <li>Equivalent to English "-ing".</li>
                            <li>Formed by dropping the <span class="fr">-ons</span> ending from the "nous" form of the present tense and adding <span class="fr">-ant</span> (e.g., <span class="fr">faisons</span> -> <span class="fr">faisant</span>).</li>
                            <li>Irregulars: <span class="fr">ayant</span> (avoir), <span class="fr">étant</span> (être), <span class="fr">sachant</span> (savoir).</li>
                            <li>Often preceded by the preposition <span class="fr">en</span> (while, upon, in, by) to express simultaneous actions or cause and effect (e.g., <span class="fr">en étudiant</span> - by studying).</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary><span>13. The Passé Composé</span></summary>
                    <div class="grammar-content">
                        <p>The passé composé indicates completed action or actions in the past.</p>
                        <ul>
                            <li>It is a compound tense formed with the present tense of the auxiliary verb <span class="fr">avoir</span> (or être for specific verbs) + the past participle of the main verb.</li>
                        </ul>
                        <h4>Regular Past Participles</h4>
                        <ul>
                            <li>Drop the infinitive ending and replace it.</li>
                            <li><strong>-er verbs:</strong> add <span class="fr">-é</span> (e.g., parler -> <span class="fr">parlé</span>).</li>
                            <li><strong>-ir verbs:</strong> add <span class="fr">-i</span> (e.g., choisir -> <span class="fr">choisi</span>).</li>
                            <li><strong>-re verbs:</strong> add <span class="fr">-u</span> (e.g., attendre -> <span class="fr">attendu</span>).</li>
                        </ul>
                        <h4>Key Irregular Past Participles</h4>
                        <p><span class="fr">eu</span> (avoir), <span class="fr">bu</span> (boire), <span class="fr">vu</span> (voir), <span class="fr">dû</span> (devoir), <span class="fr">lu</span> (lire), <span class="fr">pu</span> (pouvoir), <span class="fr">su</span> (savoir), <span class="fr">pris</span> (prendre), <span class="fr">compris</span> (comprendre), <span class="fr">mis</span> (mettre), <span class="fr">dit</span> (dire), <span class="fr">écrit</span> (écrire), <span class="fr">fait</span> (faire), <span class="fr">offert</span> (offrir), <span class="fr">ouvert</span> (ouvrir).</p>
                    </div>
                </details>

                <details>
                    <summary><span>14. The Imparfait & Past Narration</span></summary>
                    <div class="grammar-content">
                        <h4>The Imparfait (Imperfect)</h4>
                        <p>The imparfait is used to describe continuous or habitual past actions or states, and to set the scene in descriptions.</p>
                        <ul>
                            <li><strong>Formation:</strong> Drop the <span class="fr">-ons</span> ending from the <span class="fr">nous</span> form of the present tense, and add the endings: <span class="fr">-ais, -ais, -ait, -ions, -iez, -aient</span>.</li>
                        </ul>
                        <div class="example-box">
                            <p><span class="fr">nous parlons</span> -> <span class="fr">je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient</span>.</p>
                        </div>
                        <h4>Passé Composé vs. Imparfait</h4>
                        <ul>
                            <li><strong>Passé Composé:</strong> Expresses a completed past action or a sequence of actions (sudden changes, interruptions).</li>
                            <li><strong>Imparfait:</strong> Indicates ongoing, habitual, background actions, descriptions, and mental/emotional states.</li>
                        </ul>
                        <div class="example-box">
                            <p><span class="fr">J'avais faim quand je me suis réveillé.</span> <span class="en">&mdash; I was (felt) hungry when I woke up.</span></p>
                        </div>
                    </div>
                </details>

                <details>
                    <summary><span>15. Future, Conditional, & Pluperfect</span></summary>
                    <div class="grammar-content">
                        <h4>The Future Tense</h4>
                        <ul>
                            <li><strong>Formation:</strong> Add the endings <span class="fr">-ai, -as, -a, -ons, -ez, -ont</span> to the entire verb infinitive (drop the final -e for -re verbs).</li>
                            <li><strong>Irregular stems:</strong> <span class="fr">aller (ir-), avoir (aur-), courir (courr-), devoir (devr-), être (ser-), faire (fer-), pouvoir (pourr-), savoir (saur-), venir (viendr-), voir (verr-), vouloir (voudr-)</span>.</li>
                        </ul>
                        <h4>The Conditional</h4>
                        <ul>
                            <li>Equivalent to the English "would" + infinitive.</li>
                            <li><strong>Formation:</strong> Use the exact same stem as the future tense, but add the imparfait endings: <span class="fr">-ais, -ais, -ait, -ions, -iez, -aient</span>.</li>
                        </ul>
                        <h4>Si-Clauses (If... Then)</h4>
                        <ul>
                            <li>If the <span class="fr">si</span> clause uses the <strong>imparfait</strong>, the main clause uses the <strong>conditional</strong>.</li>
                            <li>If the <span class="fr">si</span> clause uses the <strong>pluperfect</strong>, the main clause uses the <strong>past conditional</strong>.</li>
                        </ul>
                        <h4>The Pluperfect (Plus-que-parfait)</h4>
                        <p>Expresses "had done" something. Formed with the imparfait of the auxiliary verb (<span class="fr">avoir</span> or <span class="fr">être</span>) + the past participle of the main verb.</p>
                    </div>
                </details>

                <details>
                    <summary><span>16. The Subjunctive Mood</span></summary>
                    <div class="grammar-content">
                        <p>The subjunctive mood expresses the speaker's feelings about an action, concerning necessity, importance, emotion, possibility, or doubt. It usually appears in a dependent clause following <span class="fr">que/qu'</span>.</p>
                        <h4>Formation</h4>
                        <ul>
                            <li>Drop the <span class="fr">-ent</span> from the <span class="fr">ils/elles</span> form of the present indicative, and add the subjunctive endings: <span class="fr">-e, -es, -e, -ions, -iez, -ent</span>.</li>
                        </ul>
                        <div class="example-box">
                            <p><span class="fr">que je parle, que tu parles, qu'il parle, que nous parlions, que vous parliez, qu'ils parlent</span>.</p>
                        </div>
                        <h4>Highly Irregular Subjunctives</h4>
                        <ul>
                            <li><strong>faire:</strong> <span class="fr">que je fasse, que nous fassions</span></li>
                            <li><strong>pouvoir:</strong> <span class="fr">que je puisse, que nous puissions</span></li>
                            <li><strong>savoir:</strong> <span class="fr">que je sache, que nous sachions</span></li>
                            <li><strong>aller:</strong> <span class="fr">que j'aille, que nous allions</span></li>
                            <li><strong>vouloir:</strong> <span class="fr">que je veuille, que nous voulions</span></li>
                            <li><strong>être:</strong> <span class="fr">que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient</span></li>
                            <li><strong>avoir:</strong> <span class="fr">que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient</span></li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>

        <!-- View 3: Exercises -->
        <div id="exercises-view" class="view-section">
            <div class="exercise-wrapper">
                <div class="page-banner">
                    <h2>Interactive Workbook</h2>
                    <p>Fill in the blanks to test your knowledge</p>
                </div>

                <div class="exercise-filters">
                    <select id="exChapterFilter" onchange="populateExerciseList()">
                        <option value="1">Chapter 1</option>
                        <option value="2">Chapter 2</option>
                        <option value="3">Chapter 3</option>
                        <option value="4">Chapter 4</option>
                        <option value="5">Chapter 5</option>
                        <option value="6">Chapter 6</option>
                        <option value="7">Chapter 7</option>
                        <option value="8">Chapter 8</option>
                        <option value="9">Chapter 9</option>
                        <option value="10">Chapter 10</option>
                        <option value="11">Chapter 11</option>
                        <option value="12">Chapter 12</option>
                        <option value="13">Chapter 13</option>
                        <option value="14">Chapter 14</option>
                        <option value="15">Chapter 15</option>
                        <option value="16">Chapter 16</option>
                    </select>
                    <select id="exerciseSelect" onchange="renderExercise()">
                        <!-- Populated dynamically -->
                    </select>
                </div>

                <div class="exercise-card" id="exercise-card">
                    <h3 class="exercise-instruction" id="ex-instruction">Loading instruction...</h3>
                    <div id="ex-questions-container">
                        <!-- Questions injected here -->
                    </div>
                    
                    <div class="exercise-actions">
                        <div class="score-display" id="score-display">Score: --</div>
                        <div>
                            <button class="secondary-btn" onclick="renderExercise()" style="margin-right: 10px;">Reset</button>
                            <button class="primary-btn" onclick="checkAnswers()">Check Answers</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- View 4: Live Exam Center -->
        <div id="exams-view" class="view-section">
            <div class="page-banner">
                <h2>Standardized Exam Simulator</h2>
                <p>Timed practice modules adhering to official DELF B2 & TCF/TEF standards</p>
            </div>
<!-- Exam Hub Setup Card -->
            <div id="exam-setup-card" class="exam-card">
                <h3 class="exam-header-title">Select an Assessment Module</h3>
                <div class="filter-controls-row" style="grid-template-columns: 1fr 1fr; margin-bottom: 25px;">
                    <select id="examTypeSelect">
                        <option value="delf_b2_reading">📘 DELF B2 — Compréhension des écrits</option>
                        <option value="tcf_reading">⏱️ TCF / TEF — Reading Assessment (Timed)</option>
                        <option value="delf_b2_writing">✍️ DELF B2 — Production Écrite (Essay & Letter)</option>
                    </select>
                    <select id="examTimeSelect">
                        <option value="standard">⏳ Standard Official Time Limit</option>
                        <option value="practice">⚡ Express Practice (No Timer)</option>
                    </select>
                </div>

                <div class="exam-briefing">
                    <h4>Official Format Guidelines</h4>
                    <ul>
                        <li>Strict countdown timer simulating real testing room pressure.</li>
                        <li>One active question rendered per step with back-and-forth review navigation.</li>
                        <li>Full automated scoring converted directly to CEFR and Canadian Language Benchmarks (NCLC/CLB).</li>
                    </ul>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                    <button class="primary-btn" onclick="startLiveExam()">Launch Timed Exam</button>
                </div>
            </div>

            <!-- Active Exam Screen -->
            <div id="exam-active-card" class="exam-card" style="display: none;">
                <div class="exam-live-statusbar">
                    <div class="exam-tag" id="live-exam-title">DELF B2</div>
                    <div class="exam-timer-pill" id="exam-timer">00:00</div>
                </div>

                <div class="exam-passage-box" id="exam-passage-box">
                    <!-- Passage injected dynamically -->
                </div>
<!-- Interactive Writing Workspace -->
                <div id="exam-writing-box" style="display: none; flex-direction: column; gap: 12px; margin-bottom: 25px;">
                    <div style="display: flex; justify-content: space-between; font-size: 13px; color: var(--text-muted); font-weight: 600;">
                        <span>Target: 250 words (&plusmn;10%)</span>
                        <span id="live-word-count">Words: 0</span>
                    </div>

                    <textarea id="exam-essay-input" rows="12" placeholder="Rédigez votre réponse argumentée ici..." 
                        oninput="updateWordCount(this.value)"
                        style="width: 100%; box-sizing: border-box; padding: 16px; border-radius: var(--radius-md); background: rgba(15, 23, 42, 0.85); color: #fff; border: 1px solid var(--glass-border); font-family: inherit; font-size: 15px; line-height: 1.6; resize: vertical; outline: none;"></textarea>
                </div>
                <div class="exam-question-box">
                    <div class="exam-question-text" id="exam-question-text">Loading question...</div>
                    <div class="exam-options-grid" id="exam-options-grid">
                        <!-- Radio options injected here -->
                    </div>
                </div>

                <div class="exam-actions-footer">
                    <button class="secondary-btn" id="examPrevBtn" onclick="navigateExam(-1)">&#8592; Previous</button>
                    <span id="exam-step-counter" style="font-weight: 700; color: var(--text-muted);">1 / 5</span>
                    <button class="secondary-btn" id="examNextBtn" onclick="navigateExam(1)">Next &#8594;</button>
                    <button class="primary-btn" id="examSubmitBtn" style="background: var(--success-color); display: none;" onclick="submitExam()">Finish & Score</button>
                </div>
            </div>

          <!-- Exam Results Card -->
            <div id="exam-results-card" class="exam-card" style="display: none; text-align: center;">
                <h3 style="font-size: 26px; margin-bottom: 10px;">Evaluation Complete</h3>
                <div class="exam-score-badge" id="exam-score-number">-- / --</div>
                <div id="exam-benchmark-verdict" style="font-size: 18px; margin: 20px 0; color: var(--french-text);"></div>

                <!-- AI Essay Evaluation Section -->
                <div id="ai-essay-review-section" style="display: none; text-align: left; margin-top: 30px; border-top: 1px solid var(--glass-border); padding-top: 25px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
        <h4 style="margin: 0; color: #fff; font-size: 18px; display: flex; align-items: center; gap: 8px;">
            <span>🤖</span> DELF/TCF Automated Examiner Audit
        </h4>
        <select id="aiAuditLangSelect" onchange="reAuditWithCurrentLanguage()" style="width: auto; margin-bottom: 0; padding: 6px 12px; font-size: 12px; background: rgba(15, 23, 42, 0.9);">
            <option value="fr" selected>🇫🇷 Français</option>
            <option value="en">🇬🇧 English</option>
        </select>
    </div>

    <div id="ai-review-loading" style="display: none; text-align: center; padding: 25px; color: var(--text-muted);">
        <div style="font-size: 24px; margin-bottom: 8px;">⏳</div>
        Analyzing syntax, lexical richness, and task completion against DELF B2 standards...
    </div>
                    <div id="ai-review-content" class="exam-briefing" style="display: none; line-height: 1.8; color: #e2e8f0; font-size: 15px; border-left-color: var(--accent-color);">
                        <!-- AI critique rendered here -->
                    </div>
                </div>

                <div style="margin-top: 30px;">
                    <button class="secondary-btn" onclick="resetExamCenter()">Return to Exam Hub</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Application Logic -->
    <script>
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
            
            if (viewId === 'vocab-view') document.getElementById('btn-vocab').classList.add('active');
            else if (viewId === 'grammar-view') document.getElementById('btn-grammar').classList.add('active');
            else if (viewId === 'exercises-view') document.getElementById('btn-exercises').classList.add('active');
            else if (viewId === 'exams-view') document.getElementById('btn-exams')?.classList.add('active');

            closeMenu();
        };
        // Pronunciation helper for homepage widget
        function speakDailyWord(word) {
            if (!('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = currentAccent || 'fr-FR';
            utterance.rate = 0.85;
            window.speechSynthesis.speak(utterance);
        }
// --- Standardized Exam Bank ---
        const liveExams = {
            delf_b2_writing: {
                title: "DELF B2 — Production Écrite",
                durationSeconds: 3600, // 60 minutes
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

            // Toggle UI: Writing Mode vs Reading Mode
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
                console.log("Worker returned payload:", data);

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
                contentEl.innerHTML = `<p style="color: var(--error-color); margin: 0;">⚠️ Unable to parse model response. Open browser DevTools Console to inspect the returned object.</p>`;
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

                // Request AI Evaluation
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

        // Close drawer with Escape key
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

        // --- Universal Translation Engine & Cache ---
        let currentTargetLang = localStorage.getItem('universalTargetLang') || 'en';
        const translationCache = JSON.parse(localStorage.getItem('vocabTranslationCache') || '{}');

        // Restore saved language in drawer selector on boot
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

        // --- Fetch Level Data & Populate Topics ---
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
            if (currentCards.length > 0) document.getElementById('flashcard').classList.toggle('is-flipped'); 
        }
        function nextCard() { 
            if (currentIndex < currentCards.length - 1) { currentIndex++; loadCard(); } 
        }
        function prevCard() { 
            if (currentIndex > 0) { currentIndex--; loadCard(); } 
        }
   // --- Pronunciation & Accent Switcher Logic ---
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
        // FULL UNCUT EXERCISE DATA
        const exerciseData = [
            // --- CHAPTER 1 ---
            { ch: 1, ex: "1.1", instruction: "Write the appropriate singular definite article (le, la, l').", questions: [ { q: "_____ ami", a: "l'" }, { q: "_____ homme", a: "l'" }, { q: "_____ lampe", a: "la" }, { q: "_____ fenêtre", a: "la" }, { q: "_____ hôtel", a: "l'" }, { q: "_____ réalisme", a: "le" }, { q: "_____ ingénieur", a: "l'" }, { q: "_____ publicité", a: "la" }, { q: "_____ comédie", a: "la" }, { q: "_____ différence", a: "la" }, { q: "_____ médecin", a: "le" }, { q: "_____ sculpture", a: "la" }, { q: "_____ prononciation", a: "la" }, { q: "_____ gâteau", a: "le" } ] },
            { ch: 1, ex: "1.2", instruction: "Write the plural form of each singular noun/phrase.", questions: [ { q: "une artiste", a: "des artistes" }, { q: "un hors-d'œuvre", a: "des hors-d'œuvre" }, { q: "le milieu", a: "les milieux" }, { q: "l'étudiante", a: "les étudiantes" }, { q: "un Français", a: "des Français" }, { q: "un café", a: "des cafés" }, { q: "le chapeau", a: "les chapeaux" }, { q: "l'eau", a: "les eaux" }, { q: "la fenêtre", a: "les fenêtres" }, { q: "un choix", a: "des choix" }, { q: "une préférence", a: "des préférences" }, { q: "le travail", a: "les travaux" }, { q: "le nez", a: "les nez" }, { q: "un cours", a: "des cours" } ] },
            { ch: 1, ex: "1.4", instruction: "Write the feminine singular form of the adjectives given.", questions: [ { q: "intéressant", a: "intéressante" }, { q: "naïf", a: "naïve" }, { q: "agréable", a: "agréable" }, { q: "sérieux", a: "sérieuse" }, { q: "jaune", a: "jaune" }, { q: "marron", a: "marron" }, { q: "bleu", a: "bleue" }, { q: "costaud", a: "costaude" }, { q: "fier", a: "fière" }, { q: "chic", a: "chic" }, { q: "cher", a: "chère" }, { q: "conservateur", a: "conservatrice" }, { q: "beau", a: "belle" }, { q: "gros", a: "grosse" }, { q: "actif", a: "active" }, { q: "gentil", a: "gentille" }, { q: "travailleur", a: "travailleuse" }, { q: "drôle", a: "drôle" }, { q: "vieux", a: "vieille" }, { q: "heureux", a: "heureuse" } ] },
            { ch: 1, ex: "1.5", instruction: "Provide the correct adjective that agrees in gender and number.", questions: [ { q: "le _____ (old) homme", a: "vieil" }, { q: "la situation _____ (difficult)", a: "difficile" }, { q: "la _____ (beautiful) maison", a: "belle" }, { q: "la personne _____ (nice)", a: "gentille" }, { q: "les fleurs _____ (yellow)", a: "jaunes" }, { q: "des amis _____ (sincere)", a: "sincères" }, { q: "un _____ (great) homme", a: "grand" }, { q: "une voiture _____ (ancient)", a: "ancienne" }, { q: "d' _____ (former) professeurs", a: "anciens" }, { q: "des appartements _____ (inexpensive)", a: "bon marché/pas chers" }, { q: "une comédie _____ (funny)", a: "drôle" }, { q: "un livre _____ (interesting)", a: "intéressant" } ] },
            
            // --- CHAPTER 2 ---
            { ch: 2, ex: "2.1", instruction: "Complete the sentences, translating the subject pronouns.", questions: [ { q: "(You, pl.) _____ êtes en ville?", a: "Vous" }, { q: "(I) _____ suis à la maison.", a: "Je" }, { q: "(They, f.) _____ sont au travail.", a: "Elles" }, { q: "(We) _____ sommes très sympathiques!", a: "Nous" }, { q: "(You, sing.) _____ es architecte?", a: "Tu" }, { q: "(I) _____ suis grand et beau.", a: "Je" }, { q: "(They, m.) _____ sont français.", a: "Ils" }, { q: "(They) _____ sont dans le train.", a: "Ils" }, { q: "(Georges and Marilyn, you) _____ êtes drôles!", a: "Vous" }, { q: "(He) _____ est en vacances.", a: "Il" } ] },
            { ch: 2, ex: "2.2", instruction: "Complete each sentence with the correct form of être.", questions: [ { q: "Le parfum _____ de France.", a: "est" }, { q: "Ils _____ médecins.", a: "sont" }, { q: "Elle _____ dentiste.", a: "est" }, { q: "Les touristes _____ du Portugal?", a: "sont" }, { q: "Les frères de Paul _____ riches!", a: "sont" }, { q: "Le vieil hôtel _____ excellent.", a: "est" }, { q: "Nous _____ les amis de Robert.", a: "sommes" }, { q: "Les chaussures _____ en cuir.", a: "sont" }, { q: "La dame et le monsieur _____ suédois.", a: "sont" }, { q: "L'appartement des étudiants _____ bien situé.", a: "est" } ] },
            { ch: 2, ex: "2.4", instruction: "Complete using il/elle est or c'est/ce sont.", questions: [ { q: "Jeanne est architecte. _____ une voisine sociable.", a: "Elle est" }, { q: "Mes parents sont canadiens. _____ des Québécois fiers.", a: "Ce sont" }, { q: "Loïc est de Bretagne. _____ breton.", a: "Il est" }, { q: "Mon voisin est gentil. _____ un voisin super sympathique.", a: "C'est" }, { q: "La Nouvelle-Orléans. _____ une ville américaine.", a: "C'est" }, { q: "Claude? _____ très intelligent.", a: "Il est" } ] },
            { ch: 2, ex: "2.7", instruction: "Translate the adverbs in parentheses to complete the sentences.", questions: [ { q: "(sometimes) Je suis _____ heureuse.", a: "quelquefois/parfois" }, { q: "(here) Il est _____?", a: "ici" }, { q: "(now) Tu es au travail _____?", a: "maintenant" }, { q: "(today) _____ nous sommes en retard.", a: "Aujourd'hui" }, { q: "(rather) Les livres sont _____ chers.", a: "assez/plutôt" }, { q: "(often) Elles sont _____ au café.", a: "souvent" }, { q: "(always) Nous sommes _____ à l'heure.", a: "toujours" }, { q: "(very) Sylvain est _____ grand.", a: "très" }, { q: "(much) Le dessert est _____ riche.", a: "beaucoup/trop" }, { q: "(a little) Les enfants sont _____ fatigués.", a: "un peu" }, { q: "(over there) Marc est _____ devant la pharmacie.", a: "là-bas" } ] },
            { ch: 2, ex: "2.8", instruction: "Answer each question in the negative (e.g. 'elle n'est pas vieille').", questions: [ { q: "Arlette est vieille? Non, _____.", a: "elle n'est pas vieille" }, { q: "Vous êtes acteur? Non, _____.", a: "je ne suis pas acteur/actrice" }, { q: "Nous sommes en retard? Non, _____.", a: "nous ne sommes pas en retard" }, { q: "Tu es à la maison? Non, _____.", a: "je ne suis pas à la maison" }, { q: "Léon et Chantal sont de retour? Non, _____.", a: "ils ne sont pas de retour" }, { q: "Tes sœurs sont d'accord? Non, _____.", a: "elles ne sont pas d'accord" }, { q: "Georges est en train de danser? Non, _____.", a: "Georges n'est pas en train de danser" }, { q: "Je suis trop fière? Non, _____.", a: "tu n'es pas trop fière/vous n'êtes pas trop fière" } ] },
            
            // --- CHAPTER 3 ---
            { ch: 3, ex: "3.2", instruction: "Translate the present tense -er verb forms into French.", questions: [ { q: "we speak", a: "nous parlons" }, { q: "she listens", a: "elle écoute" }, { q: "I like", a: "j'aime" }, { q: "they (f.) rent", a: "elles louent" }, { q: "you (pol.) use", a: "vous utilisez" }, { q: "we live", a: "nous habitons" }, { q: "I arrive", a: "j'arrive" }, { q: "he hates", a: "il déteste" }, { q: "you (fam.) dream", a: "tu rêves" }, { q: "she finds", a: "elle trouve" } ] },
            { ch: 3, ex: "3.3", instruction: "Change the verb forms from singular to plural, or plural to singular.", questions: [ { q: "j'adore", a: "nous adorons" }, { q: "nous dansons", a: "je danse" }, { q: "vous regardez", a: "tu regardes" }, { q: "tu expliques", a: "vous expliquez" }, { q: "il cherche", a: "ils cherchent" }, { q: "elles ferment", a: "elle ferme" }, { q: "vous parlez", a: "tu parles" }, { q: "nous expliquons", a: "j'explique" }, { q: "elle utilise", a: "elles utilisent" }, { q: "tu détestes", a: "vous détestez" } ] },
            { ch: 3, ex: "3.5", instruction: "Provide the correct conjugated form of the indicated verb.", questions: [ { q: "Je _____ la radio. (écouter)", a: "J'écoute" }, { q: "Nous _____ après les cours. (étudier)", a: "étudions" }, { q: "On _____ travailler le samedi. (ne pas aimer)", a: "n'aime pas" }, { q: "Vous _____ un ordinateur? (utiliser)", a: "utilisez" }, { q: "Tu _____ au prof. (parler)", a: "parles" }, { q: "Mes parents _____ de prêter la voiture. (refuser)", a: "refusent" }, { q: "Marc et Josiane _____ le film. (adorer regarder)", a: "adorent regarder" }, { q: "Tu _____ le vendredi soir? (ne pas danser)", a: "ne danses pas" }, { q: "Nous _____ regarder un film. (aimer mieux)", a: "aimons mieux" }, { q: "Amélie _____ de bonnes carottes. (trouver)", a: "trouve" } ] },
            { ch: 3, ex: "3.9", instruction: "Translate the questions into yes/no French questions using inversion.", questions: [ { q: "Do you (fam.) have a cat?", a: "As-tu un chat?" }, { q: "Does Sylvie play the piano?", a: "Sylvie joue-t-elle du piano?" }, { q: "Are you (pol.) American (m.)?", a: "Êtes-vous américain?" }, { q: "Do you (fam.) like tennis or golf better?", a: "Aimes-tu mieux le tennis ou le golf?" }, { q: "Are we playing Scrabble this evening?", a: "Jouons-nous au Scrabble ce soir?" }, { q: "Are the children hungry?", a: "Les enfants ont-ils faim?" }, { q: "Isn't Jacques a teacher?", a: "Jacques n'est-il pas professeur?" }, { q: "Don't you (fam.) work in a bookstore?", a: "Ne travailles-tu pas dans une librairie?" } ] },
            
            // --- CHAPTER 4 ---
            { ch: 4, ex: "4.1", instruction: "Continue the series by typing out the next three numbers in French (separated by commas).", questions: [ { q: "un, deux, trois, _____ ", a: "quatre, cinq, six" }, { q: "deux, quatre, six, _____ ", a: "huit, dix, douze" }, { q: "vingt, trente, quarante, _____ ", a: "cinquante, soixante, soixante-dix" }, { q: "sept, quatorze, vingt et un, _____ ", a: "vingt-huit, trente-cinq, quarante-deux" }, { q: "soixante-sept, soixante-huit, soixante-neuf, _____ ", a: "soixante-dix, soixante et onze, soixante-douze" }, { q: "quatre-vingt-huit, soixante-dix-sept, soixante-six, _____ ", a: "cinquante-cinq, quarante-quatre, trente-trois" } ] },
            { ch: 4, ex: "4.2", instruction: "Solve the arithmetic and write the answer in French.", questions: [ { q: "quatre-vingts / quatre = _____ ", a: "vingt" }, { q: "quarante-cinq + quarante-cinq = _____ ", a: "quatre-vingt-dix" }, { q: "vingt et un * trois = _____ ", a: "soixante-trois" }, { q: "soixante et onze - vingt-six = _____ ", a: "quarante-cinq" }, { q: "quatre-vingt-huit - trente-quatre = _____ ", a: "cinquante-quatre" }, { q: "quarante-huit * deux = _____ ", a: "quatre-vingt-seize" } ] },
            { ch: 4, ex: "4.9", instruction: "Translate the short sentences with -ir verbs into French.", questions: [ { q: "We choose.", a: "Nous choisissons." }, { q: "You (fam.) act (behave) well.", a: "Tu agis bien." }, { q: "They (f.) blush.", a: "Elles rougissent." }, { q: "I'm succeeding.", a: "Je réussis." }, { q: "The children grow.", a: "Les enfants grandissent." }, { q: "They (On) widen the street.", a: "On élargit la rue." }, { q: "You're (pol.) losing weight.", a: "Vous maigrissez." }, { q: "I slow down at night.", a: "Je ralentis la nuit." }, { q: "The leaves are turning yellow.", a: "Les feuilles jaunissent." }, { q: "We finish working.", a: "Nous finissons de travailler." } ] },
            
            // --- CHAPTER 5 ---
            { ch: 5, ex: "5.1", instruction: "Translate into French using present tense regular -re verbs.", questions: [ { q: "Are you (fam.) coming down?", a: "Tu descends?" }, { q: "I'm losing.", a: "Je perds." }, { q: "We're answering.", a: "Nous répondons." }, { q: "Xavier is selling a truck.", a: "Xavier vend un camion." }, { q: "They (f.) visit Grandfather.", a: "Elles rendent visite à Grand-père." }, { q: "You (pol.) don't answer.", a: "Vous ne répondez pas." }, { q: "We're waiting for Charles.", a: "Nous attendons Charles." }, { q: "They (m.) defend their clients.", a: "Ils défendent leurs clients." }, { q: "The student (m.) isn't wasting time.", a: "L'étudiant ne perd pas de temps." }, { q: "Do you (pol.) hear?", a: "Entendez-vous?" }, { q: "Is she returning the book?", a: "Rend-elle le livre?" }, { q: "I'm answering the phone.", a: "Je réponds au téléphone." } ] },
            { ch: 5, ex: "5.9", instruction: "Provide the correct conjugated form for the spelling-change verbs.", questions: [ { q: "Tu _____ (acheter) les provisions?", a: "Achètes" }, { q: "Ils _____ (préférer) la cuisine thaïlandaise.", a: "préfèrent" }, { q: "On _____ (projeter) le film ce soir.", a: "projette" }, { q: "Elle _____ (envoyer) un gros paquet.", a: "envoie" }, { q: "Nous _____ (partager) le plat.", a: "partageons" }, { q: "Je _____ (essayer) de finir les devoirs.", a: "essaie" }, { q: "Quand _____ (commencer)-nous à dîner?", a: "commençons" }, { q: "Nous _____ (prononcer) bien les mots.", a: "prononçons" }, { q: "Je _____ (jeter) toujours les vieux journaux.", a: "jette" }, { q: "Le professeur _____ (annoncer) un examen.", a: "annonce" }, { q: "Monique _____ (lever) toujours la main.", a: "lève" }, { q: "Les enfants adorent _____ (manger) des bonbons.", a: "manger" }, { q: "Ils _____ (voyager) beaucoup en Europe.", a: "voyagent" }, { q: "Tu _____ (payer) les factures?", a: "paies" }, { q: "Comment vous _____ (appeler)-vous?", a: "appelez" }, { q: "Le prof _____ (répéter)-t-il les phrases?", a: "répète" } ] },

            // --- CHAPTER 6 ---
            { ch: 6, ex: "6.1", instruction: "Complete the sentences with the correct forms of the verb aller.", questions: [ { q: "Tu _____ en Suisse cet été?", a: "vas" }, { q: "Philippe _____ bientôt au travail.", a: "va" }, { q: "Nous _____ au théâtre samedi soir.", a: "allons" }, { q: "Régine _____ -t-elle à La Nouvelle-Orléans?", a: "va" }, { q: "Comment _____ -vous?", a: "allez" }, { q: "Comment _____ les enfants?", a: "vont" } ] },
            { ch: 6, ex: "6.12", instruction: "Insert the correct French preposition for geographical names (en, au, à, de, du, etc.).", questions: [ { q: "Nous allons _____ Bretagne cet été.", a: "en" }, { q: "Moi, je préfère aller _____ Paris.", a: "à" }, { q: "Les Dubois projettent de voyager _____ Turquie.", a: "en" }, { q: "Vas-tu _____ Hawaï?", a: "à" }, { q: "J'aime mieux passer les vacances _____ Mexique.", a: "au" }, { q: "Robert va travailler _____ Afrique.", a: "en" }, { q: "_____ Québec (province), tout le monde parle français.", a: "Au" }, { q: "Bangkok est _____ Thaïlande.", a: "en Thaïlande" }, { q: "Ils arrivent _____ Canada.", a: "du" }, { q: "Mes parents sont originaires _____ France.", a: "de" }, { q: "Les soldats sont de retour _____ Irak.", a: "d'" }, { q: "Ce sont des oranges _____ Afrique du Nord.", a: "d'" }, { q: "Cet avion arrive _____ États-Unis.", a: "des" }, { q: "La touriste téléphone _____ La Havane.", a: "de" } ] },

            // --- CHAPTER 7 ---
            { ch: 7, ex: "7.1", instruction: "Translate using verbs conjugated like partir.", questions: [ { q: "I serve the coffee.", a: "Je sers le café." }, { q: "The cats sleep a lot.", a: "Les chats dorment beaucoup." }, { q: "You're (pol.) not leaving soon?", a: "Vous ne partez pas bientôt?/Ne partez-vous pas bientôt?" }, { q: "Éliane is leaving for New York.", a: "Éliane part pour New York." }, { q: "Are you (fam.) sleeping?", a: "Dors-tu?" }, { q: "We're going out Friday.", a: "Nous sortons/On sort vendredi." }, { q: "Dad serves dinner.", a: "Papa sert le dîner." }, { q: "Is the witness lying?", a: "Le témoin ment-il?" }, { q: "I sense some difficulties here.", a: "Je sens des difficultés ici." }, { q: "Do you (pol.) smell the soup?", a: "Sentez-vous la soupe?" } ] },
            { ch: 7, ex: "7.5", instruction: "Provide the correct form of the suggested irregular verb.", questions: [ { q: "Je _____ bientôt chercher un emploi. (devoir)", a: "dois" }, { q: "Nous _____ venir à l'heure aujourd'hui. (pouvoir)", a: "pouvons" }, { q: "Tu ne _____ pas accompagner Papa? (vouloir)", a: "veux" }, { q: "Iris et Marie-Jo _____ voyager avec vous. (pouvoir)", a: "peuvent" }, { q: "J' _____ quelqu'un au loin. (apercevoir)", a: "aperçois" }, { q: "Les notes de Monique _____ . (décevoir)", a: "déçoivent" }, { q: "Les jeunes élèves _____ rentrer tout de suite. (devoir)", a: "doivent" }, { q: "Arnaud ne _____ pas payer son déjeuner. (pouvoir)", a: "peut" }, { q: "_____ -tu de l'argent à tes amis? (devoir)", a: "Dois" }, { q: "_____ -vous mettre votre nom ici? (vouloir)", a: "Voulez" } ] },

            // --- CHAPTER 8 ---
            { ch: 8, ex: "8.4", instruction: "Translate into French using present tense voir or croire.", questions: [ { q: "We believe. (We're believers.)", a: "Nous croyons." }, { q: "Does she see well?", a: "Voit-elle bien?" }, { q: "Sophie and Bernard believe that we're coming.", a: "Sophie et Bernard croient que nous venons." }, { q: "Do you (fam.) see Nicole sometimes?", a: "Vois-tu Nicole quelquefois?" }, { q: "I don't think so.", a: "Je crois que non." }, { q: "They (f.) believe in Einstein!", a: "Elles croient en Einstein!" }, { q: "They (m.) see the sun again in the spring.", a: "Ils revoient le soleil au printemps." }, { q: "We don't see Jo very often.", a: "Nous ne voyons pas/On ne voit pas Jo très souvent." }, { q: "He believes that it's true.", a: "Il croit que c'est vrai." }, { q: "Whom do you (fam.) see?", a: "Qui vois-tu?/Qui est-ce que tu vois?" } ] },
            { ch: 8, ex: "8.9", instruction: "Provide the correct relative pronoun (qui, que, où).", questions: [ { q: "Tu vois une place _____ on peut laisser la voiture?", a: "où" }, { q: "Margot attend les amis _____ doivent bientôt arriver.", a: "qui" }, { q: "On va à pied au café _____ Jeanne-Marie préfère.", a: "que" }, { q: "Aimes-tu les boissons _____ sont gazéifiées?", a: "qui" }, { q: "C'est une rue _____ ils peuvent faire une belle promenade.", a: "où" }, { q: "Je descends à un hôtel _____ a une bonne réputation.", a: "qui" }, { q: "L'hôtel a un restaurant _____ nous aimons dîner.", a: "où" }, { q: "Le serveur, _____ apporte la carte, est aimable.", a: "qui" }, { q: "Je n'aime pas les plats _____ vous choisissez.", a: "que" }, { q: "Je préfère les salades _____ Sylvie recommande.", a: "que" }, { q: "Tu veux une table dans la salle _____ Georges dîne?", a: "où" }, { q: "Nous allons payer l'addition _____ le serveur prépare.", a: "que" } ] },

            // --- CHAPTER 9 ---
            { ch: 9, ex: "9.5", instruction: "Answer with a direct object pronoun preceding voici or voilà.", questions: [ { q: "Où sont les livres de français?", a: "Les voici/Les voilà" }, { q: "Je cherche le numéro de téléphone.", a: "Le voici/Le voilà" }, { q: "Où est la confiture?", a: "La voici/La voilà" }, { q: "Marie et Richard, où êtes-vous?", a: "Nous voici/Nous voilà" }, { q: "Nous ne voyons pas les valises.", a: "Les voici/Les voilà" }, { q: "Tu es là?", a: "Me voici/Me voilà" } ] },
            { ch: 9, ex: "9.10", instruction: "Answer the questions affirmatively, replacing the italicized phrase with 'en'.", questions: [ { q: "Vous allez acheter des provisions?", a: "Oui, nous allons en acheter./Oui, je vais en acheter." }, { q: "Sébastien a-t-il de l'argent?", a: "Oui, il en a." }, { q: "Est-ce que tu bois du lait?", a: "Oui, j'en bois." }, { q: "Les étudiants ont-ils beaucoup de devoirs?", a: "Oui, ils en ont beaucoup." }, { q: "Madonna possède-t-elle trois maisons?", a: "Oui, elle en possède trois." }, { q: "Nous avons assez de légumes?", a: "Oui, nous en avons assez./Oui, on en a assez." }, { q: "On va chercher une douzaine d'œufs?", a: "Oui, on va en chercher une douzaine." }, { q: "As-tu besoin de logement?", a: "Oui, j'en ai besoin." }, { q: "Claudie prend deux kilos de pommes de terre?", a: "Oui, elle en prend deux." }, { q: "On utilise trop d'énergie?", a: "Oui, on en utilise trop." }, { q: "Tu as un euro à me prêter?", a: "Oui, j'en ai un." } ] },

            // --- CHAPTER 10 ---
            { ch: 10, ex: "10.4", instruction: "Complete the phrases with the correct demonstrative adjective (ce, cet, cette, ces).", questions: [ { q: "_____ belles fleurs", a: "ces" }, { q: "_____ nouvel appartement", a: "ce" }, { q: "_____ gentil chat", a: "ce" }, { q: "_____ repas délicieux", a: "ce/ces" }, { q: "_____ arbre ancien", a: "cet" }, { q: "_____ grosse valise", a: "cette" }, { q: "_____ soldats courageux", a: "ces" }, { q: "_____ article important", a: "cet" } ] },
            { ch: 10, ex: "10.9", instruction: "Write the adverb that corresponds to each adjective.", questions: [ { q: "amical", a: "amicalement" }, { q: "vrai", a: "vraiment" }, { q: "faux", a: "faussement" }, { q: "gentil", a: "gentiment" }, { q: "évident", a: "évidemment" }, { q: "vif", a: "vivement" }, { q: "franc", a: "franchement" }, { q: "différent", a: "différemment" }, { q: "bref", a: "brièvement" }, { q: "terrible", a: "terriblement" }, { q: "lent", a: "lentement" }, { q: "intelligent", a: "intelligemment" }, { q: "cruel", a: "cruellement" }, { q: "constant", a: "constamment" }, { q: "doux", a: "doucement" } ] },

            // --- CHAPTER 11 ---
            { ch: 11, ex: "11.10", instruction: "Change the instructions/advice to the 'vous' imperative form.", questions: [ { q: "Il faut faire de l'exercice.", a: "Faites de l'exercice." }, { q: "Il faut boire assez d'eau.", a: "Buvez assez d'eau." }, { q: "Il faut essayer de rester calme.", a: "Essayez de rester calme." }, { q: "Il ne faut pas fumer.", a: "Ne fumez pas." }, { q: "Il faut réfléchir à la vie.", a: "Réfléchissez à la vie." }, { q: "Il faut être sociable.", a: "Soyez sociable(s)." }, { q: "Il ne faut pas manger trop de viande.", a: "Ne mangez pas trop de viande." }, { q: "Il ne faut pas prendre l'ascenseur.", a: "Ne prenez pas l'ascenseur." } ] },
            { ch: 11, ex: "11.11", instruction: "Change these instructions/advice to the 'tu' imperative form.", questions: [ { q: "Tu dois finir tes devoirs.", a: "Finis tes devoirs!" }, { q: "Tu ne dois pas manger de bonbons.", a: "Ne mange pas de bonbons!" }, { q: "Tu dois mettre tes lunettes quand tu lis.", a: "Mets tes lunettes quand tu lis!" }, { q: "Il faut aller au lit à dix heures.", a: "Va au lit à dix heures!" }, { q: "Il ne faut pas regarder la télé le soir.", a: "Ne regarde pas la télé le soir!" }, { q: "Tu ne dois pas trop parler au téléphone.", a: "Ne parle pas trop au téléphone!" }, { q: "Tu dois écrire à ta grand-mère.", a: "Écris à ta grand-mère!" }, { q: "Tu ne dois pas perdre ton parapluie.", a: "Ne perds pas ton parapluie!" } ] },

            // --- CHAPTER 12 ---
            { ch: 12, ex: "12.3", instruction: "Complete the sentences with the correct form of the reflexive verb.", questions: [ { q: "Après le petit déjeuner, je _____ (se brosser) les dents.", a: "me brosse" }, { q: "Les garçons commencent à _____ (se raser) vers 15 ans.", a: "se raser" }, { q: "Les serveurs _____ (se laver) les mains souvent.", a: "se lavent" }, { q: "Nous _____ (se lever) chercher de l'eau.", a: "nous levons" }, { q: "Tu _____ (s'entraîner) avant de courir.", a: "t'entraînes" }, { q: "Ils vont _____ (s'installer) dans leur nouvelle maison.", a: "s'installer" } ] },
            { ch: 12, ex: "12.5", instruction: "Translate the commands into French.", questions: [ { q: "Don't get up. (polite)", a: "Ne vous levez pas." }, { q: "Wake up! (polite)", a: "Réveillez-vous!" }, { q: "Brush your teeth. (polite)", a: "Brossez-vous les dents." }, { q: "Don't sit down here. (polite)", a: "Ne vous installez pas ici." }, { q: "Go to bed. (familiar)", a: "Couche-toi./Va au lit." }, { q: "Get dressed. (familiar)", a: "Habille-toi." }, { q: "Don't go swimming now. (familiar)", a: "Ne te baigne pas maintenant." }, { q: "Have a good time! (familiar)", a: "Amuse-toi!" } ] },

            // --- CHAPTER 13 ---
            { ch: 13, ex: "13.1", instruction: "Change the verbs from the present to the passé composé.", questions: [ { q: "nous écoutons -> nous _____ ", a: "avons écouté" }, { q: "tu réfléchis -> tu _____ ", a: "as réfléchi" }, { q: "on attend -> on _____ ", a: "a attendu" }, { q: "vous choisissez -> vous _____ ", a: "avez choisi" }, { q: "elles parlent -> elles _____ ", a: "ont parlé" }, { q: "nous commençons -> nous _____ ", a: "avons commencé" }, { q: "ils entendent -> ils _____ ", a: "ont entendu" }, { q: "tu achètes -> tu _____ ", a: "as acheté" }, { q: "nous mangeons -> nous _____ ", a: "avons mangé" }, { q: "j'envoie -> j' _____ ", a: "ai envoyé" } ] },
            { ch: 13, ex: "13.4", instruction: "Provide the correct past participle for the verbs in passé composé.", questions: [ { q: "Les enfants ont _____ tard. (dormir)", a: "dormi" }, { q: "Tu as _____ de bonnes notes? (obtenir)", a: "obtenu" }, { q: "On a _____ devant le spectacle. (rire)", a: "ri" }, { q: "Vous avez _____ le train. (prendre)", a: "pris" }, { q: "J'ai _____ le dessert. (servir)", a: "servi" }, { q: "Nous avons _____ au Québec. (vivre)", a: "vécu" }, { q: "J'ai _____ téléphoner. (devoir)", a: "dû" }, { q: "Les agents ont _____ le suspect. (poursuivre)", a: "poursuivi" } ] },

            // --- CHAPTER 14 ---
            { ch: 14, ex: "14.1", instruction: "Identify the correct PC or Imparfait conjugation for the context.", questions: [ { q: "Samedi nous _____ (décider) de faire un pique-nique.", a: "avons décidé" }, { q: "On _____ (préparer) des tas de choses.", a: "a préparé" }, { q: "Antoine _____ (ne rien oublier).", a: "n'a rien oublié" }, { q: "Il _____ (mettre) des serviettes.", a: "a mis" }, { q: "Nous _____ (quitter) la maison.", a: "avons quitté" }, { q: "Et nous _____ (partir).", a: "sommes partis" }, { q: "Dans la voiture nous _____ (se mettre à) chanter.", a: "nous sommes mis à" }, { q: "Papa nous _____ (dire) de regarder le paysage.", a: "a dit" } ] },
            { ch: 14, ex: "14.8", instruction: "Translate the commands with double object pronouns (Give both familiar and polite forms separated by a slash).", questions: [ { q: "Ces cahiers? (Give them to me.)", a: "Donne-les-moi./Donnez-les-moi." }, { q: "De l'argent? (Offer him some.)", a: "Offre-lui-en./Offrez-lui-en." }, { q: "Des fruits? (Don't eat any.)", a: "N'en mange pas./N'en mangez pas." }, { q: "La voiture? (Don't sell it to her.)", a: "Ne la lui vends pas./Ne la lui vendez pas." }, { q: "Ce restaurant? (Go there.)", a: "Vas-y./Allez-y." } ] },

            // --- CHAPTER 15 ---
            { ch: 15, ex: "15.1", instruction: "Conjugate the verb in the future tense.", questions: [ { q: "Renée _____ (partir).", a: "partira" }, { q: "Olivier _____ (acheter) ses billets.", a: "achètera" }, { q: "Nous _____ (prendre) le train.", a: "prendrons" }, { q: "Mon amie _____ (venir) me voir.", a: "viendra" }, { q: "Vous _____ (être) déjà à Boston.", a: "serez" }, { q: "Il _____ (falloir) remettre ce devoir.", a: "faudra" }, { q: "Ils _____ (avoir) besoin de faire le marché.", a: "auront" }, { q: "Tu _____ (pouvoir) me prêter la voiture.", a: "pourras" } ] },
            { ch: 15, ex: "15.4", instruction: "Conjugate the verb in the conditional.", questions: [ { q: "Je _____ (aimer) sortir.", a: "aimerais" }, { q: "Ils _____ (vouloir) voyager.", a: "voudraient" }, { q: "Mathieu _____ (aller) en Europe.", a: "irait" }, { q: "Nous _____ (venir) volontiers.", a: "viendrions" }, { q: "Je _____ (prendre) deux verres.", a: "prendrais" }, { q: "Elles _____ (être) heureuses.", a: "seraient" }, { q: "_____ (faire)-tu ce voyage?", a: "Ferais" }, { q: "Est-ce que vous _____ (revoir) ce film?", a: "reverriez" } ] },

            // --- CHAPTER 16 ---
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
                
                // If there's a blank line, replace it. Otherwise, append the input box to the end.
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

     // Initialize App
        populateExerciseList();
        switchProficiencyLevel('a1');
