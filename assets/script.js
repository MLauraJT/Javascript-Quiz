var questions = [
    {
        question: "What is Java Script?",
        answers: [
            { text: "Makes websites pretty", correct: false},
            { text: "It's a virus", correct: false},
            { text: "Makes webpage interactive", correct: true},
            { text: "It's an antivirus program", correct: false},
        ]
    },
    {
        question: "What are if/else statements usually enclosed with?",
        answers: [
            { text: "Parentheses", correct: true},
            { text: "Quotation marks", correct: false},
            { text: "Curly brackets", correct: false},
            { text: "Greater than / Less than symbols", correct: false},
        ]
    },
    {
        question: "Which variable is termed as outdated in JS?",
        answers: [
            { text: "const", correct: false},
            { text: "var", correct: true},
            { text: "let", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "What was the first name of JS?",
        answers: [
            { text: "It's always been JS", correct: false},
            { text: "Java", correct: false},
            { text: "Netscape", correct: false},
            { text: "LiveScript", correct: true},
        ]
    },
    {
        question: "What term is commonly typed out?",
        answers: [
            { text: "Boolean", correct: false},
            { text: "Function", correct: true},
            { text: "Strings", correct: false},
            { text: "Modulus", correct: false},
        ]
    }
];

var questionElement = document.getElementById('question');
var answerButtons = document.getElementById('answers');
var nextButton = nextButton = document.getElementById('nextbtn')

var currentQuestionIndex = 0;
var score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();

