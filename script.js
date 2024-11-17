const questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0
    },
    {
        question: "Which of the following is a programming language?",
        answers: ["HTML", "CSS", "JavaScript"],
        correct: 2
    },
    {
        question: "What is the default value of the position property in CSS?",
        answers: ["absolute", "relative", "static"],
        correct: 2
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Netscape", "Microsoft", "Oracle"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: 0
    },
    {
        question: "Which method is used to select an element with the id 'myElement' in JavaScript?",
        answers: ["getElementById('myElement')", "querySelector('#myElement')", "getElementByClass('myElement')"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const answerContainer = document.getElementById('answers');
    const currentQuestion = questions[currentQuestionIndex];
    
    questionContainer.textContent = currentQuestion.question;
    answerContainer.innerHTML = ''; // Clear previous answers

    // Add answer options
    currentQuestion.answers.forEach((answer, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${index}">${answer}`;
        answerContainer.appendChild(label);
    });
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return alert('Please select an answer');

    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    if (parseInt(selectedAnswer.value) === correctAnswerIndex) {
        score++;
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz').style.display = 'none';
    const resultContainer = document.getElementById('result');
    resultContainer.style.display = 'block';
    document.getElementById('score').textContent = score + ' / ' + questions.length;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuestion();
}

// Initialize the first question
loadQuestion();
