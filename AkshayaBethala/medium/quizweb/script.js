// Quiz Data
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Ernest Hemingway", "J.K. Rowling", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    if (currentQuestion >= questions.length) {
        endQuiz();
        return;
    }

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    });

    startTimer();
}

function checkAnswer(selectedOption) {
    clearInterval(timer);

    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    displayQuestion();
}

function startTimer() {
    timeLeft = 10;
    updateTimerDisplay();

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            currentQuestion++;
            displayQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById("time").textContent = timeLeft;
}

function endQuiz() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<h2>Quiz Ended!</h2>
                                <p>Your score: ${score}/${questions.length}</p>`;

    clearInterval(timer);
}

displayQuestion();
