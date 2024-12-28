const questions = [
        {
            id: 1,
            question: 
              " HTML stands for -",
            options: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", " None of these',"],
            answer: "HyperText Markup Language",
            category: "HTML",
        },
        {
            id: 2,
            question:
              "The correct sequence of HTML tags for starting a webpage is -",
            options: ["Head, Title, HTML, body", "HTML, Body, Title, Head", " HTML, Title, Body, Head", "HTML, Head, Title, Body"],
            answer: "HTML, Head, Title, Body",
            category: "HTML",
        },
        {
            id: 3,
            question: 
              "Which of the following tag is used to insert a line-break in HTML?",
            options: ["<br>", "<a>", "<pre>", "<b>"],
            answer: "<br>",
            category: "HTML",
        },
        {
            id: 4,
            question: 
                "How to create a hyperlink in HTML?",
            options: ["<a href = " , "<a url = ''/a>", "<a link = ''</a>", "<a>=''/a></a>"],
            answer: "<a href = '' </a>" ,
            category: "HTML",
        },
        {
            id: 5,
            question: 
                "Which of the following element is responsible for making the text italic in HTML?",
            options: ["<i>", "<italic>","<it>","<pre>"],
            answer: "<i>",
            category: "HTML",
        },
        {
            id: 6,
            question: 
                "<input> is -",
            options: ["a format tag", "an empty tag", "All of the above", "None of the above"],
            answer: "an empty tag",
            category: "HTML",
        },
        {
            id: 7,
            question: 
                "How to insert an image in HTML?",
            options: ["<img href = ''/>", "<img url = 'jtp.png'/>", "<img link = 'jtp.png'/>", " <img src = 'jtp.png'/>"],
            answer: "<img src = ''/>",
            category: "HTML",
        },
        {
            id: 8,
            question: 
                "How to create a checkbox in HTML?",
            options: ["<input type = 'checkbox'>","<input type = 'button'>", "<checkbox>", "<input type = 'check'>"],
            answer: "<input type = 'checkbox'>",
            category: "HTML",
        },
        {
            id: 9,
            question: 
                " Which of the following tag is used to define options in a drop-down selection list?",
            options: ["<select>", "<list>", "<dropdown>", "<option>"],
            answer: "<option>",
            category: "HTML",
        },
        {
            id: 10,
            question: 
                "Which of the following HTML tag is used to display the text with scrolling effect?",
            options: ["<marquee>", "<scroll>", "<div>", "None of the above"],
            answer: "<marquee>",
            category: "HTML",
        },
        {
            id: 11,
            question: 
                "In how many ways can CSS be written in?",
            options: ["1", "2", "3", "4"],
            answer: "3",
            category: "CSS",
        },
        {
            id: 12,
            question: 
                "Which of the following is the correct syntax to display the hyperlinks without any underline?",
            options: ["a {text-decoration : underline;}", "a {decoration : no-underline;}", "a {text-decoration : none;}", "None of the above"],
            answer: "a {text-decoration : none;}",
            category: "CSS",
        },
        {
            id: 13,
            question: 
            "What type of CSS is the following code snippet?'<h1 style='color-blue;'>A Blue Heading</h1>'",
            options: ["inline", "internal", "external", "none of the above"],
            answer: "inline",
            category: "CCS",
        },
        {
            id: 14,
            question: 
                "Which of the following is used to specify the subscript of text using CSS?",        
            options: ["vertical-align: sub", "vertical-align: super", "vertical-align: subscript", "None of the above",],
            answer: "vertical-align: sub",
            category: "CSS",
        },
        {
            id: 15,
            question: 
              "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
            options: ["writing-mode", "text-indent", "word-break", "None of the above",],
            answer: "writing-mode",
            category: "CSS",
        },
        {
            id: 16,
            question: 
              " Which of the following is not a type of combinator?",
            options: [">", "~", "+", "*",],
            answer:"*",
            category: "CSS",
        },
        {
            id: 17,
            question: 
              "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
            options: ["text-style : capital;", "transform : capitalize;", "text-transform : capital;","text-transform : capitalize;",],
            answer: "text-transform : capitalize",
            category: "CSS",
        },
        {
            id: 18,
            question: 
              "Which of the following is the correct syntax to select the p siblings of a div element?",
            options: ["p", "div + p", "div p", "div ~ p"],
            answer: "div ~ p",
            category: "CSS",
        },
        {
            id: 19,
            question: 
              " Which of the following is not a value of the font-variant property in CSS?",
            options: ["normal", "small-caps", "large-caps", "inherit",],
            answer: "large-caps",
            category: "CSS",
        },
        {
            id: 20,
            question: 
              "Which of the following selector in CSS is used to select the elements that do not match the selectors?",
            options: [":! selector", ":not selector",":empty selector", "None of the above",],
            answer: ":not selector",
            category: "CSS",
        },
        {
            id: 21,
            question: 
              "Which one of the following is an event handler?",
            options: ["Math", "Date", "String", "onClick",],
            answer:"onClick",
            category: "Javascript",
        },
        {
            id: 22,
            question: 
              "Which one of the following also known as Conditional Expression:",
            options: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if",],
            answer:"immediate if",
            category: "Javascript",
        },
        {
            id: 23,
            question: 
              "Which one of the following is the correct way for calling the JavaScript code?",
            options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method",],
            answer:"Function/Method",
            category: "Javascript",
        },
        {
            id: 24,
            question: 
              "Which of the following type of a variable is volatile?",
            options: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable",],
            answer:"Mutable variable",
            category: "Javascript",
        },
        {
            id: 25,
            question: 
              "In the JavaScript, which one of the following is not considered as an error:",
            options: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket",],
            answer:"",
            category: "Javascript",
        },
        {
            id: 26,
            question: 
              "Which one of the following also known as Conditional Expression:",
            options: ["Alternative to if-else", "Switch statement","If-then-else statement", "immediate if",],
            answer:"immediate if",
            category: "Javascript",
        },
        {
            id: 27,
            question: 
              "",
            options: ["",],
            answer:"",
            category: "Javascript",
        },
        {
            id: 28,
            question: 
              "",
            options: ["",],
            answer:"",
            category: "Javascript",
        },
        {
            id: 29,
            question: 
              "",
            options: ["",],
            answer:"",
            category: "Javascript",
        },
        {
            id: 30,
            question: 
              "",
            options: ["",],
            answer:"",
            category: "Javascript",
        },
     ]

