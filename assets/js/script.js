// Determining HTML id variables.
var contentQuestionEl = document.getElementById("content-question");
var questionListEl = document.getElementById("question-option");
var titleEl = document.getElementById("quiz-title");
var startBtnEl = document.getElementById("start-quiz");
var timerEl = document.getElementById("timer-span");
var li0 = document.getElementById("li-0");
var li1 = document.getElementById("li-1");
var li2 = document.getElementById("li-2");
var li3 = document.getElementById("li-3");
// Creating variables for creating elements.
createBtn = document.createElement("button");
// Determining variables for logic.
var optionSelected = false;
var currentQuestion = {};
var timeRemaining = 75;
var currentLi;
var score = 0;

// Array for the shuffle function.
var shuffleArray = [1, 2, 3, 4];


// Questions for the quiz, the questions themselves are nested-arrays that are stored in a larger array, this will allow me to index the 'questions' array with a random number and store the indexed array in a temporary array to generate the questions with,. I have kept nested items of this array labeled for my own convenience, even though it has no bearing on the code.
var questions = [
    q0 = {
        q: "Which language handles the majority of organisation and structure of a webpage?",
        1: "HTML",
        2: "CSS",
        3: "JavaScript",
        4: "Java",
    },
    q1 = {
        q: "What is the most common web based programming language?",
        1: "JavaScript",
        2: "C#",
        3: "Java",
        4: "C++",
    },
    q2 = {
        q: "Which programming language handles the styling and look of a webpage?",
        1: "CSS",
        2: "JavaScript",
        3: "HTML",
        4: "Bootstrap",
    },
    q3 = {
        q: "In JavaScipt, which included function can you use to generate a random float value?",
        1: "Math.random()",
        2: "Math.floor()",
        3: "Math.float()",
        4: "Math.genRandFloat()",
    },
    q4 = {
        q: "Which of these APIs attempts to make CSS quicker and easier for developers?",
        1: "Bootstrap",
        2: "CSS",
        3: "JavaScript",
        4: "jQuery",
    },
    q5 = {
        q: "In HTML, which of these elements can be used to link to an internal/external file?",
        1: "link",
        2: "rel",
        3: "head",
        4: "html",
    },
    q6 = {
        q: "In JavaScript, how could you create a reusable section of code while only declaring it once?",
        1: "With a function",
        2: "By copying and pasting",
        3: "With a for loop",
        4: "With a while loop",
    },
    q7 = {
        q: "In CSS, how could I change an element's styling when the users drags mouse is over it?",
        1: "By adding :hover after the element name",
        2: "By adding :click after the element name",
        3: "It is not possible",
        4: "It is possible, but not in CSS",
    },
    q8 = {
        q: "When troubleshooting code, which of these ",
        1: "correct",
        2: "incorrect",
        3: "true",
        4: "false",
    },
    q9 = {
        q: "Test1",
        1: "correct",
        2: "incorrect",
        3: "true",
        4: "false",
    },
];

// Function to start the game on click.
function handleStartQuiz(event) {
    // Stops page from refreshing.
    event.preventDefault();
    // Logs when while loop initiates
    console.log("User has started the quiz.");
    // Starts the timer.
    timer();
    startBtnEl.parentNode.removeChild(startBtnEl);

    // Calls generate new question function.
    generateNewQuestion();

    console.log("Broken out of gen function.")
    if (questions.length > 0 && optionSelected == true) {
        optionSelected == false;
        li0.parentNode.removeChild(li0);
        li1.parentNode.removeChild(li1);
        li2.parentNode.removeChild(li2);
        li3.parentNode.removeChild(li3);
        generateNewQuestion();
        console.log("reinitiated gen function.")
    } else if (questions.length == 0 && optionSelected == false) {
        gameEnd();
    } else {
        console.log("Game continuing");
    }
};

// Event listener on 'start quiz' button that changes quizStart var to true on click, initiating the While loop.
startBtnEl.addEventListener("click", handleStartQuiz);
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
            timerEl.textContent = '0';
            clearInterval(timeInterval);
            gameEnd();
        }
        // Updates every second/1000ms
    }, 1000);
}

function generateNewQuestion() {
    // Selects a random question by generating a random number between 0 and questions.length and indexing questions array by the random number.
    randomQuestion = Math.floor(Math.random() * questions.length);
    console.log(randomQuestion);
    // Removes start quiz button when start quiz is selected.
 
    // Saving the selected random question to a new array.
    currentQuestion = questions[randomQuestion];
    // Removing the selected question from questions array to stop it from coming up again.
    questions.splice(randomQuestion, 1);
    // Setting the question text to the selected question.
    contentQuestionEl.textContent = currentQuestion.q;
    // While loop to generate list items and buttons until all options are removed.
    // Logic for selecting a random number based on length of 'currentQuestion' array.
    shuffle(shuffleArray);
    
    var liCreated = 1
    // Checks how many list items have been creating in this cycle of the loop.
    for (i = 0; i <= 3; i++) {
        
        // Creating HTML 'li' element in 'ul'.
        document.getElementById("question-option").appendChild(document.createElement("li")).setAttribute("id", "li-" + i);
             
        currentLi = "li-" + i;
        // Increments liCreated var.
        liCreated++;
        if (shuffleArray[i] === 1) {
            var childBtn = document.createElement("button");
            childBtn.setAttribute("id", "correct");
            childBtn.setAttribute("class", "option-buttons correct-button");
            childBtn.textContent = currentQuestion[shuffleArray[i]];
 
            document.getElementById(currentLi).appendChild(childBtn);
        } else {
            var childBtn = document.createElement("button");
            childBtn.setAttribute("id", "incorrect" + i);
            childBtn.setAttribute("class", "option-buttons incorrect-button");
            childBtn.textContent = currentQuestion[shuffleArray[i]];
 
            document.getElementById(currentLi).appendChild(childBtn);
        }
        childBtn.addEventListener("click", checkAnswer);
    }
    return;
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // continues while there still remains an element.
    while (currentIndex > 0) {
  
      // Pick one of the remaining elements.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Then swaps the selected element with the current one.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    // Returns the new shuffled array
    return array;
}

function checkAnswer(event) {
    event.preventDefault();

    if (event.srcElement.attributes[0].value == "correct") {
        console.log("correct");
        score++;
    } else {
        timeRemaining = timeRemaining - 15;
        console.log("incorrect")
    }
    var optionSelected = true;
    return optionSelected;
}

function gameEnd() {
    console.log("Game has ended.");
}


// Create score storage function (LocalStorage), needs to allow user to input their name.

// Create clear highscores logic

// Create gameover/gamestart functions

// if (event.target == questionCurrent.answer) then change button background color to green, play win sound effect, score++ else change btn bgc to red, play loss sound effect.