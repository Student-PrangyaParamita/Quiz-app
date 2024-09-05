const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "script", correct: true},
            {text: "javascript", correct: false},
            {text: "js", correct: false},
            {text: "scripting", correct: false},
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Creative Style Sheets", correct: false},
            {text: "Computer Style Sheets", correct: false},
            {text: "Colorful Style Sheets", correct: false},
            {text: "Cascading Style Sheets", correct: true},
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {text: "The 'body' section", correct: false},
            {text: "The 'head' section", correct: false},
            {text: "Both the 'body' section and the 'head' section are correct", correct: true},
            {text: "under a 'div'", correct: false},
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'main.js'?",
        answers: [
            {text: "script placeholder='main.js'", correct: false},
            {text: "script href='main.js'", correct: false},
            {text: "script name='main.js'", correct: false},
            {text: "script src='main.js'", correct: true},
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {text: 'alert("Hello World");', correct: true},
            {text: 'msg("Hello World");', correct: false},
            {text: 'alertBox("Hello World");', correct: false},
            {text: 'msgBox("Hello World");', correct: false},
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {text: 'if (i == 5)', correct: true},
            {text: 'if i = 5 then', correct: false},
            {text: 'if i == 5 then', correct: false},
            {text: 'if i = 5', correct: false},
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            {text: 'for (i = 0; i <= 5)', correct: false},
            {text: 'for (i = 0; i <= 5; i++)', correct: true},
            {text: 'for (i <= 5; i++)', correct: false},
            {text: 'for i = 1 to 5', correct: false},
        ]
    },
    {
        question: "How can you add a single line comment in a JavaScript?",
        answers: [
            {text: "'This is a comment", correct: false},
            {text: '/*This is a comment*/', correct: false},
            {text: '//This is a comment', correct: true},
            {text: 'none', correct: false},
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            {text: 'var colors = ["red", "green", "blue"]', correct: true},
            {text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false},
            {text: 'var colors = "red", "green", "blue"', correct: false},
            {text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false},
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            {text: 'round(7.25)', correct: false},
            {text: 'Math.rnd(7.25)', correct: false},
            {text: 'rnd(7.25)', correct: false},
            {text: 'Math.round(7.25)', correct: true},
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            {text: 'ceil(x, y)', correct: false},
            {text: 'Math.max(x, y)', correct: true},
            {text: 'top(x, y)', correct: false},
            {text: 'Math.ceil(x, y)', correct: false},
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            {text: 'onmouseclick', correct: false},
            {text: 'onmouseover', correct: false},
            {text: 'onclick', correct: true},
            {text: 'onchange', correct: false},
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            {text: '=', correct: true},
            {text: '-', correct: false},
            {text: '==', correct: false},
            {text: '===', correct: false},
        ]
    },
    {
        question: "What is the default value of the position property in css?",
        answers: [
            {text: 'fixed', correct: false},
            {text: 'static', correct: true},
            {text: 'absolute', correct: false},
            {text: 'relative', correct: false},
        ]
    },
    {
        question: "How do you display a border like this: The top border = 10 pixels, The bottom border = 5 pixels, The left border = 20 pixels, The right border = 1pixel?",
        answers: [
            {text: 'border-width:10px 20px 5px 1px;', correct: false},
            {text: 'border-width:5px 20px 10px 1px;', correct: false},
            {text: 'border-width:10px 5px 20px 1px;', correct: false},
            {text: 'border-width:10px 1px 5px 20px;', correct: true},
        ]
    }
];

const questionheading = document.getElementById('ques-heading');
const message = document.getElementById('msg');
const answerButton = document.getElementById('ans-btns');
const nextButton = document.getElementById('move-nxt');

let currentQuestionindex = 0;
let score = 0;

function startQuiz() {
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    // to display the question with question number
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionheading.innerHTML = questionNo + ". " + currentQuestion.question;

    // to display the answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // here we add the next button
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionheading.innerHTML = `You scored ${score} out of ${questions.length}!`;
    if (score === questions.length) {
        questionheading.innerHTML = `You scored ${score} out of ${questions.length}  👏Congratulations🎉`;
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionindex++;
    if(currentQuestionindex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionindex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();