let username = '';
let category = '';
let currentQuestionIndex = 0;
let score = 0;
let attemptedQuestions = 0;
let correctAnswers = 0;
let startTime, endTime;

function getName(event) {
    event.preventDefault();
    username = document.getElementById('name-input').value.trim();
    if (!username) {
        alert('Name is required!');
        return;
    }

    document.getElementById('container').innerHTML = `
        <h1>Welcome ${username}!</h1>
        <p>Select a category to start the quiz</p>
        <button class="category-button" value="HTML" onclick="startQuiz(event)">HTML</button>
        <button class="category-button" value="CSS" onclick="startQuiz(event)">CSS</button>
        <button class="category-button" value="Javascript" onclick="startQuiz(event)">JavaScript</button>
    `;
}

function startQuiz(event) {
    category = event.target.value;
    currentQuestionIndex = 0;
    score = 0;
    attemptedQuestions = 0;
    correctAnswers = 0;

    const totalQuestions = 10;
    const categoryQuestions = questions.filter(q => q.category === category).slice(0, totalQuestions);
    startTime = new Date();

    renderQuiz(categoryQuestions);
}

function renderQuiz(categoryQuestions) {
    if (currentQuestionIndex >= categoryQuestions.length) {
        endTime = new Date();
        showResultPage();
        return;
    }

    const question = categoryQuestions[currentQuestionIndex];
    document.getElementById('container').innerHTML = `
        <h1>${category} Quiz</h1>
        <p id="timer">Time Left: 15s</p>
        <p>Question ${currentQuestionIndex + 1}/${categoryQuestions.length}</p>
        <h2>${question.question}</h2>
        <div id="options-container">
            ${question.options.map(option => `
                <button class="option-button" onclick="checkAnswer('${option}', '${question.answer}')">${option}</button>
            `).join('')}
        </div>
        <button id="next-button" onclick="nextQuestion()" disabled>Next</button>
    `;

    startTimer();
}

let timerInterval;
let timeLeft = 15;

function startTimer() {
    timeLeft = 15;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            nextQuestion();
        } else {
            timeLeft--;
            document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
        }
    }, 1000);
}

function checkAnswer(selected, correct) {
    clearInterval(timerInterval);
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correct) button.style.backgroundColor = 'green';
        if (button.textContent === selected && selected !== correct) button.style.backgroundColor = 'red';
    });

    attemptedQuestions++;
    if (selected === correct) {
        correctAnswers++;
        score++;
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    renderQuiz(questions.filter(q => q.category === category));
}

function showResultPage() {
    const totalTimeTaken = Math.floor((endTime - startTime) / 1000); // Time in seconds
    const totalQuestions = attemptedQuestions + (questions.filter(q => q.category === category).length - attemptedQuestions);
    const wrongAnswers = attemptedQuestions - correctAnswers;
    const scorePercentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

    document.getElementById('container').innerHTML = `
        <h1>Quiz Results</h1>
        <p><strong>Participant’s Name:</strong> ${username}</p>
        <p><strong>Total Time Taken:</strong> ${totalTimeTaken}s</p>
        <p><strong>Number of Questions:</strong> ${totalQuestions}</p>
        <p><strong>Number of Attempted Questions:</strong> ${attemptedQuestions}</p>
        <p><strong>Number of Correct Questions:</strong> ${correctAnswers}</p>
        <p><strong>Number of Wrong Questions:</strong> ${wrongAnswers}</p>
        <p><strong>Score Percentage:</strong> ${scorePercentage}%</p>
        <button onclick="startAgain()">Start Again</button>
        <button onclick="goToHome()">Go to Home</button>
    `;
}

function startAgain() {
    category = '';
    startQuiz({ target: { value: category } });
}

function goToHome() {
    document.getElementById('container').innerHTML = `
        <h1>Hello Learners!</h1>
        <h3>Enter Your Name to Continue the Quiz</h3>
        <form onsubmit="getName(event)">
            <input type="text" id="name-input" placeholder="Enter your name">
            <button type="submit">Enter</button>
        </form>
    `;
}
