document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "Which tag is used for a paragraph?",
            options: ["&lt;div&gt;", "&lt;span&gt;", "&lt;p&gt;", "&lt;a&gt;"],
            correctAnswer: 2
        },
        {
            question: "What is the full form of CSS?",
            options: ["Cascading Style Sheets", "Cascading Simple Sheets", "Cascading Sheet Styles", "Computer Style Sheets"],
            correctAnswer: 0
        },
        {
            question: "What are the applications of HTML?",
            options: ["Web development", "Game development", "Machine learning", "Data analysis"],
            correctAnswer: 0
        },
        {
            question: "Which tag is used to link a CSS file?",
            options: ["&lt;script&gt;", "&lt;link&gt;", "&lt;style&gt;", "&lt;meta&gt;"],
            correctAnswer: 1
        },
        {
            question: "Which property is used to change the background color in CSS?",
            options: ["color", "background-color", "bgcolor", "background"],
            correctAnswer: 1
        },
        {
            question: "What is the full form of JS?",
            options: ["JavaSource", "JavaScript", "JavaScripting", "JustScript"],
            correctAnswer: 1
        },
        {
            question: "How many types of selectors are there in CSS?",
            options: ["1", "3", "5", "7"],
            correctAnswer: 3
        },
        {
            question: "How do you declare a variable in JavaScript?",
            options: ["var myVar", "variable myVar", "v myVar", "let myVar"],
            correctAnswer: 0
        },
        {
            question: "Which tag is used to link a JS file?",
            options: ["&lt;js&gt;", "&lt;javascript&gt;", "&lt;link&gt;", "&lt;script&gt;"],
            correctAnswer: 3
        },
        {
            question: "What are the applications of CSS?",
            options: ["Styling web pages", "Creating server-side scripts", "Database management", "Networking"],
            correctAnswer: 0
        }
    ];

    let currentQuestion = 0;
    let score = 0;
    let timer;

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

    function startTimer() {
        let timeLeft = 5 * 60; // Time in seconds (5 minutes)
        timer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            if (timeLeft === 0) {
                clearInterval(timer);
                endQuiz();
            } else {
                timeLeft--;
            }
        }, 1000);
    }

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

    function previousQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion();
        }
    }

    function endQuiz() {
        clearInterval(timer);
        document.querySelector('.quiz').style.display = 'none';
        const resultElement = document.querySelector('.result');
        resultElement.style.display = 'block';
        const scoreElement = document.querySelector('.score');
        scoreElement.textContent = `Your Score: ${score}/${quizData.length}`;
        const feedbackElement = document.querySelector('.feedback');
        feedbackElement.textContent = score > quizData.length / 2 ? 'Good job!' : 'Better luck next time!';
    }

    function submitQuiz() {
        nextQuestion();
        endQuiz();
    }

    document.getElementById('nextB').addEventListener('click', nextQuestion);
    document.getElementById('previousB').addEventListener('click', previousQuestion);
    document.getElementById('submitB').addEventListener('click', submitQuiz);

    loadQuestion();
    startTimer();
});
