document.getElementById('startBtn').addEventListener('click', startQuiz);
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('reviewBtn').addEventListener('click', reviewScores);
document.getElementById('backBtn').addEventListener('click', goBack);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

const quizData = [
    {
        question: "What is the largest lake in the world?",
        choices: ["Caspian Sea", "Baikal", "Lake Superior", "Ontario"],
        correctAnswer: "Baikal"
    },
    {
        question: "Which planet in the solar system is known as the 'Red Planet'?",
        choices: ["Venus", "Earth", "Mars", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote the novel 'War and Peace'?",
        choices: ["Anton Chekhov", "Fyodor Dostoevsky", "Leo Tolstoy", "Ivan Turgenev"],
        correctAnswer: "Leo Tolstoy"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let userAnswers = [];

function startQuiz() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    showQuestion();
    startTimer();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = '';

    currentQuizData.choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.innerText = choice;
        choiceButton.classList.add('choice-btn');
        choiceButton.addEventListener('click', () => checkAnswer(choice));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(choice) {
    userAnswers.push(choice);
    clearInterval(timer);
    const currentQuizData = quizData[currentQuestion];
    if (choice === currentQuizData.correctAnswer) {
        score++;
        showFeedback('Correct', 'green');
    } else {
        showFeedback(`Wrong. Correct answer: ${currentQuizData.correctAnswer}`, 'red');
    }
    document.getElementById('nextBtn').style.display = 'inline-block'; // Show the Next button after the answer is selected
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
        startTimer();
    } else {
        endQuiz();
    }
    document.getElementById('feedback').innerText = ''; // Clear feedback for the next question
    document.getElementById('nextBtn').style.display = 'none'; // Hide the Next button until the next answer is selected
}

function endQuiz() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = score;
    document.getElementById('total').innerText = quizData.length;
}

function reviewScores() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('review').style.display = 'block';

    let reviewHTML = '<h2>Review Scores</h2>';
    quizData.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correctAnswer;
        reviewHTML += `<p>Question ${index + 1}: ${isCorrect ? 'Correct' : `Wrong. Correct answer: ${question.correctAnswer}`}</p>`;
    });
    document.getElementById('reviewContent').innerHTML = reviewHTML;
}

function goBack() {
    document.getElementById('review').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function showFeedback(message, color) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerText = message;
    feedbackElement.style.color = color;
}

function startTimer() {
    let timeLeft = 10;
    timer = setInterval(() => {
        document.getElementById('timer').innerText = `Time left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback("Time's up! Moving to the next question.", 'red');
            setTimeout(nextQuestion, 1000);
        }
        timeLeft--;
    }, 1000);
}

function restartQuiz() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('start').style.display = 'block';
}
