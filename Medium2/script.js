const questions=[
    {
        question:"What is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Giraffe",correct:false},
            {text:"Whale",correct:true},
            {text:"Tiger",correct:false}
        ]
    },
    {
        question:"What is national bird of India?",
        answers:[
            {text:"Peacock",correct:true},
            {text:"Parrot",correct:false},
            {text:"Crow",correct:false},
            {text:"Sparrow",correct:false}
        ]
    },
    {
        question:"How many continents are there on the Earth?",
        answers:[
            {text:"9",correct:false},
            {text:"7",correct:true},
            {text:"6",correct:false},
            {text:"1",correct:false}
        ]
    },
    {
        question:"What is the full form of IPL?",
        answers:[
            {text:"Indian Potential League",correct:false},
            {text:"India's Private league",correct:false},
            {text:"Iranian Primary Legislative",correct:false},
            {text:"Indian Premiere League",correct:true},
        ]
    }
]

const question=document.getElementById("question")
const ansButtons=document.getElementById("ansButtons");
const nextButton=document.getElementById("next")

console.log("HELLLO")

let currentIndex=0;
let score=0;

function startTimer() {
    let timeLeft = 1 * 60; // Time in seconds (5 minutes)
    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementsByClassName('timer').innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        console.log(seconds)
        if (timeLeft === 0) {
            clearInterval(timer);
        } else {
            timeLeft--;
        }
    }, 1000);
}


function startQuiz(){
    currentIndex=0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
    startTimer();
}



function showQuestion(){
    resetState();
    // startTimer();
    let currentQuestion=questions[currentIndex];
    let questionNO=currentIndex+1;
    question.innerHTML=questionNO + '. '+questions[currentIndex].question;

    currentQuestion.answers.forEach(answer =>{
        let button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('button');
        ansButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(ansButtons.firstChild){
        ansButtons.removeChild(ansButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.style.backgroundColor='green'
        console.log("Correct")
        score++;
    }
    else{
        console.log("incorrect")
        selectedBtn.style.backgroundColor='red'
    }
    Array.from(ansButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    var feedback=""
    if(score>2){
        feedback = " Good Score !"
    }
    if(score=2){
        feedback = " Excellent Score !"
    }
    else{
        feedback=" Better luck next time !"
    }
    question.innerHTML = `You have scored ${score} out of ${questions.length}!<br> ${feedback}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

nextButton.addEventListener("click",() => {
    if(currentIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();