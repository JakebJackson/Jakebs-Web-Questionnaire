// Determining variables for project.
var contentQuestionEl = document.getElementById("content-question");
var questionListEl = document.getElementById("question-option");
var titleEl = document.getElementById("quiz-title");
var startBtnEl = document.getElementById("start-quiz");
var timerEl = document.getElementById("timer-span");

var currentQuestion = {};
var quizStart = false;
var timeRemaining = 75;

// Questions for the quiz, the questions themselves are objects that are then stored in an array.
/*
var questions = [
    q0 = {
        q: "Which language handles the majority of organisation and structure of a webpage?",
        a: "HTML",
        o1: "CSS",
        o2: "JavaScript",
        o3: "Java",
    },
    q1 = {
        q: "What is the most common web based programming language?",
        a: "JavaScript",
        o1: "C#",
        o2: "Java",
        o3: "C++",
    },
    q2 = {
        q: "Which programming language handles the styling and look of a webpage?",
        a: "CSS",
        o1: "JavaScript",
        o2: "HTML",
        o3: "Bootstrap",
    },
    q3 = {
        q: "In JavaScipt, which included function can you use to generate a random float value?",
        a: "Math.random()",
        o1: "Math.floor()",
        o2: "Math.float()",
        o3: "Math.genRandFloat()",
    },
    q4 = {
        q: "Which of these APIs attempts to make CSS quicker and easier for developers?",
        a: "Bootstrap",
        o1: "CSS",
        o2: "JavaScript",
        o3: "jQuery",
    },
    q5 = {
        q: "In HTML, which of these elements can be used to link to an internal/external file?",
        a: "link",
        o1: "rel",
        o2: "head",
        o3: "html",
    },
    q6 = {
        q: "In JavaScript, how could you create a reusable section of code while only declaring it once?",
        a: "With a function",
        o1: "By copying and pasting",
        o2: "With a for loop",
        o3: "With a while loop",
    },
    q7 = {
        q: "In CSS, how could I change an element's styling when the users drags mouse is over it?",
        a: "By adding :hover after the element name",
        o1: "By adding :click after the element name",
        o2: "It is not possible",
        o3: "It is possible, but not in CSS",
    },
    q8 = {
        q: "When troubleshooting code, which of these ",
        a: "correct",
        o1: "incorrect",
        o2: "true",
        o3: "false",
    },
    q9 = {
        q: "Test1",
        a: "correct",
        o1: "incorrect",
        o2: "true",
        o3: "false",
    },
];
*/

var questions = [
    q0 = [
        q = "Which language handles the majority of organisation and structure of a webpage?",
        a = "HTML",
        o1 = "CSS",
        o2 = "JavaScript",
        o3 = "Java",
    ],
    q1 = [
        q = "What is the most common web based programming language?",
        a = "JavaScript",
        o1 = "C#",
        o2 = "Java",
        o3 = "C++",
    ],
    q2 = {
        q: "Which programming language handles the styling and look of a webpage?",
        a: "CSS",
        o1: "JavaScript",
        o2: "HTML",
        o3: "Bootstrap",
    },
    q3 = {
        q: "In JavaScipt, which included function can you use to generate a random float value?",
        a: "Math.random()",
        o1: "Math.floor()",
        o2: "Math.float()",
        o3: "Math.genRandFloat()",
    },
    q4 = [
        q = "Which of these APIs attempts to make CSS quicker and easier for developers?",
        a = "Bootstrap",
        o1 = "CSS",
        o2 = "JavaScript",
        o3 = "jQuery",
    ],
    q5 = [
        q = "In HTML, which of these elements can be used to link to an internal/external file?",
        a = "link",
        o1 = "rel",
        o2 = "head",
        o3 = "html",
    ],
    q6 = [
        q = "In JavaScript, how could you create a reusable section of code while only declaring it once?",
        a = "With a function",
        o1 = "By copying and pasting",
        o2 = "With a for loop",
        o3 = "With a while loop",
    ],
    q7 = [
        q = "In CSS, how could I change an element's styling when the users drags mouse is over it?",
        a = "By adding :hover after the element name",
        o1 = "By adding :click after the element name",
        o2 = "It is not possible",
        o3 = "It is possible, but not in CSS",
    ],
    q8 = [
        q = "When troubleshooting code, which of these ",
        a = "correct",
        o1 = "incorrect",
        o2 = "true",
        o3 = "false",
    ],
    q9 = [
        q = "Test1",
        a = "correct",
        o1 = "incorrect",
        o2 = "true",
        o3 = "false",
    ],
];

// Function to start the game, on click 
function handleStartQuiz(event) {
    event.preventDefault();
    quizStart = quizStart = true;
    console.log("Button Clicked");

    // While loops that initiates after user clicks "Start Quiz!".
    while (quizStart) {
        // Logs when while loop initiates
        console.log("User has started the quiz.");

        // Starts the timer.
        timer();

        for (i = questions.length; i >= -1; i--) {
            // Selects a random question by generating a random number between 0 and questions.length and indexing questions array by the random number.
            randomQuestion = Math.floor(Math.random() * questions.length);
            console.log(questions[randomQuestion]);

            
            console.log(questions[randomQuestion].length);
            currentQuestion = questions[randomQuestion];
            console.log(currentQuestion);

            questions.splice(randomQuestion, 1);

            console.log("Index value:" + i);

            while (currentQuestion.length > 1) {
                randomOption = Math.floor(Math.random() * (currentQuestion.length - 1) + 1)
                console.log(randomOption);
                // Add to button.text(currentQuestion[randomOption]) with class (".option-buttons") to questionListEl
                if (randomOption === 1) {
                    // add class correct-answer aswell
                } else {
                    // add class incorrect-answer
                }
                console.log("added " + currentQuestion[randomOption] + " to list")
                currentQuestion.splice(randomOption, 1);
            }
            break;
        }
    }
};

// Event listener on 'start quiz' button that changes quizStart var to true on click, initiating the While loop.
startBtnEl.addEventListener("click", handleStartQuiz);

// create randomiser to choose random index (0-9) of questions array, then once added to page, either remove chosen question from the array and lower the ranomiser maximum or blacklist that index so that questions are set in a random order and cant be used twice.

// Create question array with 4 multiple choice options for each question

// Create timer function
function timer() {
    var timeInterval = setInterval(function () {
        if (timeRemaining > 1) {
            timerEl.textContent = timeRemaining;
            timeRemaining--;
        } else if (timeRemaining === 1) {
            timerEl.textContent = timeRemaining;
            timeRemaining--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            gameEnd();
        }
    }, 1000);
}

// Create randomiser for choosing questions (be sure to include logic for removing already selected questions until reset)

// Create score storage function (LocalStorage), needs to allow user to input their name.

// Create clear highscores logic

// Create gameover/gamestart functions

// if (event.target == questionCurrent.answer) then change button background color to green, play win sound effect, score++ else change btn bgc to red, play loss sound effect.