let quizContainer;
let userAnswers=[];
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
     {
        question: "What is the largest planet in our solar system?",
        choices: ["Mercury", "Venus", "Earth", "Jupiter"],
        correctAnswer: "Jupiter",
       
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Shakespeare", "Hemingway", "Twain", "Tolkien"],
        correctAnswer: "Shakespeare",
        
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Cu", "Fe"],
        correctAnswer: "Au",
      
    },
    {
        question: "What is the capital of Japan?",
        choices: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        correctAnswer: "Tokyo",
     
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
       
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "NaCl", "O2"],
        correctAnswer: "H2O",
       
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: "Mars",
        
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: "Albert Einstein",
    
    },
    {
        question: "What is the chemical symbol for sodium?",
        choices: ["Na", "K", "Ca", "Fe"],
        correctAnswer: "Na",
       
    }

    // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let timer;

          

function startQuiz() {
    quizContainer = document.getElementById('quiz-container');
    quizContainer.style.display="block";
    userAnswers =[];
    showQuestion();
    startTimer();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = "";

    currentQuizData.choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.innerText = choice;
        choiceButton.classList.add('choice-btn');
        choiceButton.addEventListener('click', () => checkAnswer(choice));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(choice) {
    const currentQuizData = quizData[currentQuestion];
    userAnswers.push(choice);
    clearInterval(timer); // Stop the timer
    if (choice === currentQuizData.correctAnswer) {
        score++;
        showFeedback("Correct!", "green");
    } else {
        showFeedback("Wrong!", "red");
        setTimeout(nextQuestion, 1000); // Navigate to next question after 1 second
    }
}

function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your score: ${score}/${quizData.length}</p>
        <button onclick="reviewScores()">Review Scores</button>
    `;
}

function reviewScores() {
    const quizContainer = document.getElementById('quiz-container');
    let reviewHTML = '<h2>Review Scores</h2>';
    quizData.forEach((question, index) => {
        const isCorrect = (userAnswers[index] == question.correctAnswer); // Check if userAnswers is defined
        reviewHTML +=`<p>Question ${index + 1}: ${isCorrect ? 'Correct' : 'Wrong'}</p>`;
    });
    quizContainer.innerHTML = reviewHTML;
}

function showFeedback(message, color) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerText = message;
    feedbackElement.style.color = color;
}

function startTimer() {
    let timeLeft = 10;
    timer = setInterval(() => {
        document.getElementById('timer').innerText =`Time left: ${timeLeft} seconds`;
        timeLeft--;
         if(timeLeft >= 0){
               document.getElementById('timer').innerText =`Time left: ${timeLeft} seconds`;
          }
          else {
            clearInterval(timer);
            showFeedback("Time's up!", "red");
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
        clearInterval(timer);
        startTimer();
    } else {
        endQuiz();
    }
}
startQuiz();
