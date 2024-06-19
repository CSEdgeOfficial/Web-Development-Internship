const quizData = [
    {
       question: "What does HTML stand for?",
       options: ["Hyperlinks and Text Markup Language","Hyper Text Markup Language","Home Tool Markup Language","Hyperlink Text Management Language"],
       answer:"Hyper Text Markup Language"
    },
    {
      question:"Which of the following is not a valid CSS selector?",
      options:[".class {}","#id {}","$element {}","element {}"],
      answer:"$element {}"    
    },
    {
        question:"How do you declare a function in JavaScript?",
        options:["function myFunction() {}","def myFunction() {}","void myFunction() {}","method myFunction() {}"],
        answer:"function myFunction() {}"
    },
    {
        question:"Django is a framework based on which programming language?",
        options:["JavaScript","Python","PHP","Java"],
        answer:"Python"
    },
    {
    question:"Which CSS feature is commonly used to create responsive layouts?",
    options:["margin-collapse","flexbox","text-overflow","border-radius"],
    answer:"flexbox"
    }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  function buildQuiz() {
   
    const output = [];
  
    quizData.forEach((currentQuestion, questionNumber) => {
      const answers = [];
  
      for (let i = 0; i < currentQuestion.options.length; i++) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[i]}">
            ${currentQuestion.options[i]}
          </label>`
        );
      }
  
      output.push(
        `<div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>`
      );
    });
  
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let score = 0;
    quizData.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value
      if (userAnswer === currentQuestion.answer) {
        score++;
        answerContainers[questionNumber].style.color = 'grey';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${score} out of ${quizData.length}`;
  }
  buildQuiz();
  submitButton.addEventListener('click', showResults);
  