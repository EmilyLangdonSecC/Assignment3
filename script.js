$(document).ready(function () {
    //Declare the values for username and password.
    let username = "Moria";
    let password = "Mellon";

    //Call a function when the submit button is clicked.
    $('#submitButton').click( function(event) {
        event.preventDefault();
        //Display an error message as long as the username or password is incorrect.
        if($('#usernameField').val() != username || $('#passwordField').val() != password) {
            alert("Incorrect username or password. Please try again.");
        }
        //Hide the authentication card and show the start card when both username and password are correct.
        else {
            $('.authentication').removeClass('shown').addClass('hidden');
            $('.start').removeClass('hidden').addClass('shown');
        }
    })

    //List the questions and answers in each object of an array. List the answers themselves in their own array. Give each answer a boolean value of true or false.
    const questions = [
        {
            question: "What is the capital of Canada?",
            answers: [
                { text: "Ottawa", correct: true },
                { text: "Toronto", correct: false },
                { text: "Vancouver", correct: false },
                { text: "Washington DC", correct: false },
            ]
        },
        {
            question: "What is the capital of Switzerland?",
            answers: [
                { text: "Bern", correct: true },
                { text: "Zurich", correct: false },
                { text: "Geneva", correct: false },
                { text: "Berlin", correct: false },
            ]
        },
        {
            question: "What is the capital of Australia?",
            answers: [
                { text: "Canberra", correct: true },
                { text: "Sydney", correct: false },
                { text: "Melbourne", correct: false },
                { text: "Wellington", correct: false },
            ]
        },
        {
            question: "What is the capital of China?",
            answers: [
                { text: "Beijing", correct: true },
                { text: "Shanghai", correct: false },
                { text: "Hong Kong", correct: false },
                { text: "Tokyo", correct: false },
            ]
        },
        {
            question: "What is the capital of Burkina Faso?",
            answers: [
                { text: "Ouagadougou", correct: true },
                { text: "Bobo-Dioulasso", correct: false },
                { text: "Koudougou", correct: false },
                { text: "Yamoussoukro", correct: false },
            ]
        },
        {
            question: "What is the capital of Brazil?",
            answers: [
                { text: "Brasilia", correct: true },
                { text: "São Paulo", correct: false },
                { text: "Rio de Janeiro", correct: false },
                { text: "Buenos Aires", correct: false },
            ]
        },
        {
            question: "What is the capital of Saudi Arabia?",
            answers: [
                { text: "Riyadh", correct: true },
                { text: "Jeddah", correct: false },
                { text: "Mecca", correct: false },
                { text: "Abu Dhabi", correct: false },
            ]
        },
        {
            question: "What is the capital of Egypt?",
            answers: [
                { text: "Cairo", correct: true },
                { text: "Alexandria", correct: false },
                { text: "Suez", correct: false },
                { text: "Khartoum", correct: false },
            ]
        },
        {
            question: "What is the capital of Romania?",
            answers: [
                { text: "Bucharest", correct: true },
                { text: "Cluj-Napoca", correct: false },
                { text: "Iași", correct: false },
                { text: "Sofia", correct: false },
            ]
        },
        {
            question: "What is the capital of Jamaica?",
            answers: [
                { text: "Kingston", correct: true },
                { text: "Portmore", correct: false },
                { text: "Montego Bay", correct: false },
                { text: "Port of Spain", correct: false },
            ]
        },
        {
            question: "What is the capital of Namibia?",
            answers: [
                { text: "Windhoek", correct: true },
                { text: "Walvis Bay", correct: false },
                { text: "Swakopmund", correct: false },
                { text: "Pretoria", correct: false },
            ]
        },
        {
            question: "What is the capital of Kyrgyzstan?",
            answers: [
                { text: "Bishkek", correct: true },
                { text: "Karakol", correct: false },
                { text: "Tokmok", correct: false },
                { text: "Kabul", correct: false },
            ]
        },
        {
            question: "What is the capital of Fiji?",
            answers: [
                { text: "Suva", correct: true },
                { text: "Lautoka", correct: false },
                { text: "Nadi", correct: false },
                { text: "Apia", correct: false },
            ]
        },
        {
            question: "What is the capital of Somalia?",
            answers: [
                { text: "Mogadishu", correct: true },
                { text: "Hargeysa", correct: false },
                { text: "Berbera", correct: false },
                { text: "Addis Ababa", correct: false },
            ]
        },
        {
            question: "What is the capital of India?",
            answers: [
                { text: "New Delhi", correct: true },
                { text: "Mumbai", correct: false },
                { text: "Bangalore", correct: false },
                { text: "Dhaka", correct: false },
            ]
        },
        {
            question: "What is the capital of Norway?",
            answers: [
                { text: "Oslo", correct: true },
                { text: "Bergen", correct: false },
                { text: "Trondheim", correct: false },
                { text: "Stockholm", correct: false },
            ]
        },
        {
            question: "What is the capital of Honduras?",
            answers: [
                { text: "Tegucigalpa", correct: true },
                { text: "San Pedro Sula", correct: false },
                { text: "Choloma", correct: false },
                { text: "Belmopan", correct: false },
            ]
        },
        {
            question: "What is the capital of Vietnam?",
            answers: [
                { text: "Hanoi", correct: true },
                { text: "Ho Chi Minh City", correct: false },
                { text: "Haiphong", correct: false },
                { text: "Vientiane", correct: false },
            ]
        },
        {
            question: "What is the capital of Ecuador?",
            answers: [
                { text: "Quito", correct: true },
                { text: "Guayaquil", correct: false },
                { text: "Cuenca", correct: false },
                { text: "Bogotá", correct: false },
            ]
        },
        {
            question: "What is the capital of Equatorial Guinea?",
            answers: [
                { text: "Malabo", correct: true },
                { text: "Bata", correct: false },
                { text: "Ebebiyín", correct: false },
                { text: "Libreville", correct: false },
            ]
        },
    ]

    //Create an empty variable for the number of questions the user will be answering.
    let questionAmount;

    //Set the amount of questions based on which button the user clicks and call the getQuestions function. Also change the number of questions on the question card.
    $('#questions-5').click(function () {
        questionAmount = 5;
        $('#total-questions').text(questionAmount);
        getQuestions();
        openQuestion();
    });
    $('#questions-10').click(function () {
        questionAmount = 10;
        $('#total-questions').text(questionAmount);
        getQuestions();
        openQuestion();
    });
    $('#questions-20').click(function () {
        questionAmount = 20;
        $('#total-questions').text(questionAmount);
        getQuestions();
        openQuestion();
    });

    //Declare an empty array to hold the questions that will be used for the current quiz.
    let currentQuestionNumbers = []

    //Declare a variable for the number of the current question in the user's quiz. This will be used to reference the index of the currentQuestionNumbers array.
    let questionIndex = -1;

    //Declare an empty array that will hold the numbers 1 to 4 randomized.
    let randomArray = [];

    //Declare a variable that equals 0 for the user's score.
    let score = 0;

    /*Generate random numbers of amount equal to the question amount chosen by the user and add them to the current questions array.
    Ensure no repeats by checking if each number appears in the array already.*/
    function getQuestions() {
        while (currentQuestionNumbers.length < questionAmount) {
            let r = Math.floor(Math.random() * 20);
            if (currentQuestionNumbers.indexOf(r) == -1) currentQuestionNumbers.push(r);
        }
    }

    //Hide the start card and show the question card.
    function openQuestion() {
        advanceQuestion();
        $('.start').removeClass('shown').addClass('hidden');
        $('.question').removeClass('hidden').addClass('shown');
    }

    //When the next question button is clicked, run the advanceQuestion function and reset all of the answer properties.
    $('.next-question').click(function () {
        advanceQuestion();
        $('#current-answer-1').removeClass('unclickable correct incorrect');
        $('#current-answer-2').removeClass('unclickable correct incorrect');
        $('#current-answer-3').removeClass('unclickable correct incorrect');
        $('#current-answer-4').removeClass('unclickable correct incorrect');
    })

    function advanceQuestion() {
        //Move to the next question index.
        questionIndex = questionIndex + 1
        //Set the question number to the current question index.
        $('#current-question-number').text(questionIndex + 1);
        //Set the text of the question to the corresponding text from the index.
        $('#current-question').text(questions[currentQuestionNumbers[questionIndex]].question);
        //Call the function to make an array of numbers 1 to 4 randomized.
        randomizeNumbers();
        //Call the function to insert the correct answers into the slots.
        insertQuestions();
        //Hide the next question button.
        $('.next-question').removeClass('shown').addClass('hidden');
    }

    //Generate the numbers 1 to 4 in random order.
    function randomizeNumbers() {
        while (randomArray.length < 4) {
            let r = Math.floor(Math.random() * 4);
            if (randomArray.indexOf(r) == -1) randomArray.push(r);
        }
    }

    //Insert the answers of randomized order into the slots.
    function insertQuestions() {
        $('#current-answer-1').val(questions[currentQuestionNumbers[questionIndex]].answers[randomArray[0]].text);
        $('#current-answer-2').val(questions[currentQuestionNumbers[questionIndex]].answers[randomArray[1]].text);
        $('#current-answer-3').val(questions[currentQuestionNumbers[questionIndex]].answers[randomArray[2]].text);
        $('#current-answer-4').val(questions[currentQuestionNumbers[questionIndex]].answers[randomArray[3]].text);
    }

    /*Check for any answer being clicked. If correct, turn the chosen answer green. If incorrect, turn the chosen answer red and the correct answer green.
    Then make all answers unclickable and show the next question button. Also return randomArray to empty so a new random order can be chosen.*/
    $('#current-answer-1').click(function () {
        if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[0]].correct == true) {
            $('#current-answer-1').addClass('correct');
            score = score + 1;
        }
        else {
            $('#current-answer-1').addClass('incorrect');
            if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[1]].correct == true) {
                $('#current-answer-2').addClass('correct');
            }
            else if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[2]].correct == true) {
                $('#current-answer-3').addClass('correct');
            }
            else {
                $('#current-answer-4').addClass('correct');
            }
        }
        answersUnclickable();
        randomArray = [];
        if (questionIndex < questionAmount - 1) {
            $('.next-question').removeClass('hidden').addClass('shown');
        }
        else {
            $('.end-quiz').removeClass('hidden').addClass('shown');
        }
    })
    $('#current-answer-2').click(function () {
        if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[1]].correct == true) {
            $('#current-answer-2').addClass('correct');
            score = score + 1;
        }
        else {
            $('#current-answer-2').addClass('incorrect');
            if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[0]].correct == true) {
                $('#current-answer-1').addClass('correct');
            }
            else if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[2]].correct == true) {
                $('#current-answer-3').addClass('correct');
            }
            else {
                $('#current-answer-4').addClass('correct');
            }
        }
        answersUnclickable();
        randomArray = [];
        if (questionIndex < questionAmount - 1) {
            $('.next-question').removeClass('hidden').addClass('shown');
        }
        else {
            $('.end-quiz').removeClass('hidden').addClass('shown');
        }
    })
    $('#current-answer-3').click(function () {
        if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[2]].correct == true) {
            $('#current-answer-3').addClass('correct');
            score = score + 1;
        }
        else {
            $('#current-answer-3').addClass('incorrect');
            if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[0]].correct == true) {
                $('#current-answer-1').addClass('correct');
            }
            else if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[1]].correct == true) {
                $('#current-answer-2').addClass('correct');
            }
            else {
                $('#current-answer-4').addClass('correct');
            }
        }
        answersUnclickable();
        randomArray = [];
        if (questionIndex < questionAmount - 1) {
            $('.next-question').removeClass('hidden').addClass('shown');
        }
        else {
            $('.end-quiz').removeClass('hidden').addClass('shown');
        }
    })
    $('#current-answer-4').click(function () {
        if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[3]].correct == true) {
            $('#current-answer-4').addClass('correct');
            score = score + 1;
        }
        else {
            $('#current-answer-4').addClass('incorrect');
            if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[0]].correct == true) {
                $('#current-answer-1').addClass('correct');
            }
            else if (questions[currentQuestionNumbers[questionIndex]].answers[randomArray[1]].correct == true) {
                $('#current-answer-2').addClass('correct');
            }
            else {
                $('#current-answer-3').addClass('correct');
            }
        }
        answersUnclickable();
        randomArray = [];
        if (questionIndex < questionAmount - 1) {
            $('.next-question').removeClass('hidden').addClass('shown');
        }
        else {
            $('.end-quiz').removeClass('hidden').addClass('shown');
        }
    })

    //Make it so the user cannot click any answer once an answer has been chosen.
    function answersUnclickable() {
        $('#current-answer-1').addClass('unclickable');
        $('#current-answer-2').addClass('unclickable');
        $('#current-answer-3').addClass('unclickable');
        $('#current-answer-4').addClass('unclickable');
    }

    $('.end-quiz').click(function () {
        endQuiz();
    })

    //Hide the question card and show the end card. Insert the final score and total questions values into the text.
    function endQuiz() {
        $('.end-quiz').removeClass('shown').addClass('hidden');
        $('.question').removeClass('shown').addClass('hidden');
        $('.end').removeClass('hidden').addClass('shown');
        $('#final-score').text(score);
        $('#total-questions-end').text(questionAmount);
    }

    //Hide the end card and show the start card. Reset the values for currentQuestionNumbers, questionAmount, questionIndex, and score. Reset the classes for the answers.
    $('.play-again').click(function () {
        $('.end').removeClass('shown').addClass('hidden');
        $('.start').removeClass('hidden').addClass('shown');
        currentQuestionNumbers = [];
        questionAmount = undefined;
        questionIndex = -1;
        score = 0;
        $('#current-answer-1').removeClass('unclickable correct incorrect');
        $('#current-answer-2').removeClass('unclickable correct incorrect');
        $('#current-answer-3').removeClass('unclickable correct incorrect');
        $('#current-answer-4').removeClass('unclickable correct incorrect');
    })
});