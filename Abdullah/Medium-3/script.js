// Quiz data (questions, options, correct answers)
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Saturn", "Earth"],
        correctAnswer: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
        correctAnswer: 0
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "India", "Japan", "South Korea"],
        correctAnswer: 2
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O", "H2O", "CO2", "H2SO4"],
        correctAnswer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: 1
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        correctAnswer: 2
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Albert Einstein"],
        correctAnswer: 0
    }
];

// Other variables and functions
let currentQuestion = 0;
let score = 0;
let timer;

// Function to load question
function loadQuestion() {
    const questionElement = document.querySelector('.question');
    const optionsElement = document.querySelector('.options');
    const questionData = quizData[currentQuestion];

    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${index}">
            ${option}
        `;
        optionsElement.appendChild(optionElement);
    });
}

// Function to start the timer
function startTimer() {
    let timeLeft = 60; // Time in seconds
    timer = setInterval(() => {
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endQuiz();
        } else {
            timeLeft--;
        }
    }, 1000);
}

// Function to navigate to the next question
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            score++;
        }
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timer);
    const resultContainer = document.querySelector('.result-container');
    resultContainer.style.display = 'block';
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = `Your Score: ${score}/${quizData.length}`;
    const feedbackElement = document.querySelector('.feedback');
    feedbackElement.textContent = `Thank you for completing the quiz!`;
}

// Function to handle quiz submission
function submitQuiz() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            score++;
        }
    }
    endQuiz();
}

// Event listeners for navigation buttons
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('submitBtn').addEventListener('click', submitQuiz);

// Start the quiz
loadQuestion();
startTimer();
