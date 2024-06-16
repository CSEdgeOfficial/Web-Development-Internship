const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
    },
    {
        question: 'HTML extention ?',
        options: ['.html', '.hmtl', '.xml', 'all true'],
        correctAnswer: '.html'
    },
    {
        question: 'How many heading tags html have ?',
        options: ['5', '6', '10', '8'],
        correctAnswer: '6'
    },
    {
        question: 'Javascript extention ?',
        options: ['index.xml', 'index.html', 'index.js', 'index.jls'],
        correctAnswer: 'index.js'
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
        correctAnswer: 'Pacific'
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

function startQuiz() {
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(updateTimer, 1000);

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('feedback').innerText = '';
    document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    if (selectedOption === currentQuestion.correctAnswer) {
        feedback.innerText = 'Correct!';
        feedback.style.color = 'green';
        score++;
    } else {
        feedback.innerText = `Wrong! The correct answer is ${currentQuestion.correctAnswer}.`;
        feedback.style.color = 'red';
    }
    document.getElementById('next-btn').style.display = 'block';
    clearInterval(timer);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = `${score} / ${questions.length}`;
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
    } else {
        clearInterval(timer);
        selectAnswer(null); // Handle timeout as an incorrect answer
    }
}

window.onload = startQuiz;
