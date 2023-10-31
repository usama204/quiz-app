const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "High Text Markup Language"],
        correctAnswer: 1,
    },
    {
        question: "Who is making the Web standards?",
        choices: ["Google", "The World Wide Web Consortion", "Microsoft", "Mozilla"],
        correctAnswer: 1,
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        choices: ["<h1>", "<head>", "<heading>","<h6>"],
        correctAnswer: 1,
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        choices: ["<br>", "<break>", "<lb>"],
        correctAnswer: 1,
    },
    {
        question: "Choose the correct HTML element to define important text",
        choices: ["<strong>", "<b>", "<i>", "<important>"],
        correctAnswer: 1,
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;

    choicesElement.innerHTML = '';
    questionData.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.addEventListener('click', () => checkAnswer(index));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(userChoice) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (userChoice === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.textContent = `Your result: ${score}/${questions.length}`;
    resultContainer.style.display = 'block';
}

submitButton.addEventListener('click', () => loadQuestion());
loadQuestion();
