// ===== Quiz Engine =====

// Question banks by grade and subject
const questionBank = {
    primary: {
        math: [
            { q: "What is 7 + 8?", options: ["13", "14", "15", "16"], answer: 2 },
            { q: "Which shape has 4 equal sides?", options: ["Triangle", "Rectangle", "Square", "Circle"], answer: 2 },
            { q: "What is 1/2 of 10?", options: ["3", "4", "5", "6"], answer: 2 },
            { q: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], answer: 1 },
            { q: "What is 24 ÷ 6?", options: ["3", "4", "5", "6"], answer: 1 }
        ],
        science: [
            { q: "What do plants need to grow?", options: ["Only water", "Sunlight, water & soil", "Only sunlight", "Only air"], answer: 1 },
            { q: "Which animal is a mammal?", options: ["Snake", "Frog", "Dog", "Fish"], answer: 2 },
            { q: "What is the closest star to Earth?", options: ["Moon", "Mars", "The Sun", "Polaris"], answer: 2 },
            { q: "How many legs does an insect have?", options: ["4", "6", "8", "10"], answer: 1 },
            { q: "What state of matter is ice?", options: ["Gas", "Liquid", "Solid", "Plasma"], answer: 2 }
        ],
        english: [
            { q: "Which word is a noun?", options: ["Run", "Happy", "Cat", "Quickly"], answer: 2 },
            { q: "What is the opposite of 'hot'?", options: ["Warm", "Cold", "Cool", "Mild"], answer: 1 },
            { q: "Which is a complete sentence?", options: ["Running fast.", "The dog.", "She reads a book.", "Very happy."], answer: 2 },
            { q: "What type of word is 'quickly'?", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 3 },
            { q: "Which word rhymes with 'cat'?", options: ["Car", "Hat", "Cup", "Dog"], answer: 1 }
        ],
        history: [
            { q: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: 1 },
            { q: "The ancient pyramids are found in which country?", options: ["India", "Greece", "Egypt", "Mexico"], answer: 2 },
            { q: "What do we celebrate on July 4th?", options: ["Thanksgiving", "Independence Day", "Memorial Day", "Christmas"], answer: 1 },
            { q: "Which explorer sailed to America in 1492?", options: ["Magellan", "Columbus", "Drake", "Vespucci"], answer: 1 },
            { q: "What is a globe?", options: ["A flat map", "A round model of Earth", "A type of compass", "A telescope"], answer: 1 }
        ]
    },
    middle: {
        math: [
            { q: "Solve: 3x + 7 = 22. What is x?", options: ["3", "4", "5", "6"], answer: 2 },
            { q: "What is the area of a rectangle with length 8 and width 5?", options: ["13", "26", "40", "45"], answer: 2 },
            { q: "Simplify: 2/3 + 1/4", options: ["3/7", "8/12", "11/12", "5/7"], answer: 2 },
            { q: "What is 15% of 200?", options: ["15", "20", "25", "30"], answer: 3 },
            { q: "What is the value of π (pi) approximately?", options: ["2.14", "3.14", "4.14", "3.41"], answer: 1 }
        ],
        science: [
            { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Cell membrane"], answer: 2 },
            { q: "What gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
            { q: "Which planet is known as the Red Planet?", options: ["Jupiter", "Mars", "Venus", "Saturn"], answer: 1 },
            { q: "What is the chemical symbol for water?", options: ["HO", "H2O", "O2", "H2"], answer: 1 },
            { q: "What type of rock is formed from cooled lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Limestone"], answer: 2 }
        ],
        english: [
            { q: "What is a metaphor?", options: ["A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration", "A question asked for effect"], answer: 1 },
            { q: "Which sentence uses correct grammar?", options: ["Me and him went.", "Him and I went.", "He and I went.", "I and he went."], answer: 2 },
            { q: "What is the main purpose of a thesis statement?", options: ["To conclude an essay", "To introduce characters", "To state the main argument", "To list examples"], answer: 2 },
            { q: "In 'The boy quickly ran home,' what is the adverb?", options: ["boy", "quickly", "ran", "home"], answer: 1 },
            { q: "What is the plural of 'child'?", options: ["Childs", "Childes", "Children", "Childrens"], answer: 2 }
        ],
        history: [
            { q: "The Renaissance began in which country?", options: ["France", "England", "Italy", "Spain"], answer: 2 },
            { q: "Who wrote the Declaration of Independence?", options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"], answer: 2 },
            { q: "What was the Silk Road?", options: ["A river", "A trade route", "A battle", "A kingdom"], answer: 1 },
            { q: "Which ancient civilization built the Colosseum?", options: ["Greek", "Egyptian", "Roman", "Persian"], answer: 2 },
            { q: "What event started World War I?", options: ["Pearl Harbor attack", "Assassination of Archduke Ferdinand", "Treaty of Versailles", "Boston Tea Party"], answer: 1 }
        ]
    },
    high: {
        math: [
            { q: "What is the derivative of f(x) = 3x² + 2x?", options: ["3x + 2", "6x + 2", "6x² + 2", "3x² + 2"], answer: 1 },
            { q: "Solve: x² - 5x + 6 = 0", options: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = -1, 6"], answer: 1 },
            { q: "What is sin(90°)?", options: ["0", "0.5", "1", "undefined"], answer: 2 },
            { q: "What is the integral of 2x dx?", options: ["x²", "x² + C", "2x² + C", "x + C"], answer: 1 },
            { q: "In a right triangle, if a=3 and b=4, what is c?", options: ["5", "6", "7", "√7"], answer: 0 }
        ],
        science: [
            { q: "What is the pH of a neutral solution?", options: ["0", "7", "10", "14"], answer: 1 },
            { q: "Which organelle contains DNA?", options: ["Ribosome", "Golgi apparatus", "Nucleus", "Lysosome"], answer: 2 },
            { q: "Newton's second law states that F = ?", options: ["mv", "ma", "mg", "mc²"], answer: 1 },
            { q: "What is the electron configuration of Carbon (Z=6)?", options: ["1s² 2s² 2p²", "1s² 2s² 2p⁴", "1s² 2p⁴", "2s² 2p⁴"], answer: 0 },
            { q: "What type of bond involves sharing electrons?", options: ["Ionic", "Metallic", "Covalent", "Hydrogen"], answer: 2 }
        ],
        english: [
            { q: "What literary device is 'the wind whispered through the trees'?", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], answer: 2 },
            { q: "In which point of view is 'I walked to the store' written?", options: ["First person", "Second person", "Third person limited", "Third person omniscient"], answer: 0 },
            { q: "What is the purpose of a counterargument in an essay?", options: ["To weaken your thesis", "To address opposing views and strengthen your argument", "To conclude the essay", "To introduce new topics"], answer: 1 },
            { q: "Which is an example of dramatic irony?", options: ["A fire station burns down", "The audience knows the killer but the character doesn't", "Saying 'great weather' during a storm", "A character speaks alone on stage"], answer: 1 },
            { q: "'To be or not to be' is an example of:", options: ["Sonnet", "Soliloquy", "Satire", "Simile"], answer: 1 }
        ],
        history: [
            { q: "The Treaty of Versailles ended which war?", options: ["Civil War", "World War I", "World War II", "Korean War"], answer: 1 },
            { q: "What was the main cause of the Cold War?", options: ["Religious differences", "Territorial disputes", "Ideological conflict between capitalism and communism", "Trade disagreements"], answer: 2 },
            { q: "Who was the British Prime Minister during most of WWII?", options: ["Neville Chamberlain", "Winston Churchill", "Margaret Thatcher", "Clement Attlee"], answer: 1 },
            { q: "The Industrial Revolution began in which country?", options: ["United States", "France", "Germany", "England"], answer: 3 },
            { q: "What did the 19th Amendment to the US Constitution establish?", options: ["Freedom of speech", "Abolition of slavery", "Women's right to vote", "Prohibition of alcohol"], answer: 2 }
        ]
    }
};

let currentQuiz = [];
let currentQuestion = 0;
let userAnswers = [];
let timerInterval = null;
let timeLeft = 300; // 5 minutes in seconds
let startTime = null;

function startQuiz() {
    const grade = document.getElementById('quizGrade').value;
    const subject = document.getElementById('quizSubject').value;

    if (!grade || !subject) {
        alert('Please select both a grade level and a subject!');
        return;
    }

    // Get questions
    currentQuiz = questionBank[grade]?.[subject] || [];
    if (currentQuiz.length === 0) {
        alert('No questions available for this combination. Please try a different selection.');
        return;
    }

    currentQuestion = 0;
    userAnswers = new Array(currentQuiz.length).fill(-1);
    timeLeft = 300;
    startTime = Date.now();

    // Show quiz, hide setup
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    renderQuestion();
    startTimer();
}

function renderQuestion() {
    const q = currentQuiz[currentQuestion];
    const letters = ['A', 'B', 'C', 'D'];

    document.getElementById('quizProgress').textContent = `Question ${currentQuestion + 1} of ${currentQuiz.length}`;

    const card = document.getElementById('questionCard');
    card.innerHTML = `
        <h3>${currentQuestion + 1}. ${q.q}</h3>
        <div class="options-list">
            ${q.options.map((opt, i) => `
                <button class="option-btn ${userAnswers[currentQuestion] === i ? 'selected' : ''}"
                        onclick="selectOption(${i})">
                    <span class="option-letter">${letters[i]}</span>
                    <span>${opt}</span>
                </button>
            `).join('')}
        </div>
    `;

    // Update nav buttons
    document.getElementById('prevBtn').disabled = currentQuestion === 0;

    const nextBtn = document.getElementById('nextBtn');
    if (currentQuestion === currentQuiz.length - 1) {
        nextBtn.textContent = 'Submit Quiz ✓';
        nextBtn.onclick = submitQuiz;
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.onclick = nextQuestion;
    }
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    renderQuestion();
}

function nextQuestion() {
    if (currentQuestion < currentQuiz.length - 1) {
        currentQuestion++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function startTimer() {
    const timerEl = document.getElementById('quizTimer');

    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerEl.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 60) {
            timerEl.classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerInterval);
    const endTime = Date.now();
    const timeTakenMs = endTime - startTime;
    const timeTakenSec = Math.floor(timeTakenMs / 1000);
    const minutes = Math.floor(timeTakenSec / 60);
    const seconds = timeTakenSec % 60;

    // Calculate score
    let correct = 0;
    currentQuiz.forEach((q, i) => {
        if (userAnswers[i] === q.answer) correct++;
    });

    const total = currentQuiz.length;
    const wrong = total - correct;
    const percentage = Math.round((correct / total) * 100);

    // Determine message
    let title, message;
    if (percentage >= 90) {
        title = "🌟 Outstanding!";
        message = "You're a star student! Excellent mastery of the material.";
    } else if (percentage >= 70) {
        title = "👏 Great Job!";
        message = "You have a solid understanding. Keep up the good work!";
    } else if (percentage >= 50) {
        title = "👍 Good Effort!";
        message = "You're on the right track. Review the topics you missed and try again.";
    } else {
        title = "💪 Keep Trying!";
        message = "Don't give up! Review the study materials and take the quiz again.";
    }

    // Show results
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    document.getElementById('scoreNumber').textContent = `${percentage}%`;
    document.getElementById('resultsTitle').textContent = title;
    document.getElementById('resultsMessage').textContent = message;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function retryQuiz() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizSetup').style.display = 'block';
}
