document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const questionElement = document.getElementById('question');
    const optionButtons = document.querySelectorAll('.option-btn');
    const feedbackContainer = document.getElementById('feedback');
    const timerElement = document.getElementById('timer');
    const scoreElement = document.getElementById('score');

    let currentQuestionIndex = 0;
    let score = 0;
    let timer;

    const questions = [
        {
            question: "Where was tea invented?",
            options: ["India", "England", "USA", "China"],
            correct: 3
        },
        {
            question: "Which of the following languages has the longest alphabet?",
            options: ["Greek", "Russian", "Arabic", "Africa"],
            correct: 1
        },
        {
            question: "What is the largest ocean in the world?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3
        },
        {
            question: "Who invented the telephone?",
            options: ["Albert Einstein", "Isaac Newton", "Alexander Graham Bell", "Thomas Edison"],
            correct: 2
        },
        {
            question: "What is the strongest muscle in the human body?",
            options: ["Jaw", "Heart", "Glutes", "Spine"],
            correct: 0
        }
    ];

    function startQuiz() {
        quizContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }

    function loadQuestion() {
        clearTimeout(timer);
        feedbackContainer.innerText = '';
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        optionButtons.forEach((button, index) => {
            button.innerText = currentQuestion.options[index];
            button.disabled = false;
            button.classList.remove('correct', 'wrong');
            button.onclick = () => selectOption(index);
        });
        startTimer();
    }

    function selectOption(index) {
        const currentQuestion = questions[currentQuestionIndex];
        clearTimeout(timer);
        if (index === currentQuestion.correct) {
            score++;
            feedbackContainer.innerText = 'Correct!';
            optionButtons[index].classList.add('correct');
        } else {
            feedbackContainer.innerText = 'Wrong!';
            optionButtons[index].classList.add('wrong');
            optionButtons[currentQuestion.correct].classList.add('correct');
        }
        optionButtons.forEach(button => button.disabled = true);
        setTimeout(nextQuestion, 1000);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function startTimer() {
        let timeLeft = 20;
        timerElement.innerText = timeLeft;
        timer = setInterval(() => {
            timeLeft--;
            timerElement.innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                selectOption(-1); // Pass -1 to indicate timeout
            }
        }, 1000);
    }

    function showResults() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        scoreElement.innerText = `You scored ${score} out of ${questions.length}`;
    }

    startQuiz();
});
