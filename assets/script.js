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
var answerButton = document.getElementById('answers');
var nextButton = nextButton = document.getElementById('nextbtn')

var currentQuestionIndex = 0;
var score = 0;