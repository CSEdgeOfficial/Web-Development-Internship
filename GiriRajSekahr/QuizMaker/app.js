const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "John Steinbeck"],
        answer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the tallest mammal?",
        options: ["Giraffe", "Elephant", "Hippo", "Rhinoceros"],
        answer: "Giraffe"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1912", "1907", "1921", "1899"],
        answer: "1912"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["Japan", "China", "South Korea", "India"],
        answer: "Japan"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Albert Einstein", "Isaac Newton", "Marie Curie"],
        answer: "Alexander Fleming"
    },
    {
        question: "Which novel features the characters Scout and Atticus Finch?",
        options: ["To Kill a Mockingbird", "Pride and Prejudice", "The Catcher in the Rye", "1984"],
        answer: "To Kill a Mockingbird"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Liver", "Heart", "Brain"],
        answer: "Skin"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        answer: "Au"
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Iron", "Gold", "Silver", "Copper"],
        answer: "Iron"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Florence Nightingale", "Jane Goodall"],
        answer: "Marie Curie"
    },
    {
        question: "In which year did World War I begin?",
        options: ["1914", "1918", "1939", "1941"],
        answer: "1914"
    },
    {
        question: "Who composed the 'Moonlight Sonata'?",
        options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Frederic Chopin"],
        answer: "Ludwig van Beethoven"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        question: "Which gas makes up the largest portion of the Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        answer: "Nitrogen"
    },
    {
        question: "Who painted 'Starry Night'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Cu", "Fe"],
        answer: "Ag"
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Valentina Tereshkova", "Bessie Coleman", "Sally Ride"],
        answer: "Amelia Earhart"
    },
    {
        question: "Who was the first man to walk on the Moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        answer: "Neil Armstrong"
    },
];

const quizContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-answer");
const feedbackContainer = document.getElementById("feedback");
const resultContainer = document.getElementById("result");
const startButton = document.getElementById("start-quiz");
const timerDisplay = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let timer;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none";
  showQuestion();
  startTimer();
}

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options
              .map(
                (option) =>
                  `<li><input type="radio" name="answer" value="${option}">${option}</li>`
              )
              .join("")}
        </ul>
    `;
}

submitButton.addEventListener("click", submitAnswer);

function submitAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    feedbackContainer.textContent = "Please select an answer.";
    return;
  }

  const answer = selectedAnswer.value;
  const currentQuestion = quizData[currentQuestionIndex];

  if (answer === currentQuestion.answer) {
    feedbackContainer.textContent = "Correct!";
    score++;
  } else {
    feedbackContainer.textContent = "Wrong!";
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  feedbackContainer.style.display = "none";
  resultContainer.textContent = `Your score: ${score} / ${quizData.length}`;
}

function startTimer() {
  let timeLimit = 60; // Set the time limit for each question
  timerDisplay.textContent = `Time left: ${timeLimit}`;

  timer = setInterval(() => {
    timeLimit--;
    timerDisplay.textContent = `Time left: ${timeLimit}`;
    if (timeLimit <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}
