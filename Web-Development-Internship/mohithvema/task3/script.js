const questions = [
    {
        question: "Qno-1:What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink Text Markup Language", " Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Qno-2:Which technology is primarily responsible for the styling of web pages?",
        options: [" JavaScript", "HTML", "CSS", "Python"],
        answer: "CSS"
    },
    {
        question: "Qno-3: What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Custom Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Qno-4: Which programming language is mainly used for adding interactivity to websites?",
        options: [" HTML", " CSS", "Python", " JavaScript"],
        answer: " JavaScript"
    },
    {
        question: "Qno-5: What is the purpose of a front-end web development framework like React or Angular?",
        options: ["To manage databases and server-side logic", "To create a visually appealing user interface", "To handle server-side routing", "To interact with web servers"],
        answer: "To create a visually appealing user interface"
    },

];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let userAnswers = [];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const timeLeftElement = document.getElementById('time-left');
const reviewButton = document.getElementById('review-button');
const timerElement = document.getElementById('timer');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
    startTimer();
}

function selectOption(option) {
    const currentQuestion = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = option;
    if (option === currentQuestion.answer) {
        score++;
    }
    clearInterval(timer); // Clear the timer
}

function startTimer() {
    let timeLeft = 30;
    timer = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption(null);
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer); // Clear the timer
    timerElement.style.display = 'none'; // Hide the timer
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    scoreElement.textContent = score;
    document.getElementById('result').style.display = 'block';
    reviewButton.style.display = 'block'; // Show the review button
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion();
});

nextButton.addEventListener('click', () => {
    clearInterval(timer);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

reviewButton.addEventListener('click', () => {
    let review = '';
    questions.forEach((q, index) => {
        review += `Question: ${q.question}\nYour Answer: ${userAnswers[index]}\nCorrect Answer: ${q.answer}\n\n`;
    });
    alert(review);
});
