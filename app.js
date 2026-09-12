const quizData = [
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Model"],
        answer: 0
    },
    {
        question: "Which keyword is used to declare a block-scoped variable that cannot be reassigned?",
        options: ["var", "let", "const", "function"],
        answer: 2
    },
    {
        question: "How do you select an element with the id 'main-content' in vanilla JavaScript?",
        options: ["document.querySelector('.main-content')", "document.getElementById('main-content')", "document.select('main-content')", "window.getId('main-content')"],
        answer: 1
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        options: ["String", "Boolean", "Object", "Undefined"],
        answer: 2
    },
    {
        question: "What is the purpose of localStorage?",
        options: ["To store data temporarily for a single session", "To store data persistently across browser sessions", "To manage database queries", "To handle server-side authentication"],
        answer: 1
    }
];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const currentQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');
const timeLeftDisplay = document.getElementById('time-left');
const finalScoreDisplay = document.getElementById('final-score');
const scoreForm = document.getElementById('score-form');
const initialsInput = document.getElementById('initials');
const displayHighScore = document.getElementById('display-high-score');

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

totalQNum.textContent = quizData.length;
updateHighScoreDisplay();

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', resetQuiz);
scoreForm.addEventListener('submit', saveScore);

function startQuiz() {
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');
    
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    
    startTimer();
    loadQuestion();
}

document.addEventListener('keydown', (e) => {
    if (quizScreen.classList.contains('active')) {
        const key = parseInt(e.key);
        if (key >= 1 && key <= 4) {
            const currentQuiz = quizData[currentQuestionIndex];
            if (currentQuiz && (key - 1) < currentQuiz.options.length) {
                checkAnswer(key - 1);
            }
        }
    }
});

function startTimer() {
    timeLeftDisplay.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function loadQuestion() {
    const currentQuiz = quizData[currentQuestionIndex];
    currentQNum.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuiz.question;
    
    optionsContainer.innerHTML = '';
    
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn', 'btn-option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestionIndex].answer;
    
    if (selectedIndex === correctIndex) {
        score += 20; 
    } else {
        timeLeft -= 10; // Time penalty for wrong answer
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    
    if (timeLeft < 0) timeLeft = 0;
    timeLeftDisplay.textContent = timeLeft;
    
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    endScreen.classList.add('active');
    
    finalScoreDisplay.textContent = score;
}

function saveScore(e) {
    e.preventDefault();
    const initials = initialsInput.value.toUpperCase();
    
    if (!initials) return;
    
    const currentHighScore = parseInt(localStorage.getItem('jsQuizHighScore')) || 0;
    
    if (score > currentHighScore) {
        localStorage.setItem('jsQuizHighScore', score);
        localStorage.setItem('jsQuizHighScorer', initials);
    }
    
    initialsInput.value = '';
    updateHighScoreDisplay();
    resetQuiz();
}

function updateHighScoreDisplay() {
    const highScore = localStorage.getItem('jsQuizHighScore') || 0;
    displayHighScore.textContent = highScore;
}

function resetQuiz() {
    endScreen.classList.remove('active');
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    startScreen.classList.add('active');
}