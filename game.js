const question = document.getElementById("question");
console.log(question);
const choices = Array.from(document.getElementsByClassName("choice-text"));

console.log(choices);

let currentquestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML Element do we put Javascript",
        choice1: "<script>",
        choice2: "javascript",
        choice3: "<html>",
        choice4: "<js>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external javascript file called xxx.js?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'",
        choice3: "<script src='xxx.js'",
        choice4: "<script file='xxx.js'",
        answer: 3
    },
    {
        question: "How do you write 'hello World' in an alert box",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 3
    },
    {
        question: "What is the correct way to create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function myFunction() {}",
        choice3: "create myFunction() {}",
        choice4: "function:myFunction() {}",
        answer: 2
    },
    {
        question: "Which of the following is a valid variable declaration in JavaScript?",
        choice1: "var 1name;",
        choice2: "let name;",
        choice3: "const name;",
        choice4: "Both choice 2 and choice 3",
        answer: 4
    },
    {
        question: "How do you add a comment in JavaScript?",
        choice1: "// This is a comment",
        choice2: "<!-- This is a comment -->",
        choice3: "# This is a comment",
        choice4: "/* This is a comment */",
        answer: 1
    },
    {
        question: "What is the output of the expression 2 + '2' in JavaScript?",
        choice1: "22",
        choice2: "4",
        choice3: "Error",
        choice4: "2",
        answer: 1
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        choice1: "JSON.parse()",
        choice2: "JSON.stringify()",
        choice3: "JSON.convert()",
        choice4: "JSON.object()",
        answer: 1
    }
    
    
    
    
    
];

// constants

const correct_Bonus = 10;
const max_Questions = 8;

startGame = () => {
    questionCounter = 0
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestions();

};

getNewQuestions = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(questionIndex);
    currentquestions = availableQuestions[questionIndex];
    question.innerText = currentquestions.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentquestions["choice" + number];
    }

    );
};
startGame